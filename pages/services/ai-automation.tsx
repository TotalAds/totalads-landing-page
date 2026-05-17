import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function AIAutomationService() {
  return (
    <ServicePageLayout
      seo={{
        title: "AI Automation Services — LeadSnipper | Custom AI Agents for B2B Growth",
        description: "Custom AI agents that handle lead qualification, data enrichment, follow-up scheduling, and CRM automation. Save 15-20 hours per week with intelligent automation.",
        canonical: "https://leadsnipper.com/services/ai-automation",
      }}
      badge="AI Automation"
      headline="Your team is brilliant."
      headlineAccent="They shouldn't do robotic work."
      subtitle="Custom AI agents that handle repetitive operations — lead qualification, data enrichment, follow-up scheduling — 24/7 without human intervention."
      problem={{
        heading: "Your team spends 60% of their time",
        headingAccent: "on work a machine should do.",
        body: [
          "Data entry. Lead scoring by gut feel. Copy-pasting between tabs. Following up on cold threads that went nowhere.",
          "Meanwhile, your best reps — the ones who can actually close — are buried in admin. They're not selling. They're surviving.",
          "AI automation isn't about replacing your team. It's about removing the friction that keeps them from doing what they're best at.",
        ],
      }}
      features={[
        { icon: "🤖", title: "Custom AI Workflows", desc: "Purpose-built automation tailored to your exact sales process. Not templates — real workflows designed around how your team operates." },
        { icon: "🔗", title: "Stack Integration", desc: "Connects to your CRM, email, Slack, and data sources. No rip-and-replace. Works with what you already have." },
        { icon: "📊", title: "Monitoring Dashboard", desc: "Real-time visibility into every automated process. Know exactly what's running, what's stuck, and what needs attention." },
        { icon: "🧠", title: "Lead Qualification AI", desc: "Auto-score inbound and outbound leads using your ICP criteria. Route hot leads to reps instantly, nurture the rest." },
        { icon: "📝", title: "Data Enrichment", desc: "Automatically enrich contact records with company data, social profiles, technographics, and intent signals." },
        { icon: "⚡", title: "Follow-up Scheduling", desc: "AI determines optimal follow-up timing based on engagement patterns. Never miss a warm window again." },
      ]}
      process={[
        { step: "01", title: "Audit", desc: "We map your current workflows to identify the highest-impact automation opportunities." },
        { step: "02", title: "Design", desc: "Custom AI agents designed around your specific data, tools, and team structure." },
        { step: "03", title: "Build", desc: "We build, test, and integrate the automation into your live environment." },
        { step: "04", title: "Optimize", desc: "Weekly reviews to tune performance, add new triggers, and expand coverage." },
      ]}
      results={[
        "↓ 15–20 hours saved per week per rep",
        "↑ 3x team throughput without new hires",
        "↓ 90% reduction in manual data entry",
        "↑ 40% faster lead response time",
        "↓ Zero dropped follow-ups",
        "↑ Consistent qualification across all leads",
      ]}
      faqs={[
        { q: "What tools do the AI agents integrate with?", a: "We integrate with any tool that has an API — HubSpot, Salesforce, Pipedrive, Slack, Google Workspace, Notion, and custom databases. If it has an API, we can connect to it." },
        { q: "How long does implementation take?", a: "Most automations go live within 2-3 weeks. Complex multi-system integrations may take 4-6 weeks." },
        { q: "Will this break our existing workflows?", a: "No. We build alongside your current process and run in parallel before switching over. Zero disruption." },
        { q: "What happens if an AI agent makes a mistake?", a: "Every agent has guardrails, approval gates for high-impact actions, and rollback capabilities. You stay in control." },
      ]}
    />
  );
}
