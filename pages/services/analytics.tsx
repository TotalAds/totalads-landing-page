import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function AnalyticsService() {
  return (
    <ServicePageLayout
      seo={{
        title: "AI Dashboards & Analytics — LeadSnipper | Real-Time Intelligence, Not Spreadsheets",
        description: "Real-time dashboards with predictive alerts. No more spreadsheets — your team gets live data, anomaly detection, and actionable insights automatically.",
        canonical: "https://leadsnipper.com/services/analytics",
      }}
      badge="AI Analytics"
      headline="Stop exporting CSV files."
      headlineAccent="Start seeing patterns."
      subtitle="Real-time intelligence with predictive alerts. No more spreadsheets — your team gets live data, anomaly detection, and actionable insights automatically."
      accentColor="#0058be"
      problem={{
        heading: "Your Friday afternoon",
        headingAccent: "is spent making reports.",
        body: [
          "Someone exports data from the CRM. Another person pulls numbers from Stripe. A third opens Google Analytics. Then they paste everything into a spreadsheet and try to make sense of it.",
          "By the time leadership sees the numbers, they're a week old. Decisions are based on stale data. Anomalies are caught too late.",
          "What if your dashboards updated in real-time, flagged anomalies automatically, and told you what's happening — before you had to ask?",
        ],
      }}
      features={[
        { icon: "📊", title: "Custom Dashboards", desc: "Purpose-built dashboards for each team — sales, marketing, ops, finance. Not one-size-fits-all templates." },
        { icon: "🔗", title: "Data Pipeline Setup", desc: "Connect all your data sources into a unified warehouse. CRM, billing, analytics, support — one source of truth." },
        { icon: "🤖", title: "Predictive Alerting", desc: "AI monitors your metrics and alerts you before problems become crises. Anomaly detection for churn, revenue dips, and pipeline risks." },
        { icon: "👥", title: "Team Training", desc: "We train your team to use the dashboards effectively. Self-serve analytics that actually gets adopted." },
        { icon: "📈", title: "Automated Reports", desc: "Weekly and monthly reports generated and delivered automatically. No manual work required." },
        { icon: "🎯", title: "KPI Framework", desc: "We help you define the metrics that actually matter — not vanity numbers, but leading indicators of growth." },
      ]}
      process={[
        { step: "01", title: "Data Audit", desc: "Map all data sources, identify gaps, and define the metrics that matter for your business." },
        { step: "02", title: "Pipeline Build", desc: "Connect data sources, clean historical data, and build the automated pipeline." },
        { step: "03", title: "Dashboard Design", desc: "Custom dashboards built for each stakeholder — executives, managers, and individual contributors." },
        { step: "04", title: "Alert & Train", desc: "Set up predictive alerts, train your team, and hand over a self-serve analytics environment." },
      ]}
      results={[
        "↓ Reporting reduced from hours to zero",
        "↑ Real-time visibility across all departments",
        "↑ Anomaly detection in minutes, not weeks",
        "↓ 100% elimination of manual CSV exports",
        "↑ Data-driven decisions at every level",
        "↑ Executive-ready reports on autopilot",
      ]}
      faqs={[
        { q: "What data sources can you connect?", a: "Any tool with an API — HubSpot, Salesforce, Stripe, Google Analytics, Mixpanel, PostgreSQL, MySQL, Shopify, and custom databases. If it stores data, we can pull it in." },
        { q: "Do you use Tableau, Looker, or build custom?", a: "We recommend the right tool for your needs. For most clients, we use Metabase or custom-built dashboards. For enterprise, Looker or Tableau. We're tool-agnostic." },
        { q: "How accurate are the predictive alerts?", a: "Alerts are based on statistical anomaly detection against your historical data. False positive rates are typically under 5% after the initial tuning period." },
        { q: "Can our team modify dashboards themselves?", a: "Yes. We build for self-serve. Your team can create new charts, modify existing ones, and build ad-hoc reports without engineering help." },
      ]}
    />
  );
}
