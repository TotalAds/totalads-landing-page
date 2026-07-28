import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

/**
 * Dynamic llms.txt API route
 * 
 * Serves the static llms.txt from /public with correct Content-Type.
 * Falls back to the static file if it exists.
 * 
 * This ensures AI agents get clean markdown content when requesting
 * /llms.txt, regardless of how the server is configured.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const llmsPath = path.join(process.cwd(), "public", "llms.txt");
    const content = fs.readFileSync(llmsPath, "utf-8");

    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
    res.setHeader("X-Robots-Tag", "noindex"); // Don't index the raw markdown in search
    res.status(200).send(content);
  } catch {
    res.status(404).send("# LeadSnipper\n\n> llms.txt not found. Visit https://leadsnipper.com for more information.");
  }
}
