import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost(
  "how-to-set-up-aws-ses-for-cold-email-step-by-step"
)!;

export default function AwsSesSetupGuide() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Amazon SES (Simple Email Service) costs $0.10 per 1,000 emails and
        gives you full control over your sending reputation. For cold email
        senders, it&apos;s the most cost-effective and reliable way to own your
        infrastructure. This guide — part of our series on{" "}
        <Link href="/blog/how-to-send-cold-emails-at-scale-without-getting-blacklisted" className="text-[#3b82f6] font-medium hover:underline">sending cold email at scale without getting blacklisted</Link>
        {" "}— walks you through setting up AWS SES from
        scratch — account creation to production sending — even if you&apos;ve
        never touched AWS before.
      </p>

      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-8">
        <h3 className="font-bold text-[#1e293b] mb-2">
          What you&apos;ll have at the end of this guide:
        </h3>
        <ul className="space-y-2 text-[#475569] text-sm">
          <li>An AWS account with SES enabled</li>
          <li>A verified domain with DKIM and SPF configured</li>
          <li>SES moved out of sandbox mode (production sending enabled)</li>
          <li>
            SES connected to LeadSnipper (or your cold email platform of choice)
          </li>
          <li>Sending reputation that you fully own and control</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 1: Create an AWS Account
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        If you don&apos;t have an AWS account, go to{" "}
        <strong>aws.amazon.com</strong> and sign up. You&apos;ll need:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>An email address (use your business email, not personal)</li>
        <li>A credit card for billing (SES charges are minimal)</li>
        <li>Phone number for verification</li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-6">
        AWS offers a free tier that includes 62,000 outbound emails per month
        if you&apos;re sending from an EC2 instance, or $0.10 per 1,000 emails
        otherwise. For most cold email campaigns, your monthly SES bill will be
        under $5.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 2: Navigate to Amazon SES
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Once logged into the AWS Console:
      </p>
      <div className="bg-[#1e293b] rounded-xl p-5 mb-6">
        <ol className="space-y-2 text-[#94a3b8] text-sm">
          <li>
            <span className="text-[#22c55e]">1.</span> Search for
            &quot;SES&quot; in the top search bar
          </li>
          <li>
            <span className="text-[#22c55e]">2.</span> Click &quot;Amazon
            Simple Email Service&quot;
          </li>
          <li>
            <span className="text-[#22c55e]">3.</span> Choose your preferred
            region (us-east-1 is most common for North American audiences)
          </li>
        </ol>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        <strong>Region matters:</strong> Choose a region close to your
        recipients for lower latency. us-east-1 (N. Virginia) is the most
        common. eu-west-1 (Ireland) works well for European audiences.
        ap-south-1 (Mumbai) for Indian audiences. You can set up multiple
        regions later.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 3: Verify Your Domain
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        In the SES console, go to{" "}
        <strong>Configuration → Verified identities → Create identity</strong>.
        Choose &quot;Domain&quot; and enter your sending domain (e.g.,
        yourdomain.com).
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        SES will provide DNS records you need to add:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-2">
            DKIM Records (3 CNAME records)
          </h3>
          <p className="text-[#475569] text-sm mb-2">
            SES generates three CNAME records for DKIM (DomainKeys Identified
            Mail). These add a cryptographic signature to your emails proving
            they&apos;re legitimate.
          </p>
          <p className="text-xs text-[#64748b]">
            Copy all three CNAME records exactly as shown in the SES console.
            Add them to your DNS provider (GoDaddy, Cloudflare, Namecheap,
            Route 53, etc.). Verification usually takes 15-60 minutes.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-2">
            SPF Record (TXT record)
          </h3>
          <p className="text-[#475569] text-sm mb-2">
            Add an SPF record to tell mailbox providers that SES is authorized
            to send on behalf of your domain.
          </p>
          <code className="text-xs bg-[#1e293b] text-[#22c55e] px-3 py-1.5 rounded block overflow-x-auto">
            v=spf1 include:amazonses.com ~all
          </code>
          <p className="text-xs text-[#64748b] mt-2">
            If you already have an SPF record, add{" "}
            <code>include:amazonses.com</code> to the existing record rather
            than creating a new one. You can only have one SPF TXT record per
            domain.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5">
          <h3 className="font-bold text-[#1e293b] mb-2">
            DMARC Record (TXT record)
          </h3>
          <p className="text-[#475569] text-sm mb-2">
            Add a DMARC record to tell mailbox providers what to do when
            authentication fails.
          </p>
          <code className="text-xs bg-[#1e293b] text-[#22c55e] px-3 py-1.5 rounded block overflow-x-auto">
            v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com; pct=100
          </code>
          <p className="text-xs text-[#64748b] mt-2">
            Start with <code>p=none</code> (monitoring). After 2-4 weeks of
            clean data, move to <code>p=quarantine</code>, then{" "}
            <code>p=reject</code>.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 4: Exit the SES Sandbox
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        By default, new SES accounts are in &quot;sandbox mode&quot; — you can
        only send to verified email addresses. To send cold email to anyone,
        you need to request production access.
      </p>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-6">
        <h3 className="font-bold text-[#1e293b] mb-3">
          How to request production access:
        </h3>
        <ol className="space-y-3 text-[#475569] text-sm">
          <li>
            <strong>1.</strong> In SES console, go to{" "}
            <strong>Account dashboard</strong>
          </li>
          <li>
            <strong>2.</strong> Click{" "}
            <strong>&quot;Request production access&quot;</strong>
          </li>
          <li>
            <strong>3.</strong> Fill out the form. Key things AWS wants to know:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Mail type:</strong> Choose &quot;Transactional&quot; or
                &quot;Marketing&quot; based on your use case
              </li>
              <li>
                <strong>Website URL:</strong> Your company&apos;s website
              </li>
              <li>
                <strong>Use case description:</strong> Explain that you send
                B2B outreach emails, maintain clean lists, use email
                verification, and honor unsubscribes
              </li>
              <li>
                <strong>Expected sending volume:</strong> Be honest — start
                with a conservative estimate
              </li>
              <li>
                <strong>Bounce/complaint handling:</strong> Explain that you
                have automatic suppression for bounces and complaints
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        AWS typically reviews production access requests within 24-48 hours.
        Approval isn&apos;t guaranteed — AWS is strict about who they let send
        at scale. Be professional, detailed, and honest in your request. Once
        approved, you&apos;ll start with a daily sending quota (usually 50,000
        emails/day) that increases as you build reputation.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 5: Create SMTP Credentials
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        To connect SES to LeadSnipper (or any cold email tool), you need SMTP
        credentials:
      </p>
      <div className="bg-[#1e293b] rounded-xl p-5 mb-6">
        <ol className="space-y-2 text-[#94a3b8] text-sm">
          <li>
            <span className="text-[#22c55e]">1.</span> In SES console, go to{" "}
            <strong className="text-white">
              SMTP settings
            </strong>
          </li>
          <li>
            <span className="text-[#22c55e]">2.</span> Note the{" "}
            <strong className="text-white">SMTP endpoint</strong> (e.g.,
            email-smtp.us-east-1.amazonaws.com)
          </li>
          <li>
            <span className="text-[#22c55e]">3.</span> Click{" "}
            <strong className="text-white">
              &quot;Create SMTP credentials&quot;
            </strong>
          </li>
          <li>
            <span className="text-[#22c55e]">4.</span> An IAM user is created.{" "}
            <strong className="text-[#f59e0b]">
              Download the credentials immediately
            </strong>{" "}
            — they&apos;re only shown once
          </li>
          <li>
            <span className="text-[#22c55e]">5.</span> You&apos;ll get an SMTP
            username and password — save these securely
          </li>
        </ol>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        Alternatively, you can create API credentials (access key + secret key)
        in IAM if your cold email tool uses the SES API instead of SMTP.
        LeadSnipper supports both connection methods.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 6: Connect SES to LeadSnipper
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        With your SES account set up and credentials ready, connecting to
        LeadSnipper takes about 2 minutes:
      </p>
      <div className="bg-gradient-to-br from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-xl p-6 mb-6">
        <ol className="space-y-3 text-[#475569]">
          <li>
            <strong>1.</strong> Log into LeadSnipper → go to{" "}
            <strong>Settings → Sending Infrastructure</strong>
          </li>
          <li>
            <strong>2.</strong> Choose <strong>&quot;BYO SES&quot;</strong> mode
          </li>
          <li>
            <strong>3.</strong> Enter your SES region, SMTP endpoint, and
            credentials
          </li>
          <li>
            <strong>4.</strong> LeadSnipper validates the connection and
            confirms your sending domain matches
          </li>
          <li>
            <strong>5.</strong> Your domain appears in the domain health
            dashboard with real-time monitoring
          </li>
        </ol>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        Once connected, LeadSnipper handles campaign sending, warmup, and
        analytics on top of your SES infrastructure. You own the sending layer;
        LeadSnipper provides the campaign management layer.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Step 7: Configure Bounce and Complaint Handling
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        AWS SES requires you to handle bounces and complaints properly. If you
        ignore them, SES will suspend your account.
      </p>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-[#475569]">
          <li>
            <strong>Set up SNS notifications</strong> — configure Amazon SNS
            (Simple Notification Service) topics for bounces and complaints.
            LeadSnipper automatically subscribes to these when you connect BYO
            SES.
          </li>
          <li>
            <strong>Automatic suppression</strong> — when a bounce or complaint
            occurs, the email address should be automatically added to a
            suppression list so you never send to it again.
          </li>
          <li>
            <strong>Monitor thresholds</strong> — AWS SES puts you on probation
            if your bounce rate exceeds 5% or complaint rate exceeds 0.1%. Keep
            well below these. Our{" "}
            <Link href="/blog/domain-reputation-management-protect-sender-score" className="text-[#3b82f6] font-medium hover:underline">domain reputation management guide</Link>{" "}
            covers this in depth.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Optional: Set Up Dedicated IPs
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        By default, SES sends from a pool of shared IPs managed by Amazon.
        For high-volume senders (50,000+ emails/month), dedicated IPs give
        you complete reputation isolation:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-6">
        <li>
          <strong>Cost:</strong> $24.95/month per dedicated IP
        </li>
        <li>
          <strong>Best for:</strong> Senders doing 50,000+ emails/month who
          want total reputation isolation
        </li>
        <li>
          <strong>Important:</strong> Dedicated IPs need warmup too. Start
          slow and gradually increase volume on the new IP.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-6">
        For most cold email senders doing 5,000-30,000 emails/month,
        Amazon&apos;s default shared pool is fine. AWS manages these IPs
        aggressively, and they have much better reputation than the shared
        pools used by cold email platforms.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        AWS SES Costs: What You&apos;ll Actually Pay
      </h2>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-[#475569]">
          <li>
            <strong>Email sending:</strong> $0.10 per 1,000 emails
          </li>
          <li>
            <strong>5,000 emails/month:</strong> ~$0.50
          </li>
          <li>
            <strong>15,000 emails/month:</strong> ~$1.50
          </li>
          <li>
            <strong>50,000 emails/month:</strong> ~$5.00
          </li>
          <li>
            <strong>Dedicated IP (optional):</strong> $24.95/month per IP
          </li>
          <li>
            <strong>Data transfer:</strong> Negligible for email (pennies)
          </li>
        </ul>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        Compare this to Instantly at $37-97/month or Smartlead at $39-94/month
        — all on shared infrastructure. With LeadSnipper Business (₹999/month,
        ~$12) plus AWS SES, you get dedicated infrastructure at a fraction of
        the cost. See our full breakdown of{" "}
        <Link href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach" className="text-[#3b82f6] font-medium hover:underline">BYO AWS SES vs shared infrastructure</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom Line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Setting up AWS SES for cold email takes about 30-60 minutes, plus 24-48
        hours waiting for production access approval. Once it&apos;s done, you
        own your sending infrastructure permanently. No more shared IPs, no
        more depending on a platform&apos;s infrastructure health, no more
        overpaying for email delivery.
      </p>
      <p className="text-[#475569] leading-relaxed">
        If you want to skip the AWS complexity, LeadSnipper also offers Managed
        mode — we set up and manage the infrastructure for you. Either way, you
        get dedicated sending that&apos;s isolated from everyone else.{" "}
        <Link
          href="https://app.leadsnipper.com/signup"
          className="text-[#3b82f6] font-semibold hover:underline"
        >
          Start your free trial
        </Link>{" "}
        and choose the mode that fits your comfort level.
      </p>
    </BlogLayout>
  );
}
