"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ProductsShowcase() {
  return (
    <section className="py-24 relative border-t border-[#c2c6d6]/20 section-blue">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-tag justify-center mb-6">Products</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6">
            Two tools. One outbound stack.
          </h2>
        </motion.div>

        {/* LeadSnipper */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-live">LIVE</span>
              <span className="font-mono text-xs text-[#727785] uppercase tracking-wider">
                Email Deliverability Platform
              </span>
            </div>
            <h3 className="font-heading font-bold text-[28px] text-[#131b2e] mb-2 leading-tight">
              Cold email built on
              <br />
              <span className="text-[#0058be]">infrastructure you own.</span>
            </h3>
            <p className="text-body-md text-[#424754] mb-8 leading-relaxed">
              Most cold email platforms run you on shared infrastructure. When their
              pool gets flagged, your domain pays the price — overnight. LeadSnipper
              runs on your AWS SES. Your domain. Your reputation.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Bring your own AWS SES or use Managed mode",
                "Domain health dashboard — SPF, DKIM, DMARC in one view",
                "Warmup with daily pacing tied to your domain",
                "Reoon verification built into the upload flow",
                "AI email writer for campaign drafts",
                "PDF analytics reports (agency-ready)",
                "Multi-domain management for agency teams",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#131b2e]">
                  <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cold-email-software"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#0058be] hover:text-[#2170e4] transition-colors"
              >
                Cold Email Software
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products/leadsnipper"
                className="inline-flex items-center gap-2 text-sm text-[#727785] hover:text-[#0058be] transition-colors"
              >
                Product Overview →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card h-[400px] rounded-2xl border border-[#c2c6d6]/30 flex items-center justify-center p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/[0.03] to-transparent" />
            <div className="w-full h-full bg-white border border-[#c2c6d6]/20 rounded-xl shadow-sm flex flex-col">
              <div className="h-8 border-b border-[#c2c6d6]/20 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ba1a1a]/30" />
                <div className="w-3 h-3 rounded-full bg-[#b75b00]/30" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]/30" />
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 bg-[#eaedff] rounded" />
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-6 rounded bg-[#10b981]/10 flex items-center justify-center text-[10px] font-mono text-[#10b981]">94/100</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 rounded-lg bg-[#f2f3ff] p-3">
                    <div className="text-[10px] font-mono text-[#727785] mb-1">SPF</div>
                    <div className="text-xs font-heading font-bold text-[#10b981]">✓ Pass</div>
                  </div>
                  <div className="flex-1 rounded-lg bg-[#f2f3ff] p-3">
                    <div className="text-[10px] font-mono text-[#727785] mb-1">DKIM</div>
                    <div className="text-xs font-heading font-bold text-[#10b981]">✓ Pass</div>
                  </div>
                  <div className="flex-1 rounded-lg bg-[#f2f3ff] p-3">
                    <div className="text-[10px] font-mono text-[#727785] mb-1">DMARC</div>
                    <div className="text-xs font-heading font-bold text-[#10b981]">✓ Pass</div>
                  </div>
                </div>
                <div className="flex-1 border border-[#c2c6d6]/20 rounded-lg p-3">
                  <div className="text-[10px] font-mono text-[#727785] mb-2">Campaign Performance</div>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-lg font-heading font-bold text-[#131b2e]">4,820</div>
                      <div className="text-[10px] text-[#727785]">Sent</div>
                    </div>
                    <div>
                      <div className="text-lg font-heading font-bold text-[#0058be]">47%</div>
                      <div className="text-[10px] text-[#727785]">Open</div>
                    </div>
                    <div>
                      <div className="text-lg font-heading font-bold text-[#10b981]">0.8%</div>
                      <div className="text-[10px] text-[#727785]">Bounce</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SocialSnipper */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 glass-card h-[400px] rounded-2xl border border-[#c2c6d6]/30 flex items-center justify-center p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/[0.03] to-transparent" />
            <div className="w-full h-full bg-white border border-[#c2c6d6]/20 rounded-xl shadow-sm flex flex-col">
              <div className="h-8 border-b border-[#c2c6d6]/20 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#c2c6d6]/30" />
                <div className="w-3 h-3 rounded-full bg-[#c2c6d6]/30" />
                <div className="w-3 h-3 rounded-full bg-[#c2c6d6]/30" />
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#eaedff] flex items-center justify-center text-sm font-heading font-bold text-[#727785]">U</div>
                  <div>
                    <div className="h-3 w-24 bg-[#eaedff] rounded mb-1.5" />
                    <div className="h-2.5 w-16 bg-[#eaedff]/60 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 flex-1">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center">
                      <div className="text-[9px] font-mono text-[#727785] mb-1">{day}</div>
                      <div
                        className={`aspect-square rounded-md border ${
                          ["Mon", "Wed", "Fri"].includes(day)
                            ? "bg-[#0058be]/10 border-[#0058be]/20"
                            : "bg-[#f2f3ff] border-[#c2c6d6]/20"
                        } flex items-center justify-center`}
                      >
                        {["Mon", "Wed", "Fri"].includes(day) && (
                          <div className="w-2 h-2 rounded-full bg-[#0058be]" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-[#f2f3ff] p-3 text-center">
                  <div className="text-[10px] font-mono text-[#727785]">Content Calendar</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-coming-soon">COMING SOON</span>
              <span className="font-mono text-xs text-[#727785] uppercase tracking-wider">
                LinkedIn Scheduler
              </span>
            </div>
            <h3 className="font-heading font-bold text-[28px] text-[#131b2e] mb-2 leading-tight">
              Stay visible on LinkedIn
              <br />
              <span className="text-[#8b5cf6]">without the daily grind.</span>
            </h3>
            <p className="text-body-md text-[#424754] mb-8 leading-relaxed">
              Most founders disappear from LinkedIn between campaigns. SocialSnipper
              keeps you posting consistently — scheduled content that builds authority
              while your emails are landing.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Content calendar with scheduling queue",
                "AI-assisted post writing & repurposing",
                "Content performance analytics",
                "Research mode: trending topics in your niche",
                "Best-time posting recommendations",
                "Multi-account support (agency teams)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#131b2e]">
                  <svg className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/products/socialsnipper"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-[#8b5cf6] hover:text-[#7c3aed] transition-colors"
            >
              Join the waitlist
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
