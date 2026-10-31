/**
 * Shared data for the competitor "alternatives" cluster:
 *   /blog/lemlist-alternatives, /blog/instantly-alternatives, /blog/smartlead-alternatives
 *
 * All three pages read the same tool facts from here so the numbers, definitions and the
 * LeadSnipper row stay identical across the cluster.
 *
 * PRICE SOURCING RULES
 * - Prefer the vendor's own pricing page (or official price file / help center).
 * - `thirdParty: true` only when a figure still relies on a third-party roundup.
 * - INR figures for other vendors are ESTIMATES converted at INR_RATE. Never present them as a
 *   vendor's own INR price. LeadSnipper publishes its own INR prices.
 */

export const PRICES_CHECKED = "2026-10-31";
export const PRICES_CHECKED_LABEL = "31 October 2026";

/** FBIL / RBI reference rate published for 30 Oct 2026 (rbi.org.in). Update on publish day. */
export const INR_RATE = 95.25;
export const INR_RATE_LABEL =
  "₹95.25 per US$1 (FBIL/RBI reference rate, 30 October 2026)";

/** Indian digit grouping without relying on Intl (avoids SSR/client ICU differences). */
export function formatINR(value: number): string {
  const n = Math.round(value).toString();
  if (n.length <= 3) return n;
  const last3 = n.slice(-3);
  const rest = n.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${rest},${last3}`;
}

export function inrEstimate(usd: number): string {
  return `≈ ₹${formatINR(usd * INR_RATE)} est.`;
}

export type ToolKey =
  | "lemlist"
  | "smartlead"
  | "instantly"
  | "woodpecker"
  | "replyio"
  | "leadsnipper"
  | "saleshandy"
  | "mailshake"
  | "heyreach"
  | "quickmail"
  | "emailbison";

export interface Source {
  label: string;
  url: string;
  note: string;
}

export interface ComparisonRow {
  pricingModel: string;
  entryUsd: string;
  inr: string;
  mailboxes: string;
  emailCap: string;
  workspaces: string;
  whiteLabel: string;
  verification: string;
  safeguards: string;
  linkedin: string;
  trial: string;
  checked: string;
}

export interface ToolProfile {
  key: ToolKey;
  name: string;
  /** H3 anchor id, also used in the ItemList schema URL */
  anchor: string;
  website: string;
  /** true when any price on this profile comes from a third-party source */
  thirdParty: boolean;
  priceLines: string[];
  agencyFeatures: string;
  safeguards: string;
  pros: string[];
  cons: string[];
  sources: Source[];
  row: ComparisonRow;
}

const CHECKED_VENDOR = "31 Oct 2026 (vendor page)";

export const tools: Record<ToolKey, ToolProfile> = {
  lemlist: {
    key: "lemlist",
    name: "lemlist",
    anchor: "lemlist",
    website: "https://www.lemlist.com/pricing",
    thirdParty: false,
    // Source: lemlist.com/pricing + help.lemlist.com (Oct 2026). Verify before publish.
    priceLines: [
      "Email plan: $69/month billed monthly or $55/month billed yearly, 50,000 emails, unlimited users and senders, with higher volume tiers.",
      "Multichannel: $109 per user/month ($87 billed yearly), 5 senders per user.",
    ],
    agencyFeatures:
      "A \"Cockpit\" multi-client view for managing several clients. Forgesend reports it found no white-label option; check lemlist.com before relying on one.",
    safeguards:
      "Sends through the Google or Microsoft mailboxes you connect. Check per-mailbox limits and bounce protection in a trial.",
    pros: [
      "Email, LinkedIn and call steps in one sequence",
      "Email plan includes unlimited users and senders",
      "Mature product with a large template and community library",
    ],
    cons: [
      "Multichannel is priced per user, which adds up for agency teams",
      "Email-only agencies pay for multichannel features they may not use",
      "White-label client reporting not confirmed",
    ],
    sources: [
      { label: "lemlist pricing", url: "https://www.lemlist.com/pricing", note: "checked Oct 2026" },
    ],
    row: {
      pricingModel: "Per plan (Email) / per user (Multichannel)",
      entryUsd: "$69 | $55",
      inr: inrEstimate(69),
      mailboxes: "Unlimited senders (Email plan)",
      emailCap: "50,000 (Email plan entry tier)",
      workspaces: "Cockpit multi-client view",
      whiteLabel: "Not found (verify)",
      verification: "Check vendor",
      safeguards: "Check vendor",
      linkedin: "Yes (Multichannel)",
      trial: "Check vendor",
      checked: "Oct 2026 (vendor page)",
    },
  },
  smartlead: {
    key: "smartlead",
    name: "Smartlead",
    anchor: "smartlead",
    website: "https://www.smartlead.ai/pricing",
    thirdParty: false,
    // Source: smartlead.ai/pricing, re-checked 2026-10-31.
    priceLines: [
      "Base $39/month ($32 billed yearly): 6,000 sends, 2,000 contacts.",
      "Pro $94/month ($78 yearly): 90,000 sends, 30,000 contacts.",
      "Unlimited Smart $174/month ($144 yearly): 150,000 sends, unlimited contacts.",
      "Unlimited Prime $379/month ($315 yearly): 500,000 sends, 3 client workspaces included.",
      "Verified prospect emails: $59/month add-on on Base (2,000) and Pro (30,000); included free on Unlimited Smart (50,000) and Prime (170,000). Warm-up pools are included on every plan.",
      "Unlimited email accounts on every plan; yearly billing saves 17%.",
    ],
    agencyFeatures:
      "White-label client workspaces cost $29/month each, available from Pro; Unlimited Prime includes three. Base has no API, webhooks or client workspaces on Smartlead's pricing feature table.",
    safeguards:
      "Unlimited mailboxes with sender rotation and included warm-up pools. Dedicated-IP SmartServers ($39/server/month), SmartDelivery placement tests (from $49/month) and separate email-verification credits are paid add-ons.",
    pros: [
      "Unlimited email accounts on every plan",
      "Per-client white-label workspaces from Pro",
      "API, webhooks and a master inbox for operators",
    ],
    cons: [
      "Per-client fees stack up ($29 × clients)",
      "Verified prospect emails ($59) plus verification/placement add-ons raise the real bill on Base/Pro",
      "Users report a learning curve for the operator UI",
    ],
    sources: [
      { label: "Smartlead pricing", url: "https://www.smartlead.ai/pricing", note: "checked 31 Oct 2026" },
    ],
    row: {
      pricingModel: "Flat plan + per client workspace",
      entryUsd: "$39 | $32",
      inr: inrEstimate(39),
      mailboxes: "Unlimited",
      emailCap: "6,000 (Base) to 500,000 (Prime)",
      workspaces: "Add-on $29/client from Pro (3 in Prime)",
      whiteLabel: "Yes, white-label workspaces",
      verification: "Credits add-on; SmartProspect $59 on Base/Pro",
      safeguards: "Warm-up included; dedicated IPs and placement tests as add-ons",
      linkedin: "No",
      trial: "Free trial, no card",
      checked: CHECKED_VENDOR,
    },
  },
  instantly: {
    key: "instantly",
    name: "Instantly",
    anchor: "instantly",
    website: "https://instantly.ai/pricing",
    thirdParty: false,
    // Source: instantly.ai/pricing, verified 2026-10-26 per brief. Hypergrowth email cap is
    // shown as both 100k and 125k on the vendor page, so it is deliberately not printed.
    priceLines: [
      "Growth $47/month ($37.60 billed yearly): unlimited email accounts and warm-up, 5,000 emails, 1,000 uploaded contacts.",
      "Hypergrowth $97/month ($77.60 yearly): 25,000 contacts.",
      "Light Speed $358/month ($286.30 yearly): 500,000 emails, 100,000 contacts, SISR (dedicated server and IP blocks).",
      "Lead-data credits are a separate subscription from $47/month.",
    ],
    agencyFeatures:
      "Isolated workspaces, but each client workspace needs its own plan subscription (\"Subscribe to any plan to activate that workspace\"). The white-label agency portal is available on Hypergrowth and Light Speed.",
    safeguards:
      "Unlimited accounts and warm-up on every plan. Light Speed adds SISR, which Instantly describes as dedicated/private server and IP blocks.",
    pros: [
      "Unlimited email accounts and warm-up on every plan",
      "Easy UI and a large community",
      "White-label agency portal on Hypergrowth and Light Speed",
    ],
    cons: [
      "Every client workspace is a separate subscription",
      "Growth caps each workspace at 5,000 emails/month",
      "Lead data is billed separately",
    ],
    sources: [
      { label: "Instantly pricing", url: "https://instantly.ai/pricing", note: "checked 26 Oct 2026" },
      { label: "Instantly blog: managing client workspaces", url: "https://instantly.ai/blog/how-to-manage-10-client-workspaces-securely", note: "per-workspace subscriptions" },
    ],
    row: {
      pricingModel: "Per workspace (flat plan each)",
      entryUsd: "$47 | $37.60",
      inr: inrEstimate(47),
      mailboxes: "Unlimited",
      emailCap: "5,000 (Growth) to 500,000 (Light Speed)",
      workspaces: "Separate subscription per workspace",
      whiteLabel: "Agency portal on Hypergrowth+",
      verification: "Check vendor",
      safeguards: "Warm-up; dedicated IPs (SISR) on Light Speed",
      linkedin: "No",
      trial: "Check vendor",
      checked: CHECKED_VENDOR,
    },
  },
  woodpecker: {
    key: "woodpecker",
    name: "Woodpecker",
    anchor: "woodpecker",
    website: "https://woodpecker.co/pricing/",
    thirdParty: false,
    // woodpecker.co/pricing + help center Billing FAQ / Agency White Label (checked 2026-10-31).
    priceLines: [
      "Usage-based: from $35/month for 500 contacted prospects (about 8,000 emails); yearly billing is 8 months for 12 (about $23.33/month at the entry tier).",
      "Agency Panel: $27/month per active client; White Label add-on $5/month per active client.",
    ],
    agencyFeatures:
      "An Agency Panel billed per active client, with an optional white-label client reporting app per client.",
    safeguards:
      "Sends through your connected mailboxes. Unlimited email accounts on the base product; check bounce-protection settings in a trial.",
    pros: [
      "You pay for active clients, not idle ones",
      "Agency Panel built for multi-client operators",
      "White-label available as a small per-client add-on",
    ],
    cons: [
      "Cost grows with prospect volume and client count",
      "Agency Panel and White Label stack on top of sending volume",
      "Fewer multichannel options than lemlist or Reply.io",
    ],
    sources: [
      { label: "Woodpecker pricing", url: "https://woodpecker.co/pricing/", note: "checked 31 Oct 2026" },
      { label: "Woodpecker Billing FAQ", url: "https://woodpecker.co/help-center/en/articles/5234070-billing-faq", note: "entry tier $35" },
      { label: "Agency White Label", url: "https://woodpecker.co/help-center/en/articles/8069607-agency-white-label-add-on", note: "$5 per client" },
    ],
    row: {
      pricingModel: "Usage (prospects) + per client",
      entryUsd: "$35 | ~$23 (yearly)",
      inr: inrEstimate(35),
      mailboxes: "Unlimited",
      emailCap: "Based on prospects (16 emails/prospect)",
      workspaces: "Agency Panel $27/active client",
      whiteLabel: "Add-on $5/client",
      verification: "Unlimited verification (pricing page)",
      safeguards: "Warm-up slots scale with tier",
      linkedin: "Available (check plan)",
      trial: "14 days / 500 emails",
      checked: CHECKED_VENDOR,
    },
  },
  replyio: {
    key: "replyio",
    name: "Reply.io",
    anchor: "reply-io",
    website: "https://reply.io/pricing/",
    thirdParty: false,
    // reply.io/pricing + reply.io/reply-io-pricing.txt (checked 2026-10-31).
    priceLines: [
      "Email Volume: from $49 per user/month billed yearly ($59 monthly) for 1,000 active contacts; higher contact tiers raise the price and unlock unlimited users above 5,000 contacts.",
      "Multichannel: from $89 per user/month billed yearly, or $99 billed monthly.",
      "Agency Core: from $210/month billed yearly (unlimited clients and users).",
    ],
    agencyFeatures:
      "Agency Core for multi-client operators; Multichannel suits SDR teams that want LinkedIn, calls and SMS with email.",
    safeguards:
      "Sends through connected mailboxes. Check its per-mailbox limits and bounce handling in a trial.",
    pros: [
      "LinkedIn, calls and SMS alongside email",
      "Volume-based email plan for email-heavy teams",
      "Agency Core plan for multi-client work",
    ],
    cons: [
      "Multichannel is priced per user",
      "More features than an email-only agency needs",
      "LinkedIn and calling can be add-ons on Email Volume",
    ],
    sources: [
      { label: "Reply.io pricing", url: "https://reply.io/pricing/", note: "checked 31 Oct 2026" },
      { label: "Reply.io price file", url: "https://reply.io/reply-io-pricing.txt", note: "machine-readable prices" },
    ],
    row: {
      pricingModel: "Volume (email) / per user (multichannel)",
      entryUsd: "$59 | $49",
      inr: inrEstimate(49),
      mailboxes: "Fair-use / plan-dependent",
      emailCap: "By active-contact tier",
      workspaces: "Agency Core from $210/mo yearly",
      whiteLabel: "Teams of 20+ (quoted)",
      verification: "Check vendor",
      safeguards: "Check vendor",
      linkedin: "Yes",
      trial: "14 days",
      checked: CHECKED_VENDOR,
    },
  },
  leadsnipper: {
    key: "leadsnipper",
    name: "LeadSnipper",
    anchor: "leadsnipper",
    website: "https://leadsnipper.com/pricing",
    thirdParty: false,
    // Facts from leadsnipper.com/pricing only. Do not add warm-up, free plan, built-in Reoon,
    // lead database, white-label or separate client-workspace claims.
    priceLines: [
      "Starter ₹999 / $19 a month: 10 mailboxes, 10,000 emails/month, 3 custom domains, AI email writer.",
      "Growth ₹2,499 / $49 a month: 50 mailboxes, 100,000 emails/month, unlimited domains, advanced analytics with PDF export, smart send-time.",
      "Scale ₹5,999 / $119 a month: unlimited mailboxes, 500,000 emails/month, REST API and webhooks, Google Sheets sync, dedicated SES setup.",
      "Managed SES add-on: ₹4,999 / $99.98 a month.",
      "14-day trial: 1,000 emails, 2 mailboxes, 1 custom domain, no card. There is no free plan.",
    ],
    agencyFeatures:
      "Connect Google Workspace, Microsoft 365/Outlook, Zoho and custom SMTP/IMAP mailboxes. One account can run many client mailboxes and campaigns (Growth includes 50 mailboxes; Scale is unlimited). Campaign analytics and PDF campaign export on eligible plans; Sheets sync, REST API and webhooks on Scale. Separate white-label client portals are not a published plan feature — ask us how workspace and permission features fit your agency setup.",
    safeguards:
      "Mailbox-level daily limits and sending delays, sender rotation and ESP matching, Reoon verification before send (bring your own Reoon key), and bounce and complaint monitoring with automatic campaign pause. A paused campaign stays paused until you acknowledge it. No artificial warm-up pool.",
    pros: [
      "Hard per-mailbox caps, pacing and auto-pause on every plan",
      "Published INR pricing from ₹999 a month",
      "Pre-send verification with your own Reoon account",
    ],
    cons: [
      "No LinkedIn steps and no lead database (you bring your own leads)",
      "No warm-up pool; verification needs your own Reoon account",
      "No published white-label client portal; newer platform with a smaller community",
    ],
    sources: [
      { label: "LeadSnipper pricing", url: "https://leadsnipper.com/pricing", note: "our own published prices" },
    ],
    row: {
      pricingModel: "Flat plan",
      entryUsd: "$19 (monthly)",
      inr: "₹999 (published)",
      mailboxes: "10 / 50 / unlimited",
      emailCap: "10k / 100k / 500k",
      workspaces: "One account, many mailboxes/campaigns (ask us)",
      whiteLabel: "PDF campaign export (eligible plans)",
      verification: "BYO Reoon key, before send",
      safeguards: "Mailbox caps, pacing, bounce/complaint auto-pause; no warm-up pool",
      linkedin: "No",
      trial: "14 days, no card",
      checked: "Our pricing page",
    },
  },
  saleshandy: {
    key: "saleshandy",
    name: "Saleshandy",
    anchor: "saleshandy",
    website: "https://www.saleshandy.com/pricing/",
    thirdParty: false,
    // saleshandy.com/pricing + docs.saleshandy.com Platform Plan Pricing 2026 (checked 2026-10-31).
    priceLines: [
      "Starter: $34/month billed yearly or $41 billed monthly.",
      "Pro: $76/month billed yearly or $99 billed monthly.",
      "Scale: from $149/month billed yearly or $189 billed monthly (200,000 emails; higher volume tiers available).",
    ],
    agencyFeatures:
      "Unlimited teams/workspaces on Scale. Whitelabel for agencies is listed on Scale in Saleshandy's 2026 platform pricing docs; the public pricing page also lists Whitelabel under Enterprise — confirm which tier you need before buying.",
    safeguards:
      "Unlimited connected mailboxes on flat per-account plans, with built-in warm-up.",
    pros: [
      "Many client teams on one Scale bill",
      "Unlimited mailboxes on flat plans",
      "Built-in warm-up",
    ],
    cons: [
      "Whitelabel tier naming differs between docs and the pricing page",
      "Starter is single-user",
      "Scale entry is higher than Smartlead Base/Pro for small agencies",
    ],
    sources: [
      { label: "Saleshandy pricing", url: "https://www.saleshandy.com/pricing/", note: "checked 31 Oct 2026" },
      { label: "Platform Plan Pricing 2026", url: "https://docs.saleshandy.com/en/articles/16451272-saleshandy-platform-plan-pricing-2026", note: "Scale $149 yearly / $189 monthly" },
    ],
    row: {
      pricingModel: "Flat per account",
      entryUsd: "$41 | $34",
      inr: inrEstimate(41),
      mailboxes: "Unlimited",
      emailCap: "6k / 100k / 200k+",
      workspaces: "Unlimited teams on Scale",
      whiteLabel: "Scale docs / Enterprise page — confirm",
      verification: "Credits included by plan",
      safeguards: "Warm-up included",
      linkedin: "No",
      trial: "Check vendor",
      checked: CHECKED_VENDOR,
    },
  },
  mailshake: {
    key: "mailshake",
    name: "Mailshake",
    anchor: "mailshake",
    website: "https://mailshake.com/pricing/",
    thirdParty: false,
    // mailshake.com/pricing (checked 2026-10-31).
    priceLines: [
      "Per user: Starter $29/month ($25 yearly), Email Outreach $49 ($45 yearly), Sales Engagement $99 ($85 yearly).",
      "Starter: 1 sending account, 1,500 sends/month. Email Outreach: 2 accounts, unlimited sends. Sales Engagement: up to 10 accounts, dialer and LinkedIn automation.",
      "Agency plan through sales. No free trial.",
    ],
    agencyFeatures:
      "An agency plan is available through sales; per-user plans otherwise. Billing is by purchased users (each user unlocks sending-account slots).",
    safeguards:
      "Unlimited email warmup and verification on published plans; sends through connected mailboxes.",
    pros: [
      "Low per-user entry price",
      "Sales Engagement tier adds calling and LinkedIn automation",
      "Straightforward campaign management",
    ],
    cons: [
      "Per-user pricing grows with team size",
      "No free trial",
      "Agency pricing is quote-only; mailbox caps are low vs inbox-rotation tools",
    ],
    sources: [
      { label: "Mailshake pricing", url: "https://mailshake.com/pricing/", note: "checked 31 Oct 2026" },
    ],
    row: {
      pricingModel: "Per user",
      entryUsd: "$29 | $25",
      inr: inrEstimate(29),
      mailboxes: "1 / 2 / 10 per user",
      emailCap: "1,500 (Starter) / unlimited",
      workspaces: "Agency plan via sales",
      whiteLabel: "Check vendor",
      verification: "Unlimited (published plans)",
      safeguards: "Warm-up included",
      linkedin: "Sales Engagement",
      trial: "No",
      checked: CHECKED_VENDOR,
    },
  },
  heyreach: {
    key: "heyreach",
    name: "HeyReach",
    anchor: "heyreach",
    website: "https://www.heyreach.io/pricing",
    thirdParty: false,
    // help.heyreach.io plans article (checked 2026-10-31).
    priceLines: [
      "Micro Agency: $999/month ($899 quarterly, $799 yearly) for 25 LinkedIn senders in a shared pool.",
      "Agency: $1,399/month ($1,259 quarterly, $1,119 yearly) for 50 senders.",
      "Growth is per-sender from $79/month ($63 yearly); Unlimited is a flat high-volume plan.",
    ],
    agencyFeatures:
      "Client workspaces, shared sender pool, whitelabel, onboarding and a dedicated Slack channel on Agency tiers. Replaces LinkedIn steps, not email sending.",
    safeguards:
      "LinkedIn-focused, so email deliverability safeguards don't apply. Pair it with an email sender.",
    pros: [
      "Purpose-built for LinkedIn at agency scale",
      "Many sender profiles under one agency plan",
      "Whitelabel included on Agency",
    ],
    cons: [
      "LinkedIn only; you still need an email tool",
      "High entry price for small agencies",
      "Agency/Unlimited typically need your own proxies",
    ],
    sources: [
      { label: "HeyReach plans help center", url: "https://help.heyreach.io/en/articles/14741630-heyreach-plans-and-pricing-what-s-included-and-how-to-choose", note: "checked 31 Oct 2026" },
    ],
    row: {
      pricingModel: "Per LinkedIn sender bundle",
      entryUsd: "$999 (Micro Agency, 25 senders)",
      inr: inrEstimate(999),
      mailboxes: "n/a (LinkedIn senders)",
      emailCap: "n/a",
      workspaces: "Multiple client workspaces",
      whiteLabel: "Included on Agency",
      verification: "n/a",
      safeguards: "n/a (LinkedIn)",
      linkedin: "Yes (core product)",
      trial: "14 days, no card",
      checked: CHECKED_VENDOR,
    },
  },
  quickmail: {
    key: "quickmail",
    name: "QuickMail",
    anchor: "quickmail",
    website: "https://quickmail.com/pricing",
    thirdParty: false,
    // quickmail.com/pricing + help.quickmail.com (checked 2026-10-31).
    priceLines: [
      "Starter $49/month: 5,000 emails, 1,000 contacts, 1 workspace.",
      "Growth $99/month: 100,000 emails, 25,000 contacts, 1 workspace.",
      "Agency $299/month: 500,000 emails, 100,000 contacts, 2 workspaces (+$49 per extra), unlimited users and inboxes, API, webhooks, client portal.",
    ],
    agencyFeatures:
      "Agency plan with two workspaces included, unlimited users and inboxes, campaign library and a client portal. Extra workspaces are $49/month each.",
    safeguards:
      "Unlimited inboxes with free AutoWarmer (MailFlow) on every plan.",
    pros: [
      "High volume on one flat agency price",
      "Unlimited users and inboxes",
      "Built-in warm-up",
    ],
    cons: [
      "Only two workspaces included on Agency",
      "Too big for small agencies at $299 entry",
      "Extra workspaces add $49 each",
    ],
    sources: [
      { label: "QuickMail pricing", url: "https://quickmail.com/pricing", note: "checked 31 Oct 2026" },
      { label: "QuickMail subscription help", url: "https://help.quickmail.com/billing-and-payments/managing-your-quickmail-subscription/", note: "plan table" },
    ],
    row: {
      pricingModel: "Flat agency plan",
      entryUsd: "$299 (Agency)",
      inr: inrEstimate(299),
      mailboxes: "Unlimited",
      emailCap: "500,000",
      workspaces: "2 included (+$49 each)",
      whiteLabel: "Client portal on Agency",
      verification: "Check vendor",
      safeguards: "Warm-up included",
      linkedin: "Yes (unlimited accounts)",
      trial: "14 days, no card",
      checked: CHECKED_VENDOR,
    },
  },
  emailbison: {
    key: "emailbison",
    name: "EmailBison",
    anchor: "emailbison",
    website: "https://emailbison.com/pricing",
    thirdParty: false,
    // emailbison.com/pricing (checked 2026-10-31).
    priceLines: [
      "One plan: $599/month for 500,000 emails, unlimited workspaces, unlimited teammates and unlimited lead storage.",
      "Isolated infrastructure with dedicated IPs, warm-up, API and private Slack onboarding. Extra send volume sold in monthly buckets.",
    ],
    agencyFeatures:
      "Unlimited workspaces on one bill, aimed at agencies with 20+ clients sending at high volume. White-label instance per vendor materials.",
    safeguards:
      "Dedicated IPs and warm-up on the single published plan.",
    pros: [
      "Unlimited workspaces on one bill",
      "Dedicated IPs included",
      "500,000 emails on the entry plan",
    ],
    cons: [
      "High entry price for small agencies",
      "No published annual price or free trial on the pricing page",
      "Extra volume bucket price not listed publicly",
    ],
    sources: [
      { label: "EmailBison pricing", url: "https://emailbison.com/pricing", note: "checked 31 Oct 2026" },
    ],
    row: {
      pricingModel: "Flat high-volume plan",
      entryUsd: "$599",
      inr: inrEstimate(599),
      mailboxes: "Bring your own",
      emailCap: "500,000",
      workspaces: "Unlimited",
      whiteLabel: "Instance branding (vendor)",
      verification: "Check vendor",
      safeguards: "Dedicated IPs + warm-up",
      linkedin: "No",
      trial: "Demo only",
      checked: CHECKED_VENDOR,
    },
  },
};

/** Shared definitions — identical wording on all three alternatives pages. */
export const definitions = [
  {
    term: "Multi-client workspace",
    text: "A separate area per client with its own mailboxes, leads, campaigns and reports, so one client's data and reputation don't mix with another's.",
  },
  {
    term: "Auto-pause",
    text: "A safeguard that stops a campaign automatically when bounce or complaint rates cross a threshold.",
  },
];

/** Shared "Smartlead vs Instantly for agencies" mini-table (Instantly and Smartlead pages, lemlist page matrix). */
export const smartleadVsInstantlyRows: Array<{ label: string; smartlead: string; instantly: string }> = [
  {
    label: "Pricing model",
    smartlead: "Flat plan ($39–$379) plus $29 per white-label client workspace",
    instantly: "Flat plan per workspace ($47–$358); each client workspace is its own subscription",
  },
  {
    label: "Client workspaces",
    smartlead: "From Pro, $29 each; Unlimited Prime includes 3",
    instantly: "Isolated workspaces, each needs its own plan",
  },
  {
    label: "White-label",
    smartlead: "White-label client workspaces",
    instantly: "White-label agency portal on Hypergrowth and Light Speed",
  },
  {
    label: "Verification",
    smartlead: "Paid add-on",
    instantly: "Check Instantly's current plans",
  },
  {
    label: "API / webhooks plan gate",
    smartlead: "From Pro ($94); not on Base (pipeplaybook; verify)",
    instantly: "Webhooks from Hypergrowth (pipeplaybook; verify)",
  },
  {
    label: "Private IPs",
    smartlead: "SmartServers add-on, $39/server/month",
    instantly: "SISR on Light Speed",
  },
];

export const scenarioDescription =
  "10 clients, 30 mailboxes (3 per client), about 60,000 emails a month (about 6,000 per client).";

export const authorProfile = {
  name: "Rehan Qureshi",
  jobTitle: "Founder & CEO, LeadSnipper",
  url: "https://leadsnipper.com/about",
  linkedin: "https://www.linkedin.com/in/mrqdev/",
};

export function buildItemListSchema(name: string, slug: string, order: ToolKey[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: order.length,
    itemListElement: order.map((key, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tools[key].name,
      url: `https://leadsnipper.com/blog/${slug}#${tools[key].anchor}`,
    })),
  };
}
