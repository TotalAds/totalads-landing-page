import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Code2,
  Cog,
  Globe,
  Rocket,
  Search,
  Target,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

const services = [
  {
    icon: <Bot className="w-5 h-5" />,
    color: "#0058be",
    title: "AI Automation",
    anchor: "ai-automation",
    href: "/services/ai-automation",
    desc: "Custom AI agents that handle repetitive operations — lead qualification, data enrichment, follow-up scheduling — 24/7 without human intervention.",
    results: ["↓ 15–20 hrs saved per week", "↑ 3x team throughput"],
    deliverables: ["Custom AI workflows", "Integration with existing stack", "Monitoring dashboard", "Weekly optimisation"],
  },
  {
    icon: <Search className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "AI Search Optimisation (AI SEO)",
    anchor: "ai-seo",
    href: "/services/ai-seo",
    desc: "Get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Traditional SEO gets traffic; AI SEO gets you mentioned in answers.",
    results: ["↑ 300% AI search visibility", "↑ 40% inbound pipeline"],
    deliverables: ["AI citation audit", "Content strategy for LLM indexing", "Schema markup optimisation", "Monthly visibility reports"],
  },
  {
    icon: <Target className="w-5 h-5" />,
    color: "#b75b00",
    title: "Lead Generation & Sales Automation",
    anchor: "lead-gen",
    href: "/services/lead-generation",
    desc: "Full outbound pipeline — ICP research, prospect enrichment, personalised sequences across email + LinkedIn. We book the meetings, you close the deals.",
    results: ["↑ 20–40 qualified meetings/month", "↓ 70% prospecting time"],
    deliverables: ["ICP definition & list building", "Multi-channel sequences", "Meeting booking system", "Pipeline CRM integration"],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    color: "#10b981",
    title: "CRM Automation & Integration",
    anchor: "crm",
    href: "/services/crm-automation",
    desc: "Connect your entire sales stack. Auto-scoring, auto-routing, auto-follow-ups. Your CRM becomes a real-time revenue engine, not a data graveyard.",
    results: ["↑ 2.5x lead-to-meeting conversion", "↓ Manual CRM entry to zero"],
    deliverables: ["CRM workflow design", "API integrations", "Lead scoring models", "Automated reporting"],
  },
  {
    icon: <Cog className="w-5 h-5" />,
    color: "#131b2e",
    title: "Custom Business Software",
    anchor: "software",
    href: "/services/custom-software",
    desc: "Replace your 10+ disconnected SaaS tabs with one internal tool built for your exact workflow. We design, build, and maintain it.",
    results: ["↑ 80% team productivity", "↓ $2K+/mo SaaS consolidation"],
    deliverables: ["Workflow analysis", "Custom application", "User training", "Ongoing maintenance"],
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "SaaS & MVP Development",
    anchor: "mvp",
    href: "/services/mvp-development",
    desc: "Validate your idea in 6–8 weeks with a production-ready MVP. We handle architecture, development, and deployment so you can focus on finding product-market fit.",
    results: ["↓ 60% time to market", "↓ $50K+ vs. traditional dev"],
    deliverables: ["Technical architecture", "Full-stack development", "CI/CD pipeline", "Launch support"],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    color: "#0058be",
    title: "Conversion Web Applications",
    anchor: "web-apps",
    href: "/services/web-apps",
    desc: "Revenue-engineered web experiences — not just aesthetic ones. Landing pages, portals, and apps designed to convert visitors into customers.",
    results: ["↑ 40–70% conversion rate", "↑ 2x average session duration"],
    deliverables: ["UX/UI design", "Full-stack development", "A/B testing framework", "Performance optimisation"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    color: "#b75b00",
    title: "AI Dashboards & Analytics",
    anchor: "analytics",
    href: "/services/analytics",
    desc: "Real-time intelligence with predictive alerts. No more spreadsheets — your team gets live data, anomaly detection, and actionable insights automatically.",
    results: ["↓ Reporting from hours to zero", "↑ Data-driven decisions"],
    deliverables: ["Data pipeline setup", "Custom dashboard UI", "Predictive alerting", "Team training"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    color: "#131b2e",
    title: "Startup Tech Consulting",
    anchor: "consulting",
    href: "/services/consulting",
    desc: "Fractional CTO perspective. Stack decisions, hiring roadmaps, architecture reviews, and build-vs-buy analysis — before you commit $50K+ to the wrong path.",
    results: ["↓ $50K+ tech debt prevented", "↑ Confident technical decisions"],
    deliverables: ["Technical audit", "Architecture review", "Hiring roadmap", "Monthly advisory calls"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — LeadSnipper | AI Automation, Lead Gen, Custom Software"
        description="Done-for-you B2B growth services. AI automation, lead generation, CRM integration, custom software, and more. One team, nine systems, one outcome: pipeline."
        canonical="https://leadsnipper.com/services"
      />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag justify-center mb-6">Done-for-you Services</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Nine systems.
              </span>
              <span className="block font-display italic text-[#b75b00] text-3xl md:text-display-hero mt-2">
                One outcome: pipeline.
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t want to run the tools yourself? We build and operate your
              entire outbound growth stack. Give us your ICP and your calendar — we
              handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/pricing" className="btn-ghost btn-hero">
                See pricing →
              </Link>
              <a
                href="https://cal.com/heyrehan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber btn-hero"
              >
                Book free audit →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl border border-[#c2c6d6]/15 p-8 md:p-10 scroll-mt-24"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left — content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ color: service.color, background: `${service.color}10` }}
                    >
                      {service.icon}
                    </span>
                    <h2 className="font-heading font-bold text-xl text-[#131b2e]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-body-md text-[#424754] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.results.map((r) => (
                      <span key={r} className="result-badge">{r}</span>
                    ))}
                  </div>
                  <Link href={service.href} className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#b75b00] hover:text-[#d97706] transition">
                    Learn more →
                  </Link>
                </div>

                {/* Right — deliverables */}
                <div className="md:border-l md:border-[#c2c6d6]/20 md:pl-8">
                  <p className="font-mono text-[10px] text-[#727785] uppercase tracking-widest mb-3">
                    What you get
                  </p>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#131b2e]">
                        <svg className="w-4 h-4 text-[#b75b00] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Footer />
    </>
  );
}
