"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const SECTION_IDS = [
  "features",
  "workflow",
  "use-cases",
  "testimonials",
  "pricing",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  // Scroll spy: highlight the link of the section currently in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        {
          root: null,
          rootMargin: "-45% 0px -50% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: SectionId
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Reflect hash in the URL for deep-linking/back navigation
      if (typeof window !== "undefined" && window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
      // Make sure the selection updates immediately on click
      setActive(id);
    }
    setIsOpen(false);
  };

  const linkBase = "transition-colors text-[#075E54] hover:text-[#25D366]";
  const linkActive = "text-[#25D366] font-semibold";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#25D366] to-[#34B7F1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#34B7F1] bg-clip-text text-transparent">
              LeadSnipper
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              onClick={(e) => handleAnchorClick(e, "features")}
              className={`${linkBase} ${
                active === "features" ? linkActive : ""
              }`}
            >
              Features
            </a>
            <a
              href="#workflow"
              onClick={(e) => handleAnchorClick(e, "workflow")}
              className={`${linkBase} ${
                active === "workflow" ? linkActive : ""
              }`}
            >
              How It Works
            </a>
            <a
              href="#use-cases"
              onClick={(e) => handleAnchorClick(e, "use-cases")}
              className={`${linkBase} ${
                active === "use-cases" ? linkActive : ""
              }`}
            >
              Use Cases
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleAnchorClick(e, "testimonials")}
              className={`${linkBase} ${
                active === "testimonials" ? linkActive : ""
              }`}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleAnchorClick(e, "pricing")}
              className={`${linkBase} ${
                active === "pricing" ? linkActive : ""
              }`}
            >
              Pricing
            </a>
            <Link href="https://app.leadsnipper.com/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="https://app.leadsnipper.com/signup">
              <Button size="sm">Start Free Beta</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-[#075E54]" />
            ) : (
              <Menu className="w-6 h-6 text-[#075E54]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                onClick={(e) => handleAnchorClick(e, "features")}
                className={`${linkBase} ${
                  active === "features" ? linkActive : ""
                }`}
              >
                Features
              </a>
              <a
                href="#workflow"
                onClick={(e) => handleAnchorClick(e, "workflow")}
                className={`${linkBase} ${
                  active === "workflow" ? linkActive : ""
                }`}
              >
                How It Works
              </a>
              <a
                href="#use-cases"
                onClick={(e) => handleAnchorClick(e, "use-cases")}
                className={`${linkBase} ${
                  active === "use-cases" ? linkActive : ""
                }`}
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleAnchorClick(e, "testimonials")}
                className={`${linkBase} ${
                  active === "testimonials" ? linkActive : ""
                }`}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleAnchorClick(e, "pricing")}
                className={`${linkBase} ${
                  active === "pricing" ? linkActive : ""
                }`}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="https://app.leadsnipper.com/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="https://app.leadsnipper.com/signup">
                  <Button size="sm">Start Free Beta</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
