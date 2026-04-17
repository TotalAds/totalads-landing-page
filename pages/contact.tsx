"use client";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  return (
    <>
      <SEO pageKey="contact" />

      <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f0f0f0] to-[#fafafa]">
        <Navbar />

        <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-[#3b82f6]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-[#22c55e]/8 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-sm font-semibold text-[#3b82f6] shadow-sm mb-6">
                <MessageSquare className="w-4 h-4" />
                We&apos;re here to help
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 tracking-tight">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#22c55e] bg-clip-text text-transparent">
                  touch
                </span>
              </h1>
              <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
                Questions about cold email, pricing, or partnerships? Send a
                message — our team replies within one business day.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              <div className="lg:col-span-2 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  <Card className="hover:scale-[1.02] border-[#e2e8f0] bg-white/90">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white shadow-md">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Email us</CardTitle>
                          <CardDescription>
                            We respond within 24 hours
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="mailto:hello@leadsnipper.com"
                        className="text-[#3b82f6] font-semibold hover:text-[#2563eb] transition-colors"
                      >
                        hello@leadsnipper.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  <Card className="hover:scale-[1.02] border-[#e2e8f0] bg-white/90">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white shadow-md">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Remote-first</CardTitle>
                          <CardDescription>
                            Distributed team, global coverage
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        We work across time zones so you get answers when you
                        need them.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                >
                  <Card className="hover:scale-[1.02] border-[#e2e8f0] bg-white/90">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white shadow-md">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            Typical response
                          </CardTitle>
                          <CardDescription>
                            Sales & general — fast turnaround
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-[#475569] space-y-2">
                        <li className="flex justify-between gap-4">
                          <span>General</span>
                          <span className="font-medium text-[#1e293b]">
                            &lt; 24h
                          </span>
                        </li>
                        <li className="flex justify-between gap-4">
                          <span>Technical</span>
                          <span className="font-medium text-[#1e293b]">
                            &lt; 12h
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <Card className="border-[#e2e8f0] bg-white shadow-xl shadow-[#0f172a]/5">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1e293b] text-white">
                        <Send className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Send us a message</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Tell us about your use case or ask anything — it goes
                          straight to our team.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={sendMessage} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-medium text-[#334155] mb-1.5"
                          >
                            Full name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6] transition-shadow"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-medium text-[#334155] mb-1.5"
                          >
                            Work email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6] transition-shadow"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-sm font-medium text-[#334155] mb-1.5"
                        >
                          Company{" "}
                          <span className="text-[#94a3b8] font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6] transition-shadow"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-sm font-medium text-[#334155] mb-1.5"
                        >
                          Topic <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6] transition-shadow"
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
                          className="block text-sm font-medium text-[#334155] mb-1.5"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6] transition-shadow resize-y min-h-[140px]"
                          placeholder="How can we help?"
                        />
                      </div>

                      {submitMessage && (
                        <div
                          role="alert"
                          className={`p-4 rounded-lg border text-sm ${
                            submitStatus === "success"
                              ? "bg-[#f0fdf4] border-[#86efac] text-[#166534]"
                              : submitStatus === "success_dev"
                                ? "bg-[#fffbeb] border-[#fcd34d] text-[#92400e]"
                                : "bg-[#fef2f2] border-[#fecaca] text-[#991b1b]"
                          }`}
                        >
                          {submitMessage}
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending…"
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
