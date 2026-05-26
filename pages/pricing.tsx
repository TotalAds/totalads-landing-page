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

export default function PricingPage() {
  const [mode, setMode] = useState<"product" | "service">("product");
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrency>("INR");

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  const displayAmount = (inr: number) =>
    displayCurrency === "INR" ? formatInr(inr) : formatUsd(inrToUsd(inr));

  const plans = [
    {
      name: "Trial",
      price: 0,
      desc: "Test the full platform — 1 month free",
      features: [
        "1,000 emails/month",
        "500 contacts",
        "Basic analytics",
        "API access",
        "Domain verification",
        "1 month trial period",
      ],
      cta: "Start Free Trial",
      highlighted: false,
      badge: null,
    },
    {
      name: "Starter",
      price: 499,
      originalPrice: 999,
      desc: "For founders and small teams doing outbound",
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
      cta: "Get Started",
      highlighted: true,
      badge: "Most Popular — 50% Off",
    },
    {
      name: "Business",
      price: 999,
      originalPrice: 1999,
      desc: "For agencies and growing sales teams",
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
      cta: "Get Started",
      highlighted: false,
      badge: "Early Bird — 50% Off",
    },
    {
      name: "Custom",
      price: "Contact Us",
      desc: "Enterprise — your infrastructure, your rules",
      features: [
        "Unlimited emails",
        "Unlimited contacts",
        "Unlimited domains",
        "Dedicated support",
        "Custom API integrations",
        "Dedicated SES setup",
        "Custom onboarding",
      ],
      cta: "Talk to Us",
      highlighted: false,
      badge: "Enterprise",
    },
  ];

  const serviceTiers = [
    {
      name: "Pipeline Starter",
      price: 30000,
      desc: "2 outbound channels + CRM + 1 monthly strategy call",
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
      price: 60000,
      desc: "Full outbound engine + AI automation + weekly reviews",
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
      price: "Custom",
      desc: "Dedicated pod — full GTM team extension",
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

  const notFor = [
    "Beginners sending 50 emails/day who don't care about deliverability",
    "Newsletter marketing teams (use Mailchimp for that)",
    "Teams looking for the cheapest tool regardless of reputation risk",
  ];

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
              Early-bird pricing. Start free. Upgrade when you&apos;re ready.
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
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {plans.map((plan) => (
                <div
                  key={plan.name}
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
                    {typeof plan.price === "number" ? (
                      <>
                        {plan.originalPrice && (
                          <div className="mb-1">
                            <span className="text-sm text-[#727785] line-through">
                              {displayAmount(plan.originalPrice)}
                            </span>
                            <span className="ml-2 text-[10px] font-mono text-[#10b981] font-medium">
                              SAVE{" "}
                              {Math.round(
                                ((plan.originalPrice - plan.price) /
                                  plan.originalPrice) *
                                  100
                              )}
                              %
                            </span>
                          </div>
                        )}
                        <span className="font-heading font-bold text-3xl text-[#0058be]">
                          {plan.price === 0 ? "Free" : displayAmount(plan.price)}
                        </span>
                        {plan.price > 0 && (
                          <span className="text-sm text-[#727785]">/mo</span>
                        )}
                      </>
                    ) : (
                      <span className="font-heading font-bold text-2xl text-[#0058be]">
                        {plan.price}
                      </span>
                    )}
                  </div>

                  <Link
                    href={
                      plan.cta === "Talk to Us"
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
              ))}
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
                  {notFor.map((item, i) => (
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
              {serviceTiers.map((tier) => (
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
                    {typeof tier.price === "number" ? (
                      <>
                        <span className="font-heading font-bold text-3xl text-[#b75b00]">
                          {displayAmount(tier.price)}
                        </span>
                        <span className="text-sm text-[#727785]">/mo</span>
                      </>
                    ) : (
                      <span className="font-heading font-bold text-2xl text-[#b75b00]">
                        {tier.price}
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
