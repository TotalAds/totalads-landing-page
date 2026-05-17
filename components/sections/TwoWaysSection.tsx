"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Check = () => (
  <svg className="w-4 h-4 text-[#0058be] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const AmberCheck = () => (
  <svg className="w-4 h-4 text-[#b75b00] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function TwoWaysSection() {
  return (
    <section className="py-24 relative section-warm border-t border-[#c2c6d6]/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center mb-6">How We Work</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Own the tools.
            <br />
            <span className="font-display italic text-[#0058be]">Or own the results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Path */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover p-8 rounded-2xl border-t-4 border-t-[#0058be] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0058be]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <p className="font-mono text-xs font-medium text-[#0058be] uppercase tracking-wider mb-3">
                → Use the Product
              </p>
              <h3 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                You run the platform.
              </h3>
              <p className="text-sm text-[#424754] mb-8">
                LeadSnipper puts your outbound on infrastructure you own — AWS SES,
                verified domains, warmup, analytics. One dashboard. Full control.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Email outreach on your own AWS SES",
                  "Domain health & warmup dashboard",
                  "Reoon email verification built-in",
                  "LinkedIn scheduling via SocialSnipper",
                  "PDF campaign reports for clients",
                  "AI-assisted email writing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#131b2e]">
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#c2c6d6]/20">
                <p className="font-mono text-xs text-[#727785] uppercase tracking-wider mb-1">
                  Starting from
                </p>
                <p className="font-heading font-bold text-2xl text-[#131b2e] mb-4">
                  ₹499 <span className="text-sm font-normal text-[#727785]">/month</span>
                </p>
                <Link
                  href="/products/leadsnipper"
                  className="btn-primary w-full text-center rounded-full text-sm"
                >
                  Explore Products →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Service Path */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover p-8 rounded-2xl border-t-4 border-t-[#b75b00] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#b75b00]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <p className="font-mono text-xs font-medium text-[#b75b00] uppercase tracking-wider mb-3">
                → We Do It for You
              </p>
              <h3 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                We run the pipeline.
              </h3>
              <p className="text-sm text-[#424754] mb-8">
                Give us your ICP, your offer, and your calendar. We build the
                outbound system, run it, and hand you qualified meetings.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full outbound system setup & operation",
                  "AI automation & CRM integration",
                  "LinkedIn + email combined sequences",
                  "Lead generation & meeting booking",
                  "Weekly pipeline reports",
                  "Strategy reviews and optimisation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#131b2e]">
                    <AmberCheck /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#c2c6d6]/20">
                <p className="font-mono text-xs text-[#727785] uppercase tracking-wider mb-1">
                  Starting from
                </p>
                <p className="font-heading font-bold text-2xl text-[#131b2e] mb-4">
                  ₹30,000 <span className="text-sm font-normal text-[#727785]">/month</span>
                </p>
                <Link
                  href="/services"
                  className="btn-amber w-full text-center rounded-full text-sm"
                >
                  View Services →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
