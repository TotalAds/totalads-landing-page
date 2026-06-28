"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  detectDisplayCurrency,
  displayPlanPrice,
  formatInr,
  formatUsd,
  inrToUsd,
  type DisplayCurrency,
} from "@/lib/currency";

type ProductPlan = {
  id: "starter" | "growth" | "scale";
  name: string;
  description: string;
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
    description: "For founders and small teams doing outbound",
    mailboxesLabel: "10 sending mailboxes",
    volumeLabel: "10,000 emails / month",
    features: [
      "10 sending mailboxes",
      "10,000 emails / month",
      "Custom domain sending",
      "Email warmup (50 / day)",
      "3 custom domains",
      "Built-in AI email writer",
      "Use your Reoon account for verification",
      "Campaign analytics",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    id: "growth",
    name: "Growth",
    description: "For agencies and growing sales teams scaling outbound",
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
    description: "For high-volume teams that need dedicated infrastructure",
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

const productSecondaryPrice = (
  planId: ProductPlan["id"],
  currency: DisplayCurrency,
) => {
  if (currency === "INR")
    return formatUsd(inrToUsd(displayPlanPriceNumber(planId, "INR")));
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

export default function PricingSection() {
  const [displayCurrency, setDisplayCurrency] =
    useState<DisplayCurrency>("INR");

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  const notFor = [
    "Beginners sending 50 emails/day who don't care about deliverability",
    "Newsletter marketing teams (use Mailchimp for that)",
    "Teams looking for the cheapest tool regardless of reputation risk",
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Pay Less Than Instantly. Own More Than Smartlead.
          </h2>

          {/* Anchoring psychology */}
          {/* <div className="max-w-2xl mx-auto mb-4 p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl">
            <p className="text-[#475569] text-base">
              Most tools charge{" "}
              <span className="font-bold text-[#1e293b]">$37–$97/month</span>{" "}
              ({formatInr(3000)} to {formatInr(8000)}) and you{" "}
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
          </div> */}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-3 gap-5"
        >
          {PRODUCT_PLANS.map((plan) => {
            const primary = displayPlanPrice(plan.id, displayCurrency);
            const secondary = productSecondaryPrice(plan.id, displayCurrency);
            return (
              <motion.div
                key={plan.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
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
                <p className="text-[#475569] text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#3b82f6]">
                      {primary}
                    </span>
                    <span className="text-[#475569] text-sm">/month</span>
                  </div>
                  <p className="text-xs text-[#727785] mt-1">
                    {displayCurrency === "INR" ? "USD:" : "INR:"} {secondary}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-[#424754] space-y-0.5 mb-6">
                  <div>{plan.mailboxesLabel}</div>
                  <div>{plan.volumeLabel}</div>
                </div>

                <Link
                  href={
                    plan.cta === "Talk to Sales"
                      ? "/contact"
                      : "https://app.leadsnipper.com/signup?product=leadsnipper"
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
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[#475569] text-sm"
                    >
                      <span className="text-[#22c55e] flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* AWS SES — included note */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl p-6 bg-white border border-[#e2e8f0] shadow-sm">
            <h3 className="text-lg font-bold text-[#1e293b] mb-2">
              All plans include AWS SES
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              You bring your own AWS SES (or let us provision one for you). You
              pay AWS directly for email sending — about{" "}
              <strong>$0.10 per 1,000 emails</strong>. LeadSnipper only charges
              for the platform. Sending reputation, compliance, and
              deliverability limits are fully managed by your AWS SES account
              and AWS policies.
            </p>
          </div>
        </motion.div> */}

        {/* Who This Is NOT For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl">
            <h4 className="text-lg font-bold text-[#1e293b] mb-3">
              LeadSnipper is <span className="text-[#ef4444]">not</span> for
              everyone
            </h4>
            <ul className="space-y-2">
              {notFor.map((item) => (
                <li
                  key={item}
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
