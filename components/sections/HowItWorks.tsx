import { motion } from "framer-motion";
import { Rocket, Sheet, UploadIcon } from "lucide-react";
import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your domains",
      description: "We verify SPF/DKIM in minutes.",
      icon: <UploadIcon color="#131313" />,
    },
    {
      number: "02",
      title: "Upload your leads",
      description: "Import via CSV or connect your CRM.",
      icon: <Sheet color="#131313" />,
    },
    {
      number: "03",
      title: "Launch",
      description: "AI writes and sends automatically at the best times.",
      icon: <Rocket color="#131313" />,
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Launch Your First Campaign in 3 Simple Steps.
          </h2>
          <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
            No technical setup. No coding. Just results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1  bg-[#eb857a]  "></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white border-2 border-[#f0f0f0] rounded-xl p-8 h-full shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#f4cdc1] rounded-lg flex items-center justify-center text-2xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#eb857a]">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#131313] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
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
