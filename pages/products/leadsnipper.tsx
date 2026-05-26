"use client";

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
import React, { useState } from "react";

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

const Check = () => (
  <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const normalPlans = [
  {
    name: "Trial",
    price: "Free",
    desc: "Test the full platform — 1 month free",
    badge: null,
    highlighted: false,
    cta: "Start Free",
    features: [
      "1,000 emails/month",
      "500 contacts",
      "Basic analytics",
      "API access",
      "Domain verification",
      "1 month trial period",
    ],
  },
  {
    name: "Starter",
    price: "₹499",
    originalPrice: "₹999",
    desc: "For founders and small teams doing outbound",
    badge: "Most Popular — 50% Off",
    highlighted: true,
    cta: "Get Started",
    features: [
      "5,000 emails/month",
      "3,000 contacts",
      "Custom domain sending",
      "Email warmup (50/day)",
      "Full campaign analytics",
      "3 custom domains",
      "Built-in verification",
      "AI email writer",
    ],
  },
  {
    name: "Business",
    price: "₹999",
    originalPrice: "₹1,999",
    desc: "For agencies and growing sales teams",
    badge: "Early Bird — 50% Off",
    highlighted: false,
    cta: "Get Started",
    features: [
      "15,000 emails/month",
      "10,000 contacts",
      "Unlimited domains",
      "Unlimited warmup",
      "Advanced analytics + PDF export",
      "Priority support",
      "Managed SES",
      "AI writer + smart scheduling",
    ],
  },
  {
    name: "Custom",
    price: "Talk to us",
    desc: "Enterprise — your infrastructure, your rules",
    badge: "Enterprise",
    highlighted: false,
    cta: "Contact Us",
    isCustom: true,
    features: [
      "Unlimited emails",
      "Unlimited contacts",
      "Unlimited domains",
      "Dedicated support",
      "Custom API integrations",
      "Dedicated SES setup",
      "Custom onboarding",
    ],
  },
];

const byoPlans = [
  {
    name: "BYO SES Free",
    price: "Free",
    desc: "Connect your own AWS SES — validate the flow",
    badge: null,
    highlighted: false,
    cta: "Start free",
    features: [
      "1,000 contacts · 2,000 emails/month",
      "Up to 2 verified domains",
      "Limited active campaigns",
      "Connect your own AWS SES",
    ],
  },
  {
    name: "BYO SES Pro",
    price: "₹999",
    suffix: "/month",
    note: "Early-bird — will increase",
    desc: "Your SES quotas — we don't cap sends below AWS limits",
    badge: "BYO SES Pro",
    highlighted: true,
    cta: "Get BYO SES Pro",
    features: [
      "Connect your own AWS SES — unlimited domains",
      "Send as AWS allows (no artificial monthly cap)",
      "Full campaign builder + core analytics",
      "Built-in Reoon email verification",
      "Domain health dashboard",
      "AI email writer + smart warmup",
      "PDF analytics reports",
      "Fair use + abuse monitoring",
    ],
  },
];

function LeadSnipperPricing() {
  const [tab, setTab] = useState<"normal" | "byo">("normal");

  return (
    <section className="py-24 section-mesh border-t border-[#c2c6d6]/20">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-tag justify-center mb-6">Pricing</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Simple pricing.{" "}
            <span className="font-display italic text-[#0058be]">Two ways to run it.</span>
          </h2>
          <p className="text-body-md text-[#727785] max-w-xl mx-auto mt-4">
            Use LeadSnipper&apos;s managed infrastructure, or bring your own AWS SES for full control and lower unit cost.
          </p>

          {/* Tab toggle */}
          <div className="inline-flex items-center gap-1 mt-8 bg-white border border-[#c2c6d6]/30 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setTab("normal")}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                tab === "normal"
                  ? "bg-[#0058be] text-white shadow"
                  : "text-[#727785] hover:text-[#131b2e]"
              }`}
            >
              Managed Hosting
            </button>
            <button
              onClick={() => setTab("byo")}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                tab === "byo"
                  ? "bg-[#10b981] text-white shadow"
                  : "text-[#727785] hover:text-[#131b2e]"
              }`}
            >
              BYO AWS SES
            </button>
          </div>
        </motion.div>

        {/* Normal plans */}
        {tab === "normal" && (
          <motion.div
            key="normal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {normalPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`relative glass-card rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-2 border-[#0058be] shadow-md"
                    : "border border-[#c2c6d6]/20"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0058be] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-medium whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-1 mt-1">{plan.name}</h3>
                <p className="text-xs text-[#727785] mb-4">{plan.desc}</p>
                <div className="mb-4">
                  {"originalPrice" in plan && (
                    <div className="mb-0.5">
                      <span className="text-xs text-[#727785] line-through">{plan.originalPrice}</span>
                      <span className="ml-2 text-[10px] font-mono text-[#10b981] font-medium">SAVE 50%</span>
                    </div>
                  )}
                  <span className="font-heading font-bold text-2xl text-[#0058be]">{plan.price}</span>
                  {!("isCustom" in plan) && plan.price !== "Free" && (
                    <span className="text-sm text-[#727785]">/mo</span>
                  )}
                </div>
                <Link
                  href={"isCustom" in plan ? "https://cal.com/heyrehan/30min" : "https://app.leadsnipper.com/signup"}
                  target={"isCustom" in plan ? "_blank" : undefined}
                  rel={"isCustom" in plan ? "noopener noreferrer" : undefined}
                  className={`block w-full py-2.5 rounded-xl text-sm font-heading font-semibold text-center transition mb-5 ${
                    plan.highlighted
                      ? "btn-primary"
                      : "border border-[#0058be]/30 text-[#0058be] hover:bg-[#0058be]/[0.04]"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#424754]">
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* BYO plans */}
        {tab === "byo" && (
          <motion.div
            key="byo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {byoPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className={`relative glass-card rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    plan.highlighted
                      ? "border-2 border-[#10b981] shadow-md"
                      : "border border-[#c2c6d6]/20"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10b981] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-medium whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-1 mt-1">{plan.name}</h3>
                  <p className="text-xs text-[#727785] mb-4">{plan.desc}</p>
                  <div className="mb-1">
                    <span className="font-heading font-bold text-2xl text-[#10b981]">{plan.price}</span>
                    {"suffix" in plan && <span className="text-sm text-[#727785]">{plan.suffix}</span>}
                  </div>
                  {"note" in plan && (
                    <p className="text-[10px] font-mono text-[#10b981] mb-4">{plan.note}</p>
                  )}
                  <Link
                    href="https://app.leadsnipper.com/signup"
                    className={`block w-full py-2.5 rounded-xl text-sm font-heading font-semibold text-center transition mb-5 ${
                      plan.highlighted
                        ? "bg-[#10b981] hover:bg-[#059669] text-white"
                        : "border border-[#10b981]/40 text-[#10b981] hover:bg-[#10b981]/[0.04]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#424754]">
                        <Check /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-[10px] font-mono text-[#727785] max-w-2xl mx-auto mt-8 leading-relaxed">
              With BYO SES, you pay AWS directly for email sending (~$0.10 per 1,000 emails).
              LeadSnipper only charges for platform access. Sending reputation and compliance are managed by your AWS account.
            </p>

            <div className="flex justify-center mt-6">
              <Link
                href="/savings-calculator"
                className="text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] underline underline-offset-4 transition"
              >
                Calculate your savings vs Instantly / Smartlead →
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function LeadSnipperProduct() {
  return (
    <>
      <SEO pageKey="leadsnipper" structuredDataTypes={["softwareApplication", "product"]} />
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

      {/* Pricing — Tabbed: Normal + BYO */}
      <LeadSnipperPricing />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </>
  );
}
