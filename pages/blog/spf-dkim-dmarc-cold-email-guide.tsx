import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("spf-dkim-dmarc-cold-email-guide")!;

export default function SpfDkimDmarcGuide() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        SPF, DKIM, and DMARC are the three DNS records that tell mailbox providers
        your emails are legitimate. Missing or misconfigured authentication is
        one of the top reasons cold emails land in spam. Here&apos;s what each
        record does and how to set them up.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">SPF (Sender Policy Framework)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        SPF tells receiving servers which IP addresses are authorized to send email
        for your domain. Without SPF, anyone can spoof your domain. With AWS SES,
        your SPF record includes <code className="text-sm bg-[#f1f5f9] px-1 rounded">include:amazonses.com</code>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">DKIM (DomainKeys Identified Mail)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        DKIM adds a cryptographic signature to every email proving it wasn&apos;t
        tampered with in transit. AWS SES generates DKIM keys when you verify a
        domain — add the CNAME records to your DNS provider.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">DMARC (Domain-based Message Authentication)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        DMARC tells receiving servers what to do when SPF or DKIM checks fail.
        Start with <code className="text-sm bg-[#f1f5f9] px-1 rounded">p=none</code> to
        monitor, then move to <code className="text-sm bg-[#f1f5f9] px-1 rounded">p=quarantine</code> once
        authentication is stable. Never skip DMARC — Gmail and Outlook increasingly
        require it.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">How to Verify Your Setup</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Use{" "}
        <Link href="/email-deliverability" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper&apos;s email deliverability tool
        </Link>{" "}
        to validate all three records continuously. The domain health dashboard
        flags missing or misconfigured authentication before you send campaigns.
      </p>

      <p className="text-[#475569] leading-relaxed mb-8">
        For AWS SES-specific setup, see our{" "}
        <Link href="/blog/amazon-ses-cold-email-setup-2026" className="text-[#0058be] font-medium hover:underline">
          Amazon SES cold email setup guide
        </Link>{" "}
        or the original{" "}
        <Link href="/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step" className="text-[#0058be] font-medium hover:underline">
          step-by-step SES tutorial
        </Link>.
      </p>
    </BlogLayout>
  );
}
