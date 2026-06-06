import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("cold-email-for-saas-companies")!;

export default function ColdEmailForSaas() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        SaaS outbound is different from other industries. Long sales cycles,
        multiple ICPs, and the risk of burning your company&apos;s primary domain
        make cold email strategy critical. Here&apos;s how SaaS teams run outbound
        safely and effectively.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Why SaaS Cold Email Is Different</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        SaaS companies often have one main domain handling transactional email,
        support, and product notifications. Sending cold email from that domain
        risks damaging deliverability for your entire product. Always use separate
        outreach domains.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Infrastructure Setup for SaaS</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Use{" "}
        <Link href="/cold-email-infrastructure" className="text-[#0058be] font-medium hover:underline">
          BYO AWS SES infrastructure
        </Link>{" "}
        for cost control at scale. At 10,000 emails/month, SES costs ~$1 vs
        $30-97 on shared-pool tools. Connect to{" "}
        <Link href="/cold-email-software" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper&apos;s cold email software
        </Link>{" "}
        for verification, warmup, and campaigns.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Sample SaaS Cold Email Sequence</h2>
      <div className="bg-[#f8fafc] border border-[#c2c6d6]/20 rounded-xl p-5 mb-6">
        <p className="text-sm text-[#424754] font-medium mb-2">Email 1 — Subject: Quick question about {"{{company}}"}&apos;s outbound</p>
        <p className="text-sm text-[#727785] leading-relaxed">
          Hi {"{{first_name}}"}, I noticed {"{{company}}"} is scaling its sales team.
          Most SaaS teams we work with struggle with cold email deliverability once
          they pass 500 sends/day. Would a 15-min call be useful?
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Deliverability Tips for SaaS</h2>
      <ul className="space-y-2 mb-8 text-[#475569]">
        <li>• Use separate domains per ICP or product line</li>
        <li>• Verify every lead — SaaS lists from Apollo/LinkedIn decay fast</li>
        <li>• Warm up 2-4 weeks before cold outreach</li>
        <li>• Track reply rates by ICP segment to find product-market fit signals</li>
        <li>• Keep daily volume under 50 per domain until reputation is established</li>
      </ul>

      <p className="text-[#475569] leading-relaxed mb-8">
        For industry-specific guidance, see our{" "}
        <Link href="/cold-email-for/saas" className="text-[#0058be] font-medium hover:underline">
          cold email for SaaS page
        </Link>{" "}
        with sample sequences and deliverability tips.
      </p>
    </BlogLayout>
  );
}
