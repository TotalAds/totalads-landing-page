import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CustomSoftwareService() {
  return (
    <ServicePageLayout
      seo={{
        title: "Custom Business Software — LeadSnipper | Replace 10 SaaS Tabs With One Tool",
        description: "Replace your disconnected SaaS tabs with one internal tool built for your exact workflow. We design, build, and maintain custom business software.",
        canonical: "https://leadsnipper.com/services/custom-software",
      }}
      badge="Custom Software"
      headline="10 SaaS tabs."
      headlineAccent="One custom tool."
      subtitle="Replace your disconnected SaaS tabs with one internal tool built for your exact workflow. We design, build, and maintain it — you focus on growth."
      accentColor="#0058be"
      problem={{
        heading: "You're paying $3K/month for tools",
        headingAccent: "that don't talk to each other.",
        body: [
          "Your team opens Notion for tasks, Airtable for data, Slack for updates, three different dashboards for metrics, and a spreadsheet for the stuff that doesn't fit anywhere.",
          "Every new tool adds complexity. Every integration is fragile. And the 'quick fix' tools you adopted two years ago are now permanent infrastructure.",
          "Custom software isn't a luxury anymore. It's how modern teams eliminate tool sprawl and move faster than competitors stuck on generic platforms.",
        ],
      }}
      features={[
        { icon: "📋", title: "Workflow Analysis", desc: "We map every process your team runs across tools, identify redundancies, and design a unified system architecture." },
        { icon: "💻", title: "Full-Stack Development", desc: "Modern web applications built with Next.js, React, and cloud infrastructure. Fast, secure, and scalable." },
        { icon: "👥", title: "User Training", desc: "Comprehensive onboarding so your team adopts the new tool on day one. Video walkthroughs, documentation, and live sessions." },
        { icon: "🔧", title: "Ongoing Maintenance", desc: "Bug fixes, feature additions, and performance monitoring. Your software stays current and fast." },
        { icon: "🔒", title: "Security & Compliance", desc: "SOC 2 practices, encryption at rest and in transit, role-based access controls, and audit logging." },
        { icon: "📊", title: "Analytics Built In", desc: "Usage analytics, performance metrics, and business KPIs baked into every application we build." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "2-week deep-dive into your workflows, pain points, and requirements. We output a detailed spec." },
        { step: "02", title: "Design", desc: "Interactive prototypes reviewed with your team. We iterate until the UX feels right." },
        { step: "03", title: "Build", desc: "Agile development in 2-week sprints with demos at each milestone. You see progress weekly." },
        { step: "04", title: "Launch & Support", desc: "Production deployment, team training, and transition to ongoing maintenance." },
      ]}
      results={[
        "↑ 80% team productivity improvement",
        "↓ $2K+/month SaaS consolidation savings",
        "↓ 90% reduction in context switching",
        "↑ Unified data source for all teams",
        "↓ Zero manual data syncing",
        "↑ Custom features built for your exact needs",
      ]}
      faqs={[
        { q: "How much does custom software cost?", a: "Projects typically range from $15K-$80K depending on complexity. We provide a detailed estimate after the discovery phase — no surprises." },
        { q: "How long does development take?", a: "MVP in 6-8 weeks. Full-featured v1 in 10-14 weeks. We prioritize getting something useful in your hands quickly and iterating." },
        { q: "What tech stack do you use?", a: "Next.js/React frontend, Node.js backend, PostgreSQL database, hosted on AWS or Vercel. We use proven, maintainable technology." },
        { q: "What if we need changes after launch?", a: "We offer monthly maintenance retainers. Feature requests, bug fixes, and performance optimization are handled on an ongoing basis." },
      ]}
    />
  );
}
