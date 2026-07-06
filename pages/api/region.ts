import type { NextApiRequest, NextApiResponse } from "next";

type RegionResponse = {
  countryCode: string | null;
  isIndia: boolean | null;
};

function extractCountryCode(req: NextApiRequest): string | null {
  const headerNames = [
    "cf-ipcountry",
    "x-vercel-ip-country",
    "x-country-code",
    "cloudfront-viewer-country",
  ];

  for (const name of headerNames) {
    const value = req.headers[name];
    const code = Array.isArray(value) ? value[0] : value;
    if (
      code &&
      typeof code === "string" &&
      code.length === 2 &&
      code.toUpperCase() !== "XX" &&
      code.toUpperCase() !== "T1"
    ) {
      return code.toUpperCase();
    }
  }

  return null;
}

function getClientIp(req: NextApiRequest): string | null {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0]?.trim() || null;
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(",")[0]?.trim() || null;
  }
  return req.socket?.remoteAddress ?? null;
}

async function lookupCountryFromIp(ip: string): Promise<string | null> {
  if (
    !ip ||
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("192.168.") ||
    ip.startsWith("10.")
  ) {
    return null;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const data = (await res.json()) as { success?: boolean; country_code?: string };
    if (data.success && data.country_code) {
      return data.country_code.toUpperCase();
    }
  } catch {
    /* ignore */
  }

  return null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegionResponse>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ countryCode: null, isIndia: null });
  }

  let countryCode = extractCountryCode(req);

  if (!countryCode) {
    const clientIp = getClientIp(req);
    if (clientIp) {
      countryCode = await lookupCountryFromIp(clientIp);
    }
  }

  res.setHeader("Cache-Control", "private, no-store");
  return res.status(200).json({
    countryCode,
    isIndia: countryCode ? countryCode === "IN" : null,
  });
}
