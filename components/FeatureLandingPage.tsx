import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { generateFaqPageSchema } from "@/lib/faqs";
import { pageConfigs } from "@/lib/seo";

export interface FeatureSection {
  title: string;
  description: string;
  badge?: string;
}

export interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

export interface FeatureLandingPageProps {
  pageKey: keyof typeof pageConfigs;
  eyebrow: string;
  headline: string;
  subheadline: string;
  problemTitle: string;
  problemDescription: string;
  outcomes: string[];
  features: FeatureSection[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: RelatedLink[];
  comparisonRows?: Array<{
    feature: string;
    traditional: string;
    leadsnipper: string;
  }>;
}

export default function FeatureLandingPage({
  pageKey,
  eyebrow,
  headline,
  subheadline,
  problemTitle,
  problemDescription,
  outcomes,
  features,
  faqs,
  relatedLinks,
  comparisonRows,
}: FeatureLandingPageProps) {
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
          name: pageConfig.title,
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

      <section className="hero-bg dot-grid pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <nav className="mb-8 text-xs text-[#727785]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0058be] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#131b2e]">{eyebrow}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-tag mb-6">{eyebrow}</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6 text-3xl md:text-display-lg leading-[1.08] tracking-tight">
              {headline}
            </h1>
            <p className="text-body-lg text-[#424754] mt-5 leading-relaxed">
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
                href="/pricing"
                className="btn-ghost rounded-full inline-flex items-center justify-center"
              >
                See pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <span className="section-tag mb-6">The Problem</span>
              <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mt-6">
                {problemTitle}
              </h2>
              <p className="text-body-md text-[#727785] mt-4 leading-relaxed">
                {problemDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-[#0058be]/15 p-7"
            >
              <span className="font-mono text-[10px] text-[#0058be] uppercase tracking-widest">
                The Outcome
              </span>
              <h3 className="font-heading font-bold text-xl text-[#131b2e] mt-3 mb-5">
                What changes with LeadSnipper
              </h3>
              <ul className="space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[#424754] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag justify-center mb-6">Features</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Built for teams that care about{" "}
              <span className="font-display italic text-[#0058be]">
                deliverability.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
              >
                {feature.badge && (
                  <span className="font-mono text-[10px] text-[#0058be] bg-[#0058be]/[0.06] px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {feature.badge}
                  </span>
                )}
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mt-3 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {comparisonRows && comparisonRows.length > 0 && (
        <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="section-tag mb-6">Comparison</span>
              <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
                Why teams switch to LeadSnipper
              </h2>
            </motion.div>

            <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-[#f2f3ff] border-b border-[#c2c6d6]/20">
                      <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider w-1/3">
                        Feature
                      </th>
                      <th className="text-left px-5 py-4 font-heading font-semibold text-[#727785] text-xs uppercase tracking-wider w-1/3">
                        Traditional Tools
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
                          {row.traditional}
                        </td>
                        <td className="px-5 py-4 text-[13px] font-heading font-semibold text-[#0058be]">
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
      )}

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
              Frequently asked questions
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
                <p className="text-sm text-[#727785] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
            <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-8">
              Related resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block p-5 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 transition-all hover:shadow-sm"
                >
                  <h3 className="font-heading font-semibold text-sm text-[#131b2e] mb-2 group-hover:text-[#0058be] transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-xs text-[#727785] leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </>
  );
}
