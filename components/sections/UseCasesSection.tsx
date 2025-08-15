"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils";

export default function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Purpose-built for GTM teams
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Prospecting, enrichment, ICP matching, and sales research — in one
            streamlined workflow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

