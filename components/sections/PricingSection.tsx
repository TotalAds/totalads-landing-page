import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free Forever",
      price: 0,
      description: "Perfect for testing and small-scale sending.",
      features: [
        "100 emails/month",
        "100 monthly credits",
        "Max 200 contacts",
        "Basic analytics",
        "API access (limited)",
        "No custom domain",
        "No warmup",
      ],
      cta: "Start Free — No Credit Card Needed",
      highlighted: false,
      badge: null,
    },
    {
      name: "Founding Pro",
      price: 299,
      originalPrice: 699,
      description: "Early Access Special - For freelancers & small teams",
      features: [
        "3,000 emails/month",
        "3,000 contacts",
        "Custom domain",
        "Warmup (20 emails/day)",
        "Email analytics",
        "Priority support",
        "Founding Member Badge",
        "Lifetime locked pricing",
      ],
      cta: "Get Early Access",
      highlighted: true,
      badge: "🔥 Founding Member - Only 100 Seats",
    },
    {
      name: "Founding Agency",
      price: 699,
      originalPrice: 1499,
      description: "Early Access Special - For agencies & growth teams",
      features: [
        "10,000 emails/month",
        "Unlimited contacts",
        "Unlimited domains",
        "Unlimited warmup",
        "Advanced analytics",
        "Deliverability reports",
        "Highest priority support",
        "Founding Member Badge",
        "Lifetime locked pricing",
      ],
      cta: "Get Early Access",
      highlighted: false,
      badge: "⭐ Founding Member - Only 100 Seats",
    },
    {
      name: "Pay-As-You-Go",
      price: "(₹0.01/email)",
      description: "For variable usage - Large senders",
      features: [
        "No monthly fee",
        "Unlimited contacts",
        "Unlimited domains",
        "Unlimited warmup",
        "API access",
        "Deliverability reports",
      ],
      cta: "Contact Sales",
      highlighted: false,
      badge: null,
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
          <div className="inline-block bg-gradient-to-r from-[#eb857a] to-[#9DD0c7] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🔥 Early Access Pricing — First 100 Users Only
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Become a Founding Member — Lock in Lifetime Pricing
          </h2>
          <p className="text-[#4a4a4a] text-lg mb-8">
            Get up to 70% off forever. Help us improve LeadSnipper, get priority
            support & direct access to the team.
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
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#eb857a] to-[#9DD0c7] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#131313] mb-2">
                {plan.name}
              </h3>
              <p className="text-[#4a4a4a] text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <>
                    {plan.originalPrice && (
                      <div className="mb-2">
                        <span className="text-lg text-[#4a4a4a] line-through">
                          ₹{plan.originalPrice}
                        </span>
                        <span className="ml-2 text-sm text-[#9DD0c7] font-bold">
                          Save{" "}
                          {Math.round(
                            ((plan.originalPrice - plan.price) /
                              plan.originalPrice) *
                              100
                          )}
                          %
                        </span>
                      </div>
                    )}
                    <span className="text-4xl font-bold text-[#eb857a]">
                      ₹{plan.price}
                    </span>
                    <span className="text-[#4a4a4a] text-sm">/month</span>
                    {plan.originalPrice && (
                      <div className="mt-1 text-xs text-[#9DD0c7] font-semibold">
                        Locked forever for founding members
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-4xl font-bold text-[#eb857a]">
                    {plan.price}
                  </span>
                )}
              </div>

              <Link
                href={
                  plan.cta === "Contact Sales"
                    ? "/contact"
                    : "https://app.leadsnipper.com/signup"
                }
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
