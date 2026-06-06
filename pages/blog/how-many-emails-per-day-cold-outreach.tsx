import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("how-many-emails-per-day-cold-outreach")!;

export default function HowManyEmailsPerDay() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        &quot;How many emails can I send per day?&quot; is the most common cold
        email question — and the answer depends on your domain age, warmup status,
        and reputation. Here&apos;s a practical guide by stage.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">New Domain (Week 1-2)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>10-30 emails per domain per day.</strong> Focus on warmup, not cold
        outreach. Use{" "}
        <Link href="/email-warmup" className="text-[#0058be] font-medium hover:underline">
          email warmup
        </Link>{" "}
        to build initial reputation with engaged recipients.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Warming Domain (Week 3-4)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>30-80 emails per domain per day.</strong> Start mixing in cold
        outreach to verified contacts. Monitor bounce rates closely — pause if
        bounces exceed 3%.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Established Domain (Month 2+)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>50-150 emails per domain per day.</strong> With good reputation
        (open rates above 15%, bounce rate under 2%), you can sustain this volume.
        Use{" "}
        <Link href="/email-deliverability" className="text-[#0058be] font-medium hover:underline">
          deliverability monitoring
        </Link>{" "}
        to catch issues early.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">Scaled Outbound (Multiple Domains)</h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>500-2,000+ emails per day across 3-10 domains.</strong> Rotate
        sends across domains to distribute volume. Each domain maintains its own
        warmup schedule and health monitoring in{" "}
        <Link href="/cold-email-software" className="text-[#0058be] font-medium hover:underline">
          LeadSnipper
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">AWS SES Limits</h2>
      <p className="text-[#475569] leading-relaxed mb-8">
        With BYO AWS SES, your platform limit is your SES quota — typically
        50,000+/day after production access. LeadSnipper doesn&apos;t cap sends
        below AWS limits on BYO SES Pro. See our{" "}
        <Link href="/cold-email-infrastructure" className="text-[#0058be] font-medium hover:underline">
          infrastructure guide
        </Link>{" "}
        for scaling details.
      </p>
    </BlogLayout>
  );
}
