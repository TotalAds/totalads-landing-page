import { ArrowRight, Clock, Compass } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  BlogPost,
  clusterMeta,
  generateBlogPostSchema,
  getClusterHub,
  getRelatedPosts,
  formatDateLong,
} from "@/lib/blog";
import { seoConfig, structuredData } from "@/lib/seo";

import Footer from "./sections/Footer";
import { Navbar } from "./ui/navbar";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const canonical = `https://leadsnipper.com/blog/${post.slug}`;
  const blogSchema = generateBlogPostSchema(post);
  const relatedPosts = getRelatedPosts(post);
  const clusterHub = getClusterHub(post.cluster);
  const cluster = clusterMeta[post.cluster];
  // Use the post's own hero image for social sharing if available
  const ogImage = post.heroImage?.src ?? seoConfig.defaultOpenGraph.images[0].url;
  const ogImageAlt = post.heroImage?.alt ?? post.title;

  return (
    <>
      <Head>
        <title>{`${post.title} | LeadSnipper Blog`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:site_name"
          content={seoConfig.defaultOpenGraph.siteName}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content="LeadSnipper" />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.keywords} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leadsnipper_" />
        <meta name="twitter:creator" content="@leadsnipper_" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://leadsnipper.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://leadsnipper.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: cluster.label,
                  item: "https://leadsnipper.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: post.title,
                  item: canonical,
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-[#faf8ff]">
        <Navbar />

        {/* Blog post hero */}
        <section className="hero-bg dot-grid pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb with cluster context */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs font-mono text-[#727785] flex-wrap">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#0058be] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[#c2c6d6]">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#0058be] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li className="text-[#c2c6d6]">/</li>
                <li className="text-[#0058be] font-medium">
                  {cluster.icon} {cluster.label}
                </li>
                <li className="text-[#c2c6d6]">/</li>
                <li className="text-[#424754] truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            <header>
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[10px] font-medium text-[#0058be] bg-[#0058be]/[0.06] border border-[#0058be]/20">
                  {post.category.toUpperCase()}
                </span>
                {post.clusterRole === "hub" && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[10px] font-medium text-[#10b981] bg-[#10b981]/[0.06] border border-[#10b981]/20">
                    PILLAR GUIDE
                  </span>
                )}
              </div>
              <h1 className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[42px] text-[#131b2e] leading-tight mb-5">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#727785]">
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
                  <span>{post.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#c2c6d6]" />
                <time dateTime={post.date}>
                  {formatDateLong(post.date)}
                </time>
                <span className="w-1 h-1 rounded-full bg-[#c2c6d6]" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* SEO Hero Image */}
            {post.heroImage && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#c2c6d6]/20 shadow-sm">
                <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
                  <Image
                    src={post.heroImage.src}
                    alt={post.heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
                {post.heroImage.credit && (
                  <p className="text-[10px] font-mono text-[#a0a7b8] text-right px-3 py-1.5 bg-[#f8f9fc] border-t border-[#c2c6d6]/15">
                    Photo via {post.heroImage.credit}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Blog content */}
        <section className="py-12 section-warm border-t border-[#c2c6d6]/20">
          <article className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="blog-content prose-headings:font-heading prose-headings:text-[#131b2e] prose-p:text-[#424754] prose-a:text-[#0058be] prose-strong:text-[#131b2e]">
              {children}
            </div>

            {/* Back to Hub navigation (for spoke pages) */}
            {post.clusterRole === "spoke" && clusterHub && (
              <div className="mt-12 p-5 rounded-xl border border-[#0058be]/10 bg-[#0058be]/[0.02]">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#0058be] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-[#727785] mb-1">
                      PART OF: {cluster.icon} {cluster.label.toUpperCase()}
                    </p>
                    <Link
                      href={`/blog/${clusterHub.slug}`}
                      className="text-[#0058be] font-heading font-semibold text-sm hover:underline"
                    >
                      ← Read the full guide: {clusterHub.title}
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Related Articles — "Continue Your Journey" */}
            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <h3 className="font-heading font-bold text-lg text-[#131b2e] mb-6 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#0058be]" />
                  Continue Your Journey
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.slice(0, 3).map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block p-5 rounded-xl border border-[#c2c6d6]/15 bg-white hover:border-[#0058be]/25 transition-all hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded border text-[#0058be] bg-[#0058be]/[0.06] border-[#0058be]/20">
                          {related.category.toUpperCase()}
                        </span>
                        {related.clusterRole === "hub" && (
                          <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded border text-[#10b981] bg-[#10b981]/[0.06] border-[#10b981]/20">
                            PILLAR
                          </span>
                        )}
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-[#131b2e] mb-2 leading-snug group-hover:text-[#0058be] transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-xs text-[#727785] leading-relaxed line-clamp-2">
                        {related.excerpt}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-heading font-semibold text-[#0058be] group-hover:gap-2 transition-all">
                        Read article
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Money page links */}
            <div className="mt-12 p-5 rounded-xl border border-[#0058be]/10 bg-[#0058be]/[0.02]">
              <p className="text-xs font-mono text-[#727785] mb-3 uppercase tracking-widest">
                Explore LeadSnipper
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cold-email-software"
                  className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
                >
                  Cold email software
                </Link>
                <span className="text-[#c2c6d6]">·</span>
                <Link
                  href="/email-warmup"
                  className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
                >
                  Email warmup tool
                </Link>
                <span className="text-[#c2c6d6]">·</span>
                <Link
                  href="/email-deliverability"
                  className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
                >
                  Email deliverability tool
                </Link>
                <span className="text-[#c2c6d6]">·</span>
                <Link
                  href="/cold-email-infrastructure"
                  className="text-sm font-heading font-semibold text-[#0058be] hover:underline"
                >
                  Cold email infrastructure
                </Link>
              </div>
            </div>

            {/* Footer CTA */}
            <footer className="mt-16 pt-8 border-t border-[#c2c6d6]/20">
              <div className="glass-card rounded-2xl border border-[#0058be]/15 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0058be]/[0.03] via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="font-heading font-bold text-headline-md text-[#131b2e] mb-3">
                    Ready to own your cold email deliverability?
                  </h3>
                  <p className="text-sm text-[#727785] mb-6 max-w-lg mx-auto">
                    LeadSnipper gives you BYO AWS SES, built-in verification,
                    domain health monitoring, and intelligent warmup — all in one
                    platform. Explore our{" "}
                    <Link href="/cold-email-software" className="text-[#0058be] hover:underline">
                      cold email software
                    </Link>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="https://app.leadsnipper.com/signup"
                      className="btn-primary rounded-full text-sm"
                    >
                      Start free — 1,000 emails, no card
                    </Link>
                    <Link
                      href="/email-warmup"
                      className="btn-ghost rounded-full text-sm"
                    >
                      Email warmup tool
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </article>
        </section>

        <Footer />
      </div>
    </>
  );
}
