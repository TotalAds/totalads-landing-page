import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function EmailWarmupPage() {
  return (
    <FeatureLandingPage
      pageKey="emailWarmup"
      eyebrow="Domain Reputation & Pacing"
      headline="Protect inbox placement without artificial warmup pools"
      subheadline="Mailbox providers increasingly detect and penalize shared warmup networks. LeadSnipper focuses on what actually protects reputation: DNS authentication, Reoon verification, daily caps, paced sending, and auto-pause when bounce or complaint rates spike."
      problemTitle="Shared warmup pools are a fragile shortcut"
      problemDescription="Many tools sell artificial engagement networks that look like activity to filters — until providers catch the pattern. That can burn domains and create a false sense of readiness. LeadSnipper does not sell a warmup-pool product. We ship deliverability fundamentals instead."
      outcomes={[
        "SPF, DKIM, and DMARC setup before you send",
        "Built-in Reoon verification so bad lists never hit your reputation",
        "Per-mailbox and per-domain daily caps with multi-day pacing",
        "Automatic pause when bounce or complaint rates spike",
        "Domain health dashboard for DNS, bounces, and complaints",
      ]}
      features={[
        {
          title: "Deliverability Pacing",
          description:
            "Spread volume across days and mailboxes with granular daily caps — so new domains ramp safely instead of blasting on day one.",
          badge: "Core",
        },
        {
          title: "Bounce & Complaint Auto-Pause",
          description:
            "Campaigns halt when hard bounces or complaints spike, so a bad batch cannot burn your domain overnight.",
          badge: "Safety",
        },
        {
          title: "Built-In Email Verification",
          description:
            "Reoon verification runs in the campaign flow. Invalid and risky addresses are removed before they touch sender reputation.",
          badge: "Deliverability",
        },
        {
          title: "Domain Health Dashboard",
          description:
            "Monitor DNS authentication, bounce rates, and complaint signals in one place — next to the campaigns that use those domains.",
          badge: "Visibility",
        },
      ]}
      faqs={[
        {
          question: "Does LeadSnipper include an automated email warmup tool?",
          answer:
            "Not today. We do not sell an artificial warmup-pool product. LeadSnipper includes verification, daily caps, paced sending, domain health monitoring, and deliverability auto-pause — the controls that protect reputation when you ramp real outreach.",
        },
        {
          question: "How should I ramp a new domain?",
          answer:
            "Start low (often 10–30 emails/day), verify every list, keep bounce rates under control, and increase gradually over 2–4 weeks. Use our sending-limit calculator and domain health dashboard to stay within safe limits.",
        },
        {
          question: "Why avoid shared warmup networks?",
          answer:
            "Google and Microsoft increasingly detect artificial engagement pools. Reputation built that way can collapse when the network is flagged. Own your DNS, verify lists, pace volume, and pause on bad signals instead.",
        },
      ]}
      relatedLinks={[
        {
          href: "/email-deliverability",
          label: "Email deliverability tool",
          description: "Monitor DNS, bounce, and complaint signals in one dashboard.",
        },
        {
          href: "/cold-email-software",
          label: "Cold email software",
          description: "Full cold email platform with verification, pacing, and campaigns.",
        },
        {
          href: "/tools/cold-email-sending-limit-calculator",
          label: "Sending limit calculator",
          description: "Calculate a safe daily send limit and week-by-week ramp schedule.",
        },
        {
          href: "/blog/email-warmup-verification-domain-health-complete-guide",
          label: "Warmup, verification & domain health guide",
          description: "Educational guide to reputation fundamentals for cold email.",
        },
        {
          href: "/blog/how-many-emails-per-day-cold-outreach",
          label: "Daily send volume guide",
          description: "How many emails to send per day as domains mature.",
        },
      ]}
    />
  );
}
