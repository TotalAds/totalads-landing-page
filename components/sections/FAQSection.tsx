import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { homepageFaqs } from "@/lib/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 section-warm border-t border-[#c2c6d6]/20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag justify-center mb-6">FAQ</span>
          <h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-4">
            Got questions?{" "}
            <span className="font-display italic text-[#0058be]">Real answers.</span>
          </h2>
          <p className="text-body-md text-[#727785]">
            No fluff. Here&apos;s what teams actually ask before switching.
          </p>
        </motion.div>

        <div className="space-y-3">
          {homepageFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#0058be]/20 shadow-md"
                  : "border-[#c2c6d6]/20 hover:border-[#0058be]/15"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full p-6 flex items-center justify-between hover:bg-[#f2f3ff]/50 transition"
              >
                <span className="font-heading text-[15px] font-semibold text-[#131b2e] text-left pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#0058be] text-xl flex-shrink-0 w-7 h-7 rounded-full border border-[#0058be]/20 flex items-center justify-center"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#c2c6d6]/20 px-6 py-5"
                  >
                    <p className="text-sm text-[#424754] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
