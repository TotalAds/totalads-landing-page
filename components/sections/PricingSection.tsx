import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free Trial",
      price: 0, // ₹0 / Free
      description: "Perfect for getting started",
      features: [
        "100 emails/month",
        "100 monthly credits",
        "Max 200 contacts",
        "API access (limited)",
        "Basic analytics",
        "No custom domain",
        "No priority support",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Starter",
      price: 499, // ₹499 / month
      description: "For small teams and businesses",
      features: [
        "1,000 emails/month",
        "1,000 monthly credits",
        "Max 2,000 contacts",
        "Volume sending enabled",
        "API access",
        "Analytics",
        "Custom domain",
        "Email support",
        "Unlimited warmups",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: 999, // ₹999 / month
      description: "For growing businesses",
      features: [
        "2,000 emails/month",
        "2,000 monthly credits",
        "Max 5,000 contacts",
        "Volume sending enabled",
        "API access",
        "Advanced analytics",
        "Custom domain",
        "Priority support",
        "Unlimited warmups",
      ],
      cta: "Start Free",
      highlighted: true, // recommend this plan
    },
    {
      name: "Pay-as-you-go",
      price: "(₹0.01/email)",
      description: "For variable usage — no monthly fee, pay per email",
      features: [
        "No monthly fee",
        "Pay ₹0.01 per email",
        "Unlimited monthly email limit",
        "No allocated monthly credits",
        "Unlimited contacts",
        "Volume sending enabled",
        "API access",
        "Analytics",
        "Custom domain",
        "Priority support",
      ],
      cta: "Contact Us",
      highlighted: false,
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
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#f0f0f0]"
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
            Simple, transparent pricing
          </h2>
          <p className="text-[#4a4a4a] text-lg mb-8">
            Start free. Scale as you grow.
          </p>

          {/* Toggle */}
          {/* <div className="flex justify-center items-center gap-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-[#131313]" : "text-[#4a4a4a]"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-[#e0e0e0] rounded-full transition"
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-5 h-5 bg-[#eb857a] rounded-full"
                animate={{ x: isAnnual ? 28 : 0 }}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual ? "text-[#131313]" : "text-[#4a4a4a]"
              }`}
            >
              Annual <span className="text-[#9DD0c7]">(Save 20%)</span>
            </span>
          </div> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-4"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(235, 133, 122, 0.2)",
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#eb857a]/10 to-[#9DD0c7]/10 border-2 border-[#eb857a] shadow-lg"
                  : "bg-white border-2 border-[#f0f0f0] shadow-md hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#eb857a] to-[#9DD0c7] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#131313] mb-2">
                {plan.name}
              </h3>
              <p className="text-[#4a4a4a] text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <>
                    <span className="text-4xl font-bold text-[#eb857a]">
                      ₹{plan.price}
                    </span>
                    <span className="text-[#4a4a4a] text-sm">/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-[#eb857a]">
                    {plan.price}
                  </span>
                )}
              </div>

              <Link
                href="/signup"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition mb-8 ${
                  plan.highlighted
                    ? "bg-[#eb857a]  text-white hover:shadow-lg hover:shadow-[#eb857a]/50"
                    : "border-2 border-[#eb857a] text-[#eb857a] hover:bg-[#eb857a]/10"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#4a4a4a] text-sm"
                  >
                    <span className="text-[#9DD0c7]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
