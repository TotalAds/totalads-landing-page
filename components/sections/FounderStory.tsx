import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FounderStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-10 text-center">
            Why We Built LeadSnipper
          </h2>

          <div className="bg-white border-2 border-[#f0f0f0] rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="space-y-5 text-[#475569] text-base leading-relaxed">
              <p className="text-lg text-[#1e293b] font-medium">
                Getting customers is harder than building the product.
              </p>

              <p>
                We tried cold email. Domains got flagged. Emails went to spam.
                Tools hid what was actually happening.
              </p>

              <p>
                We were paying for platforms that controlled our sending — and
                when things broke, we had no idea why. Our domain reputation
                tanked overnight because of someone else&apos;s campaign on a
                shared pool. Open rates went from 45% to 6%. We hadn&apos;t
                changed anything.
              </p>

              <p className="text-[#1e293b] font-semibold text-lg">
                That&apos;s when we realized: outbound doesn&apos;t fail because
                of copy. It fails because of infrastructure.
              </p>

              <p>
                So we built LeadSnipper — where you own your sending, your
                domains, and your reputation. No shared pools. No black-box
                deliverability. No duct-taping 4 tools together just to send one
                campaign.
              </p>

              <p>
                We added built-in email verification after watching an agency
                client upload 10,000 leads and watch bounce rates hit 15% in the
                first hour. We built the domain health dashboard because we were
                tired of checking MXToolbox, Google Postmaster, and our sending
                tool every single morning.
              </p>

              <div className="pt-4 border-t border-[#f0f0f0]">
                <p className="text-[#1e293b] font-semibold">
                  And we&apos;re not stopping at email.
                </p>
                <p className="mt-2">
                  We&apos;re building a system where founders don&apos;t have to
                  fight their tools just to get customers. AI-powered warmup,
                  AI writing, multi-channel outreach — one platform that handles
                  the hard parts so you can focus on closing deals.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#f0f0f0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[#1e293b] font-bold">Rehan Qureshi</p>
                <p className="text-[#475569] text-sm">Founder, LeadSnipper</p>
              </div>
              <Link
                href="https://app.leadsnipper.com/signup"
                className="inline-flex items-center gap-2 text-[#3b82f6] font-semibold text-sm hover:text-[#2563eb] transition"
              >
                Try it yourself — start free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
