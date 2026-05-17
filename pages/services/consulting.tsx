import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ConsultingService() {
  return (
    <ServicePageLayout
      seo={{
        title: "Startup Tech Consulting — LeadSnipper | Fractional CTO for Growing Teams",
        description: "Stack decisions, hiring roadmaps, architecture reviews, and build-vs-buy analysis. Fractional CTO perspective before you commit $50K+ to the wrong path.",
        canonical: "https://leadsnipper.com/services/consulting",
      }}
      badge="Tech Consulting"
      headline="Before you hire 5 engineers,"
      headlineAccent="talk to one who's shipped."
      subtitle="Fractional CTO perspective. Stack decisions, hiring roadmaps, architecture reviews, and build-vs-buy analysis — before you commit $50K+ to the wrong path."
      accentColor="#131b2e"
      problem={{
        heading: "You're about to make a $50K decision",
        headingAccent: "based on a blog post.",
        body: [
          "Should you build or buy? Hire senior or junior? Use React or Flutter? Go serverless or containers? The internet has opinions. Your investors have opinions. Everyone has opinions.",
          "But nobody in the room has actually shipped a product at your stage, with your constraints, in your market.",
          "A fractional CTO gives you the technical leadership you need — without the $250K salary. Strategic guidance when it matters most.",
        ],
      }}
      features={[
        { icon: "🔍", title: "Technical Audit", desc: "Comprehensive review of your current codebase, infrastructure, and technical debt. Honest assessment, no sugarcoating." },
        { icon: "🏗️", title: "Architecture Review", desc: "System design evaluation for scalability, security, and maintainability. We identify risks before they become expensive." },
        { icon: "👥", title: "Hiring Roadmap", desc: "Who to hire, when to hire, and how to evaluate technical candidates. Avoid expensive mis-hires." },
        { icon: "🧮", title: "Build vs. Buy Analysis", desc: "Data-driven framework for deciding when to build custom software vs. adopting existing tools." },
        { icon: "📞", title: "Monthly Advisory", desc: "Regular calls to discuss technical decisions, review progress, and adjust strategy as your company evolves." },
        { icon: "📋", title: "Vendor Evaluation", desc: "Objective assessment of third-party tools, agencies, and platforms. We have no vendor affiliations." },
      ]}
      process={[
        { step: "01", title: "Discovery Call", desc: "60-minute deep-dive into your company, product, technical challenges, and goals." },
        { step: "02", title: "Technical Audit", desc: "Comprehensive review of codebase, architecture, processes, and team structure." },
        { step: "03", title: "Strategic Report", desc: "Detailed recommendations with prioritized action items and timeline." },
        { step: "04", title: "Ongoing Advisory", desc: "Monthly calls, async support, and decision reviews as needed." },
      ]}
      results={[
        "↓ $50K+ in prevented tech debt",
        "↑ Confident technical decisions",
        "↓ 3-6 months saved on hiring mistakes",
        "↑ Architecture ready for 10x growth",
        "↓ Reduced vendor lock-in risk",
        "↑ Clear technical roadmap for next 12 months",
      ]}
      faqs={[
        { q: "Is this a replacement for a full-time CTO?", a: "For early-stage startups (pre-Series A), yes — it provides CTO-level guidance at a fraction of the cost. Post-Series A, it's typically a bridge until you hire full-time, or a complement to a less experienced tech lead." },
        { q: "How much time do you commit?", a: "Advisory packages start at 4 hours/month. More intensive engagements (technical audits, architecture redesigns) are scoped separately." },
        { q: "What industries do you know best?", a: "B2B SaaS, marketplaces, and developer tools. We've shipped products in email infrastructure, HR tech, fintech, and e-commerce." },
        { q: "Do you write code?", a: "Not in advisory mode. If code needs to be written, we can scope that as a separate development engagement or help you hire the right engineers." },
      ]}
    />
  );
}
