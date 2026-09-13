"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { APPSUMO_DEAL_URL } from "@/lib/launchLinks";

export default function CTASection() {
  return (
    <section className="py-18 relative bg-[#f2f3ff]/50 border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-[#0058be]/15 p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.04] via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <span className="badge-hero mb-8 mx-auto">
              Ready to start?
            </span>
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-8 mb-4">
              Stop renting infrastructure.
              <br />
              <span className="font-display italic text-[#0058be]">Own it for $39 forever.</span>
            </h2>
            <p className="text-body-md text-[#727785] max-w-xl mx-auto mb-10">
              Grab the AppSumo lifetime deal — verification, deliverability
              guardrails, and multi-inbox sending. Pay once. Keep LeadSnipper for life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={APPSUMO_DEAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffcc00] px-6 py-3 font-heading text-[15px] font-bold text-[#131b2e] transition hover:-translate-y-0.5 hover:bg-[#ffe066] hover:shadow-[0_8px_24px_rgba(255,204,0,0.35)] btn-hero"
              >
                Get LeadSnipper for $39
              </Link>
              <Link
                href="https://app.leadsnipper.com/signup?product=leadsnipper"
                className="btn-ghost btn-hero rounded-full"
              >
                Or start a 14-day trial
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link href="/email-deliverability" className="text-xs text-[#727785] hover:text-[#0058be] transition-colors">
                Email deliverability
              </Link>
              <span className="text-[#c2c6d6]">·</span>
              <Link href="/cold-email-infrastructure" className="text-xs text-[#727785] hover:text-[#0058be] transition-colors">
                BYO AWS SES
              </Link>
              <span className="text-[#c2c6d6]">·</span>
              <Link href="/ai-cold-email-generator" className="text-xs text-[#727785] hover:text-[#0058be] transition-colors">
                AI email generator
              </Link>
            </div>
            <p className="text-xs text-[#727785] mt-6">
              AppSumo exclusive · Lifetime access from $39 · 60-day refund
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
