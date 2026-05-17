import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CRMAutomationService() {
  return (
    <ServicePageLayout
      seo={{
        title: "CRM Automation & Integration — LeadSnipper | Turn Your CRM Into a Revenue Engine",
        description: "Auto-scoring, auto-routing, auto-follow-ups. We connect your entire sales stack so your CRM becomes a real-time revenue engine, not a data graveyard.",
        canonical: "https://leadsnipper.com/services/crm-automation",
      }}
      badge="CRM Automation"
      headline="Your CRM should close deals."
      headlineAccent="Not just store data."
      subtitle="Auto-scoring, auto-routing, auto-follow-ups. We connect your entire sales stack so your CRM becomes a real-time revenue engine, not a data graveyard."
      problem={{
        heading: "Your CRM has 10,000 contacts",
        headingAccent: "and nobody trusts the data.",
        body: [
          "Reps don't update it. Leads fall through cracks. Your pipeline report is a fiction because the source of truth is a mess.",
          "You bought a CRM to drive revenue. Instead, it's an expensive spreadsheet that nobody uses properly.",
          "The fix isn't training — it's automation. When the CRM updates itself, routes leads automatically, and triggers follow-ups without human input, adoption becomes effortless.",
        ],
      }}
      features={[
        { icon: "🔗", title: "CRM Workflow Design", desc: "Custom deal stages, automation rules, and pipeline logic designed around your actual sales process — not generic templates." },
        { icon: "⚙️", title: "API Integrations", desc: "Connect your CRM to email, calendar, Slack, billing, and support tools. One source of truth, zero manual syncing." },
        { icon: "🧠", title: "Lead Scoring Models", desc: "AI-powered scoring that evolves with your data. Hot leads get surfaced. Cold leads get nurtured. Nothing gets lost." },
        { icon: "📊", title: "Automated Reporting", desc: "Real-time dashboards and weekly reports generated automatically. No more end-of-week data scrambles." },
        { icon: "🔄", title: "Auto-Routing", desc: "Leads assigned to the right rep based on territory, deal size, product interest, or custom rules — instantly." },
        { icon: "📧", title: "Trigger Sequences", desc: "Automatic follow-up sequences triggered by CRM events — deal stage changes, form fills, inactivity alerts." },
      ]}
      process={[
        { step: "01", title: "CRM Audit", desc: "Deep analysis of your current CRM setup, data quality, and workflow gaps." },
        { step: "02", title: "Architecture Design", desc: "Custom workflow blueprint with deal stages, scoring rules, and integration map." },
        { step: "03", title: "Build & Integrate", desc: "Full implementation with API connections, data migration, and automation rules." },
        { step: "04", title: "Train & Optimize", desc: "Team onboarding and monthly optimization to keep the system performing." },
      ]}
      results={[
        "↑ 2.5x lead-to-meeting conversion rate",
        "↓ Manual CRM entry reduced to zero",
        "↑ 100% lead follow-up coverage",
        "↓ 80% reduction in data entry time",
        "↑ Real-time pipeline accuracy",
        "↑ Rep adoption from ~40% to 95%+",
      ]}
      faqs={[
        { q: "Which CRMs do you work with?", a: "HubSpot, Salesforce, Pipedrive, and Zoho are our primary platforms. We also work with custom CRMs built on Airtable, Notion, or bespoke systems." },
        { q: "Will we lose any existing data?", a: "Never. We run data audits and backups before any migration. Existing contacts, deals, and history are preserved and cleaned." },
        { q: "How long does the full setup take?", a: "Basic CRM automation: 2-3 weeks. Full integration with multiple tools: 4-6 weeks. Complex enterprise setups: 6-8 weeks." },
        { q: "Do you provide ongoing support?", a: "Yes. We offer monthly optimization retainers to keep your CRM automation running smoothly and evolving with your process." },
      ]}
    />
  );
}
