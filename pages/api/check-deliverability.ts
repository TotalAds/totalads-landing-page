import type { NextApiRequest, NextApiResponse } from "next";
import dns from "dns";

const resolver = new dns.promises.Resolver();
resolver.setServers(["8.8.8.8", "1.1.1.1"]);

/* ── Rate limiting ────────────────────────────────────────────────── */

const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ── Types ────────────────────────────────────────────────────────── */

type RecordStatus = "pass" | "warn" | "fail" | "missing";

interface Issue {
  severity: "error" | "warning" | "info";
  message: string;
  fix: string;
}

interface RecordResult {
  status: RecordStatus;
  raw: string | null;
  issues: Issue[];
}

interface CheckResponse {
  domain: string;
  score: number;
  spf: RecordResult;
  dkim: RecordResult;
  dmarc: RecordResult;
  /** Selector used for the primary DKIM result */
  dkimSelector: string | null;
  /** Selector the user asked us to check (if any) */
  requestedDkimSelector: string | null;
  /** All selectors that returned a DKIM record */
  dkimSelectorsFound: string[];
  /** Whether the primary selector came from the user or auto-discovery */
  dkimSelectorSource: "auto" | "user" | "none";
  checkedAt: string;
}

/* ── Common DKIM selectors to probe ───────────────────────────────── */

const COMMON_DKIM_SELECTORS = [
  "google",
  "selector1",
  "selector2",
  "k1",
  "s1",
  "s2",
  "default",
  "dkim",
  "mail",
  "smtp",
  "cm",
  "mandrill",
  "hs1",
  "hs2",
  "zendesk1",
  "zendesk2",
  "protonmail",
  "pm",
  "everlytickey1",
  "everlytickey2",
  "ctct1",
  "ctct2",
  "sig1",
  "mx",
  "email",
];

async function getCnameTargets(hostname: string): Promise<string[]> {
  try {
    return await resolver.resolveCname(hostname);
  } catch {
    return [];
  }
}

/** Look up DKIM TXT at selector._domainkey.domain, following CNAMEs if needed */
async function lookupDkimAtSelector(
  domain: string,
  selector: string
): Promise<string[]> {
  const host = `${selector}._domainkey.${domain}`;
  const direct = await getTxtRecords(host);
  if (direct.length > 0) return direct;

  // Many providers publish a CNAME that points to their hosted DKIM key
  const cnames = await getCnameTargets(host);
  if (cnames.length === 0) return [];

  const nested = await Promise.all(
    cnames.map((target) => getTxtRecords(target.replace(/\.$/, "")))
  );
  return nested.flat();
}

function looksLikeDkim(records: string[]): boolean {
  return records.some(
    (r) =>
      r.includes("p=") ||
      r.includes("v=DKIM1") ||
      r.includes("k=rsa") ||
      r.includes("k=ed25519")
  );
}

async function discoverDkim(
  domain: string,
  preferredSelector?: string | null
): Promise<{
  selector: string | null;
  records: string[];
  foundSelectors: string[];
  source: "auto" | "user" | "none";
}> {
  const preferred =
    preferredSelector && /^[a-z0-9._-]+$/i.test(preferredSelector)
      ? preferredSelector.trim()
      : null;

  // Build probe list: user selector first (if any), then common ones (deduped)
  const toProbe = [
    ...(preferred ? [preferred] : []),
    ...COMMON_DKIM_SELECTORS.filter((s) => s !== preferred),
  ];

  const results = await Promise.all(
    toProbe.map(async (selector) => {
      const records = await lookupDkimAtSelector(domain, selector);
      return { selector, records, valid: looksLikeDkim(records) };
    })
  );

  const found = results.filter((r) => r.valid);

  // Prefer the user's selector when they provided one and it exists
  if (preferred) {
    const userHit = found.find((r) => r.selector === preferred);
    if (userHit) {
      return {
        selector: userHit.selector,
        records: userHit.records,
        foundSelectors: found.map((r) => r.selector),
        source: "user",
      };
    }
    // User selector missing — if we found others, use the best auto match
    // but keep source as "user" is wrong; mark auto with preferred noted via foundSelectors
    if (found.length > 0) {
      const priority = ["google", "selector1", "selector2", "k1", "default", "s1"];
      found.sort((a, b) => {
        const ai = priority.indexOf(a.selector);
        const bi = priority.indexOf(b.selector);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });
      return {
        selector: found[0].selector,
        records: found[0].records,
        foundSelectors: found.map((r) => r.selector),
        source: "auto",
      };
    }
    return {
      selector: preferred,
      records: [],
      foundSelectors: [],
      source: "user",
    };
  }

  if (found.length === 0) {
    return {
      selector: null,
      records: [],
      foundSelectors: [],
      source: "none",
    };
  }

  // Prefer well-known provider selectors when several are present
  const priority = ["google", "selector1", "selector2", "k1", "default", "s1"];
  found.sort((a, b) => {
    const ai = priority.indexOf(a.selector);
    const bi = priority.indexOf(b.selector);
    const aw = ai === -1 ? 999 : ai;
    const bw = bi === -1 ? 999 : bi;
    return aw - bw;
  });

  return {
    selector: found[0].selector,
    records: found[0].records,
    foundSelectors: found.map((r) => r.selector),
    source: "auto",
  };
}

/* ── Helpers ──────────────────────────────────────────────────────── */

function sanitizeDomain(input: string): string | null {
  let d = input.trim().toLowerCase();
  // Strip protocols, paths, trailing slashes
  d = d.replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/:\d+$/, "");
  // Basic domain validation
  if (
    d.length < 3 ||
    d.length > 253 ||
    !/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(d)
  ) {
    return null;
  }
  return d;
}

async function getTxtRecords(hostname: string): Promise<string[]> {
  try {
    const records = await resolver.resolveTxt(hostname);
    // Each record is an array of strings (chunked); join them
    return records.map((chunks) => chunks.join(""));
  } catch {
    return [];
  }
}

/* ── SPF Validation ───────────────────────────────────────────────── */

function validateSpf(records: string[]): RecordResult {
  const spfRecords = records.filter((r) => r.startsWith("v=spf1"));

  if (spfRecords.length === 0) {
    return {
      status: "missing",
      raw: null,
      issues: [
        {
          severity: "error",
          message: "No SPF record found for this domain.",
          fix: 'Add a TXT record to your DNS with value "v=spf1 include:_spf.google.com ~all" (adjust for your email provider). SPF tells receiving servers which mail servers are allowed to send email on your behalf.',
        },
      ],
    };
  }

  const raw = spfRecords[0];
  const issues: Issue[] = [];

  // Multiple SPF records
  if (spfRecords.length > 1) {
    issues.push({
      severity: "error",
      message: `Found ${spfRecords.length} SPF records. Only one is allowed per domain.`,
      fix: "Merge all SPF records into a single TXT record. Multiple SPF records cause authentication failures because receivers don't know which one to use.",
    });
  }

  // Check for +all (allows everyone)
  if (/\+all\b/.test(raw)) {
    issues.push({
      severity: "error",
      message: 'Your SPF record uses "+all" — this allows ANY server to send email as your domain.',
      fix: 'Replace "+all" with "~all" (softfail) or "-all" (hardfail). Using "+all" effectively disables SPF protection entirely.',
    });
  }

  // Check for missing ~all or -all
  if (!/[-~?]all\b/.test(raw) && !/\+all\b/.test(raw)) {
    issues.push({
      severity: "warning",
      message: "Your SPF record doesn't end with an \"all\" mechanism.",
      fix: 'Add "~all" or "-all" at the end of your SPF record. Without it, receiving servers may not know how to handle unauthorized senders.',
    });
  }

  // ?all is weak
  if (/\?all\b/.test(raw)) {
    issues.push({
      severity: "warning",
      message: 'Your SPF uses "?all" (neutral) — this provides minimal protection.',
      fix: 'Consider upgrading to "~all" (softfail) or "-all" (hardfail) for stronger protection. Neutral means receiving servers treat unauthorized senders as neither allowed nor denied.',
    });
  }

  // Count DNS lookup mechanisms
  const lookupMechanisms = (raw.match(/\b(include|a|mx|ptr|exists|redirect)\b/gi) || []).length;
  if (lookupMechanisms > 10) {
    issues.push({
      severity: "error",
      message: `Your SPF record requires ${lookupMechanisms} DNS lookups — the RFC limit is 10.`,
      fix: "Flatten your SPF record by replacing nested includes with direct IP ranges (ip4:/ip6:), or use an SPF flattening service. Exceeding 10 lookups causes SPF to permanently fail (PermError).",
    });
  } else if (lookupMechanisms > 7) {
    issues.push({
      severity: "warning",
      message: `Your SPF record uses ${lookupMechanisms} of the maximum 10 DNS lookups.`,
      fix: "You're approaching the 10-lookup limit. Consider consolidating include mechanisms or switching to ip4:/ip6: ranges to reduce lookup count before it becomes a hard failure.",
    });
  }

  // Record length check (255 char chunk limit in DNS, but the raw value can be longer if chunked)
  if (raw.length > 450) {
    issues.push({
      severity: "warning",
      message: `Your SPF record is ${raw.length} characters long — very long records can cause DNS issues.`,
      fix: "Shorten your SPF record by removing unused include mechanisms or replacing them with ip4:/ip6: ranges. Long records may get truncated by some DNS resolvers.",
    });
  }

  const status: RecordStatus =
    issues.some((i) => i.severity === "error")
      ? "fail"
      : issues.some((i) => i.severity === "warning")
        ? "warn"
        : "pass";

  return { status, raw, issues };
}

/* ── DKIM Validation ──────────────────────────────────────────────── */

function validateDkim(
  records: string[],
  selector: string | null,
  foundSelectors: string[],
  source: "auto" | "user" | "none",
  requestedSelector: string | null
): RecordResult {
  if (records.length === 0 || !selector) {
    return {
      status: "missing",
      raw: null,
      issues: [
        {
          severity: "error",
          message: requestedSelector
            ? `No DKIM key found for "${requestedSelector}".`
            : "No DKIM key found for this domain.",
          fix: requestedSelector
            ? `We looked for "${requestedSelector}._domainkey" and did not find a key. Double-check the name in your email provider, or leave the field blank so we can find it for you.`
            : "We checked common names like google, selector1, and k1. Your email provider should give you a DKIM key to add in DNS. In Google Workspace: Admin → Gmail → Authenticate email. In Microsoft 365: Exchange admin → Protection → DKIM.",
        },
      ],
    };
  }

  const raw = records[0];
  const issues: Issue[] = [];

  if (source === "user" && requestedSelector) {
    issues.push({
      severity: "info",
      message: `Using the DKIM name you entered: "${requestedSelector}".`,
      fix:
        foundSelectors.length > 1
          ? `We also found other DKIM names on this domain: ${foundSelectors.filter((s) => s !== selector).join(", ")}.`
          : "Clear the optional field and re-check if you want us to pick the name automatically.",
    });
  } else if (
    source === "auto" &&
    requestedSelector &&
    requestedSelector !== selector
  ) {
    issues.push({
      severity: "warning",
      message: `We could not find the DKIM name you entered ("${requestedSelector}"). Showing "${selector}" instead.`,
      fix: `Check the spelling of "${requestedSelector}", or keep using "${selector}" if that is the key your provider set up.`,
    });
  } else if (source === "auto") {
    issues.push({
      severity: "info",
      message: `We found your DKIM key automatically: "${selector}".`,
      fix:
        foundSelectors.length > 1
          ? `Also found keys for: ${foundSelectors.filter((s) => s !== selector).join(", ")}. Your mail can use more than one DKIM name.`
          : "You do not need to enter a DKIM name unless you want to check a different one.",
    });
  }

  if (!raw.includes("v=DKIM1")) {
    issues.push({
      severity: "warning",
      message: "DKIM record doesn't include the version tag (v=DKIM1).",
      fix: 'While the "v=DKIM1" tag is technically optional, it\'s recommended by the RFC. Most email providers include it automatically — if yours doesn\'t, check that the record was configured correctly.',
    });
  }

  if (raw.includes("k=") && !raw.includes("k=rsa")) {
    issues.push({
      severity: "info",
      message: "DKIM record uses a non-RSA key type.",
      fix: "RSA is the most widely supported key algorithm for DKIM. If you're using Ed25519, be aware that not all receiving servers support it yet.",
    });
  }

  if (!raw.includes("p=")) {
    issues.push({
      severity: "error",
      message: "DKIM record is missing the public key (p= tag).",
      fix: "The p= tag contains the Base64-encoded public key used to verify email signatures. Without it, DKIM verification will fail. Regenerate your DKIM key in your email provider's admin console.",
    });
  } else {
    const keyMatch = raw.match(/p=([^;\s]*)/);
    if (keyMatch && keyMatch[1].length === 0) {
      issues.push({
        severity: "error",
        message: "DKIM public key is empty — this key has been revoked.",
        fix: "An empty p= tag means the DKIM key has been intentionally revoked. Generate and publish a new DKIM key through your email provider.",
      });
    } else if (keyMatch && keyMatch[1].length < 200) {
      issues.push({
        severity: "warning",
        message: "DKIM key appears to be 512-bit or 1024-bit — consider upgrading to 2048-bit.",
        fix: "Longer keys provide stronger cryptographic security. Most email providers support 2048-bit DKIM keys. In Google Workspace, you can switch from 1024 to 2048-bit in Admin → Gmail → Authenticate email.",
      });
    }
  }

  const status: RecordStatus =
    issues.some((i) => i.severity === "error")
      ? "fail"
      : issues.some((i) => i.severity === "warning")
        ? "warn"
        : "pass";

  return { status, raw, issues };
}

/* ── DMARC Validation ─────────────────────────────────────────────── */

function validateDmarc(records: string[]): RecordResult {
  const dmarcRecords = records.filter((r) => r.startsWith("v=DMARC1"));

  if (dmarcRecords.length === 0) {
    return {
      status: "missing",
      raw: null,
      issues: [
        {
          severity: "error",
          message: "No DMARC record found for this domain.",
          fix: 'Add a TXT record at "_dmarc.yourdomain.com" with value "v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com; pct=100". DMARC tells receiving servers what to do when SPF or DKIM checks fail — without it, failed emails may still be delivered.',
        },
      ],
    };
  }

  const raw = dmarcRecords[0];
  const issues: Issue[] = [];

  // Check policy
  const policyMatch = raw.match(/;\s*p=(\w+)/);
  if (!policyMatch) {
    issues.push({
      severity: "error",
      message: "DMARC record is missing the policy tag (p=).",
      fix: 'Add a policy: p=none (monitoring only), p=quarantine (send to spam), or p=reject (block entirely). Start with "p=quarantine" if you\'re unsure.',
    });
  } else {
    const policy = policyMatch[1].toLowerCase();
    if (policy === "none") {
      issues.push({
        severity: "warning",
        message: 'DMARC policy is set to "none" — emails that fail authentication are still delivered.',
        fix: '"p=none" is a monitoring-only policy. Once you confirm your legitimate email sources pass SPF/DKIM, upgrade to "p=quarantine" (sends failures to spam) or "p=reject" (blocks failures entirely).',
      });
    } else if (policy === "quarantine") {
      issues.push({
        severity: "info",
        message: 'DMARC policy is "quarantine" — failed emails are sent to spam folders.',
        fix: 'This is a solid middle-ground policy. When you\'re confident all legitimate sources pass authentication, consider upgrading to "p=reject" for maximum protection against spoofing.',
      });
    }
    // p=reject is the strongest — no issue needed
  }

  // Check for rua (aggregate reports)
  if (!raw.includes("rua=")) {
    issues.push({
      severity: "warning",
      message: "No aggregate report address (rua=) configured.",
      fix: 'Add "rua=mailto:dmarc-reports@yourdomain.com" to receive daily aggregate reports showing who is sending email as your domain. Free services like Postmark DMARC or DMARCian can parse these reports for you.',
    });
  }

  // Check for ruf (forensic reports)
  if (!raw.includes("ruf=")) {
    issues.push({
      severity: "info",
      message: "No forensic report address (ruf=) configured.",
      fix: 'Adding "ruf=mailto:dmarc-forensics@yourdomain.com" enables detailed failure reports for individual messages. Note: not all receiving servers send forensic reports, and they can contain PII.',
    });
  }

  // Check subdomain policy
  if (!raw.includes("sp=")) {
    issues.push({
      severity: "info",
      message: "No subdomain policy (sp=) set — subdomains inherit the main policy.",
      fix: 'If you want different DMARC handling for subdomains (e.g., marketing.yourdomain.com), add "sp=quarantine" or "sp=reject". Otherwise, the main "p=" policy applies to all subdomains.',
    });
  }

  // Check pct
  const pctMatch = raw.match(/;\s*pct=(\d+)/);
  if (pctMatch) {
    const pct = parseInt(pctMatch[1], 10);
    if (pct < 100) {
      issues.push({
        severity: "warning",
        message: `DMARC policy applies to only ${pct}% of emails.`,
        fix: `Your policy is only enforced on ${pct}% of emails — the rest are treated as "p=none". This is useful during rollout, but you should increase to pct=100 once you're confident your setup is correct.`,
      });
    }
  }

  const status: RecordStatus =
    issues.some((i) => i.severity === "error")
      ? "fail"
      : issues.some((i) => i.severity === "warning")
        ? "warn"
        : "pass";

  return { status, raw, issues };
}

/* ── Score calculation ─────────────────────────────────────────────── */

function calculateScore(
  spf: RecordResult,
  dkim: RecordResult,
  dmarc: RecordResult
): number {
  let score = 100;

  // SPF scoring (40 points max)
  if (spf.status === "missing") score -= 40;
  else if (spf.status === "fail") score -= 30;
  else if (spf.status === "warn") score -= 15;

  // DKIM scoring (30 points max)
  if (dkim.status === "missing") score -= 30;
  else if (dkim.status === "fail") score -= 25;
  else if (dkim.status === "warn") score -= 10;

  // DMARC scoring (30 points max)
  if (dmarc.status === "missing") score -= 30;
  else if (dmarc.status === "fail") score -= 25;
  else if (dmarc.status === "warn") score -= 10;

  return Math.max(0, Math.min(100, score));
}

/* ── API handler ──────────────────────────────────────────────────── */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip =
    (Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"]) ||
    req.socket.remoteAddress ||
    "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Too many requests. Please wait a minute before trying again.",
    });
  }

  const { domain: rawDomain, dkimSelector } = req.body || {};

  if (!rawDomain || typeof rawDomain !== "string") {
    return res.status(400).json({ error: "Please provide a domain to check." });
  }

  const domain = sanitizeDomain(rawDomain);
  if (!domain) {
    return res.status(400).json({
      error:
        "Invalid domain format. Enter a domain like example.com (without http:// or paths).",
    });
  }

  const preferredSelector =
    typeof dkimSelector === "string" && dkimSelector.trim().length > 0
      ? dkimSelector.trim()
      : null;

  try {
    // SPF + DMARC in parallel with DKIM auto-discovery
    const [domainTxt, dmarcTxt, dkimDiscovery] = await Promise.all([
      getTxtRecords(domain),
      getTxtRecords(`_dmarc.${domain}`),
      discoverDkim(domain, preferredSelector),
    ]);

    const spf = validateSpf(domainTxt);
    const dkim = validateDkim(
      dkimDiscovery.records,
      dkimDiscovery.selector,
      dkimDiscovery.foundSelectors,
      dkimDiscovery.source,
      preferredSelector
    );
    const dmarc = validateDmarc(dmarcTxt);
    const score = calculateScore(spf, dkim, dmarc);

    const response: CheckResponse = {
      domain,
      score,
      spf,
      dkim,
      dmarc,
      dkimSelector: dkimDiscovery.selector,
      requestedDkimSelector: preferredSelector,
      dkimSelectorsFound: dkimDiscovery.foundSelectors,
      dkimSelectorSource: dkimDiscovery.source,
      checkedAt: new Date().toISOString(),
    };

    // Cache for 5 minutes — results don't change often
    res.setHeader("Cache-Control", "private, max-age=300");
    return res.status(200).json(response);
  } catch (err) {
    console.error("DNS lookup failed:", err);
    return res.status(500).json({
      error:
        "Failed to perform DNS lookups. The domain may not exist or DNS servers are unreachable.",
    });
  }
}
