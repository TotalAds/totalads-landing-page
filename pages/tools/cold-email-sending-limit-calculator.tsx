"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Link2,
  Mail,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";

import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";
import { generateFaqPageSchema } from "@/lib/faqs";
import {
  calculateSendingLimit,
  DOMAIN_AGE_OPTIONS,
  getDomainAgeLabel,
  getWarmupStatusLabel,
  type DomainAge,
  type SendingLimitResult,
  WARMUP_STATUS_OPTIONS,
  type WarmupStatus,
} from "@/lib/sendingLimitCalculator";

/* ── FAQ Data ─────────────────────────────────────────────────────── */

const calculatorFaqs = [
  {
    question: "How many cold emails can I send per day on a new domain?",
    answer:
      "Start with 10–30 emails a day for the first two weeks. Do not send cold email yet. Only send to people who know you. After 2–4 weeks of warmup, you can slowly move up to about 50 cold emails a day.",
  },
  {
    question: "How many emails per day per domain is safe?",
    answer:
      "It depends on how old your domain is and how far along warmup is. After warmup: new domains about 50/day, 1–3 months about 80/day, 3–6 months about 120/day, and 6+ months about 150/day. Keep bounce rates low and only email real addresses.",
  },
  {
    question: "When can I start cold outreach after warmup?",
    answer:
      "Around week 3–4 you can send a little cold email, but only to checked addresses. After about 4 weeks of slow growth, full cold email is usually safer.",
  },
  {
    question: "What is a safe cold email sending limit?",
    answer:
      "A safe limit is how many emails you can send without looking like spam. Keep bounces under 3%, spam reports under 0.1%, and opens above 10%. For most ready domains, that is about 50–150 emails per day per domain.",
  },
  {
    question: "How do I scale without getting blacklisted?",
    answer:
      "Do not push one domain too hard. Add more domains and split the sending. Warm up each domain slowly. Check bounce and spam numbers every day. Never skip warmup on a new domain.",
  },
  {
    question: "How many emails per day with multiple domains?",
    answer:
      "Multiply your per-domain limit by how many domains you have. Example: 5 domains at 100/day each = 500 emails a day. Each domain needs its own warmup and its own safe limit.",
  },
];

/* ── Main Component ───────────────────────────────────────────────── */

export default function ColdEmailSendingLimitCalculatorPage() {
  const router = useRouter();
  const hasInitializedFromQuery = useRef(false);

  const [domainAge, setDomainAge] = useState<DomainAge>("new");
  const [warmupStatus, setWarmupStatus] = useState<WarmupStatus>("not_started");
  const [domainCount, setDomainCount] = useState<number>(1);
  const [linkCopied, setLinkCopied] = useState(false);

  // Calculate results
  const result: SendingLimitResult = useMemo(
    () => calculateSendingLimit({ domainAge, warmupStatus, domainCount }),
    [domainAge, warmupStatus, domainCount]
  );

  // Hydrate from URL query params once on load
  useEffect(() => {
    if (!router.isReady || hasInitializedFromQuery.current) return;
    hasInitializedFromQuery.current = true;

    const { age, warmup, domains } = router.query;

    if (age && typeof age === "string" && DOMAIN_AGE_OPTIONS.some((o) => o.id === age)) {
      setDomainAge(age as DomainAge);
    }

    if (warmup && typeof warmup === "string" && WARMUP_STATUS_OPTIONS.some((o) => o.id === warmup)) {
      setWarmupStatus(warmup as WarmupStatus);
    }

    if (domains && typeof domains === "string") {
      const n = parseInt(domains, 10);
      if (n > 0) setDomainCount(n);
    }
  }, [router.isReady, router.query]);

  // Sync URL on input change
  useEffect(() => {
    if (!router.isReady || !hasInitializedFromQuery.current) return;

    const params = new URLSearchParams();
    params.set("age", domainAge);
    params.set("warmup", warmupStatus);
    if (domainCount > 1) params.set("domains", String(domainCount));

    router.replace(`/tools/cold-email-sending-limit-calculator?${params.toString()}`, undefined, {
      shallow: true,
    });
  }, [domainAge, warmupStatus, domainCount, router]);

  const copyShareLink = async () => {
    const params = new URLSearchParams();
    params.set("age", domainAge);
    params.set("warmup", warmupStatus);
    if (domainCount > 1) params.set("domains", String(domainCount));

    const url = `https://leadsnipper.com/tools/cold-email-sending-limit-calculator?${params.toString()}`;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cold Email Sending Limit Calculator",
    url: "https://leadsnipper.com/tools/cold-email-sending-limit-calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description:
      "Free tool to find how many cold emails you can send each day. Get a simple week-by-week plan based on your domain age and warmup.",
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

  const getColdOutreachBadge = () => {
    switch (result.coldOutreachAllowed) {
      case "none":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/20">
            <AlertCircle className="w-3.5 h-3.5" /> No cold email yet
          </span>
        );
      case "limited":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-[#b75b00]/10 text-[#b75b00] border border-[#b75b00]/20">
            <Shield className="w-3.5 h-3.5" /> A little cold email (checked lists only)
          </span>
        );
      case "yes":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Cold email is OK
          </span>
        );
    }
  };

  return (
    <>
      <SEO
        title="Cold Email Sending Limit Calculator – How Many Emails Per Day?"
        description="Find how many cold emails you can safely send each day. Enter your domain age and warmup status to get a simple week-by-week plan."
        keywords="cold email sending limit calculator, how many cold emails per day, safe sending limit, email warmup schedule, daily send limit calculator, domain sending capacity, cold outreach volume limits"
        canonical="https://leadsnipper.com/tools/cold-email-sending-limit-calculator"
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
            <span className="section-tag justify-center mb-6">Free Daily Limit Tool</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Cold Email Sending Limit Calculator
              </span>
              <span className="block font-display italic text-[#0058be] text-2xl md:text-display-lg mt-2">
                How many emails can you send today?
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto">
              Tell us how old your domain is and where you are in warmup. We
              show a safe daily number and a simple week-by-week plan so you do
              not trip spam filters.
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
                  <Mail className="w-4 h-4 text-[#0058be]" />
                  Your Domain Setup
                </h2>

                <div className="space-y-5">
                  {/* Domain age */}
                  <div>
                    <label className="text-xs font-heading font-semibold text-[#424754] block mb-2">
                      How old is your domain?
                    </label>
                    <div className="space-y-2">
                      {DOMAIN_AGE_OPTIONS.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-3 p-3 rounded-xl border border-[#c2c6d6]/40 bg-white cursor-pointer hover:border-[#0058be]/40 transition"
                        >
                          <input
                            type="radio"
                            name="domainAge"
                            value={option.value}
                            checked={domainAge === option.value}
                            onChange={(e) => setDomainAge(e.target.value as DomainAge)}
                            className="w-4 h-4 text-[#0058be] focus:ring-2 focus:ring-[#0058be]/20"
                          />
                          <span className="text-sm font-heading font-medium text-[#131b2e]">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Warmup status */}
                  <div>
                    <label className="text-xs font-heading font-semibold text-[#424754] block mb-2">
                      Where are you in warmup?
                    </label>
                    <div className="space-y-2">
                      {WARMUP_STATUS_OPTIONS.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-3 p-3 rounded-xl border border-[#c2c6d6]/40 bg-white cursor-pointer hover:border-[#0058be]/40 transition"
                        >
                          <input
                            type="radio"
                            name="warmupStatus"
                            value={option.value}
                            checked={warmupStatus === option.value}
                            onChange={(e) => setWarmupStatus(e.target.value as WarmupStatus)}
                            className="w-4 h-4 text-[#0058be] focus:ring-2 focus:ring-[#0058be]/20"
                          />
                          <span className="text-sm font-heading font-medium text-[#131b2e]">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Domain count */}
                  <div>
                    <label
                      htmlFor="calc-domains"
                      className="text-xs font-heading font-semibold text-[#424754] block mb-1.5"
                    >
                      How many domains will you send from?
                    </label>
                    <input
                      id="calc-domains"
                      type="number"
                      min={1}
                      step={1}
                      value={domainCount}
                      onChange={(e) => setDomainCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                    />
                  </div>
                </div>

                <p className="text-[10px] font-mono text-[#727785] mt-4 leading-relaxed">
                  Each domain has its own limit. To send more, add more domains
                  instead of pushing one domain too hard.
                </p>
              </div>

              {/* Share link button */}
              <button
                type="button"
                onClick={copyShareLink}
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
                    Share this result
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
              {/* Today's limit card */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 sm:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                  <div>
                    <h2 className="font-heading text-sm font-semibold text-[#727785] uppercase tracking-wider mb-2">
                      Safe emails today
                    </h2>
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading font-extrabold text-5xl text-[#0058be]">
                        {result.todayLimit}
                      </span>
                      <span className="text-lg text-[#727785] font-medium">per day</span>
                    </div>
                    <p className="text-xs text-[#727785] mt-1">for each domain</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {getColdOutreachBadge()}
                    {domainCount > 1 && (
                      <div className="text-xs text-[#727785] text-right">
                        <span className="font-heading font-bold text-[#131b2e]">
                          {result.totalDailyCapacity}
                        </span>{" "}
                        total per day
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#eff6ff] border border-[#bfdbfe]">
                  <TrendingUp className="w-5 h-5 text-[#0058be] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-[#1e3a5f] font-medium mb-1">
                      Goal: {result.targetLimit} emails per day
                    </p>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      For {getDomainAgeLabel(domainAge).toLowerCase()} domains,
                      the safe top speed is about {result.targetLimit} emails a
                      day after full warmup. Follow the week plan below to get
                      there safely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ramp schedule table */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 overflow-hidden">
                <div className="p-6 border-b border-[#c2c6d6]/20">
                  <h3 className="font-heading font-bold text-lg text-[#131b2e] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0058be]" />
                    Week-by-week plan
                  </h3>
                  <p className="text-sm text-[#727785] mt-1">
                    Right now: {getWarmupStatusLabel(warmupStatus)}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-[#f2f3ff] border-b border-[#c2c6d6]/20">
                        <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                          Week
                        </th>
                        <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                          Emails per day
                        </th>
                        <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                          Type
                        </th>
                        <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider">
                          What to do
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.rampSchedule.map((week, i) => (
                        <tr
                          key={week.week}
                          className={`border-b border-[#c2c6d6]/10 ${i % 2 === 0 ? "" : "bg-[#f2f3ff]/30"}`}
                        >
                          <td className="px-5 py-4 font-heading font-semibold text-[#131b2e]">
                            Week {week.week}
                          </td>
                          <td className="px-5 py-4 font-heading font-bold text-[#0058be]">
                            {week.dailyMin}–{week.dailyMax}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex px-2 py-0.5 rounded-md text-xs font-semibold ${
                                week.type === "warmup"
                                  ? "bg-[#b75b00]/10 text-[#b75b00]"
                                  : week.type === "limited-cold"
                                    ? "bg-[#0058be]/10 text-[#0058be]"
                                    : "bg-[#10b981]/10 text-[#10b981]"
                              }`}
                            >
                              {week.type === "warmup"
                                ? "Warmup"
                                : week.type === "limited-cold"
                                  ? "A little cold"
                                  : "Full cold"}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-[#475569] text-xs leading-relaxed">
                            {week.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Health thresholds */}
              <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6">
                <h3 className="font-heading font-bold text-base text-[#131b2e] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0058be]" />
                  Watch these numbers every day
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#fef3c7] border border-[#f59e0b]/30">
                    <p className="text-xs text-[#92400e] font-semibold uppercase tracking-wider mb-1">
                      Bounce rate
                    </p>
                    <p className="font-heading font-bold text-xl text-[#92400e]">
                      &gt; {result.healthThresholds.bouncePause * 100}%
                    </p>
                    <p className="text-xs text-[#92400e] mt-1">Pause sending</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#fee2e2] border border-[#ba1a1a]/30">
                    <p className="text-xs text-[#7f1d1d] font-semibold uppercase tracking-wider mb-1">
                      Spam reports
                    </p>
                    <p className="font-heading font-bold text-xl text-[#7f1d1d]">
                      &gt; {result.healthThresholds.complaintStop * 100}%
                    </p>
                    <p className="text-xs text-[#7f1d1d] mt-1">Stop and review</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#dbeafe] border border-[#0058be]/30">
                    <p className="text-xs text-[#1e3a5f] font-semibold uppercase tracking-wider mb-1">
                      Open rate
                    </p>
                    <p className="font-heading font-bold text-xl text-[#1e3a5f]">
                      &lt; {result.healthThresholds.openMin * 100}%
                    </p>
                    <p className="text-xs text-[#1e3a5f] mt-1">Check your setup</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Education ─── */}
      <section className="py-16 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="section-tag mb-6">Why This Matters</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-2">
              Why you cannot send too fast
            </h2>
            <p className="text-body-md text-[#727785] max-w-2xl">
              Gmail and Outlook watch how you send. Go too fast on a new domain
              and they put you in spam. Slow and steady keeps you safe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Clock,
                title: "Domain age",
                body: "A new domain has no history. Sudden big sends look like spam. Older domains that send steadily get more trust.",
              },
              {
                icon: TrendingUp,
                title: "Slow growth",
                body: "Jumping from 0 to 100 emails overnight looks bad. Growing about 10–20% each week looks more natural.",
              },
              {
                icon: Users,
                title: "How people react",
                body: "Lots of bounces, spam clicks, or low opens tell inboxes your email is unwanted. Stay under safe limits and watch these numbers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0058be] text-white flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
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
              Common questions
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
                <p className="text-sm text-[#727785] leading-relaxed">{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Links ─── */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#727785] mb-5">
              Ready to put this plan to work?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/email-warmup" className="btn-ghost rounded-full text-sm">
                Email warmup tool →
              </Link>
              <Link
                href="/tools/email-deliverability-checker"
                className="btn-ghost rounded-full text-sm"
              >
                Check your email setup →
              </Link>
              <Link
                href="/blog/how-many-emails-per-day-cold-outreach"
                className="btn-ghost rounded-full text-sm"
              >
                Full volume guide →
              </Link>
              <Link
                href="/blog/how-to-send-cold-emails-at-scale-without-getting-blacklisted"
                className="btn-ghost rounded-full text-sm"
              >
                How to scale safely →
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/pricing"
                className="btn-primary rounded-full text-sm inline-flex items-center gap-2 px-6 py-3"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
