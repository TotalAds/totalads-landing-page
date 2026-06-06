"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Flame, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const seoLinks = [
  {
    title: "Cold Email Software",
    description: "Send 10,000+ emails without hitting spam. Built-in verification, warmup, and AWS SES infrastructure.",
    href: "/cold-email-software",
    icon: <Mail className="w-5 h-5" />,
    color: "#0058be",
    keywords: ["cold email software", "cold email automation", "bulk cold email"],
  },
  {
    title: "Email Warmup Tool",
    description: "Gradual volume ramp that improves inbox placement. AI-paced warmup tied to domain health.",
    href: "/email-warmup",
    icon: <Flame className="w-5 h-5" />,
    color: "#10b981",
    keywords: ["email warmup tool", "domain warmup software", "sender reputation warmup"],
  },
  {
    title: "Email Deliverability Tool",
    description: "Monitor SPF, DKIM, DMARC, bounce rates, and blacklist status in real-time.",
    href: "/email-deliverability",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#8b5cf6",
    keywords: ["email deliverability tool", "inbox placement", "domain health monitoring"],
  },
  {
    title: "Cold Email Infrastructure",
    description: "BYO AWS SES for full sending control. No shared pools, no reputation risk from other senders.",
    href: "/cold-email-infrastructure",
    icon: <Building2 className="w-5 h-5" />,
    color: "#b75b00",
    keywords: ["cold email infrastructure", "BYO SES", "AWS SES cold email"],
  },
  {
    title: "AI Cold Email Generator",
    description: "Generate personalized drafts with AI. A/B test subject lines and send through verified infrastructure.",
    href: "/ai-cold-email-generator",
    icon: <Sparkles className="w-5 h-5" />,
    color: "#f59e0b",
    keywords: ["AI cold email software", "AI email generator", "automated cold outreach"],
  },
];

const competitorLinks = [
  { label: "Instantly Alternative", href: "/vs/instantly" },
  { label: "Smartlead Alternative", href: "/vs/smartlead" },
  { label: "Apollo Alternative", href: "/vs/apollo" },
  { label: "Lemlist Alternative", href: "/vs/lemlist" },
  { label: "Mailshake Alternative", href: "/vs/mailshake" },
];

export default function SEOLinksSection() {
  return (
    <section className="py-20 relative section-blue border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-tag justify-center mb-6">Cold Email Platform</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Everything you need for{" "}
            <span className="font-display italic text-[#0058be]">deliverability-first outbound.</span>
          </h2>
          <p className="text-body-md text-[#727785] mt-4 max-w-2xl mx-auto">
            Explore our cold email tools and resources designed to help you send at scale without burning domains.
          </p>
        </motion.div>

        {/* Money Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {seoLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className="group block h-full glass-card glass-card-hover rounded-2xl border border-[#c2c6d6]/15 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ color: link.color, background: `${link.color}12` }}
                  >
                    {link.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-1 group-hover:text-[#0058be] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-[#727785] leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {link.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f2f3ff] text-[#727785]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#c2c6d6] group-hover:text-[#0058be] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Competitor Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
        >
          <p className="text-xs font-mono text-[#727785] uppercase tracking-widest mb-4">
            Compare with alternatives
          </p>
          <div className="flex flex-wrap gap-3">
            {competitorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#c2c6d6]/30 bg-white text-sm font-heading font-medium text-[#424754] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Industry Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
        >
          <p className="text-xs font-mono text-[#727785] uppercase tracking-widest mb-4">
            Cold email by industry
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SaaS", href: "/cold-email-for/saas" },
              { label: "Agencies", href: "/cold-email-for/agencies" },
              { label: "Real Estate", href: "/cold-email-for/real-estate" },
              { label: "Recruiters", href: "/cold-email-for/recruiters" },
              { label: "Consultants", href: "/cold-email-for/consultants" },
              { label: "B2B Startups", href: "/cold-email-for/b2b-startups" },
              { label: "Fintech", href: "/cold-email-for/fintech" },
              { label: "Healthcare", href: "/cold-email-for/healthcare" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[#424754] hover:text-[#0058be] hover:bg-[#0058be]/[0.04] transition-all"
              >
                {link.label}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
