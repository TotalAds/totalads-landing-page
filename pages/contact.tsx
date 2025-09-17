import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import LeadSnipperLogo from "@/components/ui/LeadSnipperLogo";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please set up your EmailJS credentials in .env.local file. See EMAILJS_SETUP.md for detailed instructions."
        );
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours."
      );

      // Reset form
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly at hello@leadsnipper.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us - LeadSnipper</title>
        <meta
          name="description"
          content="Contact LeadSnipper for support, sales inquiries, or partnership opportunities. Remote-first team with fast response times."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-xl bg-slate-900/90">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <div className=" p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                  <LeadSnipperLogo className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">LeadSnipper</h1>
                  <div className="text-xs text-gray-300">
                    Revenue-Focused Sales Intelligence
                  </div>
                </div>
              </Link>

              <div className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/how-to-use"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How to Use
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <span className="text-sm font-semibold text-purple-300">
                  Remote-First • Global Team • 24/7 Support
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Get in Touch
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We&apos;re a remote-first team passionate about helping sales
                teams succeed. Whether you need support, want to explore
                partnerships, or have questions about our platform, we&apos;re
                here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Us</h3>
                      <p className="text-gray-400 text-sm">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:hello@leadsnipper.com"
                    className="text-purple-300 hover:text-white transition-colors font-medium"
                  >
                    hello@leadsnipper.com
                  </a>
                </div>

                <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <span className="text-white text-sm">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Remote-First</h3>
                      <p className="text-gray-400 text-sm">
                        Distributed team worldwide
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Our team operates across multiple time zones to provide
                    global support and ensure we&apos;re always available when
                    you need us.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                      <span className="text-white text-sm">⏰</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Response Time
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Fast and reliable support
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">General inquiries:</span>
                      <span className="text-green-300 font-medium">
                        &lt; 24 hours
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Technical support:</span>
                      <span className="text-green-300 font-medium">
                        &lt; 12 hours
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sales inquiries:</span>
                      <span className="text-green-300 font-medium">
                        &lt; 6 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <h2 className="text-white text-2xl font-semibold">
                        Send us a Message
                      </h2>
                      <p className="text-gray-400">
                        Tell us about your project or ask any questions
                      </p>
                    </div>
                  </div>

                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          name="from_name"
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          name="from_email"
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        name="company"
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="feedback">Product Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your project, questions, or how we can help..."
                      />
                    </div>

                    {/* Status Message */}
                    {submitMessage && (
                      <div
                        className={`p-4 rounded-lg border ${
                          submitStatus === "success"
                            ? "bg-green-500/20 border-green-500/30 text-green-300"
                            : "bg-red-500/20 border-red-500/30 text-red-300"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/25"
                      } text-white`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="mt-16 text-center">
              <div className="bg-slate-900/40 border border-white/10 backdrop-blur-xl rounded-xl p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4">
                      <span className="text-purple-400 text-lg">👥</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Remote-First Team
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Our distributed team spans multiple continents, bringing
                      diverse perspectives and 24/7 availability to serve our
                      global customer base.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-4">
                      <span className="text-blue-400 text-lg">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Fast Response
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We pride ourselves on quick response times and efficient
                      problem-solving. Your success is our priority, and
                      we&apos;re here to help you achieve it.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4">
                      <span className="text-green-400 text-lg">🌍</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Global Reach
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Serving customers worldwide with localized support and
                      understanding of different markets and business cultures.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-center space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      LeadSnipper Technologies
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <span>📍</span>
                        <span>Remote-First Company</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>✉️</span>
                        <span>hello@leadsnipper.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🌍</span>
                        <span>Global Operations</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                      We&apos;re committed to building the future of sales
                      intelligence through innovative technology, exceptional
                      customer service, and a remote-first culture that attracts
                      top talent from around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold text-white">
                  LeadSnipper
                </span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
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
                  href="/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
              <p>
                © 2024 LeadSnipper Technologies. All rights reserved. Built with
                ❤️ by a remote-first team.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
