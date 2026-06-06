import type { NextApiRequest, NextApiResponse } from "next";

import { blogPosts } from "@/lib/blog";
import { seoConfig } from "@/lib/seo";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = seoConfig.baseUrl;
  const buildDate = new Date().toUTCString();

  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>rehan@leadsnipper.com (LeadSnipper Team)</author>
      <category>${escapeXml(post.category)}</category>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LeadSnipper Blog — Cold Email &amp; Deliverability</title>
    <link>${baseUrl}/blog</link>
    <description>Cold email best practices, deliverability guides, and outbound strategy from the LeadSnipper team.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.status(200).send(rss);
}
