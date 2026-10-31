/**
 * Building blocks shared by the competitor "alternatives" blog posts
 * (lemlist, Instantly, Smartlead). Data lives in lib/alternatives.ts.
 */
import Link from "next/link";
import React from "react";

import {
  authorProfile,
  definitions,
  INR_RATE_LABEL,
  PRICES_CHECKED_LABEL,
  smartleadVsInstantlyRows,
  ToolKey,
  tools,
} from "@/lib/alternatives";
import { FAQItem } from "@/lib/faqs";

const linkCls = "text-[#0058be] font-medium hover:underline";

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkCls}>
      {children}
    </Link>
  );
}

export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-[#1e293b] mt-12 mb-4 scroll-mt-24">
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-lg font-bold text-[#1e293b] mt-6 mb-2 scroll-mt-24">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#475569] leading-relaxed mb-4">{children}</p>;
}

export function DirectAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-speakable
      className="mb-6 p-5 rounded-xl border-2 border-[#0058be]/20 bg-gradient-to-br from-[#0058be]/[0.03] to-[#10b981]/[0.02]"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-[#0058be] mb-2">
        Short answer
      </p>
      <p className="text-[17px] text-[#1e293b] leading-relaxed">{children}</p>
    </div>
  );
}

export function ByLine() {
  return (
    <div className="mb-8 text-sm text-[#475569] space-y-1">
      <p>
        By{" "}
        <A href={authorProfile.url}>{authorProfile.name}</A>, {authorProfile.jobTitle}.{" "}
        <strong className="text-[#1e293b]">Prices checked: {PRICES_CHECKED_LABEL}.</strong>
      </p>
      <p>
        <strong className="text-[#1e293b]">Disclosure:</strong> we build LeadSnipper, which is
        one of the tools below. Here is how we compared the tools, and where LeadSnipper
        doesn&apos;t fit.
      </p>
    </div>
  );
}

export function Toc({ items }: { items: Array<{ id: string; label: string }> }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 p-5 rounded-xl border border-[#e2e8f0] bg-white"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-[#727785] mb-3">
        On this page
      </p>
      <ol className="list-decimal pl-5 space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-[#0058be] hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function QuickPicks({
  picks,
}: {
  picks: Array<{ useCase: string; tool: ToolKey; price: string; source: string }>;
}) {
  return (
    <ul className="space-y-2 mb-6">
      {picks.map((p) => (
        <li
          key={p.useCase}
          className="p-3 rounded-lg border border-[#e2e8f0] bg-white text-sm text-[#475569]"
        >
          <strong className="text-[#1e293b]">{p.useCase}:</strong>{" "}
          <a href={`#${tools[p.tool].anchor}`} className={linkCls}>
            {tools[p.tool].name}
          </a>
          , {p.price} <span className="text-[#94a3b8]">({p.source})</span>
        </li>
      ))}
    </ul>
  );
}

const columns: Array<{ key: keyof (typeof tools)["smartlead"]["row"] | "bestFor"; label: string }> = [
  { key: "bestFor", label: "Best for" },
  { key: "pricingModel", label: "Pricing model" },
  { key: "entryUsd", label: "Entry USD/mo (monthly | yearly)" },
  { key: "inr", label: "INR" },
  { key: "mailboxes", label: "Mailboxes included" },
  { key: "emailCap", label: "Monthly email cap" },
  { key: "workspaces", label: "Multi-client workspaces" },
  { key: "whiteLabel", label: "White-label / client reporting" },
  { key: "verification", label: "Lead verification" },
  { key: "safeguards", label: "Deliverability safeguards" },
  { key: "linkedin", label: "LinkedIn steps" },
  { key: "trial", label: "Free trial" },
  { key: "checked", label: "Price checked on" },
];

export function ComparisonTable({
  baseline,
  order,
  bestFor,
  caption,
}: {
  baseline: ToolKey;
  order: ToolKey[];
  bestFor: Partial<Record<ToolKey, string>>;
  caption: string;
}) {
  const rows: ToolKey[] = [baseline, ...order];
  const sources = rows.flatMap((k) =>
    tools[k].sources.map((s) => ({ ...s, tool: tools[k].name }))
  );
  return (
    <>
      <div className="overflow-x-auto mb-3 rounded-xl border border-[#e2e8f0]">
        <table className="min-w-[1400px] w-full text-xs text-left border-collapse">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="sticky left-0 z-10 bg-[#f1f5f9] px-3 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b] min-w-[120px]">
                Tool
              </th>
              {columns.map((c) => (
                <th
                  key={c.key}
                  className="px-3 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b] min-w-[110px]"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            {rows.map((k, i) => {
              const t = tools[k];
              const isBase = k === baseline;
              return (
                <tr key={k} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-3 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b] ${
                      i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"
                    }`}
                  >
                    {isBase ? (
                      <>
                        {t.name} <span className="font-normal text-[#94a3b8]">(baseline)</span>
                      </>
                    ) : (
                      <a href={`#${t.anchor}`} className="text-[#0058be] hover:underline">
                        {t.name}
                      </a>
                    )}
                  </th>
                  {columns.map((c) => (
                    <td key={c.key} className="px-3 py-2 border border-[#e2e8f0] align-top">
                      {c.key === "bestFor"
                        ? bestFor[k] ?? (isBase ? "Baseline" : "")
                        : t.row[c.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#727785] mb-2">
        Scroll sideways on mobile; the tool column stays fixed. INR figures marked
        &quot;est.&quot; are our conversion at {INR_RATE_LABEL}, not the vendor&apos;s own INR
        price. &quot;Check vendor&quot; means we couldn&apos;t confirm it from a pricing page.
      </p>
      <details className="mb-8 text-xs text-[#727785]">
        <summary className="cursor-pointer font-semibold text-[#475569]">
          Price sources for this table
        </summary>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          {sources.map((s, i) => (
            <li key={`${s.tool}-${s.url}-${i}`}>
              {s.tool}: <A href={s.url}>{s.label}</A> ({s.note})
            </li>
          ))}
        </ol>
      </details>
    </>
  );
}

export function ToolSection({
  index,
  tool,
  bestFor,
  intro,
  chooseIf,
  extra,
}: {
  index: number;
  tool: ToolKey;
  bestFor: string;
  intro: React.ReactNode;
  chooseIf: React.ReactNode;
  extra?: React.ReactNode;
}) {
  const t = tools[tool];
  const isUs = tool === "leadsnipper";
  return (
    <section className="mb-10 rounded-2xl border border-[#e2e8f0] bg-white p-5">
      <h3 id={t.anchor} className="font-bold text-[#1e293b] text-xl mb-1 scroll-mt-24">
        {index}. {t.name}
        {isUs ? " (our product)" : ""}
      </h3>
      <p className="text-sm text-[#0058be] font-semibold mb-3">Best for: {bestFor}</p>
      {isUs && (
        <p className="text-xs text-[#727785] mb-3">
          Disclosure: this is our product. We list its limitations below.
        </p>
      )}
      <div className="text-[#475569] text-[15px] leading-relaxed mb-3">{intro}</div>
      {isUs && (
        <figure className="mb-4 overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/leadsnipper-pricing-plans.png"
            alt="LeadSnipper cold email software pricing plans for agencies: Starter Growth and Scale with mailbox limits, monthly email volume and INR USD outbound campaign pricing"
            className="w-full h-auto"
            loading="lazy"
            width={1104}
            height={625}
          />
          <figcaption className="px-3 py-2 text-xs text-[#727785]">
            LeadSnipper cold email pricing on leadsnipper.com/pricing (captured{" "}
            {PRICES_CHECKED_LABEL}).
          </figcaption>
        </figure>
      )}
      <p className="text-sm font-semibold text-[#1e293b] mb-1">
        Price (checked {PRICES_CHECKED_LABEL}
        {t.thirdParty ? ", third-party sources noted" : ""})
      </p>
      <ul className="list-disc pl-5 text-sm text-[#475569] space-y-1 mb-3">
        {t.priceLines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <p className="text-sm text-[#475569] mb-2">
        <strong className="text-[#1e293b]">Agency features:</strong> {t.agencyFeatures}
      </p>
      <p className="text-sm text-[#475569] mb-3">
        <strong className="text-[#1e293b]">Deliverability safeguards:</strong> {t.safeguards}
      </p>
      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
          <p className="font-bold text-[#166534] mb-1 text-xs uppercase tracking-wide">Pros</p>
          <ul className="space-y-1">
            {t.pros.map((p) => (
              <li key={p} className="text-[#166534] text-sm">
                ✓ {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-3">
          <p className="font-bold text-[#991b1b] mb-1 text-xs uppercase tracking-wide">Cons</p>
          <ul className="space-y-1">
            {t.cons.map((c) => (
              <li key={c} className="text-[#991b1b] text-sm">
                ✗ {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm text-[#475569]">
        <strong className="text-[#1e293b]">Choose it if…</strong> {chooseIf}
      </p>
      {extra && <div className="text-sm text-[#475569] mt-2">{extra}</div>}
      <p className="text-xs text-[#94a3b8] mt-2">
        Source: <A href={t.website}>{t.name} pricing</A>
        {t.sources
          .filter((s) => s.url !== t.website)
          .map((s) => (
            <span key={s.url}>
              {" · "}
              <A href={s.url}>{s.label}</A>
            </span>
          ))}
      </p>
    </section>
  );
}

export interface ScenarioRow {
  tool: string;
  formula: string;
  monthly: string;
  yearly: string;
  inr: string;
  note?: string;
}

export function ScenarioTable({ rows }: { rows: ScenarioRow[] }) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl border border-[#e2e8f0]">
      <table className="min-w-[760px] w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#f1f5f9] text-[#1e293b]">
            <th className="sticky left-0 bg-[#f1f5f9] px-3 py-2 border border-[#e2e8f0]">Tool</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">Formula</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">USD / month (monthly billing)</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">USD / month (yearly billing)</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">INR / month</th>
          </tr>
        </thead>
        <tbody className="text-[#475569]">
          {rows.map((r, i) => (
            <tr key={r.tool} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
              <th
                scope="row"
                className={`sticky left-0 px-3 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b] ${
                  i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"
                }`}
              >
                {r.tool}
              </th>
              <td className="px-3 py-2 border border-[#e2e8f0]">
                {r.formula}
                {r.note && <span className="block text-xs text-[#94a3b8] mt-1">{r.note}</span>}
              </td>
              <td className="px-3 py-2 border border-[#e2e8f0]">{r.monthly}</td>
              <td className="px-3 py-2 border border-[#e2e8f0]">{r.yearly}</td>
              <td className="px-3 py-2 border border-[#e2e8f0]">{r.inr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SmartleadVsInstantlyTable() {
  return (
    <div className="overflow-x-auto mb-6 rounded-xl border border-[#e2e8f0]">
      <table className="min-w-[640px] w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-[#f1f5f9] text-[#1e293b]">
            <th className="px-3 py-2 border border-[#e2e8f0]">For agencies</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">Smartlead</th>
            <th className="px-3 py-2 border border-[#e2e8f0]">Instantly</th>
          </tr>
        </thead>
        <tbody className="text-[#475569]">
          {smartleadVsInstantlyRows.map((r, i) => (
            <tr key={r.label} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
              <th scope="row" className="px-3 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                {r.label}
              </th>
              <td className="px-3 py-2 border border-[#e2e8f0]">{r.smartlead}</td>
              <td className="px-3 py-2 border border-[#e2e8f0]">{r.instantly}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Definitions() {
  return (
    <dl className="mb-8 grid md:grid-cols-2 gap-3">
      {definitions.map((d) => (
        <div key={d.term} className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
          <dt className="font-bold text-[#1e293b] text-sm mb-1">{d.term}</dt>
          <dd className="text-sm text-[#475569]" data-speakable>
            {d.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function SafeguardsChecklist() {
  return (
    <ol className="list-decimal pl-5 space-y-3 text-[#475569] leading-relaxed mb-6">
      <li>
        <strong className="text-[#1e293b]">Per-mailbox daily caps and pacing.</strong> Each
        mailbox should have its own daily limit and a delay between sends, not just a
        campaign-wide cap. Smartlead publishes guidance of up to 50 cold emails per mailbox per
        day; treat any number as a starting point and work out your own with our{" "}
        <A href="/tools/cold-email-sending-limit-calculator">cold email sending limit calculator</A>{" "}
        and the guide on{" "}
        <A href="/blog/how-many-emails-per-day-cold-outreach">how many cold emails to send per day</A>.
      </li>
      <li>
        <strong className="text-[#1e293b]">Verify before send.</strong> Lists from lead
        databases still contain dead and risky addresses. Verify every import before it enters
        a sequence. Our{" "}
        <A href="/blog/apollo-io-data-quality-bounce-rate-2026">Apollo data quality and bounce rate guide</A>{" "}
        shows why this matters even for &quot;verified&quot; data.
      </li>
      <li>
        <strong className="text-[#1e293b]">Bounce and complaint thresholds with auto-pause.</strong>{" "}
        Ask each vendor what happens when a campaign crosses a bounce or complaint threshold. A
        tool that keeps sending until you notice will burn a client&apos;s domain.
      </li>
      <li>
        <strong className="text-[#1e293b]">Domain isolation per client.</strong> Give every
        client its own sending domains and mailboxes, so one client&apos;s list quality
        can&apos;t drag down another&apos;s reputation.
      </li>
      <li>
        <strong className="text-[#1e293b]">SPF, DKIM and DMARC on every sending domain.</strong>{" "}
        Check alignment before the first send. See our{" "}
        <A href="/blog/spf-dkim-dmarc-cold-email-guide">SPF, DKIM and DMARC guide for cold email</A>.
      </li>
    </ol>
  );
}

export function MigrationSteps({
  from,
  spintaxNote,
}: {
  from: string;
  spintaxNote?: React.ReactNode;
}) {
  return (
    <>
      <ol className="list-decimal pl-5 space-y-2 text-[#475569] leading-relaxed mb-4">
        <li>
          <strong className="text-[#1e293b]">Export</strong> contacts, sequences and any
          unsubscribe or do-not-contact lists from {from}.
        </li>
        <li>
          <strong className="text-[#1e293b]">Re-verify the list</strong> before importing.
          Addresses decay every month, and a migration is the easiest time to clean them.
        </li>
        <li>
          <strong className="text-[#1e293b]">Connect mailboxes</strong> (Google Workspace,
          Microsoft 365, Zoho or custom SMTP/IMAP) and confirm SPF, DKIM and DMARC still pass.
        </li>
        <li>
          <strong className="text-[#1e293b]">Ramp daily caps</strong> on the new tool instead
          of starting at your old volume.
        </li>
        <li>
          <strong className="text-[#1e293b]">Rebuild sequences</strong> and re-check spintax,
          variables and links.{spintaxNote ? <> {spintaxNote}</> : null}
        </li>
        <li>
          <strong className="text-[#1e293b]">Keep {from} running</strong> until the last
          in-flight sequence finishes, so no prospect gets a duplicate first touch.
        </li>
      </ol>
      <P>
        If you&apos;re moving to LeadSnipper, our setup services cover Google Workspace setup
        (DNS, SPF/DKIM/DMARC), inbox connection troubleshooting and Microsoft 365 block support.
      </P>
    </>
  );
}

export function FaqList({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="space-y-3 mb-8">
      {faqs.map((f) => (
        <div key={f.question} className="p-4 rounded-xl border border-[#e2e8f0] bg-white">
          <h3 className="font-bold text-[#1e293b] mb-1 text-[15px]">{f.question}</h3>
          <p className="text-[#475569] text-sm leading-relaxed faq-answer">{f.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function TrialCta() {
  return (
    <div className="my-8 p-6 rounded-2xl border border-[#0058be]/15 bg-[#0058be]/[0.03] text-center">
      <p className="font-bold text-[#1e293b] mb-2">Try LeadSnipper on your own mailboxes</p>
      <p className="text-sm text-[#475569] mb-4">
        14-day trial: 1,000 emails, 2 mailboxes, 1 custom domain, no card. Paid plans from $19
        (₹999) a month; see <A href="/pricing">pricing</A>.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="https://app.leadsnipper.com/signup?product=leadsnipper"
          className="btn-primary rounded-full text-sm"
        >
          Start the 14-day trial
        </Link>
        <Link href="/contact" className="btn-ghost rounded-full text-sm">
          Book an Agency Walkthrough
        </Link>
      </div>
    </div>
  );
}

export function AuthorBio() {
  return (
    <div className="mt-10 p-5 rounded-xl border border-[#e2e8f0] bg-white flex gap-4 items-start">
      <div
        className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ background: "linear-gradient(135deg, #0058be, #2170e4)" }}
      >
        RQ
      </div>
      <div className="text-sm text-[#475569]">
        <p className="font-bold text-[#1e293b]">
          {authorProfile.name}, {authorProfile.jobTitle}
        </p>
        <p>
          Rehan builds LeadSnipper, cold email software for B2B agencies. He writes these
          agency comparisons from vendor pricing pages and public product docs, with
          LeadSnipper figures from our own published plans.{" "}
          <A href={authorProfile.url}>About Rehan</A> ·{" "}
          <A href={authorProfile.linkedin}>LinkedIn</A>
        </p>
      </div>
    </div>
  );
}

export function Changelog({ entries }: { entries: Array<{ date: string; text: string }> }) {
  return (
    <div className="mt-6 text-xs text-[#727785]">
      <p className="font-semibold text-[#475569] mb-1">Changelog</p>
      <ul className="space-y-1">
        {entries.map((e) => (
          <li key={e.date + e.text}>
            <time dateTime={e.date}>{e.date}</time>: {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
