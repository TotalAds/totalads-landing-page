import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { Navbar } from "@/components/ui/navbar";

const features = [
  {
    icon: "📅",
    title: "Content Calendar & Scheduler",
    desc: "Queue up posts weeks in advance. Drag-and-drop scheduling with calendar view. Never miss a posting window again.",
  },
  {
    icon: "🔬",
    title: "Content Researcher",
    desc: "Trending topics in your niche, competitor post analysis, and AI-generated content ideas — research without the scroll.",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    desc: "Engagement rates, follower growth, best-performing content types. Data-driven decisions for your LinkedIn strategy.",
  },
  {
    icon: "✍️",
    title: "AI Writing Assistant",
    desc: "Generate drafts, repurpose blog posts into LinkedIn content, adjust tone and format. Your voice, amplified by AI.",
  },
  {
    icon: "⏰",
    title: "Best-Time Posting",
    desc: "Machine learning identifies when your audience is most active. Automatic scheduling to maximise impressions.",
  },
  {
    icon: "👥",
    title: "Multi-Account Support",
    desc: "Manage multiple LinkedIn profiles from one dashboard. Perfect for agencies and teams running executive branding.",
  },
];

export default function SocialSnipperProduct() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/products/leadsnipper");
  }, [router]);

  return null;
}

// Deprecated implementation preserved for reference
function OldSocialSnipperProduct() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        pageKey="socialsnipper"
        structuredDataTypes={["socialSnipperSoftwareApplication"]}
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
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-semibold mb-6">
              SocialSnipper — Live
            </span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Stay visible on LinkedIn
              </span>
              <span className="block font-display italic text-[#8b5cf6] text-3xl md:text-display-hero mt-2">
                with AI posts and Gemini images.
              </span>
            </h1>
            <p className="text-body-lg text-[#727785] max-w-xl mx-auto mt-6 mb-10">
              Generate consistent, high-impact content customized for your brand.
              Schedule posts, research trends, and manage all your team accounts from
              one collaborative dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.leadsnipper.com/login?product=socialsnipper"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 font-body font-semibold text-sm text-white bg-[#8b5cf6] rounded-full hover:bg-[#7c3aed] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#8b5cf6]/25"
              >
                Get Started Free →
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 font-body font-semibold text-sm text-[#131b2e] bg-[#c2c6d6]/10 rounded-full hover:bg-[#c2c6d6]/20 transition-all border border-[#c2c6d6]/30"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-[#c2c6d6]/20 bg-[#faf8ff]/50">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#727785] mb-8">
            TRUSTED BY LINKEDIN CREATORS & TEAMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-65 grayscale">
            <span className="font-heading font-black text-xl text-[#131b2e]">
              Content Labs
            </span>
            <span className="font-heading font-black text-xl text-[#131b2e]">
              GrowthPartners
            </span>
            <span className="font-heading font-black text-xl text-[#131b2e]">
              SaaSBuilders
            </span>
            <span className="font-heading font-black text-xl text-[#131b2e]">
              BrandArchitects
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e]">
              Everything you need to master LinkedIn
            </h2>
            <p className="text-body-md text-[#727785] mt-4">
              SocialSnipper is loaded with features designed to save you hours of work
              every week while keeping your feed fresh and active.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl border border-[#c2c6d6]/30 p-6 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/[0.08] flex items-center justify-center text-xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#727785] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
          {/* API Compliance Info */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-2xl border border-[#c2c6d6]/30 bg-[#faf8ff] flex flex-col md:flex-row items-start gap-4"
          >
            <div className="text-2xl mt-1">🛡️</div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#131b2e] mb-2">
                🔒 LinkedIn API Compliance
              </h4>
              <p className="text-xs text-[#727785] leading-relaxed">
                SocialSnipper uses official LinkedIn APIs only. We do <strong>not</strong> scrape
                profiles, automate connection requests, or send automated messages.
                This tool is strictly for content scheduling and analytics — keeping
                your account safe and compliant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 bg-[#faf8ff] border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-[#8b5cf6]/15 p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <span className="badge-coming-soon mb-8 mx-auto">Launching Soon</span>
              <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-8 mb-4">
                Be the first to try{" "}
                <span className="font-display italic text-[#8b5cf6]">SocialSnipper.</span>
              </h2>
              <p className="text-body-md text-[#727785] max-w-md mx-auto mb-8">
                Join the waitlist and get early access when we launch. Free forever
                plan included.
              </p>
              {submitted ? (
                <div className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#10b981] bg-[#10b981]/[0.08] px-6 py-3 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  You&apos;re on the list! We&apos;ll be in touch.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 rounded-full border border-[#c2c6d6]/50 bg-white px-5 py-3 text-sm text-[#131b2e] placeholder:text-[#c2c6d6] outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]/15 transition"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-sm text-white bg-[#8b5cf6] rounded-full hover:bg-[#7c3aed] transition-all"
                  >
                    Join waitlist →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
