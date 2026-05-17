import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import { blogPosts } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Deliverability: "text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20",
  Infrastructure: "text-[#0058be] bg-[#0058be]/[0.06] border-[#0058be]/20",
  Guide: "text-[#8b5cf6] bg-[#8b5cf6]/[0.06] border-[#8b5cf6]/20",
  Comparison: "text-[#b75b00] bg-[#b75b00]/[0.06] border-[#b75b00]/20",
  Strategy: "text-[#0058be] bg-[#0058be]/[0.06] border-[#0058be]/20",
  Tutorial: "text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20",
};

export default function BlogIndex() {
  return (
    <>
      <SEO pageKey="blog" />

      <div className="min-h-screen bg-[#faf8ff]">
        <Navbar />

        {/* Hero */}
        <section className="hero-bg dot-grid pt-32 pb-20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 text-center">
            <span className="section-tag justify-center mb-6">Blog</span>
            <h1 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-5">
              Cold Email Guides &{" "}
              <span className="font-display italic text-[#0058be]">
                Deliverability Tips
              </span>
            </h1>
            <p className="text-body-lg text-[#727785] max-w-2xl mx-auto">
              Practical strategies for domain health, email warmup, list
              verification, and outbound at scale. Written by the team that
              builds LeadSnipper.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group glass-card glass-card-hover rounded-2xl overflow-hidden border border-[#c2c6d6]/15"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Top accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-[#0058be] to-[#8b5cf6]" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border ${categoryColors[post.category] || "text-[#727785] bg-[#f2f3ff] border-[#c2c6d6]/20"}`}
                        >
                          {post.category.toUpperCase()}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-mono text-[#727785]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading font-bold text-[17px] text-[#131b2e] mb-3 leading-snug group-hover:text-[#0058be] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-[#727785] leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#c2c6d6]/15">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-heading font-bold text-white"
                            style={{
                              background:
                                "linear-gradient(135deg, #0058be, #2170e4)",
                            }}
                          >
                            {post.author
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </div>
                          <span className="text-xs text-[#727785]">
                            {post.author}
                          </span>
                        </div>
                        <time
                          dateTime={post.date}
                          className="text-[10px] font-mono text-[#727785]"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#0058be] group-hover:gap-3 transition-all">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-20 glass-card rounded-3xl border border-[#0058be]/15 p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.03] via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                  Stop reading about deliverability.{" "}
                  <span className="font-display italic text-[#0058be]">
                    Start owning it.
                  </span>
                </h2>
                <p className="text-sm text-[#727785] mb-6 max-w-lg mx-auto">
                  LeadSnipper gives you BYO AWS SES, built-in verification, domain
                  health monitoring, and intelligent warmup — all in one platform.
                </p>
                <Link
                  href="https://app.leadsnipper.com/signup"
                  className="btn-primary rounded-full"
                >
                  Start free — 1,000 emails, no card →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
