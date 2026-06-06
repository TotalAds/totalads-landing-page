import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { generateFaqPageSchema } from "@/lib/faqs";
import { IndustryConfig } from "@/lib/industries";

interface IndustryLandingPageProps {
  industry: IndustryConfig;
}

export default function IndustryLandingPage({
  industry,
}: IndustryLandingPageProps) {
  const additionalStructuredData = [
    generateFaqPageSchema(industry.faqs),
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
          name: "Cold Email by Industry",
          item: "https://leadsnipper.com/cold-email-software",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: industry.name,
          item: industry.canonical,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={industry.title}
        description={industry.description}
        keywords={industry.keywords}
        canonical={industry.canonical}
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
            <Link
              href="/cold-email-software"
              className="hover:text-[#0058be] transition-colors"
            >
              Cold Email Software
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#131b2e]">{industry.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-tag mb-6">Cold Email for {industry.name}</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6 text-3xl md:text-display-lg leading-[1.08] tracking-tight">
              {industry.headline}
            </h1>
            <p className="text-body-lg text-[#424754] mt-5 leading-relaxed">
              {industry.subheadline}
            </p>
            <div className="mt-8">
              <Link
                href="https://app.leadsnipper.com/signup"
                className="btn-primary rounded-full inline-flex items-center justify-center gap-2"
              >
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-6">
            Industry challenges
          </h2>
          <ul className="space-y-3">
            {industry.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 text-sm text-[#424754] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0058be] shrink-0 mt-0.5" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-6">
            Sample cold email sequence
          </h2>
          <div className="space-y-4">
            {industry.sampleSequence.map((email, i) => (
              <div
                key={email.subject}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
              >
                <p className="font-mono text-[10px] text-[#0058be] uppercase tracking-widest mb-2">
                  Email {i + 1}
                </p>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  Subject: {email.subject}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed whitespace-pre-line">
                  {email.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-6">
            Deliverability tips for {industry.name}
          </h2>
          <ul className="space-y-3">
            {industry.deliverabilityTips.map((tip) => (
              <li
                key={tip}
                className="flex gap-3 text-sm text-[#424754] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 section-mesh border-t border-[#c2c6d6]/20">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6 lg:px-16">
          <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-8 text-center">
            FAQ
          </h2>
          <div className="space-y-4">
            {industry.faqs.map((faq) => (
              <article
                key={faq.question}
                className="glass-card rounded-2xl border border-[#c2c6d6]/15 p-6"
              >
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <div className="glass-card rounded-3xl border border-[#0058be]/15 p-10">
            <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
              {industry.ctaHeadline}
            </h2>
            <p className="text-sm text-[#727785] mb-6">
              {industry.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://app.leadsnipper.com/signup"
                className="btn-primary rounded-full inline-flex items-center justify-center gap-2"
              >
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/cold-email-software" className="btn-ghost rounded-full">
                Explore cold email software
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
