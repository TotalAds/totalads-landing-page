"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const TRIAL_URL = "https://app.leadsnipper.com/signup?product=leadsnipper";
const WALKTHROUGH_URL = "https://cal.com/heyrehan/30min";

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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.04] via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mb-4">
              Run your outbound with more control.
            </h2>
            <p className="text-body-md text-[#727785] max-w-xl mx-auto mb-10">
              Bring your leads, connect your sending accounts, and manage your campaigns with verification, sending controls, and campaign monitoring in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={TRIAL_URL}
                className="btn-primary btn-hero rounded-full"
              >
                Start Free 14-Day Trial
              </Link>
              <a
                href={WALKTHROUGH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-hero rounded-full"
              >
                Book an Agency Walkthrough
              </a>
            </div>
            <p className="text-xs text-[#727785] mt-6">
              No credit card required.
            </p>
            <p className="text-sm text-[#424754] mt-3">
              LeadSnipper — tools and support for B2B outbound teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
