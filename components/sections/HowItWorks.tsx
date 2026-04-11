import { motion } from "framer-motion";
import { Globe, Rocket, Shield, Upload } from "lucide-react";
import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect & Verify Your Domain",
      description:
        "Add your domain, follow the guided DNS setup for SPF/DKIM, and choose BYO SES or Managed mode. We verify everything before you send a single email.",
      icon: <Globe className="w-6 h-6 text-[#3b82f6]" />,
    },
    {
      number: "02",
      title: "Upload Leads & Verify with AI",
      description:
        "Import via CSV or connect your CRM. Built-in Reoon verification removes invalid and risky addresses automatically — so bad data never touches your sender reputation.",
      icon: <Upload className="w-6 h-6 text-[#3b82f6]" />,
    },
    {
      number: "03",
      title: "Warm Up with AI Conversations",
      description:
        "Our AI warmup engine generates human-like email threads across Gmail, Outlook, Yahoo, and SES — building trust with mailbox providers before you scale.",
      icon: <Shield className="w-6 h-6 text-[#3b82f6]" />,
    },
    {
      number: "04",
      title: "Launch & Monitor in Real-Time",
      description:
        "AI drafts your campaign, paces sends across multiple days, and monitors domain health in real time. You see opens, clicks, bounces, and complaints — all in one dashboard.",
      icon: <Rocket className="w-6 h-6 text-[#3b82f6]" />,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
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
            From Zero to Sending in 15 Minutes.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            No duct-taping 4 different tools. One platform handles domains,
            verification, warmup, and campaigns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#22c55e]" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="bg-white border-2 border-[#f0f0f0] rounded-xl p-6 h-full shadow-md hover:shadow-lg hover:border-[#3b82f6] transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-[#3b82f6]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e293b] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
