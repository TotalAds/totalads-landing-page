import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import Clay from "@/asset/company_logo/clay.webp";
import Hubspot from "@/asset/company_logo/hubspot.png";
import Make from "@/asset/company_logo/make.png";
import Salesforce from "@/asset/company_logo/salesforce.png";
import Sheet from "@/asset/company_logo/sheet.png";
import Slack from "@/asset/company_logo/slack.png";
import Zapier from "@/asset/company_logo/zapier.png";
import Zoho from "@/asset/company_logo/zoho.png";

export default function IntegrationsSection() {
  const integrations = [
    { name: "HubSpot", icon: Hubspot },
    { name: "Salesforce", icon: Salesforce },
    { name: "Zoho", icon: Zoho },
    { name: "Zapier", icon: Zapier },
    { name: "Make", icon: Make },
    { name: "Clay", icon: Clay },
    { name: "Slack", icon: Slack },
    { name: "Google Sheets", icon: Sheet },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="integrations"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Plugs Into Your Existing Stack.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Connect LeadSnipper with the CRMs, automation tools, and data
            sources your outbound team already uses. Plus a full API for
            anything custom.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="p-6 bg-white border-2 border-[#f0f0f0] rounded-xl text-center hover:border-[#3b82f6] transition shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-center mb-3">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  height={60}
                />
              </div>
              <p className="text-[#1e293b] font-medium text-sm">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-[#64748b] text-sm">
            Need a custom integration? Our{" "}
            <span className="text-[#3b82f6] font-medium">REST API</span> and{" "}
            <span className="text-[#3b82f6] font-medium">webhooks</span> power
            any workflow you can think of.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
