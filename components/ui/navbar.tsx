"use client";

import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Code2,
  Cog,
  Flame,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import LeadsnipperRounded from "@/asset/leadsnipper.svg";

const productItems: Array<{
  label: string;
  desc: string;
  href: string;
  badge: "live" | "soon";
  icon: React.ReactNode;
}> = [
  {
    label: "LeadSnipper",
    desc: "Email Deliverability Platform",
    href: "/products/leadsnipper",
    badge: "live" as const,
    icon: <Mail className="w-4.5 h-4.5" />,
  },
  /*
  {
    label: "SocialSnipper",
    desc: "LinkedIn Scheduler + Content Researcher",
    href: "/products/socialsnipper",
    badge: "soon" as const,
    icon: <Linkedin className="w-4.5 h-4.5" />,
  },
  */
];

const coldEmailItems = [
  {
    label: "Cold Email Software",
    desc: "Full platform with verification & warmup",
    href: "/cold-email-software",
    icon: <Mail className="w-4.5 h-4.5" />,
  },
  {
    label: "Email Warmup Tool",
    desc: "Improve inbox placement in days",
    href: "/email-warmup",
    icon: <Flame className="w-4.5 h-4.5" />,
  },
  {
    label: "Email Deliverability",
    desc: "Monitor SPF, DKIM, DMARC & health",
    href: "/email-deliverability",
    icon: <ShieldCheck className="w-4.5 h-4.5" />,
  },
  {
    label: "BYO AWS SES",
    desc: "Own your cold email infrastructure",
    href: "/cold-email-infrastructure",
    icon: <Building2 className="w-4.5 h-4.5" />,
  },
  {
    label: "AI Email Generator",
    desc: "AI-powered cold email writing",
    href: "/ai-cold-email-generator",
    icon: <Sparkles className="w-4.5 h-4.5" />,
  },
];

const serviceItems = [
  { label: "AI Automation", icon: <Bot className="w-4 h-4" />, href: "/services/ai-automation" },
  { label: "AI Search (AI SEO)", icon: <Search className="w-4 h-4" />, href: "/services/ai-seo" },
  { label: "Lead Generation", icon: <Target className="w-4 h-4" />, href: "/services/lead-generation" },
  { label: "CRM Automation", icon: <Wrench className="w-4 h-4" />, href: "/services/crm-automation" },
  { label: "Custom Software", icon: <Cog className="w-4 h-4" />, href: "/services/custom-software" },
  { label: "MVP Development", icon: <Rocket className="w-4 h-4" />, href: "/services/mvp-development" },
  { label: "Web Applications", icon: <Globe className="w-4 h-4" />, href: "/services/web-apps" },
  { label: "AI Dashboards", icon: <BarChart3 className="w-4 h-4" />, href: "/services/analytics" },
  { label: "Tech Consulting", icon: <Code2 className="w-4 h-4" />, href: "/services/consulting" },
];

const moreItems = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Cost Calculator", href: "/savings-calculator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [coldEmailOpen, setColdEmailOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [tryNowOpen, setTryNowOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 flex justify-center w-full py-4 px-4 z-50 transition-all duration-500"
      style={{ background: "transparent" }}
    >
      <div
        className={`flex items-center justify-between px-6 py-3 bg-white/50 backdrop-blur-sm  rounded-3xl relative z-10 transition-all duration-500 ${
          scrolled
            ? "shadow-lg border border-[#c2c6d6]/40 max-w-2xl"
            : "shadow-md border border-[#c2c6d6]/20 max-w-4xl"
        } w-full`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8"
            whileHover={{ rotate: 8 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={LeadsnipperRounded}
              alt="LeadSnipper logo"
              className="h-8 w-8"
            />
          </motion.div>
          <span
            className={`font-heading font-bold text-[15px] text-[#131b2e] transition-all duration-500 overflow-hidden whitespace-nowrap ${
              scrolled ? "w-0 opacity-0" : "w-auto opacity-100 sm:inline hidden"
            }`}
          >
            Lead<span className="text-[#0058be]">Snipper</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-heading font-semibold text-[#424754] hover:text-[#131b2e] transition-colors rounded-lg hover:bg-[#f2f3ff]">
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[380px] z-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="rounded-2xl border border-[#c2c6d6]/30 bg-white shadow-xl p-3">
                    <p className="px-3 py-1.5 text-[10px] font-mono font-medium text-[#727785] uppercase tracking-widest">
                      Products
                    </p>
                    {productItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-[#f2f3ff] transition-colors"
                      >
                        <span className="mt-0.5 text-[#424754]">{item.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-heading font-semibold text-[#131b2e]">
                              {item.label}
                            </span>
                            {item.badge === "live" && (
                              <span className="badge-live text-[9px] py-0.5 px-2">
                                LIVE
                              </span>
                            )}
                            {item.badge === "soon" && (
                              <span className="badge-coming-soon text-[9px] py-0.5 px-2">
                                COMING SOON
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#727785] mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cold Email Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setColdEmailOpen(true)}
            onMouseLeave={() => setColdEmailOpen(false)}
          >
            <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-heading font-semibold text-[#424754] hover:text-[#131b2e] transition-colors rounded-lg hover:bg-[#f2f3ff]">
              Cold Email
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${coldEmailOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {coldEmailOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[380px] z-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="rounded-2xl border border-[#c2c6d6]/30 bg-white shadow-xl p-3">
                    <p className="px-3 py-1.5 text-[10px] font-mono font-medium text-[#727785] uppercase tracking-widest">
                      Cold Email Platform
                    </p>
                    {coldEmailItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-[#f2f3ff] transition-colors"
                      >
                        <span className="mt-0.5 text-[#424754]">{item.icon}</span>
                        <div className="flex-1">
                          <span className="text-sm font-heading font-semibold text-[#131b2e]">
                            {item.label}
                          </span>
                          <p className="text-xs text-[#727785] mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-[#c2c6d6]/20 px-3">
                      <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-2">
                        Alternatives
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["vs Instantly", "vs Smartlead", "vs Apollo", "vs Lemlist", "vs Mailshake"].map((label) => (
                          <Link
                            key={label}
                            href={`/vs/${label.replace("vs ", "").toLowerCase()}`}
                            className="text-xs text-[#0058be] hover:underline"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* More Dropdown (Blog, Pricing, About, Contact) */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-heading font-semibold text-[#424754] hover:text-[#131b2e] transition-colors rounded-lg hover:bg-[#f2f3ff]">
              More
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[180px] z-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="rounded-2xl border border-[#c2c6d6]/30 bg-white shadow-xl p-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-heading font-medium text-[#424754] hover:text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right CTA — Try Now with submenu */}
        <div className="hidden md:flex items-center relative">
          <div
            className="relative"
            onMouseEnter={() => setTryNowOpen(true)}
            onMouseLeave={() => setTryNowOpen(false)}
          >
            <button className="btn-primary !text-sm !py-2 !px-4 rounded-full inline-flex items-center gap-.5">
              Try now
              <ChevronDown
                className={`w-2.5 h-2.5 transition-transform duration-200 ${tryNowOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {tryNowOpen && (
                <motion.div
                  className="absolute top-full right-0 pt-2 w-[200px] z-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.12 }}
                >
                  <div className="rounded-xl border border-[#c2c6d6]/30 bg-white shadow-lg p-1.5">
                    <Link
                      href="https://app.leadsnipper.com/signup?product=leadsnipper"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f2f3ff] transition-colors"
                      target="_blank"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0058be]" />
                      <span className="text-[13px] font-heading font-semibold text-[#131b2e]">
                        LeadSnipper
                      </span>
                      <span className="badge-live text-[6px] py-0.5 px-1.5 ml-auto">
                        LIVE
                      </span>
                    </Link>
                    {/*
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 opacity-40 cursor-not-allowed">
                      <Linkedin className="w-3.5 h-3.5 text-[#727785]" />
                      <span className="text-[13px] font-heading font-semibold text-[#727785]">
                        SocialSnipper
                      </span>
                      <span className="badge-coming-soon text-[6px] py-0.5 px-1.5 ml-auto">
                        SOON
                      </span>
                    </div>
                    */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-5 w-5 text-[#131b2e]" />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-6 px-6 md:hidden overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src={LeadsnipperRounded}
                  alt="LeadSnipper logo"
                  className="h-8 w-8"
                />
                <span className="font-heading font-bold text-[15px] text-[#131b2e]">
                  Lead<span className="text-[#0058be]">Snipper</span>
                </span>
              </Link>
              <motion.button onClick={() => setIsOpen(false)} whileTap={{ scale: 0.9 }}>
                <X className="h-6 w-6 text-[#131b2e]" />
              </motion.button>
            </div>

            <div className="flex flex-col gap-1">
              {/* Products Section */}
              <p className="text-[10px] font-mono font-medium text-[#727785] uppercase tracking-widest px-3 pt-4 pb-2">
                Products
              </p>
              {productItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f2f3ff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#424754]">{item.icon}</span>
                  <span className="text-sm font-heading font-semibold text-[#131b2e]">
                    {item.label}
                  </span>
                  {item.badge === "live" && <span className="badge-live text-[9px] py-0.5 px-2">LIVE</span>}
                  {item.badge === "soon" && <span className="badge-coming-soon text-[9px] py-0.5 px-2">SOON</span>}
                </Link>
              ))}

              {/* Cold Email Section */}
              <p className="text-[10px] font-mono font-medium text-[#727785] uppercase tracking-widest px-3 pt-6 pb-2">
                Cold Email
              </p>
              {coldEmailItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f2f3ff] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#424754]">{item.icon}</span>
                  <span className="text-sm font-heading font-semibold text-[#131b2e]">
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="px-3 py-2">
                <p className="text-[10px] font-mono text-[#727785] uppercase tracking-widest mb-2">
                  Alternatives
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Instantly", "Smartlead", "Apollo", "Lemlist", "Mailshake"].map((name) => (
                    <Link
                      key={name}
                      href={`/vs/${name.toLowerCase()}`}
                      className="text-xs text-[#0058be] hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      vs {name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* More Links */}
              <div className="border-t border-[#c2c6d6]/20 mt-4 pt-4">
                {moreItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-3 text-sm font-heading font-semibold text-[#131b2e]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="https://app.leadsnipper.com/signup?product=leadsnipper"
                  className="btn-primary w-full text-center rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Try LeadSnipper free →
                </Link>
                <Link
                  href="https://cal.com/heyrehan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full text-center rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book a call →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar };
