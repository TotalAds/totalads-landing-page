import { NextApiRequest, NextApiResponse } from 'next';
import { generateRobotsTxt } from '@/lib/sitemap';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    // Generate robots.txt content
    const robotsTxt = generateRobotsTxt();

    // Set appropriate headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // Cache for 24 hours
    
    // Return the robots.txt
    res.status(200).send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    res.status(500).json({ error: 'Failed to generate robots.txt' });
  }
}
