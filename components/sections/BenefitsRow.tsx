import { motion } from "framer-motion";
import React from "react";

export default function BenefitsRow() {
  const benefits = [
    {
      icon: "📧",
      title: "99.9% Deliverability. Real Inbox Placement.",
      description:
        "Every email lands where it should — the primary inbox. We handle SPF, DKIM, and DMARC automatically, run smart warmup sequences, and monitor reputation 24/7. Stop guessing. Start scaling safely.",
      bullets: [
        "Automated warmup for every domain",
        "Real-time bounce & complaint monitoring",
        "Dedicated IPs available for scaling teams",
      ],
    },
    {
      icon: "🤖",
      title: "AI Personalization",
      description:
        "Our AI writes unique intros, subject lines, and CTAs for each prospect using real business data. No templates. No repetition.",
      bullets: [
        "AI variables trained on your tone",
        "Automatic follow-up generation",
        "One-click optimization for open & reply rates",
      ],
    },
    {
      icon: "📊",
      title: "Automation + Unified Inbox",
      description:
        "Manage all your campaigns, replies, and warmups in one dashboard — beautifully organized and synced with your favorite tools.",
      bullets: [
        "Centralized inbox for unlimited mailboxes",
        "HubSpot, Zoho, and Google Sheets integrations",
        "Instant analytics on open, click, and reply rates",
      ],
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
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className="p-8 bg-white border-2 border-[#f0f0f0] rounded-2xl hover:border-[#3b82f6] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                {benefit.description}
              </p>
              {benefit.bullets && (
                <ul className="mt-4 space-y-2 text-[#475569] text-sm">
                  {benefit.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#22c55e] mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
