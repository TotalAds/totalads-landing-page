import { NextApiRequest, NextApiResponse } from 'next';
import { generateSitemapUrls, generateSitemapXml } from '@/lib/sitemap';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    // Generate sitemap URLs
    const urls = generateSitemapUrls();
    
    // Generate XML content
    const sitemapXml = generateSitemapXml(urls);

    // Set appropriate headers
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // Cache for 24 hours
    
    // Return the sitemap
    res.status(200).send(sitemapXml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}
