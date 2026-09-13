"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

import { APPSUMO_DEAL_URL } from "@/lib/launchLinks";

const PERKS = [
  "Lifetime access — pay once, own forever",
  "Built-in Reoon verification + deliverability guardrails",
  "Refundable up to 60 days on AppSumo",
  "Plans from $39 · Growth $79 · Scale $159",
];

export default function AppSumoDealSection() {
  return (
    <section
      id="appsumo-deal"
      className="relative overflow-hidden border-y border-[#1a1a1a]/10 bg-[#131b2e] py-16 sm:py-20"
      aria-labelledby="appsumo-deal-heading"
    >
      {/* Atmosphere — warm deal glow, not flat black */}
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/35 bg-[#ffcc00]/10 px-3 py-1">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffcc00]">
                AppSumo exclusive
              </span>
              <span className="rounded bg-[#ffcc00] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-[#131b2e]">
                −91%
              </span>
            </div>

            <h2
              id="appsumo-deal-heading"
              className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Lock in LeadSnipper for{" "}
              <span className="font-display italic text-[#ffcc00]">$39</span>
              <span className="block mt-2 text-white/90">
                Lifetime deal. Zero monthly rent.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Own your outbound stack forever — verification, guarded
              deliverability, and multi-inbox sending — for less than one month
              of most cold email tools.{" "}
              <span className="font-medium text-white">
                One payment. Lifetime access. From $39.
              </span>
            </p>

            <ul className="mt-7 space-y-3">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2.5 text-sm text-white/80 sm:text-[15px]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ffcc00]"
                    strokeWidth={2.5}
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#ffcc00]">
                Limited lifetime offer
              </p>
              <p className="mt-3 font-heading text-sm font-medium text-white/60">
                Starter plan · normally $456/yr
              </p>
              <div className="mt-2 flex items-end gap-3">
                <span className="font-heading text-6xl font-extrabold leading-none tracking-tight text-white sm:text-7xl">
                  $39
                </span>
                <div className="mb-1.5 space-y-0.5">
                  <span className="block text-lg text-white/40 line-through">
                    $456
                  </span>
                  <span className="block text-sm font-semibold text-[#ffcc00]">
                    Pay once. Own forever.
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/65">
                Stop bleeding $37–$97 every month on rented sending tools. Grab
                the LeadSnipper lifetime deal on AppSumo and keep inbox access
                for good.
              </p>

              <Link
                href={APPSUMO_DEAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffcc00] px-6 py-3.5 font-heading text-[15px] font-bold text-[#131b2e] transition hover:-translate-y-0.5 hover:bg-[#ffe066] hover:shadow-[0_12px_32px_rgba(255,204,0,0.35)]"
              >
                Get lifetime access — $39
              </Link>

              <p className="mt-3 text-center text-[11px] text-white/45">
                AppSumo Radar · 60-day refund · Plans up to Scale at $159
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
