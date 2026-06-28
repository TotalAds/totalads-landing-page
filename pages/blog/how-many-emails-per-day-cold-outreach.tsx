import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("how-many-emails-per-day-cold-outreach")!;

export default function HowManyEmailsPerDay() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        &quot;How many emails can I send per day per domain?&quot; is the most
        Googled cold email question — and the wrong answer costs you your domain.
        Send too few and you leave pipeline on the table. Send too many too fast
        and mailbox providers flag you as a spammer. Here is the data-backed
        answer, broken down by domain age, warmup stage, and infrastructure.
      </p>

      {/* Quick Answer Box */}
      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 mb-8">
        <h2 className="font-bold text-[#1e40af] text-sm mb-2 uppercase tracking-wide">
          Quick Answer
        </h2>
        <ul className="space-y-2 text-sm text-[#1e3a5f]">
          <li>
            <strong>Week 1–2 (new domain):</strong> 10–30 emails/day — warmup
            only, no cold outreach
          </li>
          <li>
            <strong>Week 3–4 (warming domain):</strong> 30–80 emails/day — mix
            in cold to verified contacts
          </li>
          <li>
            <strong>Month 2+ (established domain):</strong> 50–150 emails/day —
            sustainable cold outreach volume
          </li>
          <li>
            <strong>Multi-domain scaled outbound:</strong> 500–3,000+
            emails/day across 5–20 domains
          </li>
          <li>
            <strong>BYO AWS SES:</strong> Up to 50,000+/day after production
            access — limited by SES quota, not the tool
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Why &quot;How Many Emails Per Day&quot; Is the Wrong Question Alone
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        The number that matters isn&apos;t just <em>how many</em> — it&apos;s
        how many <strong>relative to your domain&apos;s current reputation</strong>.
        A domain with 6 months of clean sending history can sustain 150
        emails/day. A brand-new domain sending 50 emails on day one can trigger
        spam filters. The absolute volume is irrelevant without context.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        Mailbox providers (Google, Microsoft, Yahoo) evaluate three signals to
        decide if your volume is suspicious:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Domain age</strong> — how long has this domain been sending
          email?
        </li>
        <li>
          <strong>Sender reputation</strong> — what are your historical open
          rates, bounce rates, and spam complaint rates?
        </li>
        <li>
          <strong>Sending velocity</strong> — did volume suddenly spike, or has
          it grown gradually?
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        New Domain: Week 1–2 (10–30 emails/day)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>10–30 emails per domain per day.</strong> In the first two
        weeks, your goal is building reputation — not sending cold outreach.
        Focus entirely on{" "}
        <Link
          href="/email-warmup"
          className="text-[#0058be] font-medium hover:underline"
        >
          email warmup
        </Link>{" "}
        with real engaged recipients: colleagues, existing customers, and warmup
        pool partners.
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2 text-sm">
          ⚠️ Do Not Skip Warmup
        </h3>
        <p className="text-[#92400e] text-sm">
          Sending cold outreach in week 1 on a new domain is one of the fastest
          ways to get your domain blacklisted. Even 30 cold emails to unverified
          contacts on a brand-new domain can tank your sender score permanently.
          Warmup first, always.
        </p>
      </div>
      <p className="text-[#475569] leading-relaxed mb-4">
        A proper warmup schedule in week 1–2 looks like this:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Day
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Target Volume
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">Day 1–2</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">10–15</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Warmup only (known contacts)
              </td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0]">Day 3–5</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">15–20</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Warmup only
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">Day 6–10</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">20–30</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Warmup only
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Warming Domain: Week 3–4 (30–80 emails/day)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>30–80 emails per domain per day.</strong> Start mixing in cold
        outreach to{" "}
        <strong>verified contacts only</strong>. Unverified lists at this stage
        will destroy the reputation you just spent two weeks building. Use{" "}
        <Link
          href="/email-deliverability"
          className="text-[#0058be] font-medium hover:underline"
        >
          deliverability monitoring
        </Link>{" "}
        to watch bounce rates daily.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Key thresholds to watch in weeks 3–4:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Bounce rate over 3%</strong> → Pause immediately, clean your
          list
        </li>
        <li>
          <strong>Spam complaint rate over 0.1%</strong> → Stop and audit your
          targeting
        </li>
        <li>
          <strong>Open rate under 10%</strong> → Deliverability problem, check
          DNS records
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Established Domain: Month 2+ (50–150 emails/day)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>50–150 emails per domain per day.</strong> With good reputation
        (open rates above 15%, bounce rate under 2%, complaint rate under
        0.08%), you can sustain this volume indefinitely. This is the
        &quot;steady state&quot; that most professional outbound teams operate
        at per domain.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        At this stage, the lever for volume isn&apos;t pushing one domain
        harder — it&apos;s{" "}
        <strong>adding more domains</strong> and rotating sends across them.
        Each domain maintains its own reputation and warmup schedule
        independently.
      </p>
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#166534] mb-2 text-sm">
          ✓ Signs Your Domain Is Established
        </h3>
        <ul className="space-y-1.5 text-[#166534] text-sm">
          <li>• Open rate consistently above 15%</li>
          <li>• Bounce rate under 2%</li>
          <li>• Spam complaint rate under 0.08%</li>
          <li>• Google Postmaster shows &quot;High&quot; domain reputation</li>
          <li>• DKIM, SPF, DMARC all passing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Scaled Outbound: Multiple Domains (500–3,000+/day)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>500–3,000+ emails per day across 5–20 domains.</strong> This is
        how serious outbound teams operate. Instead of pushing one domain to its
        limits, they rotate sends across multiple warmed domains — each running
        50–150 emails/day. The result is high total volume with low per-domain
        risk.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Domains
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Emails/Domain/Day
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Total Daily Volume
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">3 domains</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">100</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">300/day</td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0]">5 domains</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">100</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">500/day</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                10 domains
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">150</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">1,500/day</td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0]">
                20 domains
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">150</td>
              <td className="px-4 py-2 border border-[#e2e8f0]">3,000/day</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-4">
        See how agencies and outbound teams structure this in our guide:{" "}
        <Link
          href="/blog/how-to-send-cold-emails-at-scale-without-getting-blacklisted"
          className="text-[#0058be] font-medium hover:underline"
        >
          How to Send Cold Emails at Scale Without Getting Blacklisted
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        AWS SES Limits for Cold Outreach
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        With BYO AWS SES, your sending limit is your{" "}
        <strong>SES production quota</strong> — not a cap set by the cold email
        tool. Here&apos;s how SES limits work:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>SES Sandbox:</strong> 200 emails/day, 1 email/second.
          Verified recipients only. Not suitable for cold outreach.
        </li>
        <li>
          <strong>SES Production (after sandbox exit):</strong> Starts at
          50,000 emails/day and can be increased via AWS support ticket.
        </li>
        <li>
          <strong>Sending rate:</strong> Typically 14 emails/second at
          production, can be increased on request.
        </li>
        <li>
          <strong>Cost:</strong> $0.10 per 1,000 emails when sending outside
          EC2 (see our full{" "}
          <Link
            href="/blog/amazon-ses-pricing-2026"
            className="text-[#0058be] font-medium hover:underline"
          >
            Amazon SES pricing breakdown
          </Link>
          ).
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-6">
        LeadSnipper&apos;s BYO SES plans don&apos;t cap sends below your AWS
        limits. You own the infrastructure, so you set the ceiling. See our{" "}
        <Link
          href="/cold-email-infrastructure"
          className="text-[#0058be] font-medium hover:underline"
        >
          cold email infrastructure guide
        </Link>{" "}
        for setup details.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The 5 Biggest Mistakes That Force You to Send Less
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Most outbound teams don&apos;t hit their volume targets because of
        self-inflicted deliverability damage. Here are the five mistakes that
        force you to throttle down:
      </p>
      <div className="space-y-4 mb-6">
        {[
          {
            num: "01",
            title: "Skipping list verification",
            body:
              "Sending to unverified lists causes bounces above 3%, which tanks your reputation faster than any other mistake. Verify every list before it touches a domain.",
          },
          {
            num: "02",
            title: "Not warming new domains",
            body:
              "New domain + 200 cold emails on day 1 = blacklisted domain by day 3. Warmup isn't optional — it's the price of entry.",
          },
          {
            num: "03",
            title: "Sending the same template at high volume",
            body:
              "Google's spam filters detect identical email patterns at scale. Rotate subjects, vary openers, and use spintax to keep content unique.",
          },
          {
            num: "04",
            title: "Missing DKIM, SPF, or DMARC",
            body:
              "Missing DNS records cause immediate spam folder placement. Check your authentication records before sending a single email.",
          },
          {
            num: "05",
            title: "Ignoring bounce rate signals",
            body:
              "A 5% bounce rate on day 1 of a new campaign is a stop-everything emergency. Most senders ignore it and wonder why their domain is on a blacklist a week later.",
          },
        ].map((item) => (
          <div
            key={item.num}
            className="flex gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-white"
          >
            <span className="text-2xl font-bold text-[#cbd5e1] font-mono w-8 flex-shrink-0">
              {item.num}
            </span>
            <div>
              <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
                {item.title}
              </h3>
              <p className="text-[#475569] text-sm">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Daily Volume Cheat Sheet
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Stage
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Daily Volume / Domain
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Cold Outreach?
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Monitor
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                Week 1–2
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">10–30</td>
              <td className="px-4 py-2 border border-[#e2e8f0] text-[#ef4444]">
                ✗ No
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Open rates
              </td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                Week 3–4
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">30–80</td>
              <td className="px-4 py-2 border border-[#e2e8f0] text-[#f59e0b]">
                ~ Limited
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Bounce rate
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                Month 2+
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">50–150</td>
              <td className="px-4 py-2 border border-[#e2e8f0] text-[#22c55e]">
                ✓ Yes
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Complaints + bounces
              </td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                Multi-domain
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                100–150 per domain
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0] text-[#22c55e]">
                ✓ Yes
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Per-domain health
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                BYO AWS SES
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Up to 50,000+
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0] text-[#22c55e]">
                ✓ Yes
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                SES quotas + domain rep
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What Tools Like Instantly, Smartlead, and LeadSnipper Allow
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Most cold email tools on{" "}
        <strong>shared sending infrastructure</strong> impose their own per-day
        caps — typically 200–1,000 emails/day across all your mailboxes
        combined. When you share infrastructure with thousands of other users,
        one bad actor can burn the IP pool that your campaigns depend on.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        With{" "}
        <Link
          href="/cold-email-software"
          className="text-[#0058be] font-medium hover:underline"
        >
          LeadSnipper&apos;s BYO AWS SES
        </Link>
        , you connect your own Amazon SES account. Sends go out from your AWS
        account, under your domain reputation. The only cap is your own SES
        quota — not an arbitrary tool limit. Compare this to the shared-pool
        approach in our{" "}
        <Link
          href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          BYO SES vs shared infrastructure guide
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom Line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        The safe daily send limits per domain are:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-8">
        <li>
          <strong>New domain (week 1–2):</strong> 10–30/day, warmup only
        </li>
        <li>
          <strong>Warming domain (week 3–4):</strong> 30–80/day, verified
          contacts only
        </li>
        <li>
          <strong>Established domain (month 2+):</strong> 50–150/day sustained
        </li>
        <li>
          <strong>Scale:</strong> Add domains, not pressure — rotate across 5–20
          domains for 500–3,000+/day total
        </li>
        <li>
          <strong>BYO AWS SES:</strong> Uncapped by the tool, limited only by
          your SES production quota
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        The companies that run effective cold outreach at scale don&apos;t push
        one domain to its limits. They build a portfolio of healthy domains,
        each running at a safe pace, all monitored from a single deliverability
        dashboard.
      </p>
    </BlogLayout>
  );
}
