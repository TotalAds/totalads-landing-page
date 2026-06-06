import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("cold-email-deliverability-checklist")!;

export default function DeliverabilityChecklist() {
  const checklistItems = [
    "SPF record configured and validated",
    "DKIM signatures enabled and DNS records added",
    "DMARC policy set (start with p=none, monitor reports)",
    "Sending domain is separate from main company domain",
    "Domain has been warmed up for 2-4 weeks",
    "All contacts verified with Reoon before upload",
    "Bounce rate under 3% on test batch",
    "Daily send volume within safe limits for domain age",
    "Unsubscribe link included in every email",
    "Physical address included in email footer",
    "No spam trigger words in subject lines",
    "Maximum 1-2 links per email",
    "Plain text version included alongside HTML",
    "Domain health dashboard shows green across all signals",
    "Google Postmaster Tools configured for Gmail monitoring",
  ];

  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Run through this checklist before every cold email campaign. Skip any
        step and you risk the spam folder. Use{" "}
        <Link href="/email-deliverability" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper&apos;s deliverability tool
        </Link>{" "}
        to automate most of these checks.
      </p>

      <div className="space-y-3 mb-10">
        {checklistItems.map((item, i) => (
          <div
            key={item}
            className="flex gap-3 items-start p-4 rounded-xl border border-[#c2c6d6]/20 bg-white"
          >
            <span className="font-mono text-xs text-[#0058be] font-bold shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-[#424754]">{item}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Download the Full Checklist
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Get the printable PDF version with detailed instructions for each step:{" "}
        <Link href="/downloads/deliverability-checklist.pdf" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper Deliverability Checklist (PDF)
        </Link>
      </p>

      <p className="text-[#475569] leading-relaxed mb-8">
        For deeper guidance, read{" "}
        <Link href="/blog/how-to-avoid-spam-folder-cold-email" className="text-[#0058be] font-medium hover:underline">
          how to avoid the spam folder
        </Link>{" "}
        and our{" "}
        <Link href="/blog/email-warmup-verification-domain-health-complete-guide" className="text-[#0058be] font-medium hover:underline">
          complete warmup and verification guide
        </Link>.
      </p>
    </BlogLayout>
  );
}
