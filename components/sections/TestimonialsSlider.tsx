import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote: "LeadSnipper boosted our reply rate from 3% to 9% in two weeks.",
      author: "Sarah Chen",
      role: "Founder @ GrowthWorks",
      metric: "3% to 9% replies",
    },
    {
      quote:
        "Our entire SDR team switched from Instantly to LeadSnipper - same results, half the cost.",
      author: "Arjun Mehta",
      role: "CEO @ Salesify",
      metric: "50% cost savings",
    },
    {
      quote: "Zero spam issues and a unified inbox that changed our workflow.",
      author: "Emily Park",
      role: "Head of Growth @ ByteLabs",
      metric: "98% inbox placement",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Loved by Agencies, Founders, and Growth Teams.
          </h2>
          <p className="text-[#475569] text-lg">
            ⭐ Trusted by 250+ Agencies • 🚀 20M+ Emails Sent • 💼 98% Customer
            Retention
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#f0f0f0] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-xl text-[#1e293b] mb-6 leading-relaxed">
                &quot;{testimonials[current].quote}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#1e293b]">
                    {testimonials[current].author}
                  </p>
                  <p className="text-[#475569] text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#22c55e] font-bold text-lg">
                    {testimonials[current].metric}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-[#f0f0f0] hover:bg-[#3b82f6] text-[#1e293b] hover:text-white rounded-lg transition"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? "bg-[#3b82f6] w-8" : "bg-[#e0e0e0]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 bg-[#f0f0f0] hover:bg-[#3b82f6] text-[#1e293b] hover:text-white rounded-lg transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
