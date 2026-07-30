import { blogPosts } from "./blog";
import { getAllIndustrySlugs } from "./industries";

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const sitemapConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://leadsnipper.com"
      : "http://localhost:3001",

  staticPages: [
    {
      path: "/",
      changefreq: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/blog",
      changefreq: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/contact",
      changefreq: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/savings-calculator",
      changefreq: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/tools/email-deliverability-checker",
      changefreq: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/tools/cold-email-sending-limit-calculator",
      changefreq: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/vs/instantly",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/vs/smartlead",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/privacy-policy",
      changefreq: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/legal/readreuse-calculator-privacy",
      changefreq: "yearly" as const,
      priority: 0.2,
    },
    {
      path: "/terms-of-service",
      changefreq: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/refund-policy",
      changefreq: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/legal/data-use",
      changefreq: "yearly" as const,
      priority: 0.3,
    },
    {
      path: "/about",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/pricing",
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/products/leadsnipper",
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    /*
    {
      path: "/products/socialsnipper",
      changefreq: "monthly" as const,
      priority: 0.8,
    },
    */
    {
      path: "/services",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/ai-automation",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/ai-seo",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/analytics",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/consulting",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/crm-automation",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/custom-software",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/lead-generation",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/services/mvp-development",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/cold-email-software",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/email-warmup",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/email-deliverability",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/cold-email-infrastructure",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/ai-cold-email-generator",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/vs/apollo",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/vs/lemlist",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/vs/mailshake",
      changefreq: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/services/web-apps",
      changefreq: "monthly" as const,
      priority: 0.7,
    },
  ],
};

export function generateSitemapUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();

  const staticUrls = sitemapConfig.staticPages.map((page) => ({
    loc: `${sitemapConfig.baseUrl}${page.path}`,
    lastmod: currentDate,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  const blogUrls: SitemapUrl[] = blogPosts.map((post) => ({
    loc: `${sitemapConfig.baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "monthly" as const,
    priority: post.clusterRole === "hub" ? 0.9 : 0.8,
  }));

  const industryUrls: SitemapUrl[] = getAllIndustrySlugs().map((slug) => ({
    loc: `${sitemapConfig.baseUrl}/cold-email-for/${slug}`,
    lastmod: currentDate,
    changefreq: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...blogUrls, ...industryUrls];
}

export function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export function generateSitemapIndexXml(): string {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapConfig.baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
}

export function generateRobotsTxt(): string {
  return `# Robots.txt for LeadSnipper
# ${sitemapConfig.baseUrl}/robots.txt

User-agent: *
Allow: /

# Search Engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# AI Crawlers & Answer Engines
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: AppleBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: anthropic-ai
Allow: /

# Social Media Crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Allow: /
Allow: /about
Allow: /pricing
Allow: /blog
Allow: /blog/*
Allow: /contact
Allow: /savings-calculator
Allow: /tools/*
Allow: /vs/*
Allow: /products/*
Allow: /services
Allow: /services/*
Allow: /cold-email-software
Allow: /email-warmup
Allow: /email-deliverability
Allow: /cold-email-infrastructure
Allow: /ai-cold-email-generator
Allow: /cold-email-for/*
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /refund-policy
Allow: /legal/data-use
Allow: /legal/readreuse-calculator-privacy
Allow: /llms.txt
Allow: /llms-full.txt

Sitemap: ${sitemapConfig.baseUrl}/sitemap.xml
Sitemap: ${sitemapConfig.baseUrl}/sitemap-index.xml
Sitemap: ${sitemapConfig.baseUrl}/rss.xml

Crawl-delay: 1

Host: ${sitemapConfig.baseUrl}`;
}
