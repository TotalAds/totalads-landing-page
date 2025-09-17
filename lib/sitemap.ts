// Sitemap generation utilities for LeadSnipper
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const sitemapConfig = {
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://leadsnipper.com' 
    : 'http://localhost:3001',
  
  // Static pages configuration
  staticPages: [
    {
      path: '/',
      changefreq: 'weekly' as const,
      priority: 1.0,
    },
    {
      path: '/how-to-use',
      changefreq: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/contact',
      changefreq: 'monthly' as const,
      priority: 0.6,
    },
    {
      path: '/privacy-policy',
      changefreq: 'yearly' as const,
      priority: 0.3,
    },
    {
      path: '/terms-of-service',
      changefreq: 'yearly' as const,
      priority: 0.3,
    },
    {
      path: '/refund-policy',
      changefreq: 'yearly' as const,
      priority: 0.3,
    },
  ],
};

// Generate sitemap URLs
export function generateSitemapUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();
  
  return sitemapConfig.staticPages.map(page => ({
    loc: `${sitemapConfig.baseUrl}${page.path}`,
    lastmod: currentDate,
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}

// Generate XML sitemap content
export function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

// Generate sitemap index XML
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

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `# Robots.txt for LeadSnipper Landing Page
# ${sitemapConfig.baseUrl}/robots.txt

User-agent: *
Allow: /

# Allow all major search engines
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

# Disallow admin and API routes (if any)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /
Allow: /how-to-use
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /refund-policy

# Sitemap location
Sitemap: ${sitemapConfig.baseUrl}/sitemap.xml
Sitemap: ${sitemapConfig.baseUrl}/sitemap-index.xml

# Crawl delay (optional - be respectful)
Crawl-delay: 1

# Host directive (helps with canonicalization)
Host: ${sitemapConfig.baseUrl}`;
}
