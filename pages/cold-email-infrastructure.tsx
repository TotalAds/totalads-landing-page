import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function ColdEmailInfrastructurePage() {
  return (
    <FeatureLandingPage
      pageKey="coldEmailInfrastructure"
      eyebrow="Cold Email Infrastructure"
      headline="Cold email infrastructure built on AWS SES you control"
      subheadline="Stop renting shared sending pools. LeadSnipper lets you bring your own AWS SES account for full control over sender reputation, daily limits, and per-email costs."
      problemTitle="Shared email infrastructure puts your reputation at risk"
      problemDescription="When your cold email tool owns the sending layer, their problems become your problems. Shared IP pools, opaque warmup networks, and platform-imposed send caps limit your ability to scale outbound safely."
      outcomes={[
        "Connect your own AWS SES account in minutes",
        "Send as AWS allows — no artificial monthly caps below SES limits",
        "Own your sender reputation completely — no shared pool risk",
        "Pay AWS directly (~$0.10 per 1,000 emails) plus low platform fee",
        "Full campaign builder, verification, warmup, and analytics on top",
      ]}
      features={[
        {
          title: "BYO AWS SES Integration",
          description:
            "Connect your AWS account with IAM credentials. LeadSnipper handles campaigns, verification, and monitoring — you control the sending layer.",
          badge: "Core",
        },
        {
          title: "Managed SES Option",
          description:
            "Don't want to configure AWS? Use LeadSnipper's managed sending for a simpler start, then migrate to BYO SES when ready.",
          badge: "Flexible",
        },
        {
          title: "Unlimited Domains on BYO SES Pro",
          description:
            "Add as many sending domains as your AWS account supports. Each domain gets independent warmup and health monitoring.",
          badge: "Scale",
        },
        {
          title: "Infrastructure Safeguards",
          description:
            "Fair use monitoring and abuse detection protect the platform without capping your legitimate AWS send quotas.",
          badge: "Safety",
        },
      ]}
      comparisonRows={[
        {
          feature: "Sending ownership",
          traditional: "Platform owns infrastructure",
          leadsnipper: "You own AWS SES account",
        },
        {
          feature: "Per-email cost",
          traditional: "Bundled in SaaS pricing",
          leadsnipper: "~$0.10/1K via AWS directly",
        },
        {
          feature: "Send limits",
          traditional: "Platform-imposed caps",
          leadsnipper: "AWS SES quotas (scalable)",
        },
        {
          feature: "Reputation risk",
          traditional: "Shared with all users",
          leadsnipper: "Isolated to your account",
        },
      ]}
      faqs={[
        {
          question: "What is cold email infrastructure?",
          answer:
            "Cold email infrastructure is the sending layer — email service provider (like AWS SES), domains, DNS records, IP addresses, and reputation management — that delivers your outbound emails to inboxes.",
        },
        {
          question: "Why use BYO AWS SES for cold email?",
          answer:
            "BYO SES gives you direct control over sending reputation, lower per-email costs, and no shared pool risk. You pay AWS for sending and LeadSnipper for the platform layer (verification, warmup, campaigns, analytics).",
        },
        {
          question: "Do I need AWS experience to use BYO SES?",
          answer:
            "Basic AWS setup is required for BYO SES, but LeadSnipper provides step-by-step guides. Alternatively, use managed sending if you want to start without AWS configuration.",
        },
      ]}
      relatedLinks={[
        {
          href: "/cold-email-software",
          label: "Cold email software",
          description: "Full platform built on AWS SES infrastructure.",
        },
        {
          href: "/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach",
          label: "BYO SES vs shared infrastructure",
          description: "Why owning your sending layer matters for cold outreach.",
        },
        {
          href: "/blog/amazon-ses-cold-email-setup-2026",
          label: "Amazon SES setup guide",
          description: "Step-by-step AWS SES configuration for cold email.",
        },
        {
          href: "/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step",
          label: "AWS SES tutorial",
          description: "Original step-by-step SES setup walkthrough.",
        },
      ]}
    />
  );
}
