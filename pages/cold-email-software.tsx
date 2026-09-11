import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function ColdEmailSoftwarePage() {
  return (
    <FeatureLandingPage
      pageKey="coldEmailSoftware"
      eyebrow="Cold Email Software"
      headline="Cold email software that sends 10,000+ emails without hitting spam"
      subheadline="LeadSnipper is cold email software built on AWS SES. Automate outreach, verify every lead, pace sending safely, and monitor deliverability — all in one platform designed for teams that care about inbox placement."
      problemTitle="Generic cold email tools share your reputation with everyone else"
      problemDescription="Most cold email software runs on shared infrastructure. When another sender on the same pool gets blacklisted, your campaigns suffer. Add-on verification tools, separate warmup services, and opaque pricing make the stack expensive and fragile."
      outcomes={[
        "Send cold email on AWS SES infrastructure you own and control",
        "Verify every lead with built-in Reoon checks before campaigns launch",
        "Pace volume with daily caps and auto-pause when bounce rates spike",
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
          title: "Deliverability Pacing",
          description:
            "Daily caps and multi-day volume pacing protect new domains. Campaigns auto-pause when bounce or complaint signals spike.",
          badge: "Safety",
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
          leadsnipper: "From ₹999/mo + AWS SES usage",
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
            "Yes, with proper list verification, gradual volume ramp, and pacing. LeadSnipper enforces verification before send, daily caps, bounce auto-pause, and domain health monitoring to reduce blacklist risk.",
        },
        {
          question: "Does LeadSnipper include an automated email warmup tool?",
          answer:
            "Not today. We do not sell an artificial warmup-pool product. LeadSnipper includes Reoon verification, daily caps, paced sending, domain health monitoring, and deliverability auto-pause — the controls that protect reputation when you ramp real outreach.",
        },
      ]}
      relatedLinks={[
        {
          href: "/email-deliverability",
          label: "Email deliverability tool",
          description: "Monitor DNS, bounce, and complaint signals in one dashboard.",
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
