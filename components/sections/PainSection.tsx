import { motion } from "framer-motion";
import {
  AlertTriangle,
  Ban,
  HelpCircle,
  Layers,
} from "lucide-react";
import React from "react";

const pains = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    text: "Your domain suddenly gets flagged — and you didn't change anything",
  },
  {
    icon: <Ban className="w-6 h-6" />,
    text: "Open rates drop from 45% to 8% overnight",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    text: "You don't know if it's the list, the tool, or the domain",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    text: "You're juggling 4 tools just to send one campaign",
  },
];

export default function PainSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            If This Sounds Familiar…
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            You&apos;re not bad at cold email. Your tools are bad at protecting
            your deliverability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 p-5 bg-white border-2 border-[#fef2f2] rounded-xl shadow-sm hover:border-[#fca5a5] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#fef2f2] rounded-lg flex items-center justify-center text-[#ef4444] flex-shrink-0">
                {pain.icon}
              </div>
              <p className="text-[#1e293b] font-medium text-base md:text-lg">
                {pain.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-[#475569] text-lg">
            Sound like your morning? It doesn&apos;t have to be.
          </p>
          <p className="text-[#1e293b] font-bold text-xl mt-2">
            Outbound doesn&apos;t fail because of copy. It fails because of{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] bg-clip-text text-transparent">
              infrastructure
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
