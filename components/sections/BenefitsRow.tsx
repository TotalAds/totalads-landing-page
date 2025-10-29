import { motion } from "framer-motion";
import React from "react";

export default function BenefitsRow() {
  const benefits = [
    {
      icon: "📧",
      title: "99.9% Deliverability",
      description:
        "Enterprise-grade infrastructure ensures your emails reach the primary inbox every time.",
    },
    {
      icon: "🤖",
      title: "AI Personalization",
      description:
        "Automatically personalize every email with AI-powered variables and content optimization.",
    },
    {
      icon: "📊",
      title: "Unified Inbox",
      description:
        "Manage all replies from unlimited mailboxes in one centralized, organized dashboard.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(235, 133, 122, 0.15)",
              }}
              className="p-8 bg-white border-2 border-[#f0f0f0] rounded-2xl hover:border-[#eb857a] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#131313] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
