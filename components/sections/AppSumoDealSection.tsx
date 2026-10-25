"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

import { APPSUMO_DEAL_URL } from "@/lib/launchLinks";

const SHARED_FEATURES = [
  "Continuous Google Sheets sync",
  "Multi-sender volume split",
  "PDF export reporting",
  "Custom webhooks",
  "Reoon verification (BYO account)",
  "Multi-step sequences + Spintax",
  "InboxGuardrail + deliverability auto-pause",
  "Real-time analytics",
];

type AppsumoPlan = {
  id: "starter" | "growth" | "scale";
  name: string;
  price: number;
  highlighted: boolean;
  quotas: string[];
};

const PLANS: AppsumoPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 39,
    highlighted: false,
    quotas: [
      "10,000 emails/month",
      "5 connected senders",
      "5 connected domains",
      "1 workspace",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 79,
    highlighted: true,
    quotas: [
      "50,000 emails/month",
      "20 connected senders",
      "15 connected domains",
      "3 workspaces",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: 159,
    highlighted: false,
    quotas: [
      "150,000 emails/month",
      "Unlimited senders",
      "Unlimited domains",
      "10 workspaces",
    ],
  },
];

export default function AppSumoDealSection() {
  return (
    <section
      id="appsumo-deal"
      className="relative overflow-hidden border-y border-[#1a1a1a]/10 bg-[#131b2e] py-16 sm:py-20"
      aria-labelledby="appsumo-deal-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 40%, rgba(255, 204, 0, 0.14), transparent 55%), radial-gradient(ellipse 50% 50% at 90% 20%, rgba(0, 88, 190, 0.22), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/35 bg-[#ffcc00]/10 px-3 py-1">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffcc00]">
              AppSumo exclusive
            </span>
            <span className="rounded bg-[#ffcc00] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-[#131b2e]">
              Lifetime
            </span>
          </div>

          <h2
            id="appsumo-deal-heading"
            className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Choose the plan that&apos;s right for you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Feel secure in your purchase with AppSumo&apos;s 60-day money-back
            guarantee. Pay once — own LeadSnipper forever.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 * index }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-md sm:p-7 ${
                plan.highlighted
                  ? "border-[#ffcc00]/55 bg-[#ffcc00]/[0.08] shadow-[0_0_0_1px_rgba(255,204,0,0.2)]"
                  : "border-white/10 bg-white/[0.06]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffcc00] px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-[#131b2e]">
                  Best value
                </span>
              )}

              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#ffcc00]">
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-heading text-5xl font-extrabold leading-none tracking-tight text-white">
                  ${plan.price}
                </span>
                <span className="mb-1 text-sm font-medium text-white/50">
                  Lifetime access
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 border-b border-white/10 pb-6">
                {plan.quotas.map((quota) => (
                  <li
                    key={quota}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#ffcc00]"
                      strokeWidth={2.5}
                    />
                    {quota}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex-1 space-y-2">
                {SHARED_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[13px] leading-snug text-white/60"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35"
                      strokeWidth={2.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={APPSUMO_DEAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-heading text-[14px] font-bold transition hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-[#ffcc00] text-[#131b2e] hover:bg-[#ffe066] hover:shadow-[0_12px_32px_rgba(255,204,0,0.35)]"
                    : "border border-white/20 bg-white/5 text-white hover:border-[#ffcc00]/50 hover:bg-white/10"
                }`}
              >
                Buy now — ${plan.price}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12px] text-white/45">
          AppSumo Radar · 60-day refund · Plans from $39 to Scale at $159
        </p>
      </div>
    </section>
  );
}
