"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Code2,
  Cog,
  Globe,
  Linkedin,
  Mail,
  Rocket,
  Search,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import FounderPic from "@/asset/founder_pic.png";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

const whatWeBuild = [
  {
    icon: <Mail className="w-5 h-5" />,
    color: "#0058be",
    title: "Email Deliverability",
    desc: "LeadSnipper — cold email on infrastructure you own. BYO AWS SES, warmup, verification, and domain health in one platform.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "AI Automation",
    desc: "Custom AI agents that handle lead qualification, data enrichment, and follow-up scheduling — so your team focuses on closing.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    color: "#b75b00",
    title: "Outbound Systems",
    desc: "End-to-end outbound pipelines — ICP research, prospect enrichment, multi-channel sequences, and meeting booking.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    color: "#10b981",
    title: "CRM & Workflow Automation",
    desc: "Connect your entire sales stack. Auto-scoring, auto-routing, auto-follow-ups. Your CRM becomes a revenue engine.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    color: "#0058be",
    title: "Web Apps & MVPs",
    desc: "Conversion-engineered web experiences and production-ready MVPs — shipped in 6–8 weeks.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    color: "#131b2e",
    title: "AI Dashboards & Analytics",
    desc: "Real-time intelligence with predictive alerts. No more spreadsheets — just live data and actionable insights.",
  },
];

const principles = [
  {
    icon: <Building2 className="w-5 h-5" />,
    color: "#0058be",
    title: "Own your infrastructure",
    desc: "We believe you should own your sending reputation, your data, and your growth systems. No vendor lock-in.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    color: "#b75b00",
    title: "Automate the repetitive",
    desc: "If a human is doing it every day and it follows a pattern, it should be automated. That's what we build.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    color: "#10b981",
    title: "Practitioner-built",
    desc: "Every feature exists because we needed it ourselves. We don't build from spec — we build from experience.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "Ship fast, iterate faster",
    desc: "We'd rather ship something useful this week than perfect something for three months. Speed wins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO pageKey="about" />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag justify-center mb-6">About Us</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Building smarter systems
              </span>
              <span className="block font-display italic text-[#0058be] text-3xl md:text-display-hero mt-2">
                for scalable growth.
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              We automate repetitive workflows, outbound operations, and manual
              business processes so companies can focus on what actually
              matters — growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── About the Founder ─── */}
      <section className="py-24 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-8">The Founder</span>

            <div className="grid md:grid-cols-5 gap-10 mt-8 items-start">
              {/* Left — Founder card */}
              <div className="md:col-span-2">
                <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 text-center">
                  <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden ring-4 ring-[#0058be]/10">
                    <Image
                      src={FounderPic}
                      alt="Rehan Qureshi — Founder of LeadSnipper"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#131b2e]">
                    Rehan Qureshi
                  </h3>
                  <p className="text-xs text-[#727785] mt-1">
                    Founder &amp; CEO
                  </p>
                  <p className="text-xs text-[#727785] mt-0.5">
                    Software Developer · 5+ yrs in Startups
                  </p>

                  <div className="flex items-center justify-center gap-3 mt-5">
                    <a
                      href="https://www.linkedin.com/in/mrqdev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:rehan@leadsnipper.com"
                      className="w-9 h-9 rounded-lg border border-[#c2c6d6]/30 flex items-center justify-center text-[#727785] hover:text-[#0058be] hover:border-[#0058be]/30 hover:bg-[#0058be]/[0.04] transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — Story */}
              <div className="md:col-span-3 space-y-5 text-body-md text-[#424754] leading-relaxed">
                <p>
                  I&apos;ve spent the last 5 years working in startup
                  environments as a software developer, helping teams build
                  products, systems, and internal tools.
                </p>
                <p>
                  During that journey, I noticed a common pattern: most
                  startups don&apos;t fail because they can&apos;t build. They
                  fail because they struggle with sales, marketing,
                  distribution, and consistent growth.
                </p>
                <p>
                  Like many technical founders, I also built multiple products
                  and tools over the years. Some worked technically, but failed
                  to gain traction because I underestimated how important
                  distribution and growth infrastructure really are.
                </p>
                <p>
                  That experience completely changed my perspective. I realized
                  that building software is only one part of the equation. The
                  real challenge is creating scalable systems that help
                  businesses generate leads, automate repetitive work, improve
                  outreach, and grow consistently.
                </p>
                <p className="font-medium text-[#131b2e]">
                  That&apos;s why I started LeadSnipper.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── About LeadSnipper ─── */}
      <section className="py-24 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag justify-center mb-6">The Company</span>

            <div className="glass-card rounded-3xl border border-[#0058be]/10 p-8 md:p-12 mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/[0.03] via-transparent to-[#8b5cf6]/[0.02] pointer-events-none" />
              <div className="relative space-y-6 text-body-md text-[#424754] leading-relaxed">
                <h2 className="font-heading font-bold text-headline-md text-[#131b2e]">
                  AI-powered growth infrastructure{" "}
                  <span className="font-display italic text-[#0058be]">
                    for modern businesses.
                  </span>
                </h2>
                <p>
                  LeadSnipper is focused on building AI-powered growth
                  infrastructure for modern businesses. Our mission is simple:
                  automate repetitive workflows, outbound operations, and manual
                  business processes so companies can focus on what actually
                  matters — growth.
                </p>
                <p>
                  We help businesses streamline lead generation, outbound
                  systems, email deliverability, CRM automation, LinkedIn
                  growth, and AI-driven workflows through a combination of
                  software products and implementation services.
                </p>
                <p>
                  Instead of adding more manual work, we believe businesses
                  should operate with smarter systems, better automation, and
                  scalable growth processes.
                </p>
                <p className="font-medium text-[#131b2e]">
                  At LeadSnipper, we&apos;re building tools and systems that
                  help teams move faster, sell smarter, and scale efficiently
                  in the AI-first era.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── What We Build ─── */}
      <section className="py-24 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center mb-6">
              What We Build
            </span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Products + services,{" "}
              <span className="font-display italic text-[#b75b00]">
                one growth stack.
              </span>
            </h2>
            <p className="text-body-md text-[#727785] mt-4 max-w-xl mx-auto">
              We don&apos;t just sell you a tool and wish you luck. We build
              the infrastructure, configure the automation, and help you
              operate it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeBuild.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-[#c2c6d6]/15"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ color: item.color, background: `${item.color}10` }}
                >
                  {item.icon}
                </span>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Principles ─── */}
      <section className="py-24 section-mesh border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center mb-6">
              How We Think
            </span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Principles, not platitudes.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-[#c2c6d6]/15"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ color: v.color, background: `${v.color}10` }}
                >
                  {v.icon}
                </span>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-[#0058be]/15 p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                Want to chat?{" "}
                <span className="font-display italic text-[#0058be]">
                  I&apos;m always up for it.
                </span>
              </h2>
              <p className="text-sm text-[#727785] mb-6 max-w-lg mx-auto">
                Whether you want to explore LeadSnipper, discuss growth
                strategy, or just say hi — grab time on my calendar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://cal.com/heyrehan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-full text-sm inline-flex items-center justify-center gap-2"
                >
                  Book 30-min call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="btn-ghost rounded-full text-sm"
                >
                  Send a message →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
