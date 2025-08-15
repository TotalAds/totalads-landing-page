import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { email, source } = req.body || {};
  if (!email || typeof email !== "string") {
    return res.status(400).json({ ok: false, error: "Email is required" });
  }

  // Log locally
  console.log("[waitlist] signup", {
    email,
    source: source || "landing",
    ts: new Date().toISOString(),
  });

  // Optional: Forward to Google Forms -> Google Sheet if configured
  const FORM_ID = process.env.GOOGLE_FORM_ID;
  const EMAIL_ENTRY = process.env.GOOGLE_FORM_EMAIL_ENTRY; // e.g. "1234567890"
  const SOURCE_ENTRY = process.env.GOOGLE_FORM_SOURCE_ENTRY; // optional

  if (FORM_ID && EMAIL_ENTRY) {
    try {
      const formUrl = `https://docs.google.com/forms/d/${FORM_ID}/formResponse`;
      const params = new URLSearchParams();
      params.append(`entry.${EMAIL_ENTRY}`, email);
      if (SOURCE_ENTRY && typeof source === "string") {
        params.append(`entry.${SOURCE_ENTRY}`, source);
      }

      await axios.post(formUrl, params.toString(), {
        headers: { "content-type": "application/x-www-form-urlencoded" },
        // A short timeout so UI stays snappy
        timeout: 5000,
      });
      console.log("[waitlist] Successfully forwarded to Google Form");
    } catch (err) {
      console.error("[waitlist] Google Form submit failed", err);
      // Don't fail the entire request if Google Form fails
      // The email is still logged locally above
      console.warn("[waitlist] Continuing without Google Form submission");
    }
  } else {
    console.warn(
      "[waitlist] GOOGLE_FORM_* env not set; skipping Google Sheet forwarding"
    );
  }

  return res.status(200).json({ ok: true });
}
