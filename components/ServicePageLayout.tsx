import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServicePageProps {
  seo: { title: string; description: string; canonical: string };
  badge: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  accentColor?: string;
  problem: { heading: string; headingAccent: string; body: string[] };
  features: { icon: string; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  results: string[];
  faqs: ServiceFAQ[];
}

const Check = ({ color = "#10b981" }: { color?: string }) => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" fill={color} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ServicePageLayout({
  seo,
  badge,
  headline,
  headlineAccent,
  subtitle,
  accentColor = "#b75b00",
  problem,
  features,
  process,
  results,
  faqs,
}: ServicePageProps) {
  const breadcrumbSchema = {
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
        name: "Services",
        item: "https://leadsnipper.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: badge,
        item: seo.canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: badge,
    description: seo.description,
    url: seo.canonical,
    provider: {
      "@type": "Organization",
      name: "LeadSnipper",
      url: "https://leadsnipper.com",
    },
    areaServed: "Worldwide",
    serviceType: badge,
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        additionalStructuredData={[breadcrumbSchema, serviceSchema]}
      />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav
              className="flex items-center justify-center gap-1.5 text-xs text-[#727785] mb-8"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-[#eb857a] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-[#eb857a] transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#131b2e] font-medium">{badge}</li>
              </ol>
            </nav>
            <span className="section-tag justify-center mb-6">{badge}</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                {headline}
              </span>
              <span
                className="block font-display italic text-3xl md:text-display-hero mt-2"
                style={{ color: accentColor }}
              >
                {headlineAccent}
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact" className="btn-amber btn-hero">
                Book free audit →
              </Link>
              <Link href="/pricing" className="btn-ghost btn-hero">
                See pricing →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-tag justify-center mb-6">The Problem</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-6">
              {problem.heading}{" "}
              <span className="font-display italic text-[#ba1a1a]">
                {problem.headingAccent}
              </span>
            </h2>
            <div className="space-y-4 text-body-md text-[#424754] leading-relaxed text-left max-w-2xl mx-auto">
              {problem.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 section-warm border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag justify-center mb-6">What We Deliver</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Everything included.{" "}
              <span className="font-display italic" style={{ color: accentColor }}>
                Nothing bolted on.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl"
              >
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-heading font-bold text-[15px] text-[#131b2e] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 section-mesh border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center mb-6">How It Works</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Simple process.{" "}
              <span className="font-display italic" style={{ color: accentColor }}>
                Real results.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-white text-sm"
                  style={{ background: accentColor }}
                >
                  {p.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#131b2e] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#727785] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 section-blue border-t border-[#c2c6d6]/20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-[#c2c6d6]/15"
          >
            <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-6 text-center">
              Expected Results
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {results.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2 text-sm text-[#131b2e]"
                >
                  <Check color={accentColor} />
                  {r}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-24 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-16">
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
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group glass-card rounded-2xl border border-[#c2c6d6]/15 open:shadow-md transition-all"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-heading font-semibold text-sm text-[#131b2e] pr-4">
                      {faq.q}
                    </h3>
                    <span className="text-[#727785] text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[#727785] leading-relaxed border-t border-[#c2c6d6]/10 pt-4">
                    {faq.a}
                  </div>
                </details>
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
