import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import {
  type CompetitorSlug,
  competitors,
  getCompetitorMonthlyCostUsd,
  getLeadSnipperMonthlyCostUsd,
} from "@/lib/competitorPricing";

/* ── Helpers ──────────────────────────────────────────────────────── */

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
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

function fmtUsd(n: number) {
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

/* ── Handler ──────────────────────────────────────────────────────── */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; error?: string; devMode?: boolean }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = req.body as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const emails = typeof body.emails === "number" ? body.emails : 0;
  const domains = typeof body.domains === "number" ? body.domains : 1;
  const tool =
    typeof body.tool === "string" && Object.keys(competitors).includes(body.tool)
      ? (body.tool as CompetitorSlug)
      : ("instantly" as CompetitorSlug);

  if (!name || !email || emails <= 0) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  /* ── Compute costs ─ */
  const comp = getCompetitorMonthlyCostUsd(tool, emails);
  const ls = getLeadSnipperMonthlyCostUsd(emails);
  const annualComp = comp.monthlyCostUsd * 12;
  const annualLs = ls.totalUsd * 12;
  const annualSavings = annualComp - annualLs;
  const competitorLabel = competitors[tool].meta.label;

  /* ── Build email HTML ─ */
  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Your Cold Email Cost Breakdown</title></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b;">
  <div style="text-align:center;padding:24px 0 16px;border-bottom:2px solid #eff6ff;">
    <h1 style="font-size:24px;margin:0 0 8px;color:#0f172a;">Your Cold Email Cost Breakdown</h1>
    <p style="font-size:14px;color:#64748b;margin:0;">
      ${escapeHtml(emails.toLocaleString("en-US"))} emails/mo · ${escapeHtml(String(domains))} domain${domains !== 1 ? "s" : ""} · vs ${escapeHtml(competitorLabel)}
    </p>
  </div>

  <table style="width:100%;border-collapse:collapse;margin:24px 0;" cellpadding="0" cellspacing="0">
    <tr style="background:#f1f5f9;">
      <th style="text-align:left;padding:12px 16px;font-size:13px;color:#64748b;border:1px solid #e2e8f0;">&nbsp;</th>
      <th style="text-align:center;padding:12px 16px;font-size:13px;color:#dc2626;border:1px solid #e2e8f0;">${escapeHtml(competitorLabel)}</th>
      <th style="text-align:center;padding:12px 16px;font-size:13px;color:#2563eb;border:1px solid #e2e8f0;">LeadSnipper</th>
    </tr>
    <tr>
      <td style="padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;font-weight:600;">Platform fee</td>
      <td style="text-align:center;padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;">${tool === "ses-direct" ? "—" : `${fmtUsd(comp.tier.monthlyUsd)}/mo`}</td>
      <td style="text-align:center;padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;color:#2563eb;font-weight:600;">${ls.plan ? `${fmtUsd(ls.platformUsd)}/mo` : "Custom"}</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;font-weight:600;">SES sending cost</td>
      <td style="text-align:center;padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;">${tool === "ses-direct" ? fmtUsd(comp.monthlyCostUsd) : "Included"}</td>
      <td style="text-align:center;padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;color:#2563eb;font-weight:600;">${fmtUsd(ls.sesUsd)}/mo</td>
    </tr>
    <tr>
      <td style="padding:10px 16px;font-size:13px;border:1px solid #e2e8f0;font-weight:700;">Monthly total</td>
      <td style="text-align:center;padding:10px 16px;font-size:15px;border:1px solid #e2e8f0;font-weight:700;color:#dc2626;">${fmtUsd(comp.monthlyCostUsd)}</td>
      <td style="text-align:center;padding:10px 16px;font-size:15px;border:1px solid #e2e8f0;font-weight:700;color:#2563eb;">${ls.plan ? fmtUsd(ls.totalUsd) : "Custom"}</td>
    </tr>
    <tr style="background:#f0fdf4;">
      <td style="padding:14px 16px;font-size:14px;border:1px solid #e2e8f0;font-weight:700;">Annual total</td>
      <td style="text-align:center;padding:14px 16px;font-size:18px;border:1px solid #e2e8f0;font-weight:800;color:#dc2626;">${fmtUsd(annualComp)}</td>
      <td style="text-align:center;padding:14px 16px;font-size:18px;border:1px solid #e2e8f0;font-weight:800;color:#2563eb;">${ls.plan ? fmtUsd(annualLs) : "Custom"}</td>
    </tr>
  </table>

  ${annualSavings > 0 ? `
  <div style="text-align:center;padding:24px;background:linear-gradient(135deg,#f0fdf4,#ecfeff);border-radius:12px;border:2px solid #86efac;margin:24px 0;">
    <p style="font-size:12px;color:#15803d;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Your annual savings</p>
    <p style="font-size:36px;font-weight:800;color:#16a34a;margin:0;">${fmtUsd(annualSavings)}</p>
    <p style="font-size:13px;color:#475569;margin:8px 0 0;">per year vs ${escapeHtml(competitorLabel)}</p>
  </div>
  ` : ""}

  <div style="text-align:center;padding:24px 0;">
    <a href="https://app.leadsnipper.com/signup?product=leadsnipper" style="display:inline-block;padding:14px 32px;background:#2563eb;color:#fff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;">Start Your Free Trial →</a>
  </div>

  <p style="font-size:11px;color:#94a3b8;text-align:center;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:16px;">
    This breakdown was generated by the <a href="https://leadsnipper.com/savings-calculator" style="color:#2563eb;">LeadSnipper Cost Calculator</a>.
    Competitor prices are publicly listed rates as of July 2026. AWS SES: $0.10/1,000 emails.
  </p>
</body>
</html>`;

  /* ── Send email ─ */
  const transporter = getTransporter();
  if (!transporter) {
    if (process.env.NODE_ENV === "development") {
      console.log("[email-breakdown] SMTP not configured — skipping send");
      console.log(`  To: ${email}, Name: ${name}, Emails: ${emails}, Tool: ${tool}`);
      return res.status(200).json({ ok: true, devMode: true });
    }
    return res.status(500).json({ ok: false, error: "Email not configured" });
  }

  try {
    // Send breakdown to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "LeadSnipper <noreply@leadsnipper.com>",
      to: email,
      subject: `Your Cold Email Cost Breakdown: ${competitorLabel} vs LeadSnipper`,
      html,
    });

    // Notify team (lead capture)
    const recipients = process.env.CONTACT_EMAIL_RECIPIENTS || "rehan@leadsnipper.com";
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "LeadSnipper <noreply@leadsnipper.com>",
      to: recipients,
      subject: `[Calculator Lead] ${escapeHtml(name)} — ${escapeHtml(email)}`,
      html: `
        <h3>New Calculator Lead</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Monthly volume:</strong> ${emails.toLocaleString("en-US")} emails</p>
        <p><strong>Domains:</strong> ${domains}</p>
        <p><strong>Comparing against:</strong> ${escapeHtml(competitorLabel)}</p>
        <p><strong>Annual savings:</strong> ${fmtUsd(annualSavings)}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[email-breakdown]", err);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}
