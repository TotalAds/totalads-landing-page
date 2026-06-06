import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("amazon-ses-cold-email-setup-2026")!;

export default function AmazonSesSetup2026() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Amazon SES costs $0.10 per 1,000 emails and gives you full control over
        sending reputation. This updated 2026 guide walks through setting up AWS
        SES for cold outreach and connecting it to{" "}
        <Link href="/cold-email-software" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper&apos;s cold email software
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 1: Create an AWS Account</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Sign up at aws.amazon.com. Navigate to Amazon SES in the AWS Console.
        Select your preferred region (us-east-1 is common for cold email).
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 2: Exit the SES Sandbox</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        New SES accounts start in sandbox mode (200 emails/day, verified recipients
        only). Submit a production access request explaining your cold email use
        case. Approval typically takes 24-48 hours.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 3: Verify Your Sending Domain</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Add your outreach domain in SES → Verified Identities. SES generates DKIM
        CNAME records — add them to your DNS provider. Also configure SPF and
        DMARC as described in our{" "}
        <Link href="/blog/spf-dkim-dmarc-cold-email-guide" className="text-[#0058be] font-medium hover:underline">
          SPF DKIM DMARC guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 4: Create IAM Credentials</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Create an IAM user with SES sending permissions. Generate access key and
        secret key. These credentials connect SES to LeadSnipper — never share
        them publicly.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 5: Connect to LeadSnipper</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        In LeadSnipper, go to Settings → AWS SES and enter your IAM credentials
        and region. LeadSnipper validates the connection and begins domain health
        monitoring automatically. Learn more about{" "}
        <Link href="/cold-email-infrastructure" className="text-[#0058be] font-medium hover:underline">
          cold email infrastructure
        </Link>{" "}
        built on BYO SES.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Step 6: Warm Up Before Sending</h2>
      <p className="text-[#475569] leading-relaxed mb-8">
        Never launch cold campaigns on a fresh domain. Use{" "}
        <Link href="/email-warmup" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper&apos;s email warmup tool
        </Link>{" "}
        for 2-4 weeks before scaling to full cold outreach volume.
      </p>
    </BlogLayout>
  );
}
