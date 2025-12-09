import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import Clay from "@/asset/company_logo/clay.webp";
import Hubspot from "@/asset/company_logo/hubspot.png";
import Make from "@/asset/company_logo/make.png";
import Salesforce from "@/asset/company_logo/salesforce.png";
import Zapier from "@/asset/company_logo/zapier.png";
import Zoho from "@/asset/company_logo/zoho.png";

export default function TrustStrip() {
  const logos = [
    { name: "HubSpot", image: Hubspot },
    { name: "Salesforce", image: Salesforce },
    { name: "Zapier", image: Zapier },
    { name: "Make", image: Make },
    { name: "Clay", image: Clay },
    { name: "Zoho", image: Zoho },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-[#e2e8f0] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#475569] text-m mb-8 font-medium">
          Integrates with your favorite tools
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 text-[#475569] hover:text-[#3b82f6] transition"
            >
              <div className="h-14 w-auto">
                <Image src={logo.image} alt={logo.name} height={40} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
