"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  detectDisplayCurrency,
  formatInr,
  formatUsd,
  inrToUsd,
  type DisplayCurrency,
} from "@/lib/currency";

export default function PricingSection() {
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrency>("INR");

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  const displayAmount = (inr: number) =>
    displayCurrency === "INR" ? formatInr(inr) : formatUsd(inrToUsd(inr));

  const dualAmount = (inr: number) =>
    `${formatInr(inr)} (${formatUsd(inrToUsd(inr))})`;

  const plans = [
    {
      name: "Trial",
      price: 0,
      description: "Test the full platform — 1 month free",
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
      description: "For founders and small teams doing outbound",
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
      description: "For agencies and growing sales teams",
      features: [
        "15,000 emails/month",
        "10,000 contacts",
        "Unlimited domains",
        "Unlimited warmup",
        "Advanced analytics + PDF export",
        "Priority support",
        "Managed SES — we run sending & reputation for you",
        "AI writer + smart scheduling",
      ],
      cta: "Get Started",
      highlighted: false,
      badge: "Early Bird — 50% Off",
    },
    {
      name: "Custom",
      price: "Contact Us",
      description: "Enterprise — your infrastructure, your rules",
      features: [
        "Unlimited emails",
        "Unlimited contacts",
        "Unlimited domains",
        "Unlimited warmup",
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

  const notFor = [
    "Beginners sending 50 emails/day who don't care about deliverability",
    "Newsletter marketing teams (use Mailchimp for that)",
    "Teams looking for the cheapest tool regardless of reputation risk",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#22c55e] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            Early-Bird Pricing — Limited Time
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Pay Less Than Instantly. Own More Than Smartlead.
          </h2>

          {/* Anchoring psychology */}
          <div className="max-w-2xl mx-auto mb-4 p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
            <p className="text-[#475569] text-base">
              Most tools charge{" "}
              <span className="font-bold text-[#1e293b]">$37–$97/month</span>{" "}
              ({dualAmount(3000)} to {dualAmount(8000)}) and you{" "}
              <span className="font-bold text-[#ef4444]">
                don&apos;t own your infrastructure
              </span>
              . AWS SES costs{" "}
              <span className="font-bold text-[#22c55e]">
                {displayCurrency === "INR"
                  ? `${formatInr(0.84)} per 1,000 emails`
                  : `${formatUsd(inrToUsd(0.84))} per 1,000 emails`}
              </span>
              . The math speaks for itself.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-4"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#3b82f6]/10 to-[#22c55e]/10 border-2 border-[#3b82f6] shadow-lg"
                  : "bg-white border-2 border-[#f0f0f0] shadow-md hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#3b82f6] to-[#22c55e] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#1e293b] mb-2">
                {plan.name}
              </h3>
              <p className="text-[#475569] text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <>
                    {plan.originalPrice && (
                      <div className="mb-2">
                        <span className="text-lg text-[#64748b] line-through">
                          {displayAmount(plan.originalPrice)}
                        </span>
                        <span className="ml-2 text-sm text-[#22c55e] font-bold">
                          Save{" "}
                          {Math.round(
                            ((plan.originalPrice - plan.price) /
                              plan.originalPrice) *
                              100
                          )}
                          %
                        </span>
                      </div>
                    )}
                    <span className="text-4xl font-bold text-[#3b82f6]">
                      {plan.price === 0 ? "Free" : displayAmount(plan.price)}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-[#475569] text-sm">/month</span>
                    )}
                    {plan.originalPrice && (
                      <div className="mt-1 text-xs text-[#22c55e] font-semibold">
                        Early-bird pricing — will increase
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-4xl font-bold text-[#3b82f6]">
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
                className={`block w-full py-3 rounded-lg font-semibold text-center transition mb-8 ${
                  plan.highlighted
                    ? "bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/30"
                    : "border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#475569] text-sm"
                  >
                    <span className="text-[#22c55e] flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* BYO SES — separate plan line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <div className="inline-block bg-[#f0fdf4] text-[#15803d] text-xs font-bold px-3 py-1 rounded-full mb-3">
              BRING YOUR OWN AWS SES
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-2">
              BYO SES pricing
            </h3>
            <p className="text-[#475569] max-w-2xl mx-auto text-sm md:text-base">
              Full control — your AWS, your responsibility. You pay AWS for
              sending; you pay LeadSnipper for the platform. No artificial send
              caps from us beyond fair use and keeping the product safe for
              legitimate teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 bg-white border-2 border-[#e2e8f0] shadow-md">
              <h4 className="text-xl font-bold text-[#1e293b] mb-1">
                Try BYO SES
              </h4>
              <p className="text-[#64748b] text-sm mb-4">Free — test the flow</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#3b82f6]">Free</span>
              </div>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="block w-full py-3 rounded-lg font-semibold text-center transition mb-6 border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6]/10"
              >
                Start free
              </Link>
              <ul className="space-y-3 text-[#475569] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  1,000 contacts · 2,000 emails/month
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Up to 2 verified domains
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Limited active campaigns (enough to validate)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Connect your own AWS SES
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#3b82f6]/10 to-[#22c55e]/10 border-2 border-[#3b82f6] shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b82f6] to-[#22c55e] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                BYO SES Pro
              </div>
              <h4 className="text-xl font-bold text-[#1e293b] mb-1 mt-2">
                Full platform access
              </h4>
              <p className="text-[#64748b] text-sm mb-4">
                Your SES quotas — we don&apos;t cap sends below AWS
              </p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#3b82f6]">
                  {displayAmount(999)}
                </span>
                <span className="text-[#475569] text-sm">/month</span>
              </div>
              <p className="text-xs text-[#64748b] mb-6">
                Early-bird pricing where applicable
              </p>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="block w-full py-3 rounded-lg font-semibold text-center transition mb-6 bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/30"
              >
                Get BYO SES Pro
              </Link>
              <ul className="space-y-3 text-[#475569] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Connect your own AWS SES — unlimited domains in LeadSnipper
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Send as AWS allows (no artificial monthly send limit from us)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Full campaign builder + core analytics
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e] flex-shrink-0">✓</span>
                  Fair use + abuse monitoring; extreme misuse may result in
                  suspension
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[#64748b] text-xs max-w-2xl mx-auto mt-8 leading-relaxed">
            LeadSnipper provides sending infrastructure and campaign tools.
            Sending reputation, compliance, and deliverability limits are fully
            managed by your AWS SES account and AWS policies.
          </p>
        </motion.div>

        {/* Who This Is NOT For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl">
            <h4 className="text-lg font-bold text-[#1e293b] mb-3">
              LeadSnipper is <span className="text-[#ef4444]">not</span> for
              everyone
            </h4>
            <ul className="space-y-2">
              {notFor.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[#475569] text-sm"
                >
                  <X className="w-4 h-4 text-[#ef4444] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#1e293b] text-sm font-medium mt-4">
              If you&apos;re serious about cold outbound at scale — and you want
              to own your infrastructure — this is built for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
