import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function MVPDevelopmentService() {
  return (
    <ServicePageLayout
      seo={{
        title: "SaaS & MVP Development — LeadSnipper | Validate Your Idea in 6-8 Weeks",
        description: "Production-ready MVP in 6-8 weeks. We handle architecture, development, and deployment so you can focus on finding product-market fit.",
        canonical: "https://leadsnipper.com/services/mvp-development",
      }}
      badge="SaaS & MVP"
      headline="Stop building decks."
      headlineAccent="Start shipping product."
      subtitle="Validate your idea in 6-8 weeks with a production-ready MVP. We handle architecture, development, and deployment so you can focus on finding product-market fit."
      accentColor="#8b5cf6"
      problem={{
        heading: "You've been planning this product",
        headingAccent: "for six months.",
        body: [
          "You have the idea. You have the market insight. Maybe you even have paying customers waiting. But you don't have the engineering team to build it.",
          "Hiring takes 3-6 months. Freelancers deliver inconsistent quality. Dev agencies want $200K and 6 months before you see anything.",
          "What if you could go from concept to production-ready MVP in 6-8 weeks — with a team that's shipped SaaS products before?",
        ],
      }}
      features={[
        { icon: "🏗️", title: "Technical Architecture", desc: "We design the system architecture for scale from day one. No rewriting when you hit 1,000 users." },
        { icon: "💻", title: "Full-Stack Development", desc: "Frontend, backend, database, auth, and integrations. Complete product development, not just a prototype." },
        { icon: "🚀", title: "CI/CD Pipeline", desc: "Automated testing, staging environments, and one-click deployment. Ship updates confidently." },
        { icon: "📦", title: "Launch Support", desc: "Production deployment, monitoring setup, and the first 30 days of post-launch support included." },
        { icon: "📊", title: "Analytics & Feedback", desc: "Usage analytics, error tracking, and feedback collection built in from launch." },
        { icon: "🔐", title: "Auth & Billing", desc: "User authentication, subscription billing, and team management — the boring-but-essential stuff, done right." },
      ]}
      process={[
        { step: "01", title: "Scope Sprint (Week 1)", desc: "We define the MVP feature set, technical architecture, and timeline together." },
        { step: "02", title: "Design Sprint (Weeks 2-3)", desc: "Interactive prototypes, user flows, and design system creation." },
        { step: "03", title: "Build Sprint (Weeks 4-7)", desc: "Agile development with weekly demos. You see working software every week." },
        { step: "04", title: "Launch (Week 8)", desc: "Production deployment, monitoring, and handoff. Your product is live." },
      ]}
      results={[
        "↓ 60% faster time to market vs. in-house",
        "↓ $50K+ savings vs. traditional agencies",
        "↑ Production-ready, not just a prototype",
        "↑ Architecture designed for 10x scale",
        "↓ Zero DevOps overhead for founders",
        "↑ Weekly progress demos, no black boxes",
      ]}
      faqs={[
        { q: "What's included in the MVP?", a: "Full-stack web application with authentication, core features, basic analytics, deployment, and 30 days of post-launch support. We scope this together in Week 1." },
        { q: "Can you build mobile apps?", a: "We build responsive web apps that work on all devices. For native iOS/Android, we use React Native. We'll recommend the right approach during scoping." },
        { q: "Who owns the code?", a: "You own 100% of the code, design, and infrastructure. Full GitHub access from day one." },
        { q: "What happens after the MVP?", a: "You can hire your own team (we help with handoff) or continue with us on a monthly retainer for ongoing development." },
      ]}
    />
  );
}
