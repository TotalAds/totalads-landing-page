import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why should I use LeadSnipper instead of Instantly?",
      answer:
        "Instantly is solid for getting started. But they own your sending infrastructure — when they have issues, your domains get hit. With LeadSnipper, you bring your own AWS SES. You own your reputation, your deliverability, your data. Plus, we have built-in Reoon email verification, AI-powered warmup, and a domain health dashboard that Instantly doesn't offer.",
    },
    {
      question: "I already use Smartlead. Why switch?",
      answer:
        "If Smartlead is working, great. But if the UI frustrates you, you want built-in verification instead of a separate tool, or you want to use your own SES instead of their infrastructure — that's exactly what we built. Teams that switch tell us the domain health dashboard alone was worth it.",
    },
    {
      question: "What is BYO SES? Do I need to know AWS?",
      answer:
        "BYO SES means \"Bring Your Own\" Amazon Simple Email Service. It gives you full control over your sending infrastructure and reputation. But if you don't know AWS or don't want to deal with it, choose our Managed mode — we handle everything for you. The BYO option is there when you're ready for full control.",
    },
    {
      question: "How does LeadSnipper handle deliverability?",
      answer:
        "Deliverability isn't a feature we bolt on — it's the architecture. Verified domains with proper DNS (DKIM, SPF), AI-powered warmup with daily pacing, automatic bounce suppression, complaint tracking, and built-in Reoon verification. Every layer is designed so your emails land in the inbox, not spam.",
    },
    {
      question: "How does the AI email writer work?",
      answer:
        "The AI writer generates campaign drafts using your knowledge base and tone — so it writes like you, not like a generic template. You get a strong first draft that sounds like a real person. Edit and send, saving hours per campaign. It doesn't write perfect cold email by itself (nobody's AI does), but it gets you 80% there fast.",
    },
    {
      question: "What does AI warmup actually do?",
      answer:
        "Our AI warmup engine generates realistic email conversations across Gmail, Outlook, Yahoo, Zoho, and SES. It creates natural threads with 5-8 exchanges, varied writing styles, and proper timing. Mailbox providers see real engagement on your account, which builds sender trust before you run cold campaigns at scale.",
    },
    {
      question: "Can I really send cold email on this?",
      answer:
        "That's literally what it's built for. We're not a newsletter tool pretending to do outbound. Cold email is the entire product — warmup, verification, domain health, sending, analytics. Every feature is designed for cold outbound at scale.",
    },
    {
      question: "The pricing seems low. What's the catch?",
      answer:
        "We're in early-bird pricing because we're growing. The product is production-ready — real teams are sending real campaigns on it today. We're pricing aggressively now because we want early users who give us feedback and stick around. Prices will go up. AWS SES costs $0.10 per 1,000 emails — the math works because we're not marking up infrastructure 100x.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. Start free with no credit card. You get 1,000 emails, 500 contacts, basic analytics, and API access for 1 month. Enough to run a real campaign and see if LeadSnipper is the right fit for your outbound.",
    },
    {
      question: "Do you have integrations with my CRM?",
      answer:
        "We integrate with the tools outbound teams actually use — HubSpot, Salesforce, Zapier, Make, Clay, Zoho, and Google Sheets. We also have a full REST API for custom workflows. More integrations are shipping regularly.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Got Questions? Real Answers.
          </h2>
          <p className="text-[#475569] text-lg">
            No fluff. Here&apos;s what teams actually ask before switching.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#f0f0f0] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-[#3b82f6] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-[#f8fafc] transition"
              >
                <span className="text-lg font-semibold text-[#1e293b] text-left">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#3b82f6] text-2xl flex-shrink-0 ml-4"
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
                    <p className="text-[#475569] leading-relaxed">
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
