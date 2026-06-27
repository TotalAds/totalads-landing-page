"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Mail,
  Server,
  TrendingDown,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";
import {
  detectDisplayCurrency,
  formatInr,
  formatUsd,
  inrToUsd,
  usdToInr,
  USD_TO_INR,
  type DisplayCurrency,
} from "@/lib/currency";

const SES_COST_PER_1000_INR = 0.84;

type CompetitorPlan = {
  name: string;
  monthlyUsd: number;
  monthlyEmails: number;
  contacts: number;
};

type ManagedPlan = {
  name: string;
  monthlyInr: number | null;
  monthlyEmails: number;
  contacts: number;
};

const instantlyPlans: CompetitorPlan[] = [
  { name: "Growth", monthlyUsd: 47, monthlyEmails: 5000, contacts: 1000 },
  { name: "Hypergrowth", monthlyUsd: 97, monthlyEmails: 100000, contacts: 25000 },
  { name: "Light Speed", monthlyUsd: 358, monthlyEmails: 500000, contacts: 100000 },
];

const smartleadPlans: CompetitorPlan[] = [
  { name: "Base", monthlyUsd: 32, monthlyEmails: 6000, contacts: 2000 },
  { name: "Pro", monthlyUsd: 78, monthlyEmails: 90000, contacts: 30000 },
  { name: "Unlimited Smart", monthlyUsd: 144, monthlyEmails: 150000, contacts: Number.POSITIVE_INFINITY },
  { name: "Unlimited Prime", monthlyUsd: 315, monthlyEmails: 5694000, contacts: Number.POSITIVE_INFINITY },
];

const managedPlans: ManagedPlan[] = [
  { name: "Starter", monthlyInr: 999, monthlyEmails: 10000, contacts: Number.POSITIVE_INFINITY },
  { name: "Growth", monthlyInr: 2499, monthlyEmails: 100000, contacts: Number.POSITIVE_INFINITY },
  { name: "Scale", monthlyInr: 5999, monthlyEmails: 500000, contacts: Number.POSITIVE_INFINITY },
  { name: "Custom", monthlyInr: null, monthlyEmails: Number.POSITIVE_INFINITY, contacts: Number.POSITIVE_INFINITY },
];

const pickPlan = (plans: CompetitorPlan[], contacts: number, emails: number) =>
  plans.find((p) => p.contacts >= contacts && p.monthlyEmails >= emails) ?? plans[plans.length - 1];

const pickManaged = (contacts: number, emails: number) =>
  managedPlans.find((p) => p.contacts >= contacts && p.monthlyEmails >= emails) ?? managedPlans[managedPlans.length - 1];

const PRESETS = [
  { label: "Early-stage", contacts: 2000, emails: 10000 },
  { label: "Growth", contacts: 10000, emails: 50000 },
  { label: "Scale", contacts: 30000, emails: 150000 },
  { label: "Agency", contacts: 100000, emails: 500000 },
];

export default function SavingsCalculatorPage() {
  const [displayCurrency, setDisplayCurrency] = useState<DisplayCurrency>("INR");
  const [contacts, setContacts] = useState(10000);
  const [emails, setEmails] = useState(50000);

  useEffect(() => {
    setDisplayCurrency(detectDisplayCurrency());
  }, []);

  const money = (inr: number) =>
    displayCurrency === "INR" ? formatInr(inr) : formatUsd(inrToUsd(inr));

  const result = useMemo(() => {
    const c = Math.max(0, contacts || 0);
    const e = Math.max(0, emails || 0);
    const sesCost = (e / 1000) * SES_COST_PER_1000_INR;
    const instantlyPlan = pickPlan(instantlyPlans, c, e);
    const smartleadPlan = pickPlan(smartleadPlans, c, e);
    const managedPlan = pickManaged(c, e);
    const platformCharge = managedPlan.monthlyInr ?? 0;
    const byoMonthly = platformCharge + sesCost;

    const instantlyYearly = usdToInr(instantlyPlan.monthlyUsd) * 12;
    const smartleadYearly = usdToInr(smartleadPlan.monthlyUsd) * 12;
    const byoYearly = byoMonthly * 12;
    const managedYearly = managedPlan.monthlyInr === null ? null : managedPlan.monthlyInr * 12;

    return {
      c, e, sesCost,
      platformCharge, byoMonthly,
      instantlyPlan, smartleadPlan, managedPlan,
      instantlyYearly, smartleadYearly, byoYearly, managedYearly,
      savingsByoVsInstantly: instantlyYearly - byoYearly,
      savingsByoVsSmartlead: smartleadYearly - byoYearly,
      savingsManagedVsInstantly: managedYearly === null ? null : instantlyYearly - managedYearly,
      savingsManagedVsSmartlead: managedYearly === null ? null : smartleadYearly - managedYearly,
    };
  }, [contacts, emails]);

  return (
    <>
      <SEO
        title="Cold Email Cost Calculator — LeadSnipper vs Instantly vs Smartlead"
        description="See exactly how much you save switching from Instantly or Smartlead to LeadSnipper + AWS SES. Enter your email volume and compare annual costs side by side."
        canonical="https://leadsnipper.com/savings-calculator"
      />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-16">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag justify-center mb-6">Cost Calculator</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                How much are you leaving on the table?
              </span>
              <span className="block font-display italic text-[#0058be] text-2xl md:text-display-lg mt-2">
                Calculate your cold email cost savings.
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-xl mx-auto">
              Enter your monthly email volume. See the annual cost difference between
              Instantly, Smartlead, and LeadSnipper side by side — in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">

          {/* Presets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            <span className="text-xs text-[#727785] self-center mr-2 font-mono">QUICK PRESETS:</span>
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => { setContacts(p.contacts); setEmails(p.emails); }}
                className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold border transition-all ${
                  contacts === p.contacts && emails === p.emails
                    ? "bg-[#0058be] text-white border-[#0058be]"
                    : "bg-white text-[#424754] border-[#c2c6d6]/40 hover:border-[#0058be]/40 hover:text-[#0058be]"
                }`}
              >
                {p.label}
                <span className="ml-1.5 opacity-60 font-normal">
                  {p.contacts.toLocaleString("en-IN")} contacts
                </span>
              </button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-[340px_1fr] gap-8">
            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="space-y-5"
            >
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6">
                <h2 className="font-heading font-bold text-[15px] text-[#131b2e] mb-5">
                  Your volume
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-heading font-semibold text-[#424754] block mb-1.5">
                      Active contacts
                    </label>
                    <input
                      type="number"
                      min={0}
                      step={500}
                      value={contacts}
                      onChange={(e) => setContacts(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-heading font-semibold text-[#424754] block mb-1.5">
                      Emails sent per month
                    </label>
                    <input
                      type="number"
                      min={0}
                      step={1000}
                      value={emails}
                      onChange={(e) => setEmails(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-mono text-[#727785] mt-4 leading-relaxed">
                  FX rate: $1 = ₹{USD_TO_INR}
                  <br />
                  AWS SES: {money(SES_COST_PER_1000_INR)} per 1,000 emails
                </p>
              </div>

              {/* Competitor anchors */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5 space-y-3">
                <p className="text-[10px] font-mono text-[#727785] uppercase tracking-wider mb-3">Competitor plans matched</p>
                <div className="rounded-xl border border-red-100 bg-red-50/60 p-3">
                  <p className="text-[10px] font-mono text-red-700 uppercase tracking-wide mb-0.5">Instantly</p>
                  <p className="text-xs font-heading font-bold text-red-800">
                    {result.instantlyPlan.name} — {formatUsd(result.instantlyPlan.monthlyUsd)}/mo
                  </p>
                  <p className="text-lg font-heading font-bold text-red-700 mt-0.5">
                    {money(result.instantlyYearly)}/yr
                  </p>
                </div>
                <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-3">
                  <p className="text-[10px] font-mono text-orange-700 uppercase tracking-wide mb-0.5">Smartlead</p>
                  <p className="text-xs font-heading font-bold text-orange-800">
                    {result.smartleadPlan.name} — {formatUsd(result.smartleadPlan.monthlyUsd)}/mo
                  </p>
                  <p className="text-lg font-heading font-bold text-orange-700 mt-0.5">
                    {money(result.smartleadYearly)}/yr
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-5"
            >
              {/* BYO SES result */}
              <div className="glass-card rounded-2xl border-2 border-[#0058be]/30 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/[0.03] to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#0058be]/10 flex items-center justify-center">
                      <Server className="w-4 h-4 text-[#0058be]" />
                    </span>
                    <div>
                      <p className="text-[10px] font-mono text-[#0058be] uppercase tracking-wider">LeadSnipper BYO AWS SES</p>
                      <p className="text-xs text-[#727785]">You own the infrastructure</p>
                    </div>
                  </div>

                  <div className="flex items-end gap-3 mb-5">
                    <span className="font-heading font-extrabold text-3xl text-[#0058be]">
                      {money(result.byoYearly)}
                    </span>
                    <span className="text-sm text-[#727785] mb-1">/year</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="rounded-xl bg-white/80 border border-[#c2c6d6]/20 p-3 text-center">
                      <p className="text-[10px] font-mono text-[#727785] uppercase">Platform</p>
                      <p className="font-heading font-bold text-sm text-[#131b2e] mt-0.5">
                        {result.managedPlan.monthlyInr === null ? "Custom" : money(result.platformCharge)}
                      </p>
                      <p className="text-[10px] text-[#727785]">/month</p>
                    </div>
                    <div className="rounded-xl bg-white/80 border border-[#c2c6d6]/20 p-3 text-center">
                      <p className="text-[10px] font-mono text-[#727785] uppercase">AWS SES</p>
                      <p className="font-heading font-bold text-sm text-[#131b2e] mt-0.5">
                        {money(result.sesCost)}
                      </p>
                      <p className="text-[10px] text-[#727785]">/month</p>
                    </div>
                    <div className="rounded-xl bg-[#0058be]/[0.05] border border-[#0058be]/10 p-3 text-center">
                      <p className="text-[10px] font-mono text-[#0058be] uppercase">Total</p>
                      <p className="font-heading font-bold text-sm text-[#0058be] mt-0.5">
                        {money(result.byoMonthly)}
                      </p>
                      <p className="text-[10px] text-[#0058be]">/month</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#10b981]/[0.07] border border-[#10b981]/20 p-3">
                      <p className="text-[10px] font-mono text-[#10b981] uppercase tracking-wide">Saved vs Instantly</p>
                      <p className="font-heading font-extrabold text-xl text-[#10b981] mt-0.5">
                        {money(result.savingsByoVsInstantly)}
                      </p>
                      <p className="text-[10px] text-[#10b981]">/year</p>
                    </div>
                    <div className="rounded-xl bg-[#10b981]/[0.07] border border-[#10b981]/20 p-3">
                      <p className="text-[10px] font-mono text-[#10b981] uppercase tracking-wide">Saved vs Smartlead</p>
                      <p className="font-heading font-extrabold text-xl text-[#10b981] mt-0.5">
                        {money(result.savingsByoVsSmartlead)}
                      </p>
                      <p className="text-[10px] text-[#10b981]">/year</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Managed SES result */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/[0.02] to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#8b5cf6]" />
                    </span>
                    <div>
                      <p className="text-[10px] font-mono text-[#8b5cf6] uppercase tracking-wider">LeadSnipper Managed Hosting</p>
                      <p className="text-xs text-[#727785]">
                        Matched plan: <span className="font-semibold text-[#131b2e]">{result.managedPlan.name}</span>
                        {result.managedPlan.monthlyInr !== null && (
                          <span className="ml-1 text-[#727785]">— {money(result.managedPlan.monthlyInr)}/mo</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end gap-3 mb-5">
                    <span className="font-heading font-extrabold text-3xl text-[#8b5cf6]">
                      {result.managedYearly === null ? "Custom" : money(result.managedYearly)}
                    </span>
                    {result.managedYearly !== null && (
                      <span className="text-sm text-[#727785] mb-1">/year</span>
                    )}
                  </div>

                  {result.managedYearly !== null ? (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#8b5cf6]/[0.07] border border-[#8b5cf6]/20 p-3">
                        <p className="text-[10px] font-mono text-[#8b5cf6] uppercase tracking-wide">Saved vs Instantly</p>
                        <p className="font-heading font-extrabold text-xl text-[#8b5cf6] mt-0.5">
                          {result.savingsManagedVsInstantly !== null ? money(result.savingsManagedVsInstantly) : "—"}
                        </p>
                        <p className="text-[10px] text-[#8b5cf6]">/year</p>
                      </div>
                      <div className="rounded-xl bg-[#8b5cf6]/[0.07] border border-[#8b5cf6]/20 p-3">
                        <p className="text-[10px] font-mono text-[#8b5cf6] uppercase tracking-wide">Saved vs Smartlead</p>
                        <p className="font-heading font-extrabold text-xl text-[#8b5cf6] mt-0.5">
                          {result.savingsManagedVsSmartlead !== null ? money(result.savingsManagedVsSmartlead) : "—"}
                        </p>
                        <p className="text-[10px] text-[#8b5cf6]">/year</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-[#727785]">Volume exceeds published tiers. <Link href="https://cal.com/heyrehan/30min" className="text-[#8b5cf6] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Book a call →</Link></p>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.leadsnipper.com/signup"
                  className="btn-primary rounded-full text-sm flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  Start a 14-day trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://cal.com/heyrehan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost rounded-full text-sm flex-1 text-center"
                >
                  Book a walkthrough →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reference tables */}
      <section className="py-16 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-8">Plan Reference</span>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5">
                <p className="text-[10px] font-mono text-red-600 uppercase tracking-wider mb-3">Instantly tiers</p>
                <div className="space-y-2">
                  {instantlyPlans.map((p) => (
                    <div key={p.name} className="text-xs">
                      <span className="font-heading font-semibold text-[#131b2e]">{p.name}</span>
                      <span className="text-[#727785]"> — ${p.monthlyUsd}/mo</span>
                      <br />
                      <span className="text-[#727785]">{p.contacts.toLocaleString("en-IN")} contacts · {p.monthlyEmails.toLocaleString("en-IN")} emails</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5">
                <p className="text-[10px] font-mono text-orange-600 uppercase tracking-wider mb-3">Smartlead tiers</p>
                <div className="space-y-2">
                  {smartleadPlans.map((p) => (
                    <div key={p.name} className="text-xs">
                      <span className="font-heading font-semibold text-[#131b2e]">{p.name}</span>
                      <span className="text-[#727785]"> — ${p.monthlyUsd}/mo</span>
                      <br />
                      <span className="text-[#727785]">
                        {isFinite(p.contacts) ? p.contacts.toLocaleString("en-IN") : "Unlimited"} contacts · {isFinite(p.monthlyEmails) ? p.monthlyEmails.toLocaleString("en-IN") : "Unlimited"} emails
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-2xl border border-[#10b981]/20 bg-[#10b981]/[0.02] p-5">
                <p className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider mb-3">LeadSnipper plans</p>
                <p className="text-xs text-[#424754] leading-relaxed">
                  Three paid plans on AWS SES:
                </p>
                <ul className="text-xs text-[#424754] leading-relaxed mt-2 space-y-1">
                  <li><strong>Starter</strong> — ₹999/mo · 10k emails</li>
                  <li><strong>Growth</strong> — ₹2,499/mo · 100k emails</li>
                  <li><strong>Scale</strong> — ₹5,999/mo · 500k emails</li>
                </ul>
                <p className="text-xs text-[#424754] leading-relaxed mt-2">
                  AWS SES: ~$0.10 per 1,000 emails — paid directly to AWS.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#727785] mb-5">
              Comparing tools before switching? Read the full breakdowns:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/vs/instantly"
                className="btn-ghost rounded-full text-sm"
              >
                LeadSnipper vs Instantly →
              </Link>
              <Link
                href="/vs/smartlead"
                className="btn-ghost rounded-full text-sm"
              >
                LeadSnipper vs Smartlead →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
