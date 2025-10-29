import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does LeadSnipper ensure 99.9% deliverability?",
      answer:
        "We use enterprise-grade infrastructure with dedicated IP servers, advanced email authentication (DKIM, SPF, DMARC), and AI-powered warmup sequences to build sender reputation.",
    },
    {
      question: "Can I really send unlimited emails?",
      answer:
        "Yes! With unlimited mailboxes, you can add as many email accounts as you want and send at scale. We handle all the infrastructure and deliverability optimization.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Most users are sending their first campaign within 15 minutes. Just add your domain, upload leads, and launch. No technical knowledge required.",
    },
    {
      question: "Do you provide leads?",
      answer:
        "We have access to a database of millions of verified B2B contacts. You can search and filter by company, industry, role, and more.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with HubSpot, Salesforce, Pipedrive, Zapier, Make, Clay, and more. We also have a powerful API for custom integrations.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! Start free with no credit card required. You get 1000 free credits to test the platform.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Frequently asked questions
          </h2>
          <p className="text-[#4a4a4a] text-lg">
            Everything you need to know about LeadSnipper
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#f0f0f0] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-[#f0f0f0] transition"
              >
                <span className="text-lg font-semibold text-[#131313] text-left">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#eb857a] text-2xl flex-shrink-0 ml-4"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#f0f0f0] px-6 py-4"
                  >
                    <p className="text-[#4a4a4a] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
