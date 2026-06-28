import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("outbound-stack-20-meetings-per-month")!;

export default function OutboundStack20Meetings() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        20 qualified meetings per month is the benchmark most B2B teams aim for.
        Not 20 &quot;let me think about it&quot; calls — 20 genuine conversations
        with prospects who have a real problem you can solve. This guide covers
        the complete outbound stack — from{" "}
        <Link href="/blog/how-to-send-cold-emails-at-scale-without-getting-blacklisted" className="text-[#3b82f6] font-medium hover:underline">cold email infrastructure</Link>{" "}
        to copy to follow-up cadences —
        with real numbers from teams that hit this target consistently.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        This is the exact outbound stack we use to consistently book 20+
        qualified meetings per month. No theory. No &quot;it depends.&quot; These
        are the tools, processes, and numbers that actually drive our pipeline.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Numbers That Matter
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Before the stack, here&apos;s what 20+ meetings per month actually looks
        like in raw activity:
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-[#3b82f6] mb-1">8,000</div>
          <div className="text-sm text-[#475569]">Emails sent per month</div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-[#3b82f6] mb-1">42%</div>
          <div className="text-sm text-[#475569]">Average open rate</div>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-[#3b82f6] mb-1">3.2%</div>
          <div className="text-sm text-[#475569]">Meeting booking rate</div>
        </div>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        Those aren&apos;t exceptional numbers. They&apos;re solid, repeatable, and
        achievable. The magic isn&apos;t in exceptional performance — it&apos;s
        in doing the fundamentals consistently at scale.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Stack Layer 1: Infrastructure (The Foundation)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Your infrastructure determines whether your emails reach the inbox.
        Everything else is irrelevant if deliverability fails.
      </p>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Domain Strategy
      </h3>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>
          <strong>4 sending domains</strong> — Each domain handles 2,000 emails
          per month max. We rotate to spread volume and protect reputation.
        </li>
        <li>
          <strong>Aged 60+ days</strong> — No domain sends cold email younger
          than 2 months. Warmup happens on a separate schedule before any
          prospecting begins.
        </li>
        <li>
          <strong>Variant naming</strong> — try[company].com, get[company].com,
          [company]app.com, [company]hq.com. Avoid obvious patterns that look
          like throwaways.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        DNS & Authentication
      </h3>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>
          <strong>SPF, DKIM, DMARC on every domain</strong> — Non-negotiable.
          Checked weekly via automated monitoring.
        </li>
        <li>
          <strong>Custom tracking domains</strong> — Never use the platform&apos;s
          shared tracking URL. Always set up your own.
        </li>
        <li>
          <strong>Google Postmaster Tools</strong> — Monitored daily for domain
          reputation, spam rate, and delivery errors.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Sending Infrastructure
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        We use LeadSnipper with BYO AWS SES. Why? Control and cost. Our SES
        costs roughly $0.80 per month for 8,000 emails. Shared infrastructure
        tools charge 20-50x that amount baked into their subscription. Follow
        our{" "}
        <Link href="/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step" className="text-[#3b82f6] font-medium hover:underline">step-by-step AWS SES setup guide</Link>{" "}
        to get started.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        Domains need 2-4 weeks of{" "}
        <Link href="/blog/email-warmup-verification-domain-health-complete-guide" className="text-[#3b82f6] font-medium hover:underline">email warmup</Link>{" "}
        before they can send campaign volume. Start with 10-20
        emails/day, gradually increase to 200-500/day. LeadSnipper&apos;s
        warmup engine generates realistic threads across Gmail, Outlook, Yahoo,
        Zoho, and SES to build genuine engagement signals.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Stack Layer 2: List Building (The Input Quality)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Garbage in, garbage out. We spend more time on list quality than on
        copy because it matters more.
      </p>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Sourcing Method
      </h3>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>
          <strong>Apollo.io</strong> — Primary source for B2B contacts with
          direct dials and verified emails.
        </li>
        <li>
          <strong>LinkedIn Sales Navigator</strong> — For targeted account
          research and finding decision-makers in specific roles.
        </li>
        <li>
          <strong>Website scraping</strong> — For niche industries where database
          coverage is weak. Custom scrapers built for specific verticals.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Filtering Criteria
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Before any email enters our system, it passes these filters:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>Company size: 10-200 employees (our sweet spot)</li>
        <li>Role: Director level or above for our offering</li>
        <li>Industry: SaaS, agencies, consultancies, professional services</li>
        <li>Location: India primary, US/UK secondary</li>
        <li>Recent activity: Company has posted new jobs or funding news in 90 days</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Verification Workflow
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Every list runs through Reoon verification before sending. We remove:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>Invalid addresses (hard bounces)</li>
        <li>Catch-all domains (unless the target is high-value)</li>
        <li>Role-based emails (info@, support@, etc.)</li>
        <li>Free providers for enterprise targeting (Gmail for Fortune 500 = red flag)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Stack Layer 3: Messaging (The Conversion Engine)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        We run 3-5 active sequences at any time, testing variants continuously.
        Here&apos;s the structure that consistently works:
      </p>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Sequence Structure
      </h3>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5 mb-6">
        <div className="space-y-4 text-sm">
          <div className="flex gap-4">
            <div className="w-20 font-mono text-[#727785]">Day 1</div>
            <div>
              <p className="font-semibold text-[#1e293b]">Initial Email</p>
              <p className="text-[#475569]">
                50-75 words. One clear value prop. Soft CTA (&quot;Worth a
                conversation?&quot;). No links unless absolutely necessary.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 font-mono text-[#727785]">Day 4</div>
            <div>
              <p className="font-semibold text-[#1e293b]">Follow-up #1</p>
              <p className="text-[#475569]">
                Brief bump. Reference the first email. &quot;Wanted to make sure
                this didn&apos;t get buried.&quot;
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 font-mono text-[#727785]">Day 8</div>
            <div>
              <p className="font-semibold text-[#1e293b]">Follow-up #2</p>
              <p className="text-[#475569]">
                Add value. Case study snippet, relevant insight, or resource.
                Still soft CTA.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 font-mono text-[#727785]">Day 14</div>
            <div>
              <p className="font-semibold text-[#1e293b]">Breakup Email</p>
              <p className="text-[#475569]">
                Clear, polite close. &quot;Seems like this isn&apos;t a priority
                right now. I&apos;ll stop reaching out. Feel free to ping me if
                that changes.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Personalization at Scale
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        We use AI personalization, but strategically. Not first-name
        insertion — that&apos;s table stakes. Real personalization based on:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>Company recent news (funding, product launches, hiring)</li>
        <li>Role-specific pain points (different for CTO vs CEO vs Head of Sales)</li>
        <li>Industry-specific language (SaaS speaks differently than services)</li>
        <li>Trigger events (new role, company expansion, competitor activity)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Stack Layer 4: Execution (The Rhythm)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Consistency beats intensity. We send daily, not in bursts.
      </p>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Daily Sending Cadence
      </h3>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>250-300 emails per day total across all domains</li>
        <li>Spread across business hours (10 AM - 5 PM IST)</li>
        <li>70% on Tue-Thu, 20% Mon, 10% Fri (weekend sends perform poorly)</li>
        <li>Randomized send times (no blasting at exactly :00)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">
        Monitoring & Response
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Replies are handled within 4 hours during business hours. Every
        conversation that shows interest gets a calendly link. Every objection
        gets a templated but personalized response.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Stack Layer 5: Analytics (The Feedback Loop)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        We review these metrics weekly and adjust:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1e293b] mb-3">Primary Metrics</h4>
          <ul className="text-sm text-[#475569] space-y-2">
            <li>• Deliverability rate (target: 95%+)</li>
            <li>• Open rate by sequence (target: 40%+)</li>
            <li>• Reply rate (target: 8%+)</li>
            <li>• Meeting booking rate (target: 3%+)</li>
            <li>• Cost per meeting (target: under ₹800)</li>
          </ul>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h4 className="font-bold text-[#1e293b] mb-3">Health Metrics</h4>
          <ul className="text-sm text-[#475569] space-y-2">
            <li>• Bounce rate (target: under 2%)</li>
            <li>• Spam complaint rate (target: under 0.1%)</li>
            <li>• Unsubscribe rate (target: under 1%)</li>
            <li>• Domain reputation score (target: High)</li>
            <li>• List quality score (target: 85%+ valid)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Tools in Our Stack
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-[#475569] border border-[#e2e8f0] rounded-xl overflow-hidden">
          <thead className="bg-[#f8fafc]">
            <tr>
              <th className="text-left p-3 font-bold text-[#1e293b]">Layer</th>
              <th className="text-left p-3 font-bold text-[#1e293b]">Tool</th>
              <th className="text-left p-3 font-bold text-[#1e293b]">Purpose</th>
              <th className="text-left p-3 font-bold text-[#1e293b]">Monthly Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f0f0f0]">
              <td className="p-3">Infrastructure</td>
              <td className="p-3 font-medium">AWS SES + LeadSnipper</td>
              <td className="p-3">Sending + Campaign management</td>
              <td className="p-3">~₹1,100</td>
            </tr>
            <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
              <td className="p-3">List Building</td>
              <td className="p-3 font-medium">Apollo.io</td>
              <td className="p-3">B2B contact database</td>
              <td className="p-3">~₹4,000</td>
            </tr>
            <tr className="border-b border-[#f0f0f0]">
              <td className="p-3">Research</td>
              <td className="p-3 font-medium">LinkedIn Sales Navigator</td>
              <td className="p-3">Account targeting</td>
              <td className="p-3">~₹6,500</td>
            </tr>
            <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
              <td className="p-3">Verification</td>
              <td className="p-3 font-medium">Reoon (via LeadSnipper)</td>
              <td className="p-3">Email validation</td>
              <td className="p-3">Included</td>
            </tr>
            <tr className="border-b border-[#f0f0f0]">
              <td className="p-3">Scheduling</td>
              <td className="p-3 font-medium">Calendly</td>
              <td className="p-3">Meeting booking</td>
              <td className="p-3">~₹800</td>
            </tr>
            <tr className="border-b border-[#f0f0f0] bg-[#fafafa]">
              <td className="p-3">CRM</td>
              <td className="p-3 font-medium">LeadSnipper + Custom</td>
              <td className="p-3">Lead management</td>
              <td className="p-3">Included</td>
            </tr>
            <tr className="font-bold text-[#1e293b]">
              <td className="p-3">Total</td>
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3">~₹12,400/month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        At 20+ meetings per month, our cost per meeting is roughly ₹620. Most
        agencies charge ₹2,000-5,000 per qualified meeting. The margin is what
        makes this sustainable.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What We&apos;ve Learned (The Honest Take)
      </h2>
      <div className="space-y-4 mb-6">
        <div className="bg-gradient-to-br from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-xl p-5">
          <h3 className="font-bold text-[#3b82f6] mb-2">What Works</h3>
          <ul className="text-[#475569] text-sm space-y-1">
            <li>• Short emails (under 100 words) outperform long ones 3:1</li>
            <li>• Specificity beats cleverness (&quot;booked 20 meetings&quot; beats &quot;amazing results&quot;)</li>
            <li>• Tuesdays and Wednesdays are 40% better than other days</li>
            <li>• Following up 3x increases response rate by 65%</li>
            <li>• List quality matters more than copy quality</li>
          </ul>
        </div>
        <div className="bg-[#fef2f2] border border-[#ef4444]/20 rounded-xl p-5">
          <h3 className="font-bold text-[#ef4444] mb-2">What Doesn&apos;t</h3>
          <ul className="text-[#475569] text-sm space-y-1">
            <li>• Video in cold emails (low deliverability, low engagement)</li>
            <li>• Heavy HTML/templates (trigger spam filters)</li>
            <li>• Sending on weekends or holidays</li>
            <li>• Buying pre-built email lists (always garbage)</li>
            <li>• Trying to sell in the first email (education outperforms pitching)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to Build This Stack Yourself
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        You don&apos;t need everything on day one. Here&apos;s the build order:
      </p>
      <ol className="list-decimal pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Week 1-2:</strong> Set up 2 domains, configure DNS, start
          warmup. No sending yet.
        </li>
        <li>
          <strong>Week 3:</strong> Build your first 500-contact list from
          Apollo/Sales Nav. Verify everything.
        </li>
        <li>
          <strong>Week 4:</strong> Write 3 sequence variants. Test with 50
          emails each. Measure open rates.
        </li>
        <li>
          <strong>Week 5-6:</strong> Scale to 100 emails/day. Monitor{" "}
          <Link href="/blog/domain-reputation-management-protect-sender-score" className="text-[#3b82f6] font-medium hover:underline">domain reputation</Link>{" "}
          and replies obsessively.
        </li>
        <li>
          <strong>Month 2:</strong> Add 2 more domains. Scale to 250/day.
          Refine based on reply data.
        </li>
        <li>
          <strong>Month 3+:</strong> Optimize for meetings, not opens. A/B test
          CTAs. Build response templates.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        The Bottom Line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        20+ meetings per month isn&apos;t about finding the secret tactic.
        It&apos;s about building a repeatable system and executing it daily. The
        stack matters, but consistency matters more.
      </p>
      <p className="text-[#475569] leading-relaxed">
        LeadSnipper is the infrastructure layer we built to run this stack. BYO
        SES for cost control. Built-in verification for list quality. Domain
        health monitoring for deliverability. Multi-day sending for sustainable
        volume.{" "}
        <Link
          href="https://app.leadsnipper.com/signup?product=leadsnipper"
          className="text-[#3b82f6] font-semibold hover:underline"
        >
          Start with 1,000 free emails
        </Link>{" "}
        and build your own outbound engine.
      </p>
    </BlogLayout>
  );
}
