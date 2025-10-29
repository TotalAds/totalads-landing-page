import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      quote:
        "LeadSnipper helped us increase our reply rate from 2% to 8%. The deliverability is unmatched.",
      author: "Sarah Chen",
      role: "Founder, Growth Agency",
      metric: "42% reply rate",
    },
    {
      quote:
        "We went from 100 emails/day to 5000 emails/day with zero spam complaints. Game changer.",
      author: "Mike Johnson",
      role: "Sales Director, B2B SaaS",
      metric: "5000 emails/day",
    },
    {
      quote:
        "The unified inbox saved us hours every day. We can now manage 10 campaigns from one dashboard.",
      author: "Emma Rodriguez",
      role: "CEO, Lead Gen Agency",
      metric: "10x productivity",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Loved by customers
          </h2>
          <p className="text-[#4a4a4a] text-lg">
            Join 40,000+ teams scaling their cold email campaigns
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
              <p className="text-xl text-[#131313] mb-6 leading-relaxed">
                &quot;{testimonials[current].quote}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#131313]">
                    {testimonials[current].author}
                  </p>
                  <p className="text-[#4a4a4a] text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#eb857a] font-bold text-lg">
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
              className="p-3 bg-[#f0f0f0] hover:bg-[#eb857a] text-[#131313] hover:text-white rounded-lg transition"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? "bg-[#eb857a] w-8" : "bg-[#e0e0e0]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 bg-[#f0f0f0] hover:bg-[#eb857a] text-[#131313] hover:text-white rounded-lg transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
