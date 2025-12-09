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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
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
            Ready to Turn Cold Prospects Into Paying Customers?
          </h2>
          <p className="text-xl text-[#475569] mb-8 max-w-2xl mx-auto">
            Join 40,000+ teams using LeadSnipper to generate predictable revenue
            from cold email.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.leadsnipper.com/signup"
              className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/30 transition transform hover:scale-105"
            >
              Start Free Now
            </Link>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: "book_demo_click" });
                }
              }}
              className="px-8 py-4 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6]/10 transition"
            >
              Book a Demo
            </button>
          </div>

          <p className="text-[#64748b] text-sm mt-6">
            ✅ Free Forever Plan • ✅ No Credit Card • ✅ Upgrade Anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
