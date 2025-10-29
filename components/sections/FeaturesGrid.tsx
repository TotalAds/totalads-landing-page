import { motion } from "framer-motion";
import React from "react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Unlimited Mailboxes",
      description:
        "Add unlimited email accounts and auto-rotate sending across them.",
      icon: "📧",
    },
    {
      title: "Email Warmups",
      description:
        "Automated warmup sequences to build sender reputation and improve deliverability.",
      icon: "🔥",
    },
    {
      title: "Deliverability Analytics",
      description:
        "Real-time insights into bounce rates, open rates, and inbox placement.",
      icon: "📊",
    },
    {
      title: "AI Content Writer",
      description:
        "Generate personalized email copy and subject lines with AI.",
      icon: "✍️",
    },
    {
      title: "Lead Database",
      description:
        "Access to millions of verified B2B contacts with advanced filtering.",
      icon: "🗄️",
    },
    {
      title: "API & Automation",
      description:
        "Powerful APIs and webhooks for seamless integration with your workflow.",
      icon: "⚙️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Powerful features
          </h2>
          <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
            Everything you need to scale cold email campaigns at enterprise
            level.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(235, 133, 122, 0.15)",
              }}
              className="p-6 bg-white border-2 border-[#f0f0f0] rounded-xl hover:border-[#eb857a] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#131313] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
