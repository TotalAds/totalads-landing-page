import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("amazon-ses-pricing-2026")!;

export default function AmazonSesPricing2026() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Amazon SES is the cheapest way to send cold email at scale — but the
        advertised $0.10 per 1,000 emails only tells part of the story. There
        are data transfer fees, dedicated IP charges, and indirect costs that
        most guides skip. This is the complete Amazon SES pricing breakdown for
        cold email outbound in 2026.
      </p>

      {/* Quick Pricing Box */}
      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 mb-8">
        <h2 className="font-bold text-[#1e40af] text-sm mb-3 uppercase tracking-wide">
          Amazon SES Pricing at a Glance (2026)
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: "Per 1,000 emails (outside EC2)", value: "$0.10" },
            { label: "Per 1,000 emails (from EC2)", value: "Free up to 62K/mo" },
            { label: "Dedicated IP address", value: "$24.95/month each" },
            { label: "Attachment data transfer", value: "$0.12 per GB" },
            { label: "Virtual Deliverability Manager", value: "$1.00 per 1,000 emails" },
            { label: "Free tier", value: "3,000 messages/day from EC2" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center p-3 bg-white rounded-lg border border-[#dbeafe] text-sm"
            >
              <span className="text-[#374151]">{item.label}</span>
              <span className="font-bold text-[#1e40af] font-mono">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Core Sending Cost: $0.10 per 1,000 Emails
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        When sending from outside EC2 (which applies to most cold email setups
        using a BYO SES connection), you pay{" "}
        <strong>$0.10 per 1,000 emails sent</strong>. That breaks down to:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Monthly Volume
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                SES Cost
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Cost per Email
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            {[
              ["10,000 emails", "$1.00", "$0.0001"],
              ["50,000 emails", "$5.00", "$0.0001"],
              ["100,000 emails", "$10.00", "$0.0001"],
              ["500,000 emails", "$50.00", "$0.0001"],
              ["1,000,000 emails", "$100.00", "$0.0001"],
            ].map(([vol, cost, per], i) => (
              <tr key={vol} className={i % 2 === 1 ? "bg-[#f8fafc]" : ""}>
                <td className="px-4 py-2 border border-[#e2e8f0]">{vol}</td>
                <td className="px-4 py-2 border border-[#e2e8f0] font-medium text-[#1e293b]">
                  {cost}
                </td>
                <td className="px-4 py-2 border border-[#e2e8f0]">{per}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-4">
        For context: sending 100,000 cold emails per month costs{" "}
        <strong>$10 in SES fees</strong>. Compare that to Instantly ($97–$358/mo
        for shared infrastructure) or Lemlist ($55–$220/mo). The infrastructure
        savings alone often pay for the cold email tool.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Free Tier: What&apos;s Included
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Amazon SES has a free tier, but it&apos;s conditional:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>From EC2 / Lambda / Elastic Beanstalk:</strong> 62,000 emails
          free per month, every month. This is the &quot;hosted app&quot; free
          tier.
        </li>
        <li>
          <strong>New AWS account trial:</strong> No separate SES free tier for
          non-EC2 sending beyond the standard $0.10/1,000 rate.
        </li>
        <li>
          <strong>Sandbox mode:</strong> Free, but you can only send to verified
          email addresses. Exit sandbox before doing cold outreach.
        </li>
      </ul>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2 text-sm">
          ⚠️ Cold Email from EC2 vs Non-EC2
        </h3>
        <p className="text-[#92400e] text-sm">
          Most BYO SES setups for cold email connect from the cold email
          platform (e.g., LeadSnipper) to your SES account via API. This is
          non-EC2, so you pay the standard $0.10/1,000 rate. If you&apos;re
          self-hosting the cold email software on an EC2 instance, you may
          qualify for the 62K free monthly emails.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Dedicated IP Addresses: $24.95/Month Each
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        By default, SES uses shared IP pools. For cold email at scale, you
        should consider{" "}
        <strong>dedicated IPs</strong> — IP addresses used exclusively by your
        account. The cost is <strong>$24.95 per dedicated IP per month</strong>.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        When do you need dedicated IPs for cold email?
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          Sending more than 50,000–100,000 emails/month consistently
        </li>
        <li>Running high-value enterprise outreach where reputation isolation matters</li>
        <li>Running a cold email agency managing multiple client domains</li>
        <li>After getting burned by shared pool IP reputation issues</li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-4">
        For most small teams sending under 50,000 emails/month, SES shared
        pools work fine. The reputation is managed at the domain level (via
        DKIM/SPF), and SES&apos;s shared pools are generally clean because AWS
        enforces strict usage policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Data Transfer and Attachment Fees
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Cold email is typically text-only (which is better for deliverability
        anyway), so data transfer costs are minimal. But if you&apos;re
        attaching PDFs or images:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Outbound data transfer:</strong> $0.12 per GB of attachment
          data sent
        </li>
        <li>
          <strong>Inbound emails:</strong> 1,000 messages free, then $0.10 per
          1,000 — relevant only if you&apos;re receiving email through SES
        </li>
      </ul>
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#166534] mb-2 text-sm">
          ✓ Best Practice: Text-Only Cold Emails
        </h3>
        <p className="text-[#166534] text-sm">
          Cold emails with heavy HTML, images, and attachments score worse for
          deliverability. Keeping emails text-only also eliminates data transfer
          costs. Win-win.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Virtual Deliverability Manager (VDM): $1.00 per 1,000 Emails
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        AWS launched Virtual Deliverability Manager (VDM) in 2022 — an
        optional add-on that provides engagement tracking, reputation insights,
        and diagnostic recommendations. According to the official{" "}
        <a
          href="https://aws.amazon.com/ses/pricing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          Amazon SES Pricing Page
        </a>
        , the cost is <strong>$1.00 per 1,000 emails</strong> on top of standard SES fees.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>Is VDM worth it for cold email?</strong> Probably not. VDM is
        primarily useful for transactional email at scale (newsletters, receipts,
        notifications). Cold email teams get better deliverability data from
        dedicated tools like LeadSnipper&apos;s{" "}
        <Link
          href="/email-deliverability"
          className="text-[#0058be] font-medium hover:underline"
        >
          domain health dashboard
        </Link>
        , which shows bounce rates, DKIM/SPF status, and open rates per domain.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        True Total Cost: SES + Cold Email Tool
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        The full cost of BYO SES cold email is the sum of:
      </p>
      <ol className="list-decimal pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>AWS SES sending fees</strong> — $0.10 per 1,000 emails
        </li>
        <li>
          <strong>Dedicated IPs (optional)</strong> — $24.95/IP/month
        </li>
        <li>
          <strong>Cold email software</strong> — e.g., LeadSnipper{" "}
          <Link
            href="/cold-email-software"
            className="text-[#0058be] font-medium hover:underline"
          >
            BYO SES Pro
          </Link>{" "}
          at ₹999/month (or Try BYO SES free)
        </li>
        <li>
          <strong>Email verification</strong> — to keep bounce rates under 2%
          (built into LeadSnipper with Reoon)
        </li>
        <li>
          <strong>Domain registration</strong> — $10–$15/year per sending domain
        </li>
      </ol>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Scenario
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Volume
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                SES Cost
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Tool Cost
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Total/Month
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            {[
              ["Solo founder", "10,000 emails", "$1", "₹999 (~$12)", "~$13"],
              ["Small team", "50,000 emails", "$5", "₹999 (~$12)", "~$17"],
              [
                "Agency (5 clients)",
                "300,000 emails",
                "$30",
                "₹999 (~$12)",
                "~$42",
              ],
              [
                "vs. Instantly Growth",
                "50,000 emails",
                "N/A",
                "$97/mo",
                "$97",
              ],
              [
                "vs. Lemlist Standard",
                "50,000 emails",
                "N/A",
                "$55/mo",
                "$55",
              ],
            ].map(([scenario, vol, ses, tool, total], i) => (
              <tr key={scenario} className={i % 2 === 1 ? "bg-[#f8fafc]" : ""}>
                <td className="px-4 py-2 border border-[#e2e8f0] font-medium">
                  {scenario}
                </td>
                <td className="px-4 py-2 border border-[#e2e8f0]">{vol}</td>
                <td className="px-4 py-2 border border-[#e2e8f0]">{ses}</td>
                <td className="px-4 py-2 border border-[#e2e8f0]">{tool}</td>
                <td className="px-4 py-2 border border-[#e2e8f0] font-bold text-[#1e293b]">
                  {total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-4">
        At 50,000 emails/month, BYO SES on LeadSnipper costs roughly{" "}
        <strong>$17/month all-in</strong> vs $55–$97/month for tools on shared
        infrastructure. The savings compound fast at scale.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to Get Production SES Access (Exit Sandbox)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        New SES accounts start in sandbox mode — you can only send to verified
        recipients. To do cold outreach, you need to exit sandbox:
      </p>
      <ol className="list-decimal pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          Go to AWS Console → Amazon SES → Account Dashboard
        </li>
        <li>Click &quot;Request production access&quot;</li>
        <li>
          Describe your use case — be specific and honest about cold outreach
        </li>
        <li>
          Explain your list hygiene practices (verification, opt-out handling)
        </li>
        <li>AWS typically approves within 24–48 hours</li>
      </ol>
      <p className="text-[#475569] leading-relaxed mb-4">
        See our complete step-by-step walkthrough:{" "}
        <Link
          href="/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step"
          className="text-[#0058be] font-medium hover:underline"
        >
          How to Set Up AWS SES for Cold Email
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Amazon SES vs Shared Infrastructure: The Real Trade-off
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        The cost difference is clear. But the bigger advantage of BYO SES
        isn&apos;t price — it&apos;s{" "}
        <strong>reputation isolation</strong>. On shared infrastructure, you
        share IP and sometimes sending domain reputation with thousands of other
        users. One bad actor can affect your deliverability.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        With BYO AWS SES, your sending reputation is{" "}
        <strong>entirely yours</strong>. Your bounce rates, complaint rates, and
        domain health affect only your account — not anyone else&apos;s. Read
        the full comparison:{" "}
        <Link
          href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          BYO AWS SES vs Shared Email Infrastructure
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
