import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import React from "react";

export default function BenefitsRow() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#3b82f6]" />,
      title: "Stop Getting Blacklisted",
      description:
        "Your domains, your IPs, your reputation. When someone else's campaign goes sideways on shared infrastructure, it's not your problem anymore.",
      outcomes: [
        "BYO SES — full control, no shared pool risk",
        "Managed mode if you want simplicity on day one",
        "Domain reputation isolated per account",
      ],
    },
    {
      icon: <Brain className="w-10 h-10 text-[#3b82f6]" />,
      title: "Write Cold Emails in Minutes — Not Hours",
      description:
        "Stop staring at blank screens. Our AI drafts campaigns that sound human, not templated — using your tone, your data, your context.",
      outcomes: [
        "Send campaigns that sound like a real person wrote them",
        "AI warmup generates human-like conversations automatically",
        "Stop guessing send times — AI optimizes per recipient",
      ],
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#3b82f6]" />,
      title: "Know Your Domain Is Healthy Before You Hit Send",
      description:
        "One dashboard answers the question you check 3 tools for every morning: \"Is my domain okay today?\" Bounce rates, complaints, quotas — one screen.",
      outcomes: [
        "Reoon verification catches bad data before it touches your reputation",
        "Real-time bounce and complaint monitoring",
        "Multi-day pacing protects you from sending spikes",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Infrastructure-First Outbound. Not Another Tool on Shared Pools.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Other tools rent you sending infrastructure. LeadSnipper lets you
            own it — with AI that handles the hard parts.
          </p>
        </motion.div>

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
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className="p-8 bg-white border-2 border-[#f0f0f0] rounded-2xl hover:border-[#3b82f6] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                {benefit.description}
              </p>
              <ul className="mt-4 space-y-2 text-[#475569] text-sm">
                {benefit.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#22c55e] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
