"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useMemo, useState } from "react";

import {
  type CompetitorSlug,
  COMPETITOR_OPTIONS,
  competitors,
  getCompetitorMonthlyCostUsd,
  getLeadSnipperMonthlyCostUsd,
} from "@/lib/competitorPricing";
import { useUserRegion } from "@/hooks/useUserRegion";
import { ArrowRight, ChevronDown, TrendingDown } from "lucide-react";

interface SavingsCalculatorProps {
  compact?: boolean;
}

const DEFAULT_EMAILS = 50_000;
const DEFAULT_TOOL: CompetitorSlug = "instantly";

export default function SavingsCalculator({
  compact = false,
}: SavingsCalculatorProps) {
  const { isIndia } = useUserRegion();
  const [monthlyEmails, setMonthlyEmails] = useState(DEFAULT_EMAILS);
  const [selectedTool, setSelectedTool] = useState<CompetitorSlug>(DEFAULT_TOOL);

  const fmt = (usd: number) =>
    isIndia
      ? `₹${Math.round(usd * 50).toLocaleString("en-IN")}`
      : `$${usd.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const result = useMemo(() => {
    const comp = getCompetitorMonthlyCostUsd(selectedTool, monthlyEmails);
    const ls = getLeadSnipperMonthlyCostUsd(monthlyEmails);
    const annualComp = comp.monthlyCostUsd * 12;
    const annualLs = ls.totalUsd * 12;
    const annualSavings = annualComp - annualLs;
    const savingsPercent =
      annualComp > 0 ? Math.round((annualSavings / annualComp) * 100) : 0;
    return {
      comp,
      ls,
      annualComp,
      annualLs,
      annualSavings,
      savingsPercent,
      competitorLabel: competitors[selectedTool].meta.label,
    };
  }, [monthlyEmails, selectedTool]);

  return (
    <div className="rounded-3xl border border-[#dbeafe] bg-white shadow-xl shadow-[#3b82f6]/10 p-6 md:p-8">
      <div className="mb-6">
        <span className="inline-flex rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold text-[#1d4ed8]">
          Cold Email Cost Calculator
        </span>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold text-[#0f172a]">
          How much are you overpaying for cold email?
        </h3>
        <p className="mt-2 text-sm md:text-base text-[#475569]">
          Pick your current tool and volume — see your annual savings with
          LeadSnipper + AWS SES.
        </p>
      </div>

      <div className={compact ? "grid lg:grid-cols-[1.1fr_1fr] gap-6" : "grid lg:grid-cols-[1.1fr_1fr] gap-8"}>
        {/* Inputs */}
        <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 space-y-4">
          <div>
            <label htmlFor="embed-tool" className="text-sm font-semibold text-[#0f172a]">
              Current tool
            </label>
            <div className="relative mt-2">
              <select
                id="embed-tool"
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value as CompetitorSlug)}
                className="w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-semibold text-[#0f172a] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 appearance-none cursor-pointer pr-10"
              >
                {COMPETITOR_OPTIONS.map((opt) => (
                  <option key={opt.slug} value={opt.slug}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b] pointer-events-none" />
            </div>
          </div>

          <div>
            <label htmlFor="embed-emails" className="text-sm font-semibold text-[#0f172a]">
              Emails sent per month
            </label>
            <input
              id="embed-emails"
              type="number"
              min={1000}
              step={1000}
              value={monthlyEmails}
              onChange={(e) => setMonthlyEmails(Math.max(1000, parseInt(e.target.value) || 1000))}
              className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-lg font-semibold text-[#0f172a] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30"
            />
          </div>

          <p className="text-xs text-[#64748b]">
            AWS SES: $0.10 per 1,000 emails. LeadSnipper plans are volume-based.
          </p>

          {/* Competitor anchor */}
          <div className="rounded-xl border border-[#fee2e2] bg-[#fff1f2] p-4">
            <p className="text-xs font-semibold text-[#991b1b] uppercase tracking-wide">
              {result.competitorLabel} — {result.comp.tier.name}
            </p>
            <p className="mt-1 text-2xl font-bold text-[#7f1d1d]">
              {fmt(result.annualComp)}/year
            </p>
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border-2 border-[#3b82f6] bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] p-5">
            <p className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wide">
              LeadSnipper total
            </p>
            <p className="mt-1 text-3xl font-extrabold text-[#1e40af]">
              {result.ls.plan ? `${fmt(result.annualLs)}/year` : "Custom"}
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#334155]">
              <div className="flex items-center justify-between">
                <span>Platform fee</span>
                <span className="font-semibold">
                  {result.ls.plan ? `${fmt(result.ls.platformUsd)}/mo` : "Custom"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>AWS SES cost</span>
                <span className="font-semibold">
                  ${result.ls.sesUsd.toFixed(2)}/mo
                </span>
              </div>
              <div className="border-t border-[#bfdbfe] pt-2 flex items-center justify-between font-bold text-[#0f172a]">
                <span>Monthly total</span>
                <span>
                  {result.ls.plan ? `${fmt(result.ls.totalUsd)}/mo` : "Custom"}
                </span>
              </div>
            </div>
          </div>

          {/* Savings */}
          {result.ls.plan && result.annualSavings > 0 && (
            <div className="rounded-xl bg-white/90 border-2 border-[#bbf7d0] p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                You save vs {result.competitorLabel}
              </p>
              <p className="text-3xl font-extrabold text-[#15803d] mt-1">
                {fmt(result.annualSavings)}/year
              </p>
              {result.savingsPercent > 0 && (
                <p className="text-xs text-[#166534] mt-1 flex items-center justify-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {result.savingsPercent}% cheaper
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://app.leadsnipper.com/signup?product=leadsnipper"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/savings-calculator"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#e2e8f0] px-5 py-3 text-sm font-semibold text-[#475569] transition hover:border-[#3b82f6] hover:text-[#3b82f6]"
            >
              Full calculator →
            </Link>
          </div>

          {!compact && (
            <p className="text-center text-xs text-[#64748b]">
              See the{" "}
              <Link href="/savings-calculator" className="text-[#2563eb] font-semibold hover:underline">
                full cost comparison
              </Link>{" "}
              with all 6 tools side by side.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
