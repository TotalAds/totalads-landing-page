import React from "react";

import ComparisonPage from "@/components/ComparisonPage";

export default function ApolloAlternativePage() {
  return (
    <ComparisonPage
      pageKey="apolloAlternative"
      competitor="Apollo"
      eyebrow="Apollo alternative"
      headline="An Apollo alternative for teams that need cold email deliverability, not just a database"
      subheadline="Apollo excels at contact data, but cold email deliverability requires dedicated infrastructure. LeadSnipper gives you BYO AWS SES, built-in verification, domain warmup, and campaign analytics focused on inbox placement."
      competitorSummary="Apollo is a powerful sales intelligence platform with contact data and basic sequencing. Teams that outgrow Apollo's email sending often need dedicated deliverability infrastructure."
      competitorBestFor={[
        "Teams that need contact data and basic email sequences in one tool",
        "SDRs who prioritize prospecting database over sending infrastructure",
        "Companies starting outbound who want an all-in-one prospecting platform",
      ]}
      competitorLimits={[
        "Email sending runs on shared infrastructure with limited deliverability controls.",
        "No BYO AWS SES path for teams that want sending-layer ownership.",
        "Verification and domain health are not core to the Apollo email workflow.",
        "Pricing scales quickly once you add seats, credits, and email volume.",
      ]}
      comparisonRows={[
        {
          feature: "Primary focus",
          competitor: "Contact data + basic sequences",
          leadsnipper: "Deliverability-first cold email",
        },
        {
          feature: "Sending infrastructure",
          competitor: "Apollo-managed email sending",
          leadsnipper: "BYO AWS SES or managed SES",
        },
        {
          feature: "Email verification",
          competitor: "Basic enrichment checks",
          leadsnipper: "Built-in Reoon verification before send",
        },
        {
          feature: "Domain health",
          competitor: "Limited monitoring",
          leadsnipper: "Real-time domain health dashboard",
        },
        {
          feature: "Cost model",
          competitor: "Per-seat + credit-based pricing",
          leadsnipper: "Platform fee + AWS SES usage",
        },
        {
          feature: "Best fit",
          competitor: "Prospecting-heavy teams",
          leadsnipper: "Deliverability-focused outbound teams",
        },
      ]}
      faqs={[
        {
          question: "Can LeadSnipper replace Apollo entirely?",
          answer:
            "LeadSnipper replaces Apollo's email sending layer. Many teams use Apollo (or similar tools) for contact data and LeadSnipper for verified, deliverability-first sending.",
        },
        {
          question: "Why switch from Apollo to LeadSnipper for email?",
          answer:
            "Teams switch when deliverability becomes the bottleneck — shared sending infrastructure, limited domain health visibility, and rising per-seat costs push serious outbound teams toward dedicated cold email infrastructure.",
        },
        {
          question: "Does LeadSnipper have a contact database like Apollo?",
          answer:
            "No. LeadSnipper focuses on sending infrastructure, verification, warmup, and campaigns. Import contacts from Apollo, LinkedIn, CSV, or any other source.",
        },
      ]}
    />
  );
}
