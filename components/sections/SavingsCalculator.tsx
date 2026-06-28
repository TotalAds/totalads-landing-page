"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import {
  detectDisplayCurrency,
  formatInr,
  formatUsd,
  inrToUsd,
  usdToInr,
  USD_TO_INR,
  type DisplayCurrency,
} from "@/lib/currency";

interface SavingsCalculatorProps {
  compact?: boolean;
}

const SES_COST_PER_1000_INR = 0.84;
const DEFAULT_EMAILS_PER_MONTH = 50000;
const DEFAULT_CONTACTS = 10000;

type CompetitorPlan = {
  name: string;
  monthlyUsd: number;
  monthlyEmails: number;
  contacts: number;
};

type LeadSnipperManagedPlan = {
  name: string;
  monthlyInr: number | null;
  monthlyEmails: number;
  contacts: number;
};

const instantlyPlans: CompetitorPlan[] = [
  {
    name: "Growth",
    monthlyUsd: 47,
    monthlyEmails: 5000,
    contacts: 1000,
  },
  {
    name: "Hypergrowth",
    monthlyUsd: 97,
    monthlyEmails: 100000,
    contacts: 25000,
  },
  {
    name: "Light Speed",
    monthlyUsd: 358,
    monthlyEmails: 500000,
    contacts: 100000,
  },
];

const smartleadPlans: CompetitorPlan[] = [
  {
    name: "Base",
    monthlyUsd: 32,
    monthlyEmails: 6000,
    contacts: 2000,
  },
  {
    name: "Pro",
    monthlyUsd: 78,
    monthlyEmails: 90000,
    contacts: 30000,
  },
  {
    name: "Unlimited Smart",
    monthlyUsd: 144,
    monthlyEmails: 150000,
    contacts: Number.POSITIVE_INFINITY,
  },
  {
    name: "Unlimited Prime",
    monthlyUsd: 315,
    monthlyEmails: 5694000,
    contacts: Number.POSITIVE_INFINITY,
  },
];

const managedSesPlans: LeadSnipperManagedPlan[] = [
  {
    name: "Starter",
    monthlyInr: 999,
    monthlyEmails: 10000,
    contacts: Number.POSITIVE_INFINITY,
  },
  {
    name: "Growth",
    monthlyInr: 2499,
    monthlyEmails: 100000,
    contacts: Number.POSITIVE_INFINITY,
  },
  {
    name: "Scale",
    monthlyInr: 5999,
    monthlyEmails: 500000,
    contacts: Number.POSITIVE_INFINITY,
  },
  {
    name: "Custom",
    monthlyInr: null,
    monthlyEmails: Number.POSITIVE_INFINITY,
    contacts: Number.POSITIVE_INFINITY,
  },
];

const pickPlan = (
  plans: CompetitorPlan[],
  contacts: number,
  emailsPerMonth: number
) =>
  plans.find(
    (plan) => plan.contacts >= contacts && plan.monthlyEmails >= emailsPerMonth
  ) ?? plans[plans.length - 1];

const pickManagedPlan = (contacts: number, emailsPerMonth: number) =>
  managedSesPlans.find(
    (plan) => plan.contacts >= contacts && plan.monthlyEmails >= emailsPerMonth
  ) ?? managedSesPlans[managedSesPlans.length - 1];

export default function SavingsCalculator({
  compact = false,
}: SavingsCalculatorProps) {
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrency>("INR");
  const [emailsPerMonth, setEmailsPerMonth] = useState(DEFAULT_EMAILS_PER_MONTH);
  const [contacts, setContacts] = useState(DEFAULT_CONTACTS);

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  const money = (inr: number) =>
    displayCurrency === "INR" ? formatInr(inr) : formatUsd(inrToUsd(inr));

  const result = useMemo(() => {
    const sanitizedEmails = Number.isFinite(emailsPerMonth)
      ? Math.max(0, emailsPerMonth)
      : 0;
    const sanitizedContacts = Number.isFinite(contacts) ? Math.max(0, contacts) : 0;
    const monthlySesCost =
      (sanitizedEmails / 1000) * SES_COST_PER_1000_INR;

    const leadsnipperPlatformCharge = 0;
    const leadsnipperMonthlyTotal = leadsnipperPlatformCharge + monthlySesCost;

    const instantlyPlan = pickPlan(
      instantlyPlans,
      sanitizedContacts,
      sanitizedEmails
    );
    const smartleadPlan = pickPlan(
      smartleadPlans,
      sanitizedContacts,
      sanitizedEmails
    );
    const managedPlan = pickManagedPlan(sanitizedContacts, sanitizedEmails);
    const instantlyYearlyTotal = usdToInr(instantlyPlan.monthlyUsd) * 12;
    const smartleadYearlyTotal = usdToInr(smartleadPlan.monthlyUsd) * 12;
    const leadsnipperByoYearlyTotal = leadsnipperMonthlyTotal * 12;
    const leadsnipperManagedYearlyTotal =
      managedPlan.monthlyInr === null ? null : managedPlan.monthlyInr * 12;

    return {
      sanitizedContacts,
      sanitizedEmails,
      instantlyPlan,
      smartleadPlan,
      leadsnipperPlatformCharge,
      managedPlan,
      monthlySesCost,
      leadsnipperMonthlyTotal,
      instantlyYearlyTotal,
      smartleadYearlyTotal,
      leadsnipperByoYearlyTotal,
      leadsnipperManagedYearlyTotal,
      instantlySavingsByo: instantlyYearlyTotal - leadsnipperByoYearlyTotal,
      smartleadSavingsByo: smartleadYearlyTotal - leadsnipperByoYearlyTotal,
      instantlySavingsManaged:
        leadsnipperManagedYearlyTotal === null
          ? null
          : instantlyYearlyTotal - leadsnipperManagedYearlyTotal,
      smartleadSavingsManaged:
        leadsnipperManagedYearlyTotal === null
          ? null
          : smartleadYearlyTotal - leadsnipperManagedYearlyTotal,
    };
  }, [contacts, emailsPerMonth]);

  const cardContainerClass = compact
    ? "grid lg:grid-cols-[1.1fr_1fr] gap-6"
    : "grid lg:grid-cols-[1.1fr_1fr] gap-8";

  return (
    <div className="rounded-3xl border border-[#dbeafe] bg-white shadow-xl shadow-[#3b82f6]/10 p-6 md:p-8">
      <div className="mb-6">
        <span className="inline-flex rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold text-[#1d4ed8]">
          Cold Email Cost Calculator
        </span>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold text-[#0f172a]">
          How much are you wasting on Instantly/Smartlead vs LeadSnipper + AWS
          SES?
        </h3>
        <p className="mt-2 text-sm md:text-base text-[#475569]">
          Enter monthly volume, see your annual cost gap, and keep your sending
          infrastructure in your control.
        </p>
      </div>

      <div className={cardContainerClass}>
        <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
          <label
            htmlFor="contacts"
            className="text-sm font-semibold text-[#0f172a]"
          >
            Active contacts
          </label>
          <input
            id="contacts"
            type="number"
            min={0}
            step={500}
            value={contacts}
            onChange={(event) =>
              setContacts(Number.parseInt(event.target.value, 10) || 0)
            }
            className="mt-2 mb-4 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-lg font-semibold text-[#0f172a] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30"
          />
          <label
            htmlFor="emailsPerMonth"
            className="text-sm font-semibold text-[#0f172a]"
          >
            Emails sent per month
          </label>
          <input
            id="emailsPerMonth"
            type="number"
            min={0}
            step={1000}
            value={emailsPerMonth}
            onChange={(event) =>
              setEmailsPerMonth(Number.parseInt(event.target.value, 10) || 0)
            }
            className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-lg font-semibold text-[#0f172a] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30"
          />
          <p className="mt-3 text-xs text-[#64748b]">
            FX used: $1 = ₹{USD_TO_INR}. AWS SES pricing used:{" "}
            {money(SES_COST_PER_1000_INR)} per 1,000 emails.
          </p>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-[#fee2e2] bg-[#fff1f2] p-4">
              <p className="text-xs font-semibold text-[#991b1b] uppercase tracking-wide">
                Instantly anchor
              </p>
              <p className="mt-1 text-sm text-[#7f1d1d] font-semibold">
                {result.instantlyPlan.name} ({formatUsd(result.instantlyPlan.monthlyUsd)}
                /mo)
              </p>
              <p className="mt-1 text-2xl font-bold text-[#7f1d1d]">
                {money(result.instantlyYearlyTotal)}/year
              </p>
            </div>
            <div className="rounded-xl border border-[#ffedd5] bg-[#fff7ed] p-4">
              <p className="text-xs font-semibold text-[#9a3412] uppercase tracking-wide">
                Smartlead anchor
              </p>
              <p className="mt-1 text-sm text-[#7c2d12] font-semibold">
                {result.smartleadPlan.name} ({formatUsd(result.smartleadPlan.monthlyUsd)}
                /mo)
              </p>
              <p className="mt-1 text-2xl font-bold text-[#7c2d12]">
                {money(result.smartleadYearlyTotal)}/year
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border-2 border-[#3b82f6] bg-gradient-to-br from-[#eff6ff] to-[#f0fdf4] p-5">
            <p className="text-xs font-semibold text-[#1d4ed8] uppercase tracking-wide">
              LeadSnipper BYO SES total
            </p>
            <p className="mt-1 text-3xl font-extrabold text-[#1e40af]">
              {money(result.leadsnipperByoYearlyTotal)}/year
            </p>

            <div className="mt-5 space-y-2 text-sm text-[#334155]">
              <div className="flex items-center justify-between">
                <span>Platform charge</span>
                <span className="font-semibold">
                  {result.managedPlan.monthlyInr === null
                    ? "Custom"
                    : `${money(result.managedPlan.monthlyInr)}/month`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>AWS SES cost</span>
                <span className="font-semibold">
                  {money(result.monthlySesCost)}/month
                </span>
              </div>
              <div className="border-t border-[#bfdbfe] pt-2 flex items-center justify-between font-bold text-[#0f172a]">
                <span>Total monthly</span>
                <span>{money(result.leadsnipperMonthlyTotal)}/month</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl bg-white/90 border border-[#bbf7d0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                  Saved vs Instantly
                </p>
                <p className="text-2xl font-extrabold text-[#15803d]">
                  {money(result.instantlySavingsByo)}/year
                </p>
              </div>
              <div className="rounded-xl bg-white/90 border border-[#bbf7d0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                  Saved vs Smartlead
                </p>
                <p className="text-2xl font-extrabold text-[#15803d]">
                  {money(result.smartleadSavingsByo)}/year
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#475569] leading-relaxed">
              LeadSnipper charges a flat platform fee per tier plus AWS SES
              usage. Match your email volume to Starter (₹999 / 10k emails),
              Growth (₹2,499 / 100k emails), or Scale (₹5,999 / 500k emails).
              There is no permanent free tier — only the in-product 14-day
              trial.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#22c55e] bg-gradient-to-br from-[#f0fdf4] to-[#ecfeff] p-5">
            <p className="text-xs font-semibold text-[#15803d] uppercase tracking-wide">
              LeadSnipper Managed SES total
            </p>
            <p className="mt-1 text-3xl font-extrabold text-[#166534]">
              {result.leadsnipperManagedYearlyTotal === null
                ? "Custom"
                : `${money(result.leadsnipperManagedYearlyTotal)}/year`}
            </p>
            <p className="mt-1 text-sm text-[#166534] font-semibold">
              Matched plan: {result.managedPlan.name}
            </p>
            <div className="mt-4 text-sm text-[#166534]">
              {result.managedPlan.monthlyInr === null ? (
                <p>Volume exceeds published managed tiers. Contact sales.</p>
              ) : (
                <p>
                  Managed plan monthly price:{" "}
                  {money(result.managedPlan.monthlyInr)}/month
                </p>
              )}
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-white/90 border border-[#bbf7d0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                  Saved vs Instantly
                </p>
                <p className="text-2xl font-extrabold text-[#15803d]">
                  {result.instantlySavingsManaged === null
                    ? "Custom"
                    : `${money(result.instantlySavingsManaged)}/year`}
                </p>
              </div>
              <div className="rounded-xl bg-white/90 border border-[#bbf7d0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                  Saved vs Smartlead
                </p>
                <p className="text-2xl font-extrabold text-[#15803d]">
                  {result.smartleadSavingsManaged === null
                    ? "Custom"
                    : `${money(result.smartleadSavingsManaged)}/year`}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="https://app.leadsnipper.com/signup?product=leadsnipper"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
          >
            Start a 14-day trial
          </Link>
          {!compact && (
            <p className="text-center text-xs text-[#64748b]">
              Compare both LeadSnipper modes and share this on LinkedIn/Twitter.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
