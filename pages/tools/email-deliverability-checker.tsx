"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Copy,
  Globe,
  HelpCircle,
  Info,
  Link2,
  Lock,
  RefreshCw,
  Search,
  ShieldCheck,
  ShieldAlert,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";
import { generateFaqPageSchema } from "@/lib/faqs";

/* ── Types ────────────────────────────────────────────────────────── */

type RecordStatus = "pass" | "warn" | "fail" | "missing";

interface Issue {
  severity: "error" | "warning" | "info";
  message: string;
  fix: string;
}

interface RecordResult {
  status: RecordStatus;
  raw: string | null;
  issues: Issue[];
}

interface CheckResponse {
  domain: string;
  score: number;
  spf: RecordResult;
  dkim: RecordResult;
  dmarc: RecordResult;
  checkedAt: string;
}

/* ── Preset Selectors ─────────────────────────────────────────────── */

const PRESET_SELECTORS = [
  { id: "google", label: "Google Workspace", value: "google" },
  { id: "microsoft", label: "Microsoft 365", value: "selector1" },
  { id: "mailchimp", label: "Mailchimp", value: "k1" },
  { id: "custom", label: "Custom...", value: "" },
];

/* ── FAQ Data ─────────────────────────────────────────────────────── */

const checkerFaqs = [
  {
    question: "What is SPF, DKIM, and DMARC?",
    answer:
      "They are three checks that prove your emails are really from you. SPF says which servers can send for your domain. DKIM adds a digital stamp to each email. DMARC tells Gmail and Outlook what to do if a check fails. Together, they help your emails land in the inbox.",
  },
  {
    question: "Why do I need SPF, DKIM, and DMARC?",
    answer:
      "Gmail, Yahoo, and Outlook expect these checks. Without them, your emails can go to spam, get slowed down, or get blocked. They also stop other people from sending fake emails that look like they came from you.",
  },
  {
    question: "How does this tool work?",
    answer:
      "Type your domain name. We look up your email settings online, check if SPF, DKIM, and DMARC look correct, and show you what to fix in plain English.",
  },
  {
    question: "What is a DKIM selector?",
    answer:
      "It is a short name that points to your DKIM key. Google often uses \"google\". Microsoft often uses \"selector1\". Mailchimp often uses \"k1\". Pick your email provider above, or choose Custom and type your own.",
  },
  {
    question: "Why does my SPF record fail for too many lookups?",
    answer:
      "SPF can only look up about 10 other records. If you have too many \"include\" rules, the check fails. Fix it by combining rules or using fewer includes.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes. It is free. You do not need an account. Check any domain, see the results, copy the fixes, and share a link.",
  },
];

/* ── Main Component ───────────────────────────────────────────────── */

export default function EmailDeliverabilityCheckerPage() {
  const router = useRouter();
  const hasInitializedFromQuery = useRef(false);
  const checkInFlightRef = useRef(false);
  const [domainInput, setDomainInput] = useState("");
  const [activeSelectorPreset, setActiveSelectorPreset] = useState("google");
  const [customSelectorInput, setCustomSelectorInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CheckResponse | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [copiedRecordKey, setCopiedRecordKey] = useState<string | null>(null);
  const [expandedFixes, setExpandedFixes] = useState<Record<string, boolean>>({});

  const currentDkimSelector =
    activeSelectorPreset === "custom"
      ? customSelectorInput.trim() || "google"
      : PRESET_SELECTORS.find((s) => s.id === activeSelectorPreset)?.value || "google";

  const runCheck = useCallback(
    async (dom: string, sel: string) => {
      if (!dom.trim() || checkInFlightRef.current) return;

      checkInFlightRef.current = true;
      setLoading(true);
      setError("");
      setResult(null);

      try {
        const res = await fetch("/api/check-deliverability", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain: dom, dkimSelector: sel }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to check domain");
        }
        setResult(data);

        const params = new URLSearchParams();
        params.set("domain", data.domain);
        if (sel !== "google") params.set("selector", sel);
        router.replace(
          `/tools/email-deliverability-checker?${params.toString()}`,
          undefined,
          { shallow: true }
        );
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "An error occurred";
        setError(msg);
      } finally {
        checkInFlightRef.current = false;
        setLoading(false);
      }
    },
    [router]
  );

  useEffect(() => {
    if (!router.isReady || hasInitializedFromQuery.current) return;
    hasInitializedFromQuery.current = true;

    const { domain, selector } = router.query;
    if (!domain || typeof domain !== "string") return;

    setDomainInput(domain);
    const sel = typeof selector === "string" ? selector : "google";

    const matched = PRESET_SELECTORS.find((p) => p.value === sel && p.id !== "custom");
    if (matched) {
      setActiveSelectorPreset(matched.id);
    } else {
      setActiveSelectorPreset("custom");
      setCustomSelectorInput(sel);
    }

    runCheck(domain, sel);
  }, [router.isReady, router.query, runCheck]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCheck(domainInput, currentDkimSelector);
  };

  const toggleFix = (key: string) => {
    setExpandedFixes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const copyShareLink = async () => {
    if (!result) return;
    const url = `https://leadsnipper.com/tools/email-deliverability-checker?domain=${encodeURIComponent(
      result.domain
    )}${currentDkimSelector !== "google" ? `&selector=${encodeURIComponent(currentDkimSelector)}` : ""}`;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedRecordKey(key);
      setTimeout(() => setCopiedRecordKey(null), 2000);
    } catch {
      /* ignore */
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Email Deliverability Checker",
    url: "https://leadsnipper.com/tools/email-deliverability-checker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description:
      "Free tool to check if your email setup is safe. See SPF, DKIM, and DMARC results and simple fixes so more emails reach the inbox.",
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

  const faqSchema = generateFaqPageSchema(checkerFaqs);

  const renderStatusBadge = (status: RecordStatus) => {
    switch (status) {
      case "pass":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Pass
          </span>
        );
      case "warn":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-[#b75b00]/10 text-[#b75b00] border border-[#b75b00]/20">
            <AlertTriangle className="w-3.5 h-3.5" /> Warning
          </span>
        );
      case "fail":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/20">
            <AlertCircle className="w-3.5 h-3.5" /> Fail
          </span>
        );
      case "missing":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-[#727785]/10 text-[#727785] border border-[#727785]/20">
            <HelpCircle className="w-3.5 h-3.5" /> Missing
          </span>
        );
    }
  };

  const renderIssues = (
    issues: Issue[],
    prefix: string,
    emptyMessage: string
  ) => {
    if (issues.length === 0) {
      return (
        <div className="p-3 rounded-xl bg-[#10b981]/5 border border-[#10b981]/20 text-xs text-[#10b981] font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>{emptyMessage}</span>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {issues.map((issue, idx) => {
          const fixKey = `${prefix}-${idx}`;
          const isExpanded = expandedFixes[fixKey];
          return (
            <div
              key={fixKey}
              className="p-3 rounded-xl bg-white border border-[#c2c6d6]/40 text-xs space-y-2"
            >
              <div className="flex items-start gap-2.5 text-[#131b2e] font-medium leading-snug">
                {issue.severity === "error" ? (
                  <AlertCircle className="w-4 h-4 text-[#ba1a1a] flex-shrink-0 mt-0.5" />
                ) : issue.severity === "warning" ? (
                  <AlertTriangle className="w-4 h-4 text-[#b75b00] flex-shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-4 h-4 text-[#0058be] flex-shrink-0 mt-0.5" />
                )}
                <span>{issue.message}</span>
              </div>

              <button
                type="button"
                onClick={() => toggleFix(fixKey)}
                className="text-[11px] text-[#0058be] font-semibold flex items-center gap-1 hover:underline pt-1"
              >
                {isExpanded ? "Hide fix" : "How to fix"}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="p-3 rounded-lg bg-[#faf8ff] text-[11px] text-[#424754] leading-relaxed border border-[#c2c6d6]/20">
                  {issue.fix}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Free Email Deliverability Checker (SPF, DKIM, DMARC)"
        description="Check if your domain is set up to send email safely. See SPF, DKIM, and DMARC results in seconds, plus simple steps to fix problems."
        keywords="spf dkim dmarc checker, email deliverability checker free, check email authentication, spf lookup, dmarc validator"
        canonical="https://leadsnipper.com/tools/email-deliverability-checker"
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
              Free Email Check Tool
            </span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Email Deliverability Checker
              </span>
              <span className="block font-display italic text-[#0058be] text-2xl md:text-display-lg mt-2">
                Check SPF, DKIM & DMARC in seconds
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto">
              Enter your domain. We check your email setup and tell you what is
              wrong — and how to fix it — before your cold emails go to spam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Checker Tool ─── */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          {/* Input form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-heading font-semibold text-[#424754] mb-1.5 flex items-center justify-between">
                    <span>Your website domain</span>
                    <span className="text-[11px] font-mono text-[#727785] font-normal flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#10b981]" /> Private check
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <div className="relative flex-1">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#727785]" />
                      <input
                        type="text"
                        value={domainInput}
                        onChange={(e) => setDomainInput(e.target.value)}
                        placeholder="e.g. yourcompany.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] font-heading font-semibold text-sm placeholder:text-[#94a3b8] outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary py-3 px-6 rounded-xl text-sm font-heading font-semibold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Checking...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          <span>Check My Email Setup</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#c2c6d6]/20">
                  <label className="text-xs font-heading font-semibold text-[#424754] flex items-center gap-1.5 mb-2.5">
                    <span>Email provider (DKIM)</span>
                    <span className="group relative cursor-pointer text-[#727785] hover:text-[#0058be]">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 rounded-xl bg-[#131b2e] p-2.5 text-[11px] text-white shadow-lg leading-tight z-30">
                        Pick who sends your email. Google uses &apos;google&apos;.
                        Microsoft uses &apos;selector1&apos;. Not sure? Start with
                        Google.
                      </span>
                    </span>
                  </label>

                  <div className="flex flex-wrap items-center gap-2">
                    {PRESET_SELECTORS.map((preset) => {
                      const isSelected = activeSelectorPreset === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setActiveSelectorPreset(preset.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-heading font-medium transition-all ${
                            isSelected
                              ? "bg-[#0058be] text-white"
                              : "bg-white text-[#424754] border border-[#c2c6d6]/40 hover:border-[#0058be]/40 hover:text-[#0058be]"
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>

                  {activeSelectorPreset === "custom" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3"
                    >
                      <input
                        type="text"
                        value={customSelectorInput}
                        onChange={(e) => setCustomSelectorInput(e.target.value)}
                        placeholder="Type your own name (e.g. s1 or default)"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#c2c6d6]/40 bg-white text-[#131b2e] text-xs font-mono focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 outline-none"
                      />
                    </motion.div>
                  )}
                </div>
              </form>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 p-4 rounded-xl bg-[#ba1a1a]/5 border border-[#ba1a1a]/20 text-[#ba1a1a] text-sm flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{error}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Score banner */}
                <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="relative w-24 h-24 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          className="text-[#eaedff]"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={
                            result.score >= 80
                              ? "text-[#10b981]"
                              : result.score >= 50
                                ? "text-[#b75b00]"
                                : "text-[#ba1a1a]"
                          }
                          strokeDasharray={`${result.score}, 100`}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="font-heading font-extrabold text-2xl text-[#131b2e] leading-none">
                          {result.score}
                        </span>
                        <span className="text-[10px] text-[#727785] font-mono font-medium mt-0.5">
                          / 100
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#131b2e]">
                          Results for{" "}
                          <span className="text-[#0058be]">{result.domain}</span>
                        </h2>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#eaedff] text-[#0058be]">
                          Provider: {currentDkimSelector}
                        </span>
                      </div>

                      <p className="text-sm text-[#424754]">
                        {result.score >= 80 ? (
                          <span className="text-[#10b981] font-semibold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" /> Looks good. Your
                            setup is strong.
                          </span>
                        ) : result.score >= 50 ? (
                          <span className="text-[#b75b00] font-semibold flex items-center gap-1.5">
                            <ShieldAlert className="w-4 h-4" /> Some issues.
                            Fix them before you send a lot.
                          </span>
                        ) : (
                          <span className="text-[#ba1a1a] font-semibold flex items-center gap-1.5">
                            <AlertCircle className="w-4 h-4" /> High risk.
                            Fix these before you send.
                          </span>
                        )}
                      </p>

                      <p className="text-xs text-[#727785]">
                        Checked at{" "}
                        {new Date(result.checkedAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyShareLink}
                    className="w-full md:w-auto border border-[#c2c6d6]/40 bg-white hover:border-[#0058be]/40 hover:text-[#0058be] text-[#424754] py-2.5 px-5 rounded-xl text-sm font-heading font-semibold flex items-center justify-center gap-2 transition"
                  >
                    {linkCopied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                        <span className="text-[#10b981]">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Link2 className="w-4 h-4" />
                        <span>Share Results</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Protocol cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* SPF */}
                  <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#c2c6d6]/20">
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#131b2e]">
                          SPF
                        </h3>
                        <p className="text-xs text-[#727785]">
                          Who can send for you
                        </p>
                      </div>
                      {renderStatusBadge(result.spf.status)}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#727785] uppercase tracking-wider">
                          Current setting
                        </span>
                        {result.spf.raw && (
                          <button
                            type="button"
                            onClick={() => copyToClipboard(result.spf.raw!, "spf")}
                            className="text-[11px] text-[#0058be] hover:underline flex items-center gap-1 font-medium"
                          >
                            {copiedRecordKey === "spf" ? (
                              <span className="text-[#10b981]">Copied!</span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {result.spf.raw ? (
                        <div className="p-3 bg-[#131b2e] text-[#eaedff] rounded-xl font-mono text-xs break-all leading-relaxed">
                          {result.spf.raw}
                        </div>
                      ) : (
                        <div className="p-3 bg-[#ba1a1a]/5 rounded-xl border border-[#ba1a1a]/20 text-xs text-[#ba1a1a] font-medium italic">
                          No SPF setting found for this domain
                        </div>
                      )}
                    </div>

                    {renderIssues(
                      result.spf.issues,
                      "spf",
                      "SPF looks good."
                    )}
                  </div>

                  {/* DKIM */}
                  <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#c2c6d6]/20">
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#131b2e]">
                          DKIM
                        </h3>
                        <p className="text-xs text-[#727785]">
                          Email stamp / signature
                        </p>
                      </div>
                      {renderStatusBadge(result.dkim.status)}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#727785] uppercase tracking-wider">
                          Key name: {currentDkimSelector}
                        </span>
                        {result.dkim.raw && (
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(result.dkim.raw!, "dkim")
                            }
                            className="text-[11px] text-[#0058be] hover:underline flex items-center gap-1 font-medium"
                          >
                            {copiedRecordKey === "dkim" ? (
                              <span className="text-[#10b981]">Copied!</span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {result.dkim.raw ? (
                        <div className="p-3 bg-[#131b2e] text-[#eaedff] rounded-xl font-mono text-xs break-all leading-relaxed max-h-24 overflow-y-auto">
                          {result.dkim.raw}
                        </div>
                      ) : (
                        <div className="p-3 bg-[#ba1a1a]/5 rounded-xl border border-[#ba1a1a]/20 text-xs text-[#ba1a1a] font-medium italic">
                          No DKIM key found for {currentDkimSelector}
                        </div>
                      )}
                    </div>

                    {renderIssues(
                      result.dkim.issues,
                      "dkim",
                      "DKIM looks good."
                    )}
                  </div>

                  {/* DMARC */}
                  <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#c2c6d6]/20">
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#131b2e]">
                          DMARC
                        </h3>
                        <p className="text-xs text-[#727785]">
                          What to do if checks fail
                        </p>
                      </div>
                      {renderStatusBadge(result.dmarc.status)}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#727785] uppercase tracking-wider">
                          Current setting
                        </span>
                        {result.dmarc.raw && (
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(result.dmarc.raw!, "dmarc")
                            }
                            className="text-[11px] text-[#0058be] hover:underline flex items-center gap-1 font-medium"
                          >
                            {copiedRecordKey === "dmarc" ? (
                              <span className="text-[#10b981]">Copied!</span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {result.dmarc.raw ? (
                        <div className="p-3 bg-[#131b2e] text-[#eaedff] rounded-xl font-mono text-xs break-all leading-relaxed">
                          {result.dmarc.raw}
                        </div>
                      ) : (
                        <div className="p-3 bg-[#ba1a1a]/5 rounded-xl border border-[#ba1a1a]/20 text-xs text-[#ba1a1a] font-medium italic">
                          No DMARC setting found
                        </div>
                      )}
                    </div>

                    {renderIssues(
                      result.dmarc.issues,
                      "dmarc",
                      "DMARC looks good."
                    )}
                  </div>
                </div>

                {/* Inline CTA */}
                <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0058be]/[0.03]">
                  <div className="space-y-2 text-center md:text-left">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#0058be]">
                      <Zap className="w-3.5 h-3.5" /> Auto domain checks
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#131b2e]">
                      Keep your inbox safe on autopilot
                    </h3>
                    <p className="text-sm text-[#727785] max-w-xl leading-relaxed">
                      LeadSnipper watches SPF, DKIM, and DMARC for you, pauses
                      bad campaigns, and checks emails before you send.
                    </p>
                  </div>

                  <Link
                    href="/pricing"
                    className="btn-primary py-3 px-6 rounded-xl text-sm font-heading font-semibold flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Why Auth Matters ─── */}
      <section className="py-16 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="section-tag mb-6">Simple Guide</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-2">
              Why these three checks matter
            </h2>
            <p className="text-body-md text-[#727785] max-w-2xl">
              Gmail and Yahoo want SPF, DKIM, and DMARC set up. If they are
              missing, more of your emails go to spam.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "SPF — Who can send",
                body: "A list of servers allowed to send email for your domain. It stops strangers from faking your address.",
              },
              {
                step: "2",
                title: "DKIM — Email stamp",
                body: "A digital stamp on each email. The inbox checks it to make sure the message was not changed.",
              },
              {
                step: "3",
                title: "DMARC — What if it fails",
                body: "A rule for what inboxes should do when SPF or DKIM fails — like put the email in spam or block it.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0058be] text-white font-heading font-bold text-sm flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {item.body}
                </p>
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
            {checkerFaqs.map((faq, i) => (
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

      {/* ─── Related links ─── */}
      <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#727785] mb-5">
              Want to learn more?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/email-deliverability"
                className="btn-ghost rounded-full text-sm"
              >
                Deliverability tool →
              </Link>
              <Link
                href="/blog/spf-dkim-dmarc-cold-email-guide"
                className="btn-ghost rounded-full text-sm"
              >
                Simple SPF / DKIM / DMARC guide →
              </Link>
              <Link
                href="/blog/cold-email-deliverability-checklist"
                className="btn-ghost rounded-full text-sm"
              >
                Pre-send checklist →
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
