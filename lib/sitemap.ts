import { blogPosts } from "./blog";

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
    priority: 0.8,
  }));

  return [...staticUrls, ...blogUrls];
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
Allow: /blog
Allow: /blog/*
Allow: /contact
Allow: /savings-calculator
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /refund-policy

Sitemap: ${sitemapConfig.baseUrl}/sitemap.xml
Sitemap: ${sitemapConfig.baseUrl}/sitemap-index.xml

Crawl-delay: 1

Host: ${sitemapConfig.baseUrl}`;
}
