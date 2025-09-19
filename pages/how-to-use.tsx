import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Copy,
  Eye,
  Globe,
  Menu,
  MessageSquare,
  Play,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HowToUse() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      number: "01",
      title: "Sign Up & Get Your Free Credits",
      description:
        "Create your account and receive 1000 free credits as one of our first 100 users",
      icon: <Users className="w-6 h-6" />,
      action: "Sign up at app.leadsnipper.com",
      details: [
        "Quick 30-second registration",
        "Email verification",
        "Instant 1000 credits (Early User Bonus)",
        "No credit card required",
      ],
    },
    {
      number: "02",
      title: "Enter Target Website URL",
      description:
        "Simply paste any company website URL into our intelligent scraper",
      icon: <Globe className="w-6 h-6" />,
      action: "https://example-company.com",
      details: [
        "Works with any business website",
        "Automatically detects important pages",
        "Handles complex site structures",
        "Real-time processing",
      ],
    },
    {
      number: "03",
      title: "Configure Your ICP Profile",
      description:
        "Set up your Ideal Customer Profile for intelligent business matching and scoring",
      icon: <Target className="w-6 h-6" />,
      action: "Create ICP Profile with criteria",
      details: [
        "Define your ideal customer characteristics",
        "Set company size and industry preferences",
        "Specify geographic and revenue criteria",
        "Add custom requirements and notes",
      ],
    },
    {
      number: "04",
      title: "Get ICP-Scored Business Intelligence",
      description:
        "Receive comprehensive company profiles with ICP fit scoring and actionable insights",
      icon: <Sparkles className="w-6 h-6" />,
      action: "Download or integrate via API",
      details: [
        "ICP fit score and matching analysis",
        "12+ data points per company",
        "Verified contact information",
        "Business intelligence insights",
        "Actionable recommendations",
      ],
    },
  ];

  const useCases = [
    {
      title: "ICP-Based Sales Prospecting",
      description:
        "Find prospects that match your Ideal Customer Profile with verified contact info",
      icon: <Target className="w-8 h-8" />,
      benefits: [
        "ICP fit scoring and analysis",
        "Verified email addresses",
        "Direct phone numbers",
        "LinkedIn profiles",
      ],
    },
    {
      title: "Intelligent Market Research",
      description:
        "Analyze companies against your ICP criteria with comprehensive business data",
      icon: <Search className="w-8 h-8" />,
      benefits: [
        "ICP matching insights",
        "Business model analysis",
        "Company size and revenue data",
        "Industry and geographic fit",
      ],
    },
    {
      title: "Qualified Lead Generation",
      description:
        "Build targeted prospect lists with ICP scoring and actionable recommendations",
      icon: <Target className="w-8 h-8" />,
      benefits: [
        "ICP fit scoring",
        "Buying signals",
        "Company size data",
        "Revenue estimates",
      ],
    },
  ];

  return (
    <>
      <SEO pageKey="howToUse" />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-white/10 shadow-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-18">
              <Link href="/" className="flex items-center space-x-3">
                <LeadSnipperLogo width={40} height={40} />
                <div>
                  <span className="text-2xl font-bold text-white">
                    LeadSnipper
                  </span>
                  <div className="text-xs text-gray-300 font-medium">
                    Revenue-Focused Sales Intelligence
                  </div>
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/how-to-use"
                    className="text-purple-400 font-semibold"
                  >
                    How to Use
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="https://app.leadsnipper.com/signup">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Start Free Beta
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:bg-white/10"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden py-4 border-t border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4 px-6">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/how-to-use"
                    className="text-purple-400 font-semibold py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How to Use
                  </Link>
                  <Link
                    href="https://app.leadsnipper.com/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full"
                    >
                      Start Free Beta
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative overflow-hidden pt-32 pb-20"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8"
              >
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">
                  🎉 Early User Bonus: 1000 Free Credits for First 100 Users!
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              >
                How to Use{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  LeadSnipper
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Transform any website into ICP-scored business intelligence in 4
                simple steps. Create your Ideal Customer Profile and get
                AI-powered fit scoring for every prospect.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="https://app.leadsnipper.com/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Step-by-Step Guide */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Simple 4-Step ICP Process
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                From website URL to ICP-scored business intelligence in minutes
              </motion.p>
            </motion.div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                              STEP {step.number}
                            </span>
                          </div>
                          <CardTitle className="text-2xl font-bold text-white mb-2">
                            {step.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-lg">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Action Required:
                          </h4>
                          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                            <code className="text-purple-300 font-mono text-sm flex-1">
                              {step.action}
                            </code>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                copyToClipboard(step.action, index)
                              }
                              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                            >
                              {copiedStep === index ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            What You Get:
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center gap-2 text-gray-300"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Perfect For Your Use Case
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Whether you&apos;re in sales, marketing, or research -
                LeadSnipper adapts to your needs
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {useCase.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white mb-2">
                        {useCase.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Early User Promotion Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl" />

                <motion.div variants={staggerItem} className="relative z-10">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                    <Sparkles className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-lg font-bold text-green-300">
                      🎉 Limited Time: Early User Bonus
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                    Get{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      1000 Free Credits
                    </span>{" "}
                    as an Early User
                  </h2>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Join the first 100 users and receive 1000 credits absolutely
                    free! That&apos;s enough to extract intelligence from 100+
                    websites.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        1000
                      </div>
                      <div className="text-gray-300">Free Credits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        100+
                      </div>
                      <div className="text-gray-300">Website Extractions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-2">
                        $0
                      </div>
                      <div className="text-gray-300">Setup Cost</div>
                    </div>
                  </div>

                  <Link href="https://app.leadsnipper.com/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                    >
                      Claim Your 1000 Free Credits
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>

                  <p className="text-sm text-gray-400 mt-4">
                    No credit card required • Instant access • Limited to first
                    100 users
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {[
                {
                  question: "How accurate is the extracted data?",
                  answer:
                    "Our AI-powered extraction engine achieves 95%+ accuracy by analyzing multiple pages and cross-referencing data points. We continuously improve our algorithms based on user feedback.",
                },
                {
                  question: "What types of websites work best?",
                  answer:
                    "LeadSnipper works with any business website - from startups to enterprise companies. We handle complex site structures, single-page applications, and traditional websites equally well.",
                },
                {
                  question: "How many credits do I need per ICP extraction?",
                  answer:
                    "ICP-based extractions use 15-25 credits per company depending on the complexity of your ICP criteria and the number of pages analyzed for comprehensive business intelligence.",
                },
                {
                  question: "Can I integrate this with my CRM?",
                  answer:
                    "Yes! We provide REST APIs and webhooks for seamless integration with popular CRMs like Salesforce, HubSpot, and Pipedrive. Documentation and SDKs are available.",
                },
                {
                  question: "How do ICP profiles work?",
                  answer:
                    "You create custom Ideal Customer Profile criteria including company size, industry, location, and specific requirements. Our AI then scores each extracted company against your ICP and provides fit analysis and recommendations.",
                },
                {
                  question: "Is there a bulk processing option?",
                  answer:
                    "Absolutely! You can upload CSV files with multiple URLs for batch processing with ICP scoring. Perfect for lead generation campaigns and market research projects.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Transform Your Sales Process?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of sales professionals who are already using
                LeadSnipper to accelerate their prospecting and close more
                deals.
              </motion.p>
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="https://app.leadsnipper.com/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <LeadSnipperLogo width={32} height={32} />
                <span className="text-xl font-bold text-white">
                  LeadSnipper
                </span>
              </div>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-6">
              © 2025 LeadSnipper. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
