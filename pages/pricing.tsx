"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";
import {
  detectDisplayCurrency,
  displayPlanPrice,
  formatAmount,
  formatInr,
  formatUsd,
  inrToUsd,
  type DisplayCurrency,
} from "@/lib/currency";

const Check = () => (
  <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

type ProductPlan = {
  id: "starter" | "growth" | "scale";
  name: string;
  desc: string;
  mailboxesLabel: string;
  volumeLabel: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
};

const PRODUCT_PLANS: ProductPlan[] = [
  {
    id: "starter",
    name: "Starter",
    desc: "For founders and small teams doing outbound.",
    mailboxesLabel: "10 sending mailboxes",
    volumeLabel: "10,000 emails / month",
    features: [
      "10 sending mailboxes",
      "10,000 emails / month",
      "Custom domain sending",
      "Email warmup (50 / day)",
      "3 custom domains",
      "Built-in AI email writer",
      "BYO Reoon email verification",
      "Campaign analytics",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    id: "growth",
    name: "Growth",
    desc: "For agencies and growing sales teams scaling outbound.",
    mailboxesLabel: "50 sending mailboxes",
    volumeLabel: "100,000 emails / month",
    features: [
      "50 sending mailboxes",
      "100,000 emails / month",
      "Everything in Starter",
      "Unlimited custom domains",
      "Unlimited warmup",
      "Advanced analytics + PDF export",
      "Smart send-time scheduling",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "scale",
    name: "Scale",
    desc: "For high-volume teams that need dedicated infrastructure.",
    mailboxesLabel: "Unlimited sending mailboxes",
    volumeLabel: "500,000 emails / month",
    features: [
      "Unlimited sending mailboxes",
      "500,000 emails / month",
      "Everything in Growth",
      "Dedicated SES setup",
      "Dedicated CSM + onboarding",
      "Custom API integrations",
      "SLA-backed deliverability",
      "Quarterly strategy review",
    ],
    cta: "Talk to Sales",
    highlighted: false,
    badge: null,
  },
];

type ServiceTier = {
  name: string;
  inr: number | "Custom";
  desc: string;
  badge: string | null;
  features: string[];
};

const SERVICE_TIERS: ServiceTier[] = [
  {
    name: "Pipeline Starter",
    inr: 30000,
    desc: "2 outbound channels + CRM + monthly strategy call.",
    badge: null,
    features: [
      "Email + LinkedIn outbound",
      "CRM setup & automation",
      "Monthly strategy call",
      "Weekly pipeline report",
      "ICP research",
    ],
  },
  {
    name: "Pipeline Pro",
    inr: 60000,
    desc: "Full outbound engine + AI automation + weekly reviews.",
    badge: "Popular",
    features: [
      "Everything in Starter",
      "AI lead scoring",
      "Multi-channel sequences",
      "Weekly strategy reviews",
      "Custom automation",
      "Meeting booking",
    ],
  },
  {
    name: "Pipeline Enterprise",
    inr: "Custom",
    desc: "Dedicated pod — full GTM team extension.",
    badge: "White Glove",
    features: [
      "Everything in Pro",
      "Dedicated SDR team",
      "Custom integrations",
      "Brand content creation",
      "Executive reporting",
      "Quarterly business reviews",
    ],
  },
];

const MANAGED_SCS = {
  name: "Managed SCS",
  inr: 4999,
  desc: "We configure, warm, and monitor your sending infrastructure end-to-end. Add to any paid plan.",
  features: [
    "Dedicated sending IP setup",
    "SPF / DKIM / DMARC hardening",
    "Continuous warmup (200+ / day)",
    "Inbox placement monitoring",
    "Monthly deliverability audit",
    "Reply-to routing + rotation",
  ],
};

const NOT_FOR = [
  "Beginners sending 50 emails / day who don't care about deliverability",
  "Newsletter marketing teams (use Mailchimp for that)",
  "Teams looking for the cheapest tool regardless of reputation risk",
];

const productSecondaryPrice = (
  planId: ProductPlan["id"],
  currency: DisplayCurrency,
) => {
  if (currency === "INR") return formatUsd(inrToUsd(displayPlanPriceNumber(planId, "INR")));
  return formatInr(displayPlanPriceNumber(planId, "USD"));
};

const displayPlanPriceNumber = (
  planId: ProductPlan["id"],
  currency: DisplayCurrency,
): number => {
  const value = displayPlanPrice(planId, currency);
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

export default function PricingPage() {
  const [mode, setMode] = useState<"product" | "service">("product");
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrency>("INR");

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  return (
    <>
      <SEO pageKey="pricing" structuredDataTypes={["softwareApplication"]} />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag justify-center mb-6">Pricing</span>
            <h1 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-4">
              Pay less than Instantly.{" "}
              <span className="font-display italic text-[#0058be]">
                Own more than Smartlead.
              </span>
            </h1>
            <p className="text-body-md text-[#727785] max-w-lg mx-auto">
              Three paid tiers. Mailbox-aware limits. Built for deliverability-first outbound teams.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setMode("product")}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all ${
                  mode === "product"
                    ? "bg-[#0058be] text-white shadow-md"
                    : "bg-white text-[#727785] border border-[#c2c6d6]/40 hover:bg-[#f2f3ff]"
                }`}
              >
                Self-Serve Platform
              </button>
              <button
                onClick={() => setMode("service")}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all ${
                  mode === "service"
                    ? "bg-[#b75b00] text-white shadow-md"
                    : "bg-white text-[#727785] border border-[#c2c6d6]/40 hover:bg-[#f2f3ff]"
                }`}
              >
                Done-for-you Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Pricing */}
      {mode === "product" && (
        <section className="py-16 bg-[#f2f3ff]/30 border-t border-[#c2c6d6]/20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-5"
            >
              {PRODUCT_PLANS.map((plan) => {
                const primary = displayPlanPrice(plan.id, displayCurrency);
                const secondary = productSecondaryPrice(plan.id, displayCurrency);
                return (
                  <div
                    key={plan.id}
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
                    <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-1 mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#727785] mb-5">{plan.desc}</p>

                    <div className="mb-5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-bold text-3xl text-[#0058be]">
                          {primary}
                        </span>
                        <span className="text-sm text-[#727785]">/mo</span>
                      </div>
                      <div className="text-xs text-[#727785] mt-1">
                        {displayCurrency === "INR" ? "USD:" : "INR:"} {secondary}
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-[#424754] space-y-0.5 mb-5">
                      <div>{plan.mailboxesLabel}</div>
                      <div>{plan.volumeLabel}</div>
                    </div>

                    <Link
                      href={
                        plan.cta === "Talk to Sales"
                          ? "/contact"
                          : "https://app.leadsnipper.com/signup"
                      }
                      className={`block w-full py-2.5 rounded-xl text-sm font-heading font-semibold text-center transition mb-6 ${
                        plan.highlighted
                          ? "btn-primary"
                          : "border border-[#0058be]/30 text-[#0058be] hover:bg-[#0058be]/[0.04]"
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-[#424754]"
                        >
                          <Check /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>

            {/* Managed SCS Add-on */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 glass-card rounded-2xl p-7 border border-[#c2c6d6]/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-bold text-lg text-[#131b2e]">
                      {MANAGED_SCS.name}
                    </h3>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#0058be]/10 text-[#0058be]">
                      Add-on
                    </span>
                  </div>
                  <p className="text-xs text-[#727785] max-w-2xl">
                    {MANAGED_SCS.desc}
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <div className="flex items-baseline gap-2 md:justify-end">
                    <span className="font-heading font-bold text-2xl text-[#0058be]">
                      {formatAmount(MANAGED_SCS.inr, displayCurrency)}
                    </span>
                    <span className="text-sm text-[#727785]">/mo</span>
                  </div>
                  <div className="text-xs text-[#727785] mt-1">
                    {displayCurrency === "INR"
                      ? `USD: ${formatUsd(inrToUsd(MANAGED_SCS.inr))}`
                      : `INR: ${formatInr(MANAGED_SCS.inr)}`}
                  </div>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mt-5">
                {MANAGED_SCS.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-[#424754]"
                  >
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="border border-[#0058be]/30 text-[#0058be] hover:bg-[#0058be]/[0.04] px-5 py-2.5 rounded-xl text-sm font-heading font-semibold transition"
                >
                  Talk to Sales
                </Link>
                <Link
                  href="https://app.leadsnipper.com/signup"
                  className="text-sm font-heading font-semibold text-[#727785] hover:text-[#0058be] self-center"
                >
                  Or start a 14-day trial →
                </Link>
              </div>
            </motion.div>

            {/* Not For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 max-w-2xl mx-auto"
            >
              <div className="glass-card p-6 rounded-2xl border border-[#c2c6d6]/20">
                <h4 className="font-heading font-bold text-sm text-[#131b2e] mb-3">
                  LeadSnipper is{" "}
                  <span className="text-[#ba1a1a]">not</span> for everyone
                </h4>
                <ul className="space-y-2">
                  {NOT_FOR.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#727785]"
                    >
                      <X className="w-3.5 h-3.5 text-[#ba1a1a] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Service Pricing */}
      {mode === "service" && (
        <section className="py-16 bg-[#f2f3ff]/30 border-t border-[#c2c6d6]/20">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-5"
            >
              {SERVICE_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative glass-card rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    tier.badge === "Popular"
                      ? "border-2 border-[#b75b00] shadow-md"
                      : "border border-[#c2c6d6]/20"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b75b00] text-white px-3 py-0.5 rounded-full text-[10px] font-mono font-medium whitespace-nowrap">
                      {tier.badge}
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-1 mt-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#727785] mb-5">{tier.desc}</p>
                  <div className="mb-5">
                    {typeof tier.inr === "number" ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading font-bold text-3xl text-[#b75b00]">
                            {formatAmount(tier.inr, displayCurrency)}
                          </span>
                          <span className="text-sm text-[#727785]">/mo</span>
                        </div>
                        <div className="text-xs text-[#727785] mt-1">
                          {displayCurrency === "INR"
                            ? `USD: ${formatUsd(inrToUsd(tier.inr))}`
                            : `INR: ${formatInr(tier.inr)}`}
                        </div>
                      </>
                    ) : (
                      <span className="font-heading font-bold text-2xl text-[#b75b00]">
                        {tier.inr}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className="btn-amber block w-full text-sm text-center rounded-xl mb-6"
                  >
                    Book audit →
                  </Link>
                  <ul className="space-y-2.5">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-[#424754]"
                      >
                        <Check /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection />

      <Footer />
    </>
  );
}
