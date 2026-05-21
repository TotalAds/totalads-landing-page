import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost(
  "email-list-cleaning-why-verification-prevents-bounce-disasters"
)!;

export default function EmailListCleaning() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Here&apos;s a story that happens more often than it should: an agency
        uploaded 10,000 unverified leads to their cold email tool and hit send.
        Bounce rate hit 15% in the first hour. The domain was blacklisted
        within 24 hours. It took two weeks to recover — and three other
        campaigns that were lined up got delayed. Unverified sends are the
        fastest way to destroy your{" "}
        <Link href="/blog/domain-reputation-management-protect-sender-score" className="text-[#3b82f6] font-medium hover:underline">sender score</Link>.
        {" "}This guide explains why email
        list cleaning isn&apos;t optional, what verification actually catches,
        and how to do it right every time.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Real Story: What Happens When You Skip Verification
      </h2>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <p className="text-[#475569] leading-relaxed mb-4">
          This happened to a client before they switched to LeadSnipper. The
          agency was managing cold outreach for a B2B SaaS company. They had a
          list of 10,000 leads from a data provider. The list looked clean in a
          spreadsheet — proper formatting, company emails, no obvious junk.
        </p>
        <div className="space-y-3 text-[#475569]">
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Hour 1:</span>
            <span>
              Campaign starts sending. Within 60 minutes, bounce rate hits 15%.
              AWS SES begins throttling sends.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Hour 4:</span>
            <span>
              Complaint rate spikes as spam traps are triggered. Spam reports
              start flowing in from the non-bounced recipients who didn&apos;t
              expect the email.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Day 1:</span>
            <span>
              Domain gets listed on Spamhaus. AWS SES sends a warning about
              account review.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Day 2-3:</span>
            <span>
              All sending paused. Other campaigns for other clients on the same
              domain are dead in the water.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Week 1-2:</span>
            <span>
              Recovery process: blacklist removal requests, reputation
              rebuilding, re-warming the domain from scratch.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-bold">Total cost:</span>
            <span>
              3 other campaigns delayed. 2 weeks of lost revenue. Client
              relationship strained. Domain reputation took a month to fully
              recover.
            </span>
          </div>
        </div>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        All of this was preventable with a 20-minute email verification step
        before hitting send. After this incident, the agency made verification
        non-negotiable — and eventually switched to LeadSnipper, where
        verification is built into the flow and can&apos;t be skipped. They also
        followed our{" "}
        <Link href="/blog/email-warmup-verification-domain-health-complete-guide" className="text-[#3b82f6] font-medium hover:underline">domain warmup and health monitoring guide</Link>{" "}
        to rebuild trust.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What Email Verification Actually Does
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Email verification isn&apos;t just &quot;checking if an email
        exists.&quot; A good verification service performs multiple checks on
        every address in your list:
      </p>
      <div className="space-y-3 mb-6">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Syntax Validation
          </h3>
          <p className="text-[#475569] text-sm">
            Catches formatting errors, typos, and malformed addresses.
            john@@company.com, john@company..com, john@company — all invalid.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Domain Verification
          </h3>
          <p className="text-[#475569] text-sm">
            Checks if the domain exists, has valid MX records, and can
            actually receive email. Catches domains that have been
            decommissioned or parked.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Mailbox Verification
          </h3>
          <p className="text-[#475569] text-sm">
            Connects to the mail server and checks if the specific mailbox
            exists — without actually sending an email. This catches addresses
            where the person has left the company or the account was deleted.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Disposable Email Detection
          </h3>
          <p className="text-[#475569] text-sm">
            Identifies temporary/throwaway email services (Guerrilla Mail,
            Tempmail, etc.). These addresses expire quickly and will
            bounce.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Spam Trap Detection
          </h3>
          <p className="text-[#475569] text-sm">
            Identifies known spam trap addresses maintained by blacklist
            operators. Hitting even one spam trap can get your domain
            blacklisted immediately.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Catch-All Detection
          </h3>
          <p className="text-[#475569] text-sm">
            Identifies domains configured to accept all incoming email
            regardless of the address. Catch-all domains might silently discard
            your email — they won&apos;t bounce, but they won&apos;t deliver
            either.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-1 text-sm">
            Role-Based Address Detection
          </h3>
          <p className="text-[#475569] text-sm">
            Flags addresses like info@, admin@, support@, sales@. These are
            read by multiple people (or nobody), rarely convert, and often
            generate complaints.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bounce Rate Thresholds: The Numbers That Matter
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Different email providers and services have different thresholds for
        what they consider acceptable bounce rates:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-[#475569] border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead className="bg-[#f8fafc]">
            <tr>
              <th className="text-left p-3 font-bold text-[#1e293b] border-b border-[#e2e8f0]">
                Provider / Service
              </th>
              <th className="text-left p-3 font-bold text-[#1e293b] border-b border-[#e2e8f0]">
                Bounce Rate Warning
              </th>
              <th className="text-left p-3 font-bold text-[#1e293b] border-b border-[#e2e8f0]">
                Action Taken
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f0f0f0]">
              <td className="p-3 font-medium">AWS SES</td>
              <td className="p-3">5% bounce rate</td>
              <td className="p-3">
                Probation → sending paused → account review
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
              <td className="p-3 font-medium">Gmail</td>
              <td className="p-3">2-3% bounce rate</td>
              <td className="p-3">Increased spam filtering → throttling</td>
            </tr>
            <tr className="border-b border-[#f0f0f0]">
              <td className="p-3 font-medium">Outlook/Microsoft</td>
              <td className="p-3">2-5% bounce rate</td>
              <td className="p-3">
                Junk folder placement → IP/domain blocking
              </td>
            </tr>
            <tr className="bg-[#fafafa]">
              <td className="p-3 font-medium">Industry best practice</td>
              <td className="p-3 font-bold text-[#22c55e]">Under 2%</td>
              <td className="p-3">Healthy sender reputation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        The agency in our story hit 15% — three times the threshold that
        triggers AWS SES probation and five times what Gmail considers
        suspicious. With verification, that list of 10,000 leads would have
        been cleaned to ~8,200 valid addresses with a projected bounce rate
        under 1%.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        When to Verify Your Email List
      </h2>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-[#475569]">
          <li>
            <strong>Before every campaign</strong> — email addresses decay at
            2-3% per month. A list that was clean 90 days ago has 6-9% decay.
          </li>
          <li>
            <strong>When you buy or receive a new list</strong> — data
            providers&apos; lists are never as clean as they claim. Always
            verify independently.
          </li>
          <li>
            <strong>After scraping or enrichment</strong> — scraped data has
            higher rates of invalid and temporary addresses.
          </li>
          <li>
            <strong>When switching email tools</strong> — export your list,
            re-verify, then import to the new tool. Don&apos;t trust the old
            tool&apos;s validation.
          </li>
          <li>
            <strong>Every 30 days for ongoing lists</strong> — if you maintain
            a master prospect list, re-verify monthly to catch new invalids.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Built-In vs External Verification: Why It Matters
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Most cold email senders use separate verification services — upload
        your list to the verification tool, download the clean file, re-upload
        to your sending platform. This workflow has problems:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          Extra steps mean it&apos;s easy to skip when you&apos;re in a rush
        </li>
        <li>
          You&apos;re paying for a separate subscription ($20-50/month for
          verification alone)
        </li>
        <li>
          The clean list can get mixed up with the unclean version during
          re-upload
        </li>
        <li>No enforcement — you can always &quot;forget&quot; to verify</li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-6">
        LeadSnipper has <strong>Reoon email verification built directly
        into the lead upload flow</strong>. When you upload a CSV or add leads,
        verification runs as part of the process. Unverified leads are flagged
        and can&apos;t be sent to until they pass. There&apos;s no separate
        tool, no extra subscription, and no way to accidentally skip it.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to Handle Verification Results
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        After verification, your leads will be categorized. Here&apos;s how to
        handle each category:
      </p>
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3 bg-[#f0fdf4] border border-[#22c55e]/20 rounded-xl p-4">
          <span className="text-[#22c55e] font-bold text-lg">&#10003;</span>
          <div>
            <h4 className="font-bold text-[#1e293b] text-sm">
              Valid — Send confidently
            </h4>
            <p className="text-[#475569] text-sm">
              The mailbox exists, accepts email, and is not a known risk. These
              are your send-ready leads.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#fffbeb] border border-[#f59e0b]/20 rounded-xl p-4">
          <span className="text-[#f59e0b] font-bold text-lg">!</span>
          <div>
            <h4 className="font-bold text-[#1e293b] text-sm">
              Risky / Catch-all — Send with caution
            </h4>
            <p className="text-[#475569] text-sm">
              The domain accepts all addresses, so we can&apos;t confirm the
              specific mailbox exists. Send in small batches and monitor bounce
              rates closely.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <span className="text-red-500 font-bold text-lg">&#10005;</span>
          <div>
            <h4 className="font-bold text-[#1e293b] text-sm">
              Invalid / Disposable / Trap — Remove immediately
            </h4>
            <p className="text-[#475569] text-sm">
              These will bounce, expire, or damage your reputation. Never send
              to these under any circumstances.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4">
          <span className="text-[#64748b] font-bold text-lg">~</span>
          <div>
            <h4 className="font-bold text-[#1e293b] text-sm">
              Role-based (info@, admin@) — Skip for cold email
            </h4>
            <p className="text-[#475569] text-sm">
              These rarely convert in cold outreach and often generate
              complaints. Save them for other channels.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Email List Cleaning Checklist
      </h2>
      <div className="bg-gradient-to-r from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-[#475569]">
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Run full verification on every list before sending (not just
            syntax checks)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Remove all invalid, disposable, and spam trap addresses
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Remove or quarantine role-based addresses (info@, admin@, support@)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Flag catch-all domains — send in small batches with monitoring
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            De-duplicate against your suppression list (bounces, complaints,
            unsubscribes)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Re-verify lists older than 30 days before reuse
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Target bounce rate under 2% after verification
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Use a tool with built-in verification to prevent human error
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom Line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Email list cleaning isn&apos;t a nice-to-have — it&apos;s the
        difference between a successful cold email campaign and a blacklisted
        domain. Every unverified send is a gamble with your sender reputation,
        and the stakes get higher as you scale. If your open rates are already
        dropping, our{" "}
        <Link href="/blog/cold-email-open-rate-dropping-fix-domain-reputation" className="text-[#3b82f6] font-medium hover:underline">open rate diagnostic guide</Link>{" "}
        can help you recover.
      </p>
      <p className="text-[#475569] leading-relaxed">
        LeadSnipper makes verification non-negotiable by building Reoon
        verification directly into the lead upload flow. Combined with BYO
        AWS SES for infrastructure ownership, domain health monitoring, and
        intelligent warmup, it&apos;s the deliverability stack that protects
        your campaigns from bounce disasters.{" "}
        <Link
          href="https://app.leadsnipper.com/signup"
          className="text-[#3b82f6] font-semibold hover:underline"
        >
          Start a free trial
        </Link>{" "}
        and see what it&apos;s like when verification is built in, not bolted
        on.
      </p>
    </BlogLayout>
  );
}
