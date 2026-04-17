import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  sales: "Sales & Pricing",
  support: "Technical Support",
  partnership: "Partnership Opportunity",
  feedback: "Product Feedback",
  other: "Other",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    return null;
  }
  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    ok: boolean;
    error?: string;
    /** Set when NODE_ENV=development and SMTP is not configured — no email sent */
    devMode?: boolean;
  }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company =
    typeof body.company === "string" ? body.company.trim() : "";
  const subjectKey =
    typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) {
    return res.status(400).json({ ok: false, error: "Name is required" });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Valid email is required" });
  }
  if (!subjectKey) {
    return res.status(400).json({ ok: false, error: "Subject is required" });
  }
  if (!message) {
    return res.status(400).json({ ok: false, error: "Message is required" });
  }

  const transporter = getTransporter();
  if (!transporter) {
    if (process.env.NODE_ENV === "development") {
      const subjectLabel = SUBJECT_LABELS[subjectKey] || subjectKey;
      console.info(
        "[contact] SMTP not set — dev-only log (no email sent):\n",
        { name, email, company: company || undefined, topic: subjectLabel, message }
      );
      return res.status(200).json({ ok: true, devMode: true });
    }
    console.error("Contact form: SMTP env vars are not configured");
    return res.status(503).json({
      ok: false,
      error: "Email service is not configured",
    });
  }

  const recipients = (
    process.env.CONTACT_EMAIL_RECIPIENTS ||
    "mohdrehanrq0@gmail.com,rehan@leadsnipper.com"
  )
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    return res.status(503).json({
      ok: false,
      error: "No recipient addresses configured",
    });
  }

  const subjectLabel = SUBJECT_LABELS[subjectKey] || subjectKey;
  const smtpUser = process.env.SMTP_USER as string;
  const from =
    process.env.SMTP_FROM || `"LeadSnipper Contact" <${smtpUser}>`;

  const textBody = [
    "New contact form submission on leadsnipper.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Topic: ${subjectLabel}`,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const htmlBody = `
    <h2 style="font-family:system-ui,sans-serif;color:#1e293b;">New contact form submission</h2>
    <p style="font-family:system-ui,sans-serif;color:#475569;"><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p style="font-family:system-ui,sans-serif;color:#475569;"><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p style="font-family:system-ui,sans-serif;color:#475569;"><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p style="font-family:system-ui,sans-serif;color:#475569;"><strong>Topic:</strong> ${escapeHtml(subjectLabel)}</p>
    <p style="font-family:system-ui,sans-serif;color:#475569;"><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;color:#334155;background:#f1f5f9;padding:16px;border-radius:8px;">${escapeHtml(message)}</pre>
  `;

  try {
    await transporter.sendMail({
      from,
      to: recipients,
      replyTo: email,
      subject: `[LeadSnipper Contact] ${subjectLabel} — ${name}`,
      text: textBody,
      html: htmlBody,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form SMTP error:", err);
    return res.status(500).json({
      ok: false,
      error: "Failed to send message. Please try again later.",
    });
  }
}
