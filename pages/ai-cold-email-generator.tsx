import React from "react";

import FeatureLandingPage from "@/components/FeatureLandingPage";

export default function AiColdEmailGeneratorPage() {
  return (
    <FeatureLandingPage
      pageKey="aiColdEmailGenerator"
      eyebrow="AI Cold Email Software"
      headline="AI cold email software that writes and sends at scale"
      subheadline="Generate personalized cold email drafts with AI, A/B test subject lines, and send through AWS SES infrastructure with built-in verification and warmup — so AI-powered copy actually reaches the inbox."
      problemTitle="AI-generated emails fail when deliverability is an afterthought"
      problemDescription="AI can write great cold email copy, but if your domain isn't warmed up, your list isn't verified, and your DNS isn't configured — the best AI copy lands in spam. Most AI email tools ignore the infrastructure layer entirely."
      outcomes={[
        "AI email writer generates drafts from your ICP, offer, and tone preferences",
        "A/B test subject lines and body variations before scaling",
        "Send AI-generated emails through verified, warmed infrastructure",
        "Personalization variables merged at send time for each recipient",
        "Track which AI-generated variants get the best reply rates",
      ]}
      features={[
        {
          title: "AI Email Writer",
          description:
            "Generate cold email drafts from your value proposition and target audience. Adjust tone, length, and personalization level.",
          badge: "AI",
        },
        {
          title: "Subject Line A/B Testing",
          description:
            "Test multiple AI-generated subject lines per campaign. Automatically route to the best performer.",
          badge: "Testing",
        },
        {
          title: "Deliverability-First Sending",
          description:
            "AI copy sends through BYO AWS SES with verification and warmup — not through shared pools that ignore reputation.",
          badge: "Infrastructure",
        },
        {
          title: "Personalization at Scale",
          description:
            "Merge company name, role, industry, and custom variables into AI drafts for each recipient.",
          badge: "Personalization",
        },
      ]}
      faqs={[
        {
          question: "Can AI write effective cold emails?",
          answer:
            "AI is good at generating first drafts and subject line variations. The best results come from AI-assisted writing combined with human editing, verified lists, and deliverability-first sending infrastructure.",
        },
        {
          question: "Does LeadSnipper's AI email writer replace copywriters?",
          answer:
            "No. It accelerates the drafting process. Most teams use AI for initial drafts and A/B variants, then edit for authenticity before sending.",
        },
        {
          question: "Will AI-generated cold emails go to spam?",
          answer:
            "Not because of AI — spam filtering is based on sender reputation, DNS, list quality, and sending patterns. LeadSnipper ensures the infrastructure layer is solid regardless of how copy is created.",
        },
      ]}
      relatedLinks={[
        {
          href: "/cold-email-software",
          label: "Cold email software",
          description: "Full platform with AI writer, verification, and campaigns.",
        },
        {
          href: "/email-warmup",
          label: "Email warmup tool",
          description: "Ensure AI-generated emails reach the inbox.",
        },
        {
          href: "/blog/best-cold-email-software-2026-comparison",
          label: "Cold email software comparison",
          description: "Compare AI and automation features across platforms.",
        },
      ]}
    />
  );
}
