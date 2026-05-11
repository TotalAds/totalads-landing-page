import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
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
  pageKey: "instantlyAlternative" | "smartleadAlternative";
  competitor: "Instantly" | "Smartlead";
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
  "Bring your own AWS SES or use managed sending",
  "Verify leads with built-in Reoon checks before sending",
  "Monitor domain health, DNS, bounces, complaints, and pacing together",
  "Run cold campaigns with infrastructure ownership and transparent costs",
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

      <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f7ff]">
        <Navbar />
        <main className="pt-28">
          <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-6xl mx-auto">
              <nav className="mb-8 text-sm text-[#64748b]" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#2563eb]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>{competitor} alternative</span>
              </nav>

              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                <div>
                  <span className="inline-flex rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1d4ed8]">
                    {eyebrow}
                  </span>
                  <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.04]">
                    {headline}
                  </h1>
                  <p className="mt-5 text-lg text-[#475569] leading-relaxed max-w-2xl">
                    {subheadline}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="https://app.leadsnipper.com/signup"
                      className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#1d4ed8] transition"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      href="/savings-calculator"
                      className="inline-flex items-center justify-center rounded-xl border border-[#cbd5e1] bg-white px-6 py-3 font-bold text-[#1e293b] hover:border-[#2563eb] hover:text-[#2563eb] transition"
                    >
                      Compare Costs
                    </Link>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#dbeafe] bg-white p-6 shadow-2xl shadow-blue-900/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#f8fafc] p-5">
                      <p className="text-sm font-bold text-[#64748b]">{competitor}</p>
                      <p className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                        Shared
                      </p>
                      <p className="mt-2 text-sm text-[#64748b]">
                        Easier to start, less infrastructure control.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#eff6ff] to-[#ecfdf5] p-5">
                      <p className="text-sm font-bold text-[#2563eb]">LeadSnipper</p>
                      <p className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                        Owned
                      </p>
                      <p className="mt-2 text-sm text-[#475569]">
                        SES control, verification, and domain health.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-[#e2e8f0] p-5">
                    <p className="font-bold text-[#0f172a]">
                      Why teams compare both
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {competitorSummary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 py-14 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7">
                <h2 className="text-2xl font-extrabold text-[#0f172a]">
                  Where {competitor} can work
                </h2>
                <ul className="mt-5 space-y-3">
                  {competitorBestFor.map((item) => (
                    <li key={item} className="flex gap-3 text-[#475569]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#16a34a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] to-white p-7">
                <h2 className="text-2xl font-extrabold text-[#0f172a]">
                  Why teams choose LeadSnipper instead
                </h2>
                <ul className="mt-5 space-y-3">
                  {leadsnipperWins.map((item) => (
                    <li key={item} className="flex gap-3 text-[#475569]">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2563eb]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
                  {competitor} vs LeadSnipper: feature-by-feature
                </h2>
                <p className="mt-3 text-[#475569]">
                  The biggest difference is not the editor or templates. It is
                  who controls the sending layer, verification, and reputation signals.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-[#dbeafe] bg-white shadow-xl shadow-blue-900/5">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-[#f8fafc] text-[#0f172a]">
                      <tr>
                        <th className="p-4 font-extrabold">Feature</th>
                        <th className="p-4 font-extrabold">{competitor}</th>
                        <th className="p-4 font-extrabold text-[#2563eb]">
                          LeadSnipper
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, index) => (
                        <tr
                          key={row.feature}
                          className={index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}
                        >
                          <td className="border-t border-[#e2e8f0] p-4 font-bold text-[#1e293b]">
                            {row.feature}
                          </td>
                          <td className="border-t border-[#e2e8f0] p-4 text-[#64748b]">
                            {row.competitor}
                          </td>
                          <td className="border-t border-[#e2e8f0] p-4 font-semibold text-[#2563eb]">
                            {row.leadsnipper}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0f172a]">
                  The trade-offs to check before switching
                </h2>
                <p className="mt-4 text-[#475569] leading-relaxed">
                  A comparison page should help you make a clean decision. If you
                  only need a quick starter tool, {competitor} may be enough. If
                  you care about cost, verified leads, sender reputation, and AWS
                  SES ownership, LeadSnipper is built for that workflow.
                </p>
              </div>
              <div className="space-y-3">
                {competitorLimits.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-[#fee2e2] bg-[#fef2f2] p-4 text-[#7f1d1d]"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center text-3xl font-extrabold text-[#0f172a]">
                Frequently asked questions
              </h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-2xl border border-[#e2e8f0] bg-white p-6"
                  >
                    <h3 className="text-lg font-bold text-[#0f172a]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-[#475569] leading-relaxed">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-[#1d4ed8] to-[#0f172a] p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-900/20">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#bfdbfe]">
                {pageConfig.title}
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
                Send cold email with infrastructure you control.
              </h2>
              <p className="mt-4 text-[#dbeafe] max-w-2xl mx-auto">
                Start with 1,000 emails free, verify leads before launch, and
                see whether BYO AWS SES makes your outbound stack cheaper and safer.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="https://app.leadsnipper.com/signup"
                  className="rounded-xl bg-white px-6 py-3 font-bold text-[#1d4ed8] hover:bg-[#eff6ff] transition"
                >
                  Start Free
                </Link>
                <Link
                  href="/blog/best-cold-email-software-2026-comparison"
                  className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition"
                >
                  Read Full Tool Comparison
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
