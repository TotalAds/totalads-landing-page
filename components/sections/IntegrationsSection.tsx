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
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Integrations
          </h2>
          <p className="text-[#4a4a4a] text-lg">
            Connect with your favorite tools and automate your workflow
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
                boxShadow: "0 10px 25px rgba(235, 133, 122, 0.15)",
              }}
              className="p-6 bg-white border-2 border-[#f0f0f0] rounded-xl text-center hover:border-[#eb857a] transition shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-center mb-3">
                <Image src={integration.icon} alt="" height={60} />
              </div>
              <p className="text-[#131313] font-medium text-sm">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
