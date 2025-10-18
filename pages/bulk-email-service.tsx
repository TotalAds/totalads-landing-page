import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LeadSnipperLogo } from "@/components/ui/LeadSnipperLogo";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function BulkEmailService() {
  const [currency, setCurrency] = useState<"USD" | "INR">("INR");

  const features = [
    {
      icon: Mail,
      title: "Premium Deliverability",
      description:
        "99.9% inbox placement rate with advanced email infrastructure",
      highlights: [
        "Dedicated IP Servers",
        "Smart Routing",
        "Real-time Monitoring",
      ],
    },
    {
      icon: Zap,
      title: "Unlimited Mailboxes",
      description:
        "Scale your outreach without artificial limits or restrictions",
      highlights: ["Auto-rotation", "Domain Management", "Account Pooling"],
    },
    {
      icon: MessageSquare,
      title: "Email Warmup",
      description:
        "Build and maintain sender reputation with AI-powered warmups",
      highlights: [
        "Natural Interactions",
        "Humanized Patterns",
        "Auto-adjustment",
      ],
    },
    {
      icon: Users,
      title: "Unified Inbox",
      description:
        "Manage all conversations and replies in one centralized dashboard",
      highlights: ["360° View", "Smart Categorization", "Lead Tracking"],
    },
    {
      icon: Sparkles,
      title: "AI Personalization",
      description:
        "Create hyper-personalized emails with AI-powered content generation",
      highlights: ["Smart Variables", "Dynamic Content", "A/B Testing"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Track performance with detailed metrics and actionable insights",
      highlights: [
        "Real-time Tracking",
        "Campaign Analytics",
        "ROI Measurement",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      price: currency === "INR" ? "₹2,999" : "$39",
      period: "/month",
      features: [
        "2,000 active leads",
        "6,000 monthly emails",
        "Unlimited warmups",
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "For growing agencies and teams",
      price: currency === "INR" ? "₹7,499" : "$94",
      period: "/month",
      features: [
        "30,000 active leads",
        "150,000 monthly emails",
        "Unlimited warmups",
        "Advanced analytics",
        "Priority support",
        "Custom CRM",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited leads",
        "Unlimited emails",
        "Dedicated account manager",
        "White-label solution",
        "Custom integrations",
        "SLA guarantee",
        "24/7 support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO pageKey="bulk-email" structuredDataType="softwareApplication" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-white/10 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <Link href="/">
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <LeadSnipperLogo className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">LeadSnipper</h1>
                  <div className="text-xs text-gray-300 font-medium">
                    Bulk Email Service
                  </div>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                >
                  Back to Home
                </Button>
              </Link>
              <Link href="https://app.leadsnipper.com/signup">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Scale Your Cold Email{" "}
                <motion.span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Outreach
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Convert cold emails into reliable revenue streams with unlimited
                mailboxes, premium deliverability, and AI-powered
                personalization.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="https://app.leadsnipper.com/signup">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Scale
              </h2>
              <p className="text-gray-300 text-lg">
                Everything you need to run successful cold email campaigns
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="h-full group relative overflow-hidden border-0 backdrop-blur-xl bg-white/10 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-700">
                      <CardHeader>
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-white">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Choose the plan that fits your needs
              </p>

              {/* Currency Toggle */}
              <div className="flex justify-center gap-4 mb-12">
                <Button
                  variant={currency === "INR" ? "default" : "outline"}
                  onClick={() => setCurrency("INR")}
                  className={
                    currency === "INR" ? "bg-purple-500" : "border-white/20"
                  }
                >
                  INR
                </Button>
                <Button
                  variant={currency === "USD" ? "default" : "outline"}
                  onClick={() => setCurrency("USD")}
                  className={
                    currency === "USD" ? "bg-purple-500" : "border-white/20"
                  }
                >
                  USD
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card
                    className={`h-full relative overflow-hidden border-0 backdrop-blur-xl transition-all duration-700 ${
                      plan.highlighted
                        ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50 scale-105"
                        : "bg-white/10"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                        POPULAR
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {plan.description}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 ml-2">
                          {plan.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="https://app.leadsnipper.com/signup"
                        className="w-full"
                      >
                        <Button
                          className={`w-full ${
                            plan.highlighted
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                              : "bg-white/10 hover:bg-white/20 text-white"
                          }`}
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Scale Your Outreach?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of businesses using LeadSnipper to convert cold
                emails into revenue
              </p>
              <Link href="https://app.leadsnipper.com/signup">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                  Start Your Free Trial Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
