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
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-[#e0e0e0] bg-gradient-to-r from-[#fafafa] to-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#4a4a4a] text-m mb-8 font-medium">
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
              className="flex flex-col items-center gap-2 text-[#4a4a4a] hover:text-[#eb857a] transition"
            >
              <div className="h-14 w-auto">
                <Image src={logo.image} alt="" height={40} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
