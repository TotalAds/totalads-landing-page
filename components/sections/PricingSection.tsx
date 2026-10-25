"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import {
  displayPlanPrice,
  displayPlanSecondaryPrice,
  type DisplayCurrency,
} from "@/lib/currency";
import { APPSUMO_DEAL_URL } from "@/lib/launchLinks";
import { useUserRegion } from "@/hooks/useUserRegion";

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
    description: "For small teams getting started with outbound",
    mailboxesLabel: "10 sending mailboxes",
    volumeLabel: "10,000 emails / month",
    features: [
      "3 custom domains",
      "Custom domain sending",
      "Campaign analytics",
      "Core cold-email workflows",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    id: "growth",
    name: "Growth",
    description: "For agencies managing more campaigns",
    mailboxesLabel: "50 sending mailboxes",
    volumeLabel: "100,000 emails / month",
    features: [
      "10 custom domains",
      "Everything in Starter",
      "Multi-sender volume allocation",
      "Priority support",
    ],
    cta: "Choose Growth",
    highlighted: true,
    badge: "For agencies",
  },
  {
    id: "scale",
    name: "Scale",
    description: "For high-volume outbound operations",
    mailboxesLabel: "Unlimited sending mailboxes",
    volumeLabel: "500,000 emails / month",
    features: [
      "Unlimited custom domains",
      "Everything in Growth",
      "PDF campaign export",
      "Developer REST API and custom webhooks",
      "Continuous Google Sheets sync",
    ],
    cta: "Talk to Sales",
    highlighted: false,
    badge: null,
  },
];

export default function PricingSection() {
  const { isIndia } = useUserRegion();
  const displayCurrency: DisplayCurrency = isIndia ? "INR" : "USD";

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
          <span className="section-tag justify-center mb-6">Pricing</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-4">
            Start small. Scale when you need to.
          </h2>
          <p className="text-body-md text-[#727785] max-w-2xl mx-auto">
            Choose the plan that fits your sending volume and workflow.
          </p>
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
            const secondary = displayPlanSecondaryPrice(plan.id, displayCurrency);
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

        <p className="text-center text-sm text-[#727785] mt-10 max-w-2xl mx-auto">
          Feature availability and limits depend on the selected plan. Review the current pricing page for full details.
        </p>

        <div className="mt-12 max-w-2xl mx-auto text-center rounded-2xl border border-[#c2c6d6]/30 bg-white px-6 py-8">
          <h3 className="font-heading font-bold text-xl text-[#131b2e]">
            Prefer lifetime access?
          </h3>
          <p className="text-sm text-[#424754] mt-3 leading-relaxed">
            LeadSnipper lifetime licenses are also available through AppSumo, with sending limits and features based on the selected tier.
          </p>
          <Link
            href={APPSUMO_DEAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost rounded-full text-sm mt-6 inline-flex"
          >
            Explore Lifetime Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
