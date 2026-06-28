import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { generateFaqPageSchema } from "@/lib/faqs";
import { pageConfigs } from "@/lib/seo";

interface ComparisonPoint {
  feature: string;
  competitor: string;
  leadsnipper: string;
}

interface ComparisonPageProps {
  pageKey:
    | "instantlyAlternative"
    | "smartleadAlternative"
    | "apolloAlternative"
    | "lemlistAlternative"
    | "mailshakeAlternative";
  competitor: "Instantly" | "Smartlead" | "Apollo" | "Lemlist" | "Mailshake";
  eyebrow: string;
  headline: string;
  subheadline: string;
  competitorSummary: string;
  competitorBestFor: string[];
  competitorLimits: string[];
  comparisonRows: ComparisonPoint[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const leadsnipperWins = [
  "Bring your own AWS SES or use managed sending — your choice",
  "Verify leads with built-in Reoon checks before any campaign fires",
  "Monitor domain health, DNS, bounces, complaints, and pacing in one view",
  "Run cold campaigns with full infrastructure ownership and transparent costs",
];

export default function ComparisonPage({
  pageKey,
  competitor,
  eyebrow,
  headline,
  subheadline,
  competitorSummary,
  competitorBestFor,
  competitorLimits,
  comparisonRows,
  faqs,
}: ComparisonPageProps) {
  const pageConfig = pageConfigs[pageKey];
  const canonical = pageConfig.canonical;
  const additionalStructuredData = [
    generateFaqPageSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://leadsnipper.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `${competitor} alternative`,
          item: canonical,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        pageKey={pageKey}
        structuredDataTypes={["product", "softwareApplication"]}
        additionalStructuredData={additionalStructuredData}
      />
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="hero-bg dot-grid pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs text-[#727785]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0058be] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#131b2e]">{competitor} alternative</span>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag mb-6">{eyebrow}</span>
              <h1 className="font-heading font-extrabold text-[#131b2e] mt-6 text-3xl md:text-display-lg leading-[1.08] tracking-tight">
                {headline}
              </h1>
              <p className="text-body-lg text-[#424754] mt-5 max-w-xl leading-relaxed">
                {subheadline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://app.leadsnipper.com/signup?product=leadsnipper"
                  className="btn-primary rounded-full inline-flex items-center justify-center gap-2"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/savings-calculator"
                  className="btn-ghost rounded-full inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Compare costs
                </Link>
              </div>
            </motion.div>

            {/* Hero card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl bg-[#f2f3ff] p-4 border border-[#c2c6d6]/20">
                  <p className="text-xs font-heading font-semibold text-[#727785] mb-2">{competitor}</p>
                  <p className="text-2xl font-heading font-extrabold text-[#131b2e]">Shared</p>
                  <p className="text-xs text-[#727785] mt-1.5 leading-relaxed">
                    Easier to start, less control over your sending infrastructure.
                  </p>
                </div>
                <div
                  className="rounded-xl p-4 border border-[#0058be]/15"
                  style={{ background: "linear-gradient(135deg, #eff6ff, #f0fdf4)" }}
                >
                  <p className="text-xs font-heading font-semibold text-[#0058be] mb-2">LeadSnipper</p>
                  <p className="text-2xl font-heading font-extrabold text-[#131b2e]">Owned</p>
                  <p className="text-xs text-[#424754] mt-1.5 leading-relaxed">
                    SES control, built-in verification, and domain health.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-[#c2c6d6]/20 bg-white/70 p-4">
                <p className="font-heading font-semibold text-[13px] text-[#131b2e] mb-2">
                  Why teams compare both
                </p>
                <p className="text-xs text-[#727785] leading-relaxed">{competitorSummary}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Where each works ─── */}
      <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Competitor best for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-7"
            >
              <span className="font-mono text-[10px] text-[#727785] uppercase tracking-widest">
                {competitor}
              </span>
              <h2 className="font-heading font-bold text-xl text-[#131b2e] mt-3 mb-5">
                Where {competitor} can work
              </h2>
              <ul className="space-y-3">
                {competitorBestFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#424754] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LeadSnipper wins */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#0058be]/15 p-7 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/[0.03] to-transparent pointer-events-none" />
              <div className="relative">
                <span className="font-mono text-[10px] text-[#0058be] uppercase tracking-widest">
                  LeadSnipper
                </span>
                <h2 className="font-heading font-bold text-xl text-[#131b2e] mt-3 mb-5">
                  Why teams choose LeadSnipper instead
                </h2>
                <ul className="space-y-3">
                  {leadsnipperWins.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#424754] leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-[#0058be] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Feature comparison table ─── */}
      <section className="py-20 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="section-tag mb-6">Feature Comparison</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              {competitor} vs LeadSnipper:{" "}
              <span className="font-display italic text-[#0058be]">
                feature by feature.
              </span>
            </h2>
            <p className="text-body-md text-[#727785] mt-4 max-w-2xl">
              The biggest difference isn&apos;t the editor or templates. It&apos;s who controls
              the sending layer, verification, and reputation signals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-[#c2c6d6]/15 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-[#f2f3ff] border-b border-[#c2c6d6]/20">
                    <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider w-1/3">
                      Feature
                    </th>
                    <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider w-1/3">
                      {competitor}
                    </th>
                    <th className="text-left px-5 py-4 font-heading font-bold text-[#0058be] text-xs uppercase tracking-wider w-1/3">
                      LeadSnipper
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#c2c6d6]/10 ${i % 2 === 0 ? "" : "bg-[#f2f3ff]/30"}`}
                    >
                      <td className="px-5 py-4 font-heading font-semibold text-[#131b2e] text-[13px]">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-[#727785] text-[13px]">
                        {row.competitor}
                      </td>
                      <td className="px-5 py-4 text-[13px] font-heading font-semibold text-[#0058be]">
                        {row.leadsnipper}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Competitor limits ─── */}
      <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <span className="section-tag mb-6">Trade-offs</span>
              <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mt-6">
                Check these before switching.
              </h2>
              <p className="text-body-md text-[#727785] mt-4 leading-relaxed">
                A comparison page should help you make a clean decision. If you
                only need a quick starter tool, {competitor} may be enough. If
                you care about cost, verified leads, sender reputation, and AWS
                SES ownership, LeadSnipper is built for that workflow.
              </p>
              <Link
                href="/savings-calculator"
                className="inline-flex items-center gap-2 mt-6 text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] transition-colors"
              >
                <Zap className="w-4 h-4" />
                Calculate cost difference →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {competitorLimits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-red-100 bg-red-50/60 p-4"
                >
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-800 leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
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
              Frequently asked questions.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* ─── Final CTA ─── */}
      <section className="py-16 border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-[#0058be]/15 p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <span className="font-mono text-[10px] text-[#0058be] uppercase tracking-widest">
                {pageConfig.title}
              </span>
              <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mt-4 mb-3">
                Send cold email on infrastructure{" "}
                <span className="font-display italic text-[#0058be]">you control.</span>
              </h2>
              <p className="text-sm text-[#727785] mb-6 max-w-lg mx-auto">
                Start with 1,000 emails free, verify leads before launch, and
                see whether BYO AWS SES makes your outbound stack cheaper and safer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="https://app.leadsnipper.com/signup?product=leadsnipper"
                  className="btn-primary rounded-full inline-flex items-center justify-center gap-2"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/blog/best-cold-email-software-2026-comparison"
                  className="btn-ghost rounded-full"
                >
                  Read full comparison →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Cross-links to other alternatives ─── */}
      <section className="py-12 border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <p className="text-xs font-mono text-[#727785] mb-4 uppercase tracking-widest">
            Compare other alternatives
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/vs/instantly", label: "Instantly alternative" },
              { href: "/vs/smartlead", label: "Smartlead alternative" },
              { href: "/vs/apollo", label: "Apollo alternative" },
              { href: "/vs/lemlist", label: "Lemlist alternative" },
              { href: "/vs/mailshake", label: "Mailshake alternative" },
            ]
              .filter((link) => !link.href.includes(competitor.toLowerCase()))
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
