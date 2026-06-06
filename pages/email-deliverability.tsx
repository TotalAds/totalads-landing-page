import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function EmailDeliverabilityPage() {
  return (
    <FeatureLandingPage
      pageKey="emailDeliverability"
      eyebrow="Email Deliverability Tool"
      headline="Email deliverability tool for better inbox placement"
      subheadline="Monitor SPF, DKIM, DMARC, bounce rates, complaint signals, and blacklist status in one dashboard. Fix deliverability issues before they destroy your campaigns."
      problemTitle="You can't fix deliverability problems you can't see"
      problemDescription="Most cold email senders discover deliverability problems after open rates crash. By then, domain reputation is damaged and recovery takes weeks. Without real-time monitoring, DNS misconfigurations, bounce spikes, and blacklist hits go unnoticed."
      outcomes={[
        "Real-time SPF, DKIM, and DMARC validation on every sending domain",
        "Blacklist monitoring across major RBLs with instant alerts",
        "Bounce rate and complaint rate tracking per domain and campaign",
        "Google Postmaster Tools data synced into your dashboard",
        "Pre-send checks that block campaigns when DNS or health fails",
      ]}
      features={[
        {
          title: "DNS Authentication Monitor",
          description:
            "Continuous validation of SPF, DKIM, and DMARC records. Get alerted when DNS changes break authentication.",
          badge: "DNS",
        },
        {
          title: "Blacklist Monitoring",
          description:
            "Check your sending IPs and domains against major blacklists. Instant alerts when listed.",
          badge: "Monitoring",
        },
        {
          title: "Bounce & Complaint Tracking",
          description:
            "Track hard bounces, soft bounces, and spam complaints per domain. Set thresholds that pause sending automatically.",
          badge: "Analytics",
        },
        {
          title: "Pre-Send Health Checks",
          description:
            "Campaigns are blocked from sending if domain health fails pre-flight checks — preventing reputation damage.",
          badge: "Safety",
        },
        {
          title: "Google Postmaster Integration",
          description:
            "Sync domain reputation data from Google Postmaster Tools for Gmail-specific deliverability insights.",
          badge: "Integration",
        },
      ]}
      faqs={[
        {
          question: "What is email deliverability?",
          answer:
            "Email deliverability is the ability to land emails in the recipient's inbox rather than spam. It depends on sender reputation, DNS authentication (SPF/DKIM/DMARC), list quality, sending patterns, and content.",
        },
        {
          question: "How do I improve email deliverability for cold outreach?",
          answer:
            "Verify every lead before sending, warm up new domains for 2-4 weeks, configure SPF/DKIM/DMARC correctly, keep bounce rates under 3%, and monitor domain health continuously. LeadSnipper handles all of this in one platform.",
        },
        {
          question: "Does LeadSnipper check SPF, DKIM, and DMARC?",
          answer:
            "Yes. The domain health dashboard validates all three DNS records continuously and alerts you when any record is missing or misconfigured.",
        },
      ]}
      relatedLinks={[
        {
          href: "/cold-email-software",
          label: "Cold email software",
          description: "Full platform with deliverability monitoring built in.",
        },
        {
          href: "/email-warmup",
          label: "Email warmup tool",
          description: "Build sender reputation before cold outreach.",
        },
        {
          href: "/blog/spf-dkim-dmarc-cold-email-guide",
          label: "SPF vs DKIM vs DMARC guide",
          description: "Understand email authentication for cold email.",
        },
        {
          href: "/blog/cold-email-deliverability-checklist",
          label: "Deliverability checklist",
          description: "15 steps to check before every campaign launch.",
        },
        {
          href: "/blog/how-to-avoid-spam-folder-cold-email",
          label: "How to avoid the spam folder",
          description: "Fix deliverability problems before they hurt campaigns.",
        },
      ]}
    />
  );
}
