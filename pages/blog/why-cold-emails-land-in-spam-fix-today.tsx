import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("why-cold-emails-land-in-spam-fix-today")!;

export default function ColdEmailsInSpam() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        You wrote the perfect email. Compelling subject line, clear value
        proposition, strong call-to-action. You hit send on 500 emails and wait
        for replies. Three days later: 2% open rate, zero replies, and your
        colleague tells you the test email you sent them went straight to spam.
        What happened?
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Cold emails land in spam for five specific reasons. Most senders blame
        their copy, but 90% of deliverability problems have nothing to do with
        what you wrote. Here are the actual causes — and how to fix each one
        today.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Reason 1: Your Domain Has No Reputation (Or a Bad One)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        New domains have neutral reputation. If you start sending 500 cold
        emails per day on day one, mailbox providers see a brand new domain
        suddenly blasting unsolicited email. That&apos;s the pattern spammers
        use. Your emails go to spam not because they&apos;re bad, but because
        your domain has no established trust.
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2">The Fix: Warmup First</h3>
        <p className="text-[#92400e] text-sm mb-3">
          Every new domain needs 2-4 weeks of warmup before cold outreach.
          Start with 10-20 emails per day to engaged recipients (colleagues,
          partners, existing contacts). Gradually increase volume by 10-20%
          daily. LeadSnipper&apos;s warmup tool automates this with daily pacing
          tied to your actual domain.
        </p>
        <div className="text-xs font-mono text-[#92400e] bg-white/50 rounded p-2">
          Week 1: 10-20 emails/day → Week 2: 30-50 emails/day → Week 3: 80-150
          emails/day → Week 4: 200-500 emails/day
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Reason 2: Your DNS Records Are Missing or Wrong
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        SPF, DKIM, and DMARC aren&apos;t optional technical extras — they&apos;re
        how mailbox providers verify you are who you say you are. Missing DNS
        records are an instant spam flag. Misconfigured records are worse (they
        look like spoofing attempts).
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2">The Fix: Audit Your DNS</h3>
        <p className="text-[#92400e] text-sm mb-3">
          Check your domain with a DNS lookup tool. You need:
        </p>
        <ul className="text-[#92400e] text-sm space-y-1 mb-3">
          <li>• SPF record listing your sending IPs</li>
          <li>• DKIM signature properly configured</li>
          <li>• DMARC policy (start with p=none, monitor, then move to p=quarantine)</li>
        </ul>
        <p className="text-[#92400e] text-sm">
          LeadSnipper&apos;s domain health dashboard checks all three and flags
          issues before you send. Fix DNS first, then launch campaigns.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Reason 3: Your Bounce Rate is Too High
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Invalid email addresses are poison to your sender reputation. Every
        bounce tells mailbox providers you don&apos;t know who you&apos;re
        emailing — a classic spammer trait. Bounce rates above 5% will land you
        in spam folders. Above 10% and you risk blacklisting.
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2">The Fix: Verify Before Sending</h3>
        <p className="text-[#92400e] text-sm mb-3">
          Never send to unverified lists. Run your list through verification
          before the first email goes out. Remove:
        </p>
        <ul className="text-[#92400e] text-sm space-y-1 mb-3">
          <li>• Invalid addresses (hard bounces)</li>
          <li>• Catch-all domains (high risk, low engagement)</li>
          <li>• Role emails (info@, support@, admin@)</li>
          <li>• Known spam traps</li>
        </ul>
        <p className="text-[#92400e] text-sm">
          LeadSnipper has Reoon verification built in. Upload, verify, send
          only to valid addresses. Your bounce rate stays under 1%.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Reason 4: You&apos;re Sending Too Fast
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Mailbox providers watch sending velocity. 500 emails in 5 minutes from a
        new domain triggers spam filters immediately. Even with good content and
        clean lists, unnatural sending patterns get flagged.
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2">The Fix: Pace Your Sending</h3>
        <p className="text-[#92400e] text-sm mb-3">Spread campaigns across time:</p>
        <ul className="text-[#92400e] text-sm space-y-1 mb-3">
          <li>• 50-100 emails per hour max per domain</li>
          <li>• Randomize send times (don&apos;t blast at exactly :00)</li>
          <li>• Space emails 30-120 seconds apart</li>
          <li>• Use multiple domains for volume (rotate, don&apos;t concentrate)</li>
        </ul>
        <p className="text-[#92400e] text-sm">
          LeadSnipper&apos;s multi-day sending automatically paces campaigns.
          Set your total volume, choose the timeframe, and the system spaces
          sends naturally.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Reason 5: Your Content Triggers Spam Filters
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Even with perfect setup, spammy content gets flagged. Certain words,
        formatting, and link patterns trigger filters regardless of your domain
        reputation.
      </p>
      <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-[#92400e] mb-2">The Fix: Clean Your Copy</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-[#92400e] mb-2">Avoid These:</p>
            <ul className="text-[#92400e] space-y-1">
              <li>• ALL CAPS words</li>
              <li>• Multiple exclamation marks!!!</li>
              <li>• &quot;Free&quot;, &quot;Guaranteed&quot;, &quot;No obligation&quot;</li>
              <li>• Dollar signs and excessive numbers</li>
              <li>• Shortened URLs (bit.ly, etc.)</li>
              <li>• Image-only emails</li>
              <li>• Too many links (more than 2-3)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#92400e] mb-2">Do These Instead:</p>
            <ul className="text-[#92400e] space-y-1">
              <li>• Plain text preference</li>
              <li>• One clear CTA</li>
              <li>• Full domain URLs (yoursite.com/page)</li>
              <li>• Personalization beyond first name</li>
              <li>• 50-125 words (shorter converts better)</li>
              <li>• Plain signature, no images</li>
              <li>• Test with spam checker before sending</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Quick Diagnostic Checklist
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Run through this list before your next campaign. One missing item can
        torpedo deliverability:
      </p>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-4 text-sm text-[#475569]">
          <div className="space-y-2">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>Domain is 30+ days old OR properly warmed up</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>SPF record configured and valid</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>DKIM signature working</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>DMARC policy in place</span>
            </label>
          </div>
          <div className="space-y-2">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>List verified, bounce rate expected under 2%</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>Sending pace under 100/hour per domain</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>Content checked for spam triggers</span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" readOnly />
              <span>Test email sent to Gmail + Outlook, landed in inbox</span>
            </label>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        If You&apos;re Already in Spam
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Domain reputation can be repaired, but it takes time. Here&apos;s the
        recovery protocol:
      </p>
      <ol className="list-decimal pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Stop all cold email immediately.</strong> Continuing to send
          digs the hole deeper.
        </li>
        <li>
          <strong>Fix the underlying issue.</strong> DNS, list quality, or
          sending pattern — identify and correct.
        </li>
        <li>
          <strong>Start a 2-week warmup period.</strong> Only send to engaged
          recipients who will open and reply.
        </li>
        <li>
          <strong>Monitor domain health daily.</strong> Use Google Postmaster
          Tools and your platform&apos;s dashboard.
        </li>
        <li>
          <strong>Gradually reintroduce cold volume.</strong> Start at 10% of
          previous volume, increase slowly.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Bottom Line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Spam folder placement is rarely about your offer or copy. It&apos;s
        almost always technical: domain reputation, DNS configuration, list
        quality, sending behavior. Fix these five areas and your open rates will
        jump from 2% to 40%+ within two weeks.
      </p>
      <p className="text-[#475569] leading-relaxed">
        LeadSnipper was built specifically to prevent these problems. Built-in
        verification keeps bounce rates low. Domain health monitoring catches
        DNS issues. Intelligent warmup paces your sending. And BYO AWS SES means
        you own your reputation, not share it with random senders.{" "}
        <Link
          href="https://app.leadsnipper.com/signup"
          className="text-[#3b82f6] font-semibold hover:underline"
        >
          Start with 1,000 free emails
        </Link>{" "}
        and see the deliverability difference when the fundamentals are right.
      </p>
    </BlogLayout>
  );
}
