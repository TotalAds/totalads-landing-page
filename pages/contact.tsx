"use client";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { Clock, Globe2, Mail, MessageSquare, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "success_dev" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      subject: String(fd.get("subject") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        devMode?: boolean;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (data.devMode) {
        setSubmitStatus("success_dev");
        setSubmitMessage(
          "Local dev: SMTP is not configured, so no email was sent. Your submission was logged in the terminal. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to .env.local to test real delivery."
        );
      } else {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! Your message has been sent. We'll get back to you within 24 hours."
        );
      }
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error && error.message
          ? error.message
          : "Sorry, we couldn't send your message. Please try again or email us at hello@leadsnipper.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    {
      icon: <Mail className="w-5 h-5" />,
      color: "#0058be",
      title: "Email us",
      desc: "We respond within 24 hours",
      content: (
        <a
          href="mailto:hello@leadsnipper.com"
          className="text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] transition-colors"
        >
          hello@leadsnipper.com
        </a>
      ),
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      color: "#10b981",
      title: "Remote-first",
      desc: "Distributed team, global coverage",
      content: (
        <p className="text-xs text-[#727785] leading-relaxed">
          We work across time zones so you get answers when you need them.
        </p>
      ),
    },
    {
      icon: <Clock className="w-5 h-5" />,
      color: "#8b5cf6",
      title: "Response time",
      desc: "Fast turnaround on all queries",
      content: (
        <ul className="text-xs text-[#727785] space-y-1.5">
          <li className="flex justify-between gap-4">
            <span>General</span>
            <span className="font-heading font-semibold text-[#131b2e]">
              &lt; 24h
            </span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Technical</span>
            <span className="font-heading font-semibold text-[#131b2e]">
              &lt; 12h
            </span>
          </li>
        </ul>
      ),
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      color: "#b75b00",
      title: "Book a call",
      desc: "30-min intro — no strings attached",
      content: (
        <a
          href="https://cal.com/heyrehan/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-heading font-semibold text-[#b75b00] hover:text-[#d97706] transition-colors"
        >
          Schedule on Cal.com →
        </a>
      ),
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#c2c6d6]/40 bg-white text-sm text-[#131b2e] placeholder:text-[#c2c6d6] outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition font-body";

  return (
    <>
      <SEO pageKey="contact" />

      <div className="min-h-screen bg-[#faf8ff]">
        <Navbar />

        {/* Hero */}
        <section className="hero-bg dot-grid pt-32 pb-16">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-hero mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                We&apos;re here to help
              </span>
              <h1 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-4">
                Get in{" "}
                <span className="font-display italic text-[#0058be]">
                  touch
                </span>
              </h1>
              <p className="text-body-lg text-[#727785] max-w-2xl mx-auto">
                Questions about cold email, pricing, or partnerships? Send a
                message — our team replies within one business day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              {/* Info Cards */}
              <div className="lg:col-span-2 space-y-4">
                {infoCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-[#c2c6d6]/15"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="p-2.5 rounded-xl text-white shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`,
                        }}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-[#131b2e]">
                          {card.title}
                        </h3>
                        <p className="text-[10px] font-mono text-[#727785]">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    {card.content}
                  </motion.div>
                ))}
              </div>

              {/* Form Card */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <div className="glass-card rounded-2xl border border-[#c2c6d6]/15 shadow-lg p-7">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#131b2e] text-white">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg text-[#131b2e]">
                        Send us a message
                      </h2>
                      <p className="text-xs text-[#727785] mt-0.5">
                        Tell us about your use case or ask anything — it goes
                        straight to our team.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={sendMessage} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-heading font-semibold text-[#131b2e] mb-1.5"
                        >
                          Full name <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className={inputClass}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-heading font-semibold text-[#131b2e] mb-1.5"
                        >
                          Work email <span className="text-[#ba1a1a]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-heading font-semibold text-[#131b2e] mb-1.5"
                      >
                        Company{" "}
                        <span className="text-[#c2c6d6] font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputClass}
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-heading font-semibold text-[#131b2e] mb-1.5"
                      >
                        Topic <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        className={inputClass}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        <option value="general">General inquiry</option>
                        <option value="sales">Sales & pricing</option>
                        <option value="support">Technical support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Product feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-heading font-semibold text-[#131b2e] mb-1.5"
                      >
                        Message <span className="text-[#ba1a1a]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        className={`${inputClass} resize-y min-h-[140px]`}
                        placeholder="How can we help?"
                      />
                    </div>

                    {submitMessage && (
                      <div
                        role="alert"
                        className={`p-4 rounded-xl border text-sm ${
                          submitStatus === "success"
                            ? "bg-[#10b981]/[0.06] border-[#10b981]/20 text-[#10b981]"
                            : submitStatus === "success_dev"
                              ? "bg-[#b75b00]/[0.06] border-[#b75b00]/20 text-[#b75b00]"
                              : "bg-[#ba1a1a]/[0.06] border-[#ba1a1a]/20 text-[#ba1a1a]"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full rounded-full text-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending…"
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
