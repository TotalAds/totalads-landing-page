"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function VisionSection() {
  return (
    <section className="py-24 relative bg-[#faf8ff] border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#131b2e] via-[#1a2340] to-[#0f1629]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#60a5fa] uppercase tracking-widest mb-6 block">
                ── Why Build with Us
              </span>
              <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-white leading-tight mb-6">
                Every outbound channel in one platform.
                <br />
                <span className="font-display italic text-[#60a5fa]">
                  Every growth lever in one team.
                </span>
              </h2>
              <p className="text-[#94a3b8] text-body-md leading-relaxed mb-8">
                We&apos;re not just a SaaS product or just an agency. We&apos;re a
                hybrid: we build the tools, then help you run them. Most companies
                sell you a platform and wish you luck. We build the infrastructure,
                configure the automation, and operate the campaigns — so you can
                focus on selling.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div>
                  <div className="font-heading font-bold text-2xl text-white">200+</div>
                  <div className="text-xs text-[#94a3b8] mt-1">B2B teams</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-white">10M+</div>
                  <div className="text-xs text-[#94a3b8] mt-1">Emails sent</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-white">47%</div>
                  <div className="text-xs text-[#94a3b8] mt-1">Avg open rate</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-[#10b981]">&lt;1%</div>
                  <div className="text-xs text-[#94a3b8] mt-1">Bounce rate</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://app.leadsnipper.com/signup"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-sm text-white bg-[#0058be] rounded-full hover:bg-[#2170e4] transition-all"
                >
                  Start free →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-sm text-white border border-white/20 rounded-full hover:bg-white/5 transition-all"
                >
                  Talk to team →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
