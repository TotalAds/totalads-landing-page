import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function ColdEmailSoftwarePage() {
  return (
    <FeatureLandingPage
      pageKey="coldEmailSoftware"
      eyebrow="Cold Email Software"
      headline="Cold email software that sends 10,000+ emails without hitting spam"
      subheadline="LeadSnipper is cold email software built on AWS SES. Automate outreach, verify every lead, warm up domains, and monitor deliverability — all in one platform designed for teams that care about inbox placement."
      problemTitle="Generic cold email tools share your reputation with everyone else"
      problemDescription="Most cold email software runs on shared infrastructure. When another sender on the same pool gets blacklisted, your campaigns suffer. Add-on verification tools, separate warmup services, and opaque pricing make the stack expensive and fragile."
      outcomes={[
        "Send cold email on AWS SES infrastructure you own and control",
        "Verify every lead with built-in Reoon checks before campaigns launch",
        "Warm up domains with AI-paced daily volume tied to domain health",
        "Monitor SPF, DKIM, DMARC, bounces, and complaints in one dashboard",
        "Start free with 1,000 emails — scale to 10,000+ without burning domains",
      ]}
      features={[
        {
          title: "BYO AWS SES Sending",
          description:
            "Connect your own Amazon SES account for full control over sending reputation, daily limits, and per-email costs (~$0.10 per 1,000 emails).",
          badge: "Infrastructure",
        },
        {
          title: "Built-in Email Verification",
          description:
            "Reoon verification catches invalid, catch-all, and disposable emails before upload. No third-party verification bills.",
          badge: "Deliverability",
        },
        {
          title: "AI Smart Warmup",
          description:
            "Gradual daily volume ramp that mirrors human sending. Automatically pauses when domain health signals drop.",
          badge: "Warmup",
        },
        {
          title: "Campaign Builder & Sequences",
          description:
            "Multi-step cold email sequences with personalization variables, A/B testing, and sender rotation across domains.",
          badge: "Automation",
        },
        {
          title: "Domain Health Dashboard",
          description:
            "Real-time monitoring of DNS records, blacklist status, bounce rates, and complaint signals.",
          badge: "Monitoring",
        },
        {
          title: "Analytics & PDF Reports",
          description:
            "Track open rates, reply rates, and domain-level performance. Export professional PDF reports for clients.",
          badge: "Analytics",
        },
      ]}
      comparisonRows={[
        {
          feature: "Sending infrastructure",
          traditional: "Shared pools (Instantly, Smartlead)",
          leadsnipper: "BYO AWS SES or managed SES",
        },
        {
          feature: "Email verification",
          traditional: "Third-party add-on ($$$)",
          leadsnipper: "Built-in Reoon verification",
        },
        {
          feature: "Domain health",
          traditional: "Limited or none",
          leadsnipper: "Real-time dashboard",
        },
        {
          feature: "Cost at 10K emails/mo",
          traditional: "$30-97+/month + verification",
          leadsnipper: "From ₹499/mo + AWS SES usage",
        },
      ]}
      faqs={[
        {
          question: "What is the best cold email software in 2026?",
          answer:
            "The best cold email software depends on your priority. If deliverability and infrastructure ownership matter, LeadSnipper with BYO AWS SES is a strong choice. If you need the simplest possible start, shared-pool tools like Instantly work for low volume.",
        },
        {
          question: "Can I send bulk cold email without getting blacklisted?",
          answer:
            "Yes, with proper warmup, list verification, and pacing. LeadSnipper enforces verification before send, provides AI warmup, and monitors domain health to prevent blacklist issues.",
        },
        {
          question: "Does LeadSnipper include email warmup?",
          answer:
            "Yes. AI smart warmup is included on all paid plans and available during the free trial. Warmup is tied to your domain health dashboard and pauses automatically if issues are detected.",
        },
      ]}
      relatedLinks={[
        {
          href: "/email-warmup",
          label: "Email warmup tool",
          description: "Improve inbox placement with AI-paced domain warmup.",
        },
        {
          href: "/email-deliverability",
          label: "Email deliverability tool",
          description: "Monitor DNS, bounces, and complaint signals in real time.",
        },
        {
          href: "/blog/best-cold-email-software-2026-comparison",
          label: "Best cold email software comparison",
          description: "Honest comparison of Instantly, Smartlead, and LeadSnipper.",
        },
        {
          href: "/vs/instantly",
          label: "Instantly alternative",
          description: "Compare LeadSnipper vs Instantly for cold email.",
        },
        {
          href: "/cold-email-infrastructure",
          label: "Cold email infrastructure",
          description: "Build outbound on AWS SES infrastructure you control.",
        },
        {
          href: "/blog/how-to-avoid-spam-folder-cold-email",
          label: "How to avoid the spam folder",
          description: "7 proven steps to keep cold emails in the inbox.",
        },
      ]}
    />
  );
}
