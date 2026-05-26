import { motion } from "framer-motion";
import React, { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO pageKey="socialsnipper" />
      <Navbar />

      {/* Hero */}
      <section className="hero-bg dot-grid pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-coming-soon mb-6">COMING SOON</span>
            <h1 className="font-heading font-extrabold text-[#131b2e] mt-6">
              <span className="block text-3xl md:text-display-lg leading-[1.1] tracking-tight">
                Stay visible on LinkedIn
              </span>
              <span className="block font-display italic text-[#8b5cf6] text-3xl md:text-display-hero mt-2">
                without the daily grind.
              </span>
            </h1>
            <p className="text-body-lg text-[#424754] mt-6 max-w-2xl mx-auto leading-relaxed">
              Schedule posts, research trending content, and let AI help you
              write — so your emails land and your LinkedIn profile compounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-[#f2f3ff]/30 border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center mb-6">The Problem</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Post three times,{" "}
              <span className="font-display italic text-[#ba1a1a]">
                then disappear for a month.
              </span>
            </h2>
            <p className="text-body-md text-[#727785] mt-4 max-w-xl mx-auto">
              LinkedIn rewards consistency. But between campaigns, client work, and
              daily fires — posting falls off. Your profile goes quiet. Your prospects
              forget you exist.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "😴", text: "You know LinkedIn works, but you can't keep up." },
              { icon: "🔄", text: "You have content ideas but no system to execute." },
              { icon: "📉", text: "Inconsistency kills your reach faster than bad content." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 rounded-2xl text-center"
              >
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <p className="text-sm text-[#131b2e] font-heading font-medium">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#faf8ff] border-t border-[#c2c6d6]/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag justify-center mb-6">Features</span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
              Everything you need to{" "}
              <span className="font-display italic text-[#8b5cf6]">
                stay consistent.
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
                className="glass-card glass-card-hover p-6 rounded-2xl border-t-4 border-t-[#8b5cf6]/20"
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

      {/* LinkedIn API Compliance */}
      <section className="py-12 bg-[#f2f3ff]/50 border-t border-[#c2c6d6]/20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-[#0058be]"
          >
            <h4 className="font-heading font-bold text-sm text-[#131b2e] mb-2">
              🔒 LinkedIn API Compliance
            </h4>
            <p className="text-xs text-[#727785] leading-relaxed">
              SocialSnipper uses official LinkedIn APIs only. We do <strong>not</strong> scrape
              profiles, automate connection requests, or send automated messages.
              This tool is strictly for content scheduling and analytics — keeping
              your account safe and compliant.
            </p>
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
