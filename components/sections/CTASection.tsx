import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

declare global {
  interface Window {
    dataLayer?: Array<{ event: string }>;
  }
}

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
            Stop Renting Your Deliverability.
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] bg-clip-text text-transparent">
              Start Owning It.
            </span>
          </h2>
          <p className="text-xl text-[#475569] mb-4 max-w-2xl mx-auto">
            You&apos;re one setup away from cold email that actually works.
            AI writing, built-in verification, domain health monitoring,
            and your own sending infrastructure.
          </p>
          <p className="text-[#64748b] text-base mb-8 max-w-xl mx-auto">
            Early-bird pricing starts at ₹499/mo — less than Instantly,
            and you own your infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.leadsnipper.com/signup"
              className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/30 transition transform hover:scale-105"
            >
              Start Free — Send Your First Campaign Today
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6]/10 transition"
            >
              Talk to Us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#64748b] text-sm mt-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Try 1,000 emails free (no credit card)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Setup in 15 minutes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
