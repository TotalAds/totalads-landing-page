import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function EmailWarmupPage() {
  return (
    <FeatureLandingPage
      pageKey="emailWarmup"
      eyebrow="Email Warmup Tool"
      headline="Email warmup tool that improves inbox placement in days"
      subheadline="New domains need gradual sending volume before cold outreach. LeadSnipper's email warmup tool ramps daily sends, mirrors human patterns, and pauses automatically when domain health drops."
      problemTitle="Sending cold email from a cold domain guarantees spam folder"
      problemDescription="Mailbox providers flag domains that suddenly start blasting unsolicited email. Without warmup, even perfect copy lands in spam. Most teams skip warmup or use shared warmup pools that don't build reputation on their own domain."
      outcomes={[
        "Gradual daily volume ramp from 10 to 500+ emails over 2-4 weeks",
        "Warmup tied to your actual domain — not a shared pool",
        "Automatic pause when bounce or complaint rates spike",
        "Integrated with domain health dashboard for full visibility",
        "Works with BYO AWS SES and managed sending",
      ]}
      features={[
        {
          title: "AI-Paced Volume Ramp",
          description:
            "Daily send limits increase by 10-20% based on engagement signals and domain age. No manual scheduling required.",
          badge: "Core",
        },
        {
          title: "Human-Like Sending Patterns",
          description:
            "Randomized send times, varied recipients, and natural reply simulation to build authentic sender reputation.",
          badge: "Deliverability",
        },
        {
          title: "Health-Triggered Pause",
          description:
            "Warmup automatically pauses if bounce rate exceeds thresholds or DNS records fail validation.",
          badge: "Safety",
        },
        {
          title: "Multi-Domain Warmup",
          description:
            "Warm up multiple sending domains simultaneously — essential for agencies and multi-ICP outbound.",
          badge: "Scale",
        },
      ]}
      faqs={[
        {
          question: "How long does email warmup take?",
          answer:
            "Most domains need 2-4 weeks of warmup before cold outreach. Start at 10-20 emails/day and ramp to 200-500/day. LeadSnipper automates this schedule based on your domain health signals.",
        },
        {
          question: "Do I need a separate warmup tool?",
          answer:
            "No. LeadSnipper includes email warmup on all plans. It's integrated with verification, domain health monitoring, and campaign sending — no separate billing or tool switching.",
        },
        {
          question: "Can I warmup multiple domains at once?",
          answer:
            "Yes. Business and BYO SES plans support unlimited domains with independent warmup schedules per domain.",
        },
      ]}
      relatedLinks={[
        {
          href: "/cold-email-software",
          label: "Cold email software",
          description: "Full cold email platform with warmup, verification, and campaigns.",
        },
        {
          href: "/email-deliverability",
          label: "Email deliverability tool",
          description: "Monitor domain health alongside warmup progress.",
        },
        {
          href: "/blog/email-warmup-verification-domain-health-complete-guide",
          label: "Email warmup complete guide",
          description: "In-depth guide to warmup, verification, and domain health.",
        },
        {
          href: "/blog/how-many-emails-per-day-cold-outreach",
          label: "Daily send volume guide",
          description: "How many emails to send per day during and after warmup.",
        },
      ]}
    />
  );
}
