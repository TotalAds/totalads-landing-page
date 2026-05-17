import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Flame,
  Globe,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

const features = [
  {
    icon: <Building2 className="w-5 h-5" />,
    color: "#0058be",
    title: "Infrastructure Ownership",
    desc: "Run on your own AWS SES. Your IP addresses, your sending reputation. No shared pools, no overnight blacklists from someone else's bad campaign.",
    badge: "Core",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#2170e4",
    title: "Domain Health Dashboard",
    desc: "SPF, DKIM, DMARC status in one view. Real-time blacklist monitoring. Google Postmaster data synced. Know before you send.",
    badge: "Core",
  },
  {
    icon: <Flame className="w-5 h-5" />,
    color: "#8b5cf6",
    title: "AI Smart Warmup",
    desc: "Gradual daily volume ramp that mirrors human sending patterns. Tied to your domain health — automatically pauses if issues are detected.",
    badge: "Deliverability",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "#10b981",
    title: "Reoon Email Verification",
    desc: "Built into the upload flow. Catch-all detection, disposable domain flagging, syntax validation. No more bounce disasters on cold lists.",
    badge: "Deliverability",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    color: "#b75b00",
    title: "Analytics & PDF Reports",
    desc: "Open rates, reply rates, bounce tracking, domain-level breakdown. Export professional PDF reports for clients or leadership — agency-ready.",
    badge: "Analytics",
  },
  {
    icon: <PenLine className="w-5 h-5" />,
    color: "#0058be",
    title: "AI Email Writer",
    desc: "Generate campaign drafts from your ICP and offer. A/B test subject lines. Adjust tone, length, and personalisation level.",
    badge: "AI",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    color: "#131b2e",
    title: "Multi-Domain Management",
    desc: "Manage multiple sending domains from one dashboard. Perfect for agencies running outreach across client accounts.",
    badge: "Scale",
  },
];

const comparisonData = [
  { feature: "Infrastructure", leadsnipper: "Your AWS SES", instantly: "Shared pools", smartlead: "Shared pools" },
  { feature: "Domain reputation", leadsnipper: "Yours forever", instantly: "Pooled risk", smartlead: "Pooled risk" },
  { feature: "Email verification", leadsnipper: "Built-in (Reoon)", instantly: "Third-party", smartlead: "Third-party" },
  { feature: "Warmup", leadsnipper: "AI-paced", instantly: "Basic", smartlead: "Included" },
  { feature: "Domain health", leadsnipper: "Real-time dashboard", instantly: "None", smartlead: "None" },
  { feature: "PDF reports", leadsnipper: "Yes", instantly: "No", smartlead: "No" },
  { feature: "Pricing (India)", leadsnipper: "From ₹499", instantly: "From $30", smartlead: "From $39" },
];

export default function LeadSnipperProduct() {
  return (
    <>
      <SEO
        title="LeadSnipper — Cold Email on Infrastructure You Own"
        description="Send 10,000+ cold emails without killing your domain reputation. Built on AWS SES. Domain health, warmup, verification, and campaigns in one platform."
        canonical="https://leadsnipper.com/products/leadsnipper"
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
            <span className="badge-live mb-6">LIVE</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Cold email built on
              </span>
              <span className="block font-display italic text-[#0058be] text-3xl md:text-display-hero mt-2">
                infrastructure you own.
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              Send 10,000+ cold emails without killing your domain reputation.
              Domain health, warmup, verification, and campaigns — one platform,
              your AWS SES.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="https://app.leadsnipper.com/signup"
                className="btn-primary btn-hero"
              >
                Start free — 1,000 emails included
              </Link>
              <Link href="/pricing" className="btn-ghost btn-hero">
                See pricing →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#f2f3ff]/30 border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag justify-center mb-6">Features</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Everything you need.{" "}
              <span className="font-display italic text-[#0058be]">Nothing you don&apos;t.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ color: f.color, background: `${f.color}10` }}
                  >
                    {f.icon}
                  </span>
                  <span className="font-mono text-[10px] text-[#0058be] bg-[#0058be]/[0.06] px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#faf8ff] border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center mb-6">Compare</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              LeadSnipper vs.{" "}
              <span className="font-display italic text-[#0058be]">the rest.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden border border-[#c2c6d6]/20"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c2c6d6]/20 bg-[#f2f3ff]">
                    <th className="text-left p-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="text-left p-4 font-heading font-bold text-[#0058be] text-xs uppercase tracking-wider">
                      LeadSnipper
                    </th>
                    <th className="text-left p-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Instantly
                    </th>
                    <th className="text-left p-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Smartlead
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#c2c6d6]/10 ${i % 2 === 0 ? "" : "bg-[#f2f3ff]/30"}`}
                    >
                      <td className="p-4 font-heading font-medium text-[#131b2e]">
                        {row.feature}
                      </td>
                      <td className="p-4 font-body font-medium text-[#0058be]">
                        {row.leadsnipper}
                      </td>
                      <td className="p-4 text-[#727785]">{row.instantly}</td>
                      <td className="p-4 text-[#727785]">{row.smartlead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BYO SES Pricing */}
      <section className="py-24 section-mesh border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full font-mono text-[10px] font-medium text-[#10b981] bg-[#10b981]/[0.06] border border-[#10b981]/20 mb-6">
              BRING YOUR OWN AWS SES
            </span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-4">
              BYO SES pricing.{" "}
              <span className="font-display italic text-[#0058be]">Your AWS, your rules.</span>
            </h2>
            <p className="text-body-md text-[#727785] max-w-2xl mx-auto mt-4">
              Full control — your AWS, your responsibility. You pay AWS for
              sending; you pay LeadSnipper for the platform. No artificial send
              caps beyond fair use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* BYO SES Free */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-7 border border-[#c2c6d6]/20"
            >
              <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-1">
                Try BYO SES
              </h3>
              <p className="text-xs text-[#727785] mb-5">Free — test the flow</p>
              <div className="mb-5">
                <span className="font-heading font-bold text-3xl text-[#0058be]">Free</span>
              </div>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="block w-full py-2.5 rounded-xl text-sm font-heading font-semibold text-center border border-[#0058be]/30 text-[#0058be] hover:bg-[#0058be]/[0.04] transition mb-6"
              >
                Start free
              </Link>
              <ul className="space-y-2.5">
                {[
                  "1,000 contacts · 2,000 emails/month",
                  "Up to 2 verified domains",
                  "Limited active campaigns (enough to validate)",
                  "Connect your own AWS SES",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#424754]">
                    <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* BYO SES Pro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-7 border-2 border-[#0058be] shadow-md relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0058be] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-medium whitespace-nowrap">
                BYO SES Pro
              </div>
              <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-1 mt-1">
                Full platform access
              </h3>
              <p className="text-xs text-[#727785] mb-5">
                Your SES quotas — we don&apos;t cap sends below AWS
              </p>
              <div className="mb-1">
                <span className="font-heading font-bold text-3xl text-[#0058be]">₹999</span>
                <span className="text-sm text-[#727785]">/month</span>
              </div>
              <p className="text-[10px] font-mono text-[#10b981] mb-5">
                Early-bird pricing — will increase
              </p>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="btn-primary block w-full text-sm text-center rounded-xl mb-6"
              >
                Get BYO SES Pro
              </Link>
              <ul className="space-y-2.5">
                {[
                  "Connect your own AWS SES — unlimited domains",
                  "Send as AWS allows (no artificial monthly limit)",
                  "Full campaign builder + core analytics",
                  "Built-in Reoon email verification",
                  "Domain health dashboard",
                  "AI email writer + smart warmup",
                  "PDF analytics reports",
                  "Fair use + abuse monitoring",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#424754]">
                    <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-center text-[10px] font-mono text-[#727785] max-w-2xl mx-auto mt-8 leading-relaxed">
            LeadSnipper provides sending infrastructure and campaign tools.
            Sending reputation, compliance, and deliverability limits are fully
            managed by your AWS SES account and AWS policies.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </>
  );
}
