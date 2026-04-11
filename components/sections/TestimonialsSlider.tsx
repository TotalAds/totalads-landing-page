import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote:
        "We switched to LeadSnipper after our shared-pool tool got flagged overnight. Open rates dropped from 45% to 6% — and we hadn't changed anything. With BYO SES, that's never happening again.",
      author: "Arjun Mehta",
      role: "Founder, Growth Agency",
      metric: "Open rates: 6% → 42% after switching",
    },
    {
      quote:
        "I was paying for a cold email sender, a warmup tool, a verification service, and a spreadsheet to track domain health. Four subscriptions, four tabs. LeadSnipper replaced all of them and saved us ₹15,000/month.",
      author: "Priya Sharma",
      role: "SDR Team Lead, 200-person SaaS",
      metric: "4 tools → 1 platform, saved ₹15k/mo",
    },
    {
      quote:
        "A client uploaded 10,000 leads and hit send with no verification. Bounce rate hit 15% in the first hour and the domain got blacklisted. After LeadSnipper, built-in verification catches that before it ever happens.",
      author: "David Park",
      role: "CEO, Outbound Agency (8 clients)",
      metric: "Bounce rate: 15% → 1.2%",
    },
    {
      quote:
        "Every morning I'd check MXToolbox, Google Postmaster, and my sending tool — three places — just to answer 'Is my domain okay?' The domain health dashboard replaced all of that. One screen, 10 seconds.",
      author: "Sarah Chen",
      role: "Head of Sales, B2B SaaS",
      metric: "3 monitoring tools → 1 dashboard",
    },
    {
      quote:
        "We scaled from 2,000 to 25,000 emails/month safely. The multi-day sending and AI warmup handled the ramp-up automatically. Zero blacklisting incidents in 6 months.",
      author: "Rahul Kapoor",
      role: "VP Sales, Revenue Agency",
      metric: "2k → 25k emails/mo, zero incidents",
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
            Teams Who Stopped Renting Their Deliverability.
          </h2>
          <p className="text-[#475569] text-lg">
            Real numbers from founders, agencies, and sales teams who made the
            switch.
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
                  <span key={i} className="text-2xl text-[#f59e0b]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl text-[#1e293b] mb-6 leading-relaxed">
                &quot;{testimonials[current].quote}&quot;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bold text-[#1e293b]">
                    {testimonials[current].author}
                  </p>
                  <p className="text-[#475569] text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-2 rounded-lg">
                  <p className="text-[#16a34a] font-bold text-sm">
                    {testimonials[current].metric}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#3b82f6] w-8" : "bg-[#e0e0e0] w-2"
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
