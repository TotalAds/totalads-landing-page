import { ArrowRight, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import SEO from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Navbar } from "@/components/ui/navbar";
import {
  type BlogCluster,
  type BlogPost,
  blogPosts,
  clusterMeta,
  formatDate,
} from "@/lib/blog";

const categoryColors: Record<string, string> = {
  Deliverability: "text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20",
  Infrastructure: "text-[#0058be] bg-[#0058be]/[0.06] border-[#0058be]/20",
  Guide: "text-[#8b5cf6] bg-[#8b5cf6]/[0.06] border-[#8b5cf6]/20",
  Comparison: "text-[#b75b00] bg-[#b75b00]/[0.06] border-[#b75b00]/20",
  Strategy: "text-[#0058be] bg-[#0058be]/[0.06] border-[#0058be]/20",
  Tutorial: "text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20",
};

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={`group glass-card glass-card-hover rounded-2xl overflow-hidden border ${
        featured
          ? "border-[#0058be]/20 ring-1 ring-[#0058be]/10"
          : "border-[#c2c6d6]/15"
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Hero image thumbnail */}
        {post.heroImage ? (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src={post.heroImage.src}
              alt={post.heroImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </div>
        ) : (
          /* Top accent bar for posts without images */
          <div
            className={`h-1.5 ${
              featured
                ? "bg-gradient-to-r from-[#0058be] via-[#8b5cf6] to-[#10b981]"
                : "bg-gradient-to-r from-[#0058be] to-[#8b5cf6]"
            }`}
          />
        )}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border ${categoryColors[post.category] || "text-[#727785] bg-[#f2f3ff] border-[#c2c6d6]/20"}`}
            >
              {post.category.toUpperCase()}
            </span>
            {post.clusterRole === "hub" && (
              <span className="flex items-center gap-1 text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20">
                <Star className="w-3 h-3" />
                PILLAR GUIDE
              </span>
            )}
            <span className="flex items-center gap-1 text-[10px] font-mono text-[#727785] ml-auto">
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
                  background: "linear-gradient(135deg, #0058be, #2170e4)",
                }}
              >
                {post.author
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <span className="text-xs text-[#727785]">{post.author}</span>
            </div>
            <time
              dateTime={post.date}
              className="text-[10px] font-mono text-[#727785]"
            >
              {formatDate(post.date)}
            </time>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#0058be] group-hover:gap-3 transition-all">
            Read article
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </article>
  );
}

function ClusterSection({ cluster }: { cluster: BlogCluster }) {
  const meta = clusterMeta[cluster];
  const posts = blogPosts.filter((p) => p.cluster === cluster);
  const hub = posts.find((p) => p.clusterRole === "hub");
  const spokes = posts.filter((p) => p.clusterRole !== "hub");

  return (
    <div className="mb-16">
      {/* Cluster header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{meta.icon}</span>
          <h2 className="font-heading font-bold text-xl text-[#131b2e]">
            {meta.label}
          </h2>
        </div>
        <p className="text-sm text-[#727785] max-w-2xl">{meta.description}</p>
      </div>

      {/* Hub/Pillar post — featured */}
      {hub && (
        <div className="mb-6">
          <PostCard post={hub} featured />
        </div>
      )}

      {/* Spoke posts — grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spokes.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

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

        {/* Blog Clusters */}
        <section className="py-16 section-warm border-t border-[#c2c6d6]/20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16">
            <ClusterSection cluster="infrastructure" />
            <ClusterSection cluster="deliverability" />
            <ClusterSection cluster="comparison" />

            {/* Cold Email Tools Section */}
            <div className="mt-12 mb-12 glass-card rounded-2xl border border-[#c2c6d6]/15 p-8">
              <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-6">
                Cold Email Tools & Resources
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/cold-email-software"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    Cold Email Software
                  </span>
                  <span className="text-xs text-[#727785]">
                    Full platform with verification & warmup
                  </span>
                </Link>
                <Link
                  href="/email-warmup"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    Email Warmup Tool
                  </span>
                  <span className="text-xs text-[#727785]">
                    Improve inbox placement in days
                  </span>
                </Link>
                <Link
                  href="/email-deliverability"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    Email Deliverability
                  </span>
                  <span className="text-xs text-[#727785]">
                    Monitor SPF, DKIM, DMARC & health
                  </span>
                </Link>
                <Link
                  href="/cold-email-infrastructure"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    BYO AWS SES
                  </span>
                  <span className="text-xs text-[#727785]">
                    Own your cold email infrastructure
                  </span>
                </Link>
                <Link
                  href="/ai-cold-email-generator"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    AI Email Generator
                  </span>
                  <span className="text-xs text-[#727785]">
                    AI-powered cold email writing
                  </span>
                </Link>
                <Link
                  href="/cold-email-for/saas"
                  className="block p-4 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-heading font-semibold text-[#131b2e] block mb-1">
                    Cold Email by Industry
                  </span>
                  <span className="text-xs text-[#727785]">
                    SaaS, agencies, real estate & more
                  </span>
                </Link>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 glass-card rounded-3xl border border-[#0058be]/15 p-10 text-center relative overflow-hidden">
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
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://app.leadsnipper.com/signup"
                    className="btn-primary rounded-full"
                  >
                    Start free — 1,000 emails, no card →
                  </Link>
                  <Link
                    href="/cold-email-software"
                    className="btn-ghost rounded-full"
                  >
                    Explore cold email software →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
