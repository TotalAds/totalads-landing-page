import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Trial",
      price: 0,
      description: "Perfect for testing — 1 month free trial",
      features: [
        "1,000 emails/month",
        "500 contacts",
        "Basic analytics",
        "API access",
        "1 month trial period",
      ],
      cta: "Start Free Trial",
      highlighted: false,
      badge: null,
    },
    {
      name: "Starter",
      price: 499,
      originalPrice: 999,
      description: "For freelancers & small teams",
      features: [
        "5,000 emails/month",
        "3,000 contacts",
        "Custom domain",
        "Email warmup (50/day)",
        "Email analytics",
        "3 custom domains",
      ],
      cta: "Get Started",
      highlighted: true,
      badge: "🎉 Early Signup Bonus — 50% Off",
    },
    {
      name: "Business",
      price: 999,
      originalPrice: 1999,
      description: "For growing businesses & agencies",
      features: [
        "15,000 emails/month",
        "10,000 contacts",
        "Unlimited domains",
        "Unlimited warmup",
        "Advanced analytics",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: false,
      badge: "🎉 Early Signup Bonus — 50% Off",
    },
    {
      name: "Custom",
      price: "Contact Us",
      description: "Enterprise — Custom pricing for your needs",
      features: [
        "Unlimited emails",
        "Unlimited contacts",
        "Unlimited domains",
        "Unlimited warmup",
        "Dedicated support",
        "Custom integrations",
      ],
      cta: "Contact Us",
      highlighted: false,
      badge: "Enterprise",
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
            🎉 Early Signup Bonus — Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#4a4a4a] text-lg mb-8">
            Start with a free trial. Upgrade when you&apos;re ready. Early
            signups get 50% off.
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
                        Limited time early signup bonus
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
                  plan.cta === "Contact Us"
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
