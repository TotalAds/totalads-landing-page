"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Copy,
  Link2,
  Mail,
  Send,
  Server,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";
import { useUserRegion } from "@/hooks/useUserRegion";
import {
  type CompetitorSlug,
  COMPETITOR_OPTIONS,
  competitors,
  generateStaticComparisonData,
  getCompetitorMonthlyCostUsd,
  getLeadSnipperMonthlyCostUsd,
  SES_COST_PER_EMAIL_USD,
  VOLUME_BENCHMARKS,
} from "@/lib/competitorPricing";
import { generateFaqPageSchema } from "@/lib/faqs";

/* ── Volume slider config ─────────────────────────────────────────── */

const VOLUME_MIN = 1_000;
const VOLUME_MAX = 500_000;
const VOLUME_STEP = 1_000;
const DEFAULT_VOLUME = 50_000;
const DEFAULT_DOMAINS = 5;
const DEFAULT_TOOL: CompetitorSlug = "instantly";

/* ── FAQ data ─────────────────────────────────────────────────────── */

const calculatorFaqs = [
  {
    question: "How is the LeadSnipper cost calculated?",
    answer:
      "LeadSnipper costs combine a flat platform fee (Starter ₹999/$19, Growth ₹2,499/$49, or Scale ₹5,999/$119 per month) plus AWS SES usage at $0.10 per 1,000 emails. The platform fee covers campaigns, warmup, verification, and domain health. You pay AWS directly for sending.",
  },
  {
    question: "What AWS SES pricing is used in this calculator?",
    answer:
      "We use the standard AWS SES rate of $0.10 per 1,000 emails ($0.0001 per email). This is the publicly listed price for sending from outside EC2. If you send from EC2, the first 62,000 emails per month are free — making LeadSnipper even cheaper.",
  },
  {
    question: "Are competitor prices up to date?",
    answer:
      "We update competitor pricing quarterly from their public pricing pages. Prices shown are for monthly billing (not annual discounts). Last updated: July 2026. If you see an error, email us at rehan@leadsnipper.com.",
  },
  {
    question: "Is there a free trial of LeadSnipper?",
    answer:
      "Yes. Start free with no credit card. You get 1,000 emails, 500 contacts, basic analytics, and API access for 14 days. Enough to run a real campaign and see if LeadSnipper fits your outbound workflow.",
  },
  {
    question: "What does 'number of sending domains' affect?",
    answer:
      "LeadSnipper plans are volume-based, not per-domain. You can connect unlimited domains on Growth and Scale plans. The input here helps illustrate how per-seat and per-inbox pricing on other tools (like Mailshake and Instantly) can balloon costs when you add domains.",
  },
  {
    question: "Can I share my calculator results?",
    answer:
      "Yes. Your inputs are encoded into the URL. Copy the link and share it — anyone opening it will see your exact comparison pre-filled.",
  },
];

/* ── Static comparison data (computed at module level for SSR) ───── */

const staticRows = generateStaticComparisonData();

/* ── Main component ───────────────────────────────────────────────── */

export default function SavingsCalculatorPage() {
  const router = useRouter();
  const { isIndia } = useUserRegion();
  const hasHydratedParams = useRef(false);

  /* ─ State ─ */
  const [monthlyEmails, setMonthlyEmails] = useState(DEFAULT_VOLUME);
  const [domains, setDomains] = useState(DEFAULT_DOMAINS);
  const [selectedTool, setSelectedTool] = useState<CompetitorSlug>(DEFAULT_TOOL);
  const [linkCopied, setLinkCopied] = useState(false);

  /* ─ Email form state ─ */
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailFormName, setEmailFormName] = useState("");
  const [emailFormEmail, setEmailFormEmail] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");

  /* ─ Hydrate from query params ─ */
  useEffect(() => {
    if (!router.isReady || hasHydratedParams.current) return;
    hasHydratedParams.current = true;
    const { emails, tool, domains: d } = router.query;
    if (emails) {
      const n = parseInt(String(emails), 10);
      if (n > 0) setMonthlyEmails(Math.min(n, VOLUME_MAX));
    }
    if (d) {
      const n = parseInt(String(d), 10);
      if (n > 0) setDomains(n);
    }
    if (tool && Object.keys(competitors).includes(String(tool))) {
      setSelectedTool(String(tool) as CompetitorSlug);
    }
  }, [router.isReady, router.query]);

  /* ─ Sync URL on input change ─ */
  const updateUrl = useCallback(
    (e: number, d: number, t: CompetitorSlug) => {
      if (!router.isReady) return;
      const params = new URLSearchParams();
      params.set("emails", String(e));
      params.set("domains", String(d));
      params.set("tool", t);
      router.replace(`/savings-calculator?${params.toString()}`, undefined, {
        shallow: true,
      });
    },
    [router]
  );

  const handleEmailsChange = (val: number) => {
    const clamped = Math.max(VOLUME_MIN, Math.min(VOLUME_MAX, val));
    setMonthlyEmails(clamped);
    updateUrl(clamped, domains, selectedTool);
  };

  const handleDomainsChange = (val: number) => {
    const clamped = Math.max(1, val);
    setDomains(clamped);
    updateUrl(monthlyEmails, clamped, selectedTool);
  };

  const handleToolChange = (slug: CompetitorSlug) => {
    setSelectedTool(slug);
    updateUrl(monthlyEmails, domains, slug);
  };

  /* ─ Computed results ─ */
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

  /* ─ Copy shareable link ─ */
  const copyLink = async () => {
    const params = new URLSearchParams({
      emails: String(monthlyEmails),
      domains: String(domains),
      tool: selectedTool,
    });
    const url = `https://leadsnipper.com/savings-calculator?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  };

  /* ─ Email breakdown submission ─ */
  const handleEmailBreakdown = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSending(true);
    setEmailError("");
    try {
      const res = await fetch("/api/email-breakdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: emailFormName,
          email: emailFormEmail,
          emails: monthlyEmails,
          domains,
          tool: selectedTool,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setEmailSent(true);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setEmailSending(false);
    }
  };

  /* ─ Currency formatter ─ */
  const fmt = (usd: number) =>
    isIndia
      ? `₹${Math.round(usd * 50).toLocaleString("en-IN")}`
      : `$${usd.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const fmtExact = (usd: number) =>
    isIndia
      ? `₹${Math.round(usd * 50).toLocaleString("en-IN")}`
      : `$${usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  /* ─ Structured data ─ */
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cold Email Cost Calculator",
    url: "https://leadsnipper.com/savings-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    description:
      "Compare cold email costs: AWS SES vs Instantly vs Smartlead vs Lemlist vs Mailshake vs Apollo vs LeadSnipper. Enter your monthly volume and see annual savings.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
  };

  const faqSchema = generateFaqPageSchema(calculatorFaqs);

  /* ── Slider fill % ─ */
  const sliderPercent =
    ((monthlyEmails - VOLUME_MIN) / (VOLUME_MAX - VOLUME_MIN)) * 100;

  return (
    <>
      <SEO
        pageKey="savingsCalculator"
        additionalStructuredData={[webAppSchema, faqSchema]}
      />
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="hero-bg dot-grid pt-32 pb-16">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag justify-center mb-6">
              Cost Calculator
            </span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Cold Email Cost Calculator
              </span>
              <span className="block font-display italic text-[#0058be] text-2xl md:text-display-lg mt-2">
                AWS SES vs Smartlead vs Instantly vs LeadSnipper (2026)
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto">
              Enter your monthly email volume, pick your current tool, and see
              exactly how much you save with LeadSnipper + AWS SES — in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Interactive Calculator ─── */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8">
            {/* ── Inputs Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6">
                <h2 className="font-heading font-bold text-[15px] text-[#131b2e] mb-5 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#0058be]" />
                  Your Setup
                </h2>

                <div className="space-y-5">
                  {/* Monthly email volume — slider + number */}
                  <div>
                    <label
                      htmlFor="calc-emails"
                      className="text-xs font-heading font-semibold text-[#424754] block mb-1.5"
                    >
                      Monthly email volume
                    </label>
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        id="calc-emails"
                        type="number"
                        min={VOLUME_MIN}
                        max={VOLUME_MAX}
                        step={VOLUME_STEP}
                        value={monthlyEmails}
                        onChange={(e) =>
                          handleEmailsChange(parseInt(e.target.value) || VOLUME_MIN)
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                      />
                    </div>
                    <input
                      type="range"
                      min={VOLUME_MIN}
                      max={VOLUME_MAX}
                      step={VOLUME_STEP}
                      value={monthlyEmails}
                      onChange={(e) =>
                        handleEmailsChange(parseInt(e.target.value))
                      }
                      className="w-full h-2 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #0058be 0%, #0058be ${sliderPercent}%, #e2e8f0 ${sliderPercent}%, #e2e8f0 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-[10px] text-[#727785] mt-1 font-mono">
                      <span>1K</span>
                      <span>500K</span>
                    </div>
                  </div>

                  {/* Number of sending domains */}
                  <div>
                    <label
                      htmlFor="calc-domains"
                      className="text-xs font-heading font-semibold text-[#424754] block mb-1.5"
                    >
                      Sending domains / inboxes
                    </label>
                    <input
                      id="calc-domains"
                      type="number"
                      min={1}
                      step={1}
                      value={domains}
                      onChange={(e) =>
                        handleDomainsChange(parseInt(e.target.value) || 1)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                    />
                  </div>

                  {/* Current tool dropdown */}
                  <div>
                    <label
                      htmlFor="calc-tool"
                      className="text-xs font-heading font-semibold text-[#424754] block mb-1.5"
                    >
                      Current tool
                    </label>
                    <div className="relative">
                      <select
                        id="calc-tool"
                        value={selectedTool}
                        onChange={(e) =>
                          handleToolChange(e.target.value as CompetitorSlug)
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition appearance-none cursor-pointer pr-10"
                      >
                        {COMPETITOR_OPTIONS.map((opt) => (
                          <option key={opt.slug} value={opt.slug}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#727785] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <p className="text-[10px] font-mono text-[#727785] mt-4 leading-relaxed">
                  AWS SES: $0.10 per 1,000 emails
                  <br />
                  LeadSnipper plans are volume-based, not per-seat
                </p>
              </div>

              {/* Share link button */}
              <button
                onClick={copyLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#c2c6d6]/30 bg-white text-sm font-heading font-semibold text-[#424754] hover:border-[#0058be]/40 hover:text-[#0058be] transition"
              >
                {linkCopied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span className="text-[#10b981]">Link copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4" />
                    Share this comparison
                  </>
                )}
              </button>
            </motion.div>

            {/* ── Results Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Side-by-side cost table */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[460px]">
                    <thead>
                      <tr className="bg-[#f2f3ff] border-b border-[#c2c6d6]/20">
                        <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider w-1/3">
                          &nbsp;
                        </th>
                        <th className="text-center px-5 py-4 font-heading font-semibold text-red-600 text-xs uppercase tracking-wider w-1/3">
                          {result.competitorLabel}
                        </th>
                        <th className="text-center px-5 py-4 font-heading font-bold text-[#0058be] text-xs uppercase tracking-wider w-1/3">
                          LeadSnipper
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#c2c6d6]/10">
                        <td className="px-5 py-3 font-heading font-semibold text-[#131b2e] text-[13px]">
                          Platform fee
                        </td>
                        <td className="px-5 py-3 text-center text-[13px] text-[#727785]">
                          {selectedTool === "ses-direct"
                            ? "—"
                            : `${fmt(result.comp.tier.monthlyUsd)}/mo`}
                        </td>
                        <td className="px-5 py-3 text-center text-[13px] font-heading font-semibold text-[#0058be]">
                          {result.ls.plan
                            ? `${fmt(result.ls.platformUsd)}/mo`
                            : "Custom"}
                        </td>
                      </tr>
                      <tr className="border-b border-[#c2c6d6]/10 bg-[#f2f3ff]/30">
                        <td className="px-5 py-3 font-heading font-semibold text-[#131b2e] text-[13px]">
                          Sending cost (SES)
                        </td>
                        <td className="px-5 py-3 text-center text-[13px] text-[#727785]">
                          {selectedTool === "ses-direct"
                            ? fmtExact(result.comp.monthlyCostUsd)
                            : "Included"}
                        </td>
                        <td className="px-5 py-3 text-center text-[13px] font-heading font-semibold text-[#0058be]">
                          {fmtExact(result.ls.sesUsd)}/mo
                        </td>
                      </tr>
                      <tr className="border-b border-[#c2c6d6]/10">
                        <td className="px-5 py-3 font-heading font-semibold text-[#131b2e] text-[13px]">
                          Monthly total
                        </td>
                        <td className="px-5 py-3 text-center text-[15px] font-heading font-bold text-red-700">
                          {fmt(result.comp.monthlyCostUsd)}
                        </td>
                        <td className="px-5 py-3 text-center text-[15px] font-heading font-bold text-[#0058be]">
                          {result.ls.plan ? fmt(result.ls.totalUsd) : "Custom"}
                        </td>
                      </tr>
                      <tr className="bg-[#f0fdf4]/60">
                        <td className="px-5 py-4 font-heading font-bold text-[#131b2e] text-sm">
                          Annual total
                        </td>
                        <td className="px-5 py-4 text-center text-lg font-heading font-extrabold text-red-700">
                          {fmt(result.annualComp)}
                        </td>
                        <td className="px-5 py-4 text-center text-lg font-heading font-extrabold text-[#0058be]">
                          {result.ls.plan ? fmt(result.annualLs) : "Custom"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Big Savings Hero ── */}
              {result.ls.plan && result.annualSavings > 0 && (
                <motion.div
                  key={`${selectedTool}-${monthlyEmails}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl border-2 border-[#10b981]/30 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff] p-8 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.06),transparent_60%)] pointer-events-none" />
                  <div className="relative">
                    <p className="text-xs font-mono text-[#10b981] uppercase tracking-widest mb-2">
                      Your annual savings
                    </p>
                    <p className="font-heading font-extrabold text-5xl md:text-6xl text-[#10b981] leading-none">
                      {fmt(result.annualSavings)}
                    </p>
                    <p className="text-sm text-[#424754] mt-2">
                      per year vs {result.competitorLabel}
                      {result.savingsPercent > 0 && (
                        <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] text-xs font-semibold">
                          <TrendingDown className="w-3 h-3" />
                          {result.savingsPercent}% cheaper
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-[#727785] mt-3">
                      {monthlyEmails.toLocaleString("en-US")} emails/mo ·{" "}
                      {domains} domain{domains !== 1 ? "s" : ""} ·{" "}
                      {result.ls.plan?.label} plan
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Competitor note */}
              <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
                <p className="text-[10px] font-mono text-red-700 uppercase tracking-wide mb-0.5">
                  {result.competitorLabel} — matched tier
                </p>
                <p className="text-xs font-heading font-bold text-red-800">
                  {result.comp.tier.name} — {fmt(result.comp.tier.monthlyUsd)}
                  /mo
                </p>
                <p className="text-[11px] text-red-600 mt-1">
                  {competitors[selectedTool].meta.note}
                </p>
              </div>

              {/* ── CTAs ── */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.leadsnipper.com/signup?product=leadsnipper"
                  className="btn-primary rounded-full text-sm flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setShowEmailForm(!showEmailForm)}
                  className="btn-ghost rounded-full text-sm flex-1 text-center inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email me this breakdown
                </button>
              </div>

              {/* ── Email form ── */}
              <AnimatePresence>
                {showEmailForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {emailSent ? (
                      <div className="glass-card rounded-2xl border border-[#10b981]/20 bg-[#f0fdf4] p-6 text-center">
                        <CheckCircle2 className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                        <p className="font-heading font-bold text-sm text-[#131b2e]">
                          Breakdown sent!
                        </p>
                        <p className="text-xs text-[#727785] mt-1">
                          Check your inbox for the full cost comparison.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleEmailBreakdown}
                        className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 space-y-3"
                      >
                        <p className="text-xs font-heading font-semibold text-[#424754]">
                          We&apos;ll email your personalized cost breakdown:
                        </p>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={emailFormName}
                          onChange={(e) => setEmailFormName(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-[#c2c6d6]/40 bg-white text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                        />
                        <input
                          type="email"
                          placeholder="Your email"
                          value={emailFormEmail}
                          onChange={(e) => setEmailFormEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-[#c2c6d6]/40 bg-white text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                        />
                        <button
                          type="submit"
                          disabled={emailSending}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0058be] text-white text-sm font-heading font-semibold hover:bg-[#2170e4] transition disabled:opacity-50"
                        >
                          <Send className="w-4 h-4" />
                          {emailSending ? "Sending…" : "Send breakdown"}
                        </button>
                        {emailError && (
                          <p className="text-xs text-red-600">{emailError}</p>
                        )}
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Static Indexable Comparison Table ─── */}
      <section className="py-16 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-6">Cost Comparison</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-2">
              Cold email tool pricing at every scale
            </h2>
            <p className="text-body-md text-[#727785] mb-8 max-w-2xl">
              Monthly cost comparison across all major cold email platforms.
              LeadSnipper combines a flat platform fee with AWS SES pay-per-send
              — so costs grow linearly, not in pricing-tier jumps.
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[800px]">
                <thead>
                  <tr className="bg-[#f2f3ff] border-b border-[#c2c6d6]/20">
                    <th className="text-left px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Monthly Emails
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-bold text-[#0058be] text-xs uppercase tracking-wider">
                      LeadSnipper
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      AWS SES Only
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Instantly
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Smartlead
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Lemlist
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Mailshake
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                      Apollo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staticRows.map((row, i) => {
                    const lsIsLowest =
                      row.leadsnipper <=
                      Math.min(
                        row.instantly,
                        row.smartlead,
                        row.lemlist,
                        row.mailshake,
                        row.apollo
                      );
                    return (
                      <tr
                        key={row.volume}
                        className={`border-b border-[#c2c6d6]/10 ${i % 2 === 0 ? "" : "bg-[#f2f3ff]/30"}`}
                      >
                        <td className="px-4 py-3 font-heading font-semibold text-[#131b2e] text-[13px]">
                          {row.volume.toLocaleString("en-US")}
                        </td>
                        <td
                          className={`px-4 py-3 text-center text-[13px] font-heading font-bold ${lsIsLowest ? "text-[#10b981]" : "text-[#0058be]"}`}
                        >
                          ${Math.round(row.leadsnipper)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${row.sesDirect.toFixed(2)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${Math.round(row.instantly)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${Math.round(row.smartlead)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${Math.round(row.lemlist)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${Math.round(row.mailshake)}/mo
                        </td>
                        <td className="px-4 py-3 text-center text-[13px] text-[#727785]">
                          ${Math.round(row.apollo)}/mo
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[11px] font-mono text-[#727785] mt-4 max-w-2xl">
            Prices are published monthly rates as of July 2026. Instantly,
            Smartlead, Lemlist, Mailshake, and Apollo tiers are matched to the
            cheapest plan that covers the volume. AWS SES is $0.10/1,000 emails.
            LeadSnipper total = platform fee + SES usage.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 section-mesh border-t border-[#c2c6d6]/20">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag justify-center mb-6">FAQ</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Frequently asked questions.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {calculatorFaqs.map((faq, i) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
              >
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Compare CTA ─── */}
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
            <div className="flex flex-wrap gap-3 justify-center">
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
              <Link
                href="/vs/lemlist"
                className="btn-ghost rounded-full text-sm"
              >
                LeadSnipper vs Lemlist →
              </Link>
              <Link
                href="/vs/mailshake"
                className="btn-ghost rounded-full text-sm"
              >
                LeadSnipper vs Mailshake →
              </Link>
              <Link
                href="/vs/apollo"
                className="btn-ghost rounded-full text-sm"
              >
                LeadSnipper vs Apollo →
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/blog/amazon-ses-pricing-2026"
                className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
              >
                Read: Complete AWS SES Pricing Breakdown for 2026 →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
