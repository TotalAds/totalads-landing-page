"use client";
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

const services = [
  { icon: <Bot className="w-5 h-5" />, color: "#0058be", title: "AI Automation", href: "/services/ai-automation", desc: "Custom AI agents that handle operations, lead qualification, and repetitive workflows 24/7.", result: "↓ 15–20 hrs saved/week", span: "col-span-2" },
  { icon: <Search className="w-5 h-5" />, color: "#8b5cf6", title: "AI Search Optimisation", href: "/services/ai-seo", desc: "Get found on ChatGPT, Perplexity, and Google AI Overviews.", result: "↑ 300% AI search visibility" },
  { icon: <Cog className="w-5 h-5" />, color: "#131b2e", title: "Custom Business Software", href: "/services/custom-software", desc: "Internal tools that replace your 10+ disconnected SaaS tabs.", result: "↑ 80% team productivity" },
  { icon: <Target className="w-5 h-5" />, color: "#b75b00", title: "Lead Generation & Sales", href: "/services/lead-generation", desc: "Full outbound pipeline — prospecting, personalised sequences, meeting booking.", result: "↑ 20–40 meetings/month", span: "row-span-2" },
  { icon: <Wrench className="w-5 h-5" />, color: "#10b981", title: "AI + CRM Automation", href: "/services/crm-automation", desc: "Lead scoring, follow-ups, pipeline syncing on autopilot.", result: "↑ 2.5x lead-to-meeting rate" },
  { icon: <Rocket className="w-5 h-5" />, color: "#8b5cf6", title: "SaaS & MVP Development", href: "/services/mvp-development", desc: "Validate your idea in 6–8 weeks with a production-ready MVP.", result: "↓ 60% time to market" },
  { icon: <Globe className="w-5 h-5" />, color: "#0058be", title: "Conversion Web Apps", href: "/services/web-apps", desc: "Revenue-engineered web experiences, not just aesthetic ones.", result: "↑ 40–70% conversion rate" },
  { icon: <BarChart3 className="w-5 h-5" />, color: "#b75b00", title: "AI Dashboards & Analytics", href: "/services/analytics", desc: "Real-time intelligence with predictive alerts.", result: "↓ Reporting from hrs → zero" },
  { icon: <Code2 className="w-5 h-5" />, color: "#131b2e", title: "Startup Tech Consulting", href: "/services/consulting", desc: "Fractional CTO perspective. Stack, hiring, architecture decisions.", result: "↓ $50K+ tech debt prevented" },
];

export default function ServicesBento() {
  return (
    <section className="py-24 relative section-warm border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">Done-for-you Services</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Nine systems.
            <br />
            <span className="font-display italic text-[#b75b00]">One outcome: pipeline.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-xl mx-auto">
            Don&apos;t want to run the tools yourself? We build and operate your entire
            outbound growth stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link key={service.title} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`glass-card glass-card-hover p-6 rounded-2xl border border-[#c2c6d6]/15 h-full ${service.span || ""}`}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ color: service.color, background: `${service.color}10` }}
                >
                  {service.icon}
                </span>
                <h4 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-[#727785] mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <span className="result-badge">{service.result}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="/services" className="btn-ghost text-sm rounded-full">
            See all services →
          </Link>
          <Link
            href="https://cal.com/heyrehan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber text-sm rounded-full"
          >
            Book free audit →
          </Link>
        </div>
      </div>
    </section>
  );
}
