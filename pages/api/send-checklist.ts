import fs from "fs/promises";
import path from "path";

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const DOWNLOAD_URL = "https://leadsnipper.com/LeadSnipper_Deliverability_Checklist_v2.pdf";

type OkBody = { ok: true };
type ErrBody = { ok: false; error: string };

function emailHtml(name: string) {
	return `
<div style="background:#f8fafc;padding:24px 12px;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px;border:1px solid #e2e8f0;">
    <div style="text-align:center;margin-bottom:20px;">
      <img src="https://leadsnipper.com/leadsnipper_logo.svg" alt="LeadSnipper" style="height:44px;max-width:180px;" />
    </div>
    <p style="font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#0f172a;font-size:15px;">Hi ${name},</p>
    <p style="font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#334155;font-size:15px;line-height:1.7;">
      Here's the Cold Email Deliverability Checklist you requested.
      33 items across 6 sections - work through them before your first campaign goes live.
    </p>
    <div style="margin:24px 0;">
      <a href="${DOWNLOAD_URL}" style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;font-family:system-ui,Segoe UI,Roboto,sans-serif;font-weight:600;padding:12px 18px;border-radius:8px;">
        Download Your Checklist PDF
      </a>
    </div>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
    <h3 style="font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#0f172a;margin:0 0 12px 0;font-size:18px;">
      While you're here - see what LeadSnipper does
    </h3>
    <ul style="font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#334155;padding-left:18px;line-height:1.8;margin:8px 0 18px;">
      <li>Own your AWS SES sending infrastructure - no shared IPs</li>
      <li>Built-in warmup pools with human-like activity</li>
      <li>Bounce & complaint alerts before AWS suspends you</li>
      <li>Pay for what you send - not a per-seat subscription</li>
    </ul>
    <div style="margin:8px 0 26px;">
      <a href="https://app.leadsnipper.com" style="display:inline-block;background:#3b82f6;color:#ffffff;text-decoration:none;font-family:system-ui,Segoe UI,Roboto,sans-serif;font-weight:600;padding:12px 18px;border-radius:8px;">
        Try LeadSnipper Free →
      </a>
    </div>
    <p style="font-family:system-ui,Segoe UI,Roboto,sans-serif;color:#64748b;font-size:12px;border-top:1px solid #e2e8f0;padding-top:14px;margin-top:4px;">
      © 2025 LeadSnipper · leadsnipper.com · Unsubscribe
    </p>
  </div>
</div>
`.trim();
}

function emailText(name: string) {
	return [
		`Hi ${name},`,
		"",
		"Here's the Cold Email Deliverability Checklist you requested.",
		"33 items across 6 sections - work through them before your first campaign goes live.",
		"",
		`Download Your Checklist PDF: ${DOWNLOAD_URL}`,
		"",
		"While you're here - see what LeadSnipper does",
		"- Own your AWS SES sending infrastructure - no shared IPs",
		"- Built-in warmup pools with human-like activity",
		"- Bounce & complaint alerts before AWS suspends you",
		"- Pay for what you send - not a per-seat subscription",
		"",
		"Try LeadSnipper Free: https://app.leadsnipper.com",
		"",
		"© 2026 LeadSnipper · leadsnipper.com · Unsubscribe",
	].join("\n");
}

async function saveLeadInBackend(
	req: NextApiRequest,
	body: { name: string; email: string; mobile: string },
) {
	const baseUrl = process.env.TOTALADS_API_URL?.replace(/\/$/, "");
	const secret = process.env.LANDING_LEAD_INGEST_SECRET?.trim();

	if (!baseUrl || !secret || secret.length < 24) {
		throw new Error("Lead capture backend is not configured.");
	}

	const xf = req.headers["x-forwarded-for"];
	const visitorIp =
		(typeof xf === "string" && xf.split(",")[0]?.trim()) || req.socket.remoteAddress;

	const upstream = await fetch(`${baseUrl}/public/checklist-leads`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Landing-Ingest-Secret": secret,
			...(visitorIp ? { "X-Forwarded-For": visitorIp } : {}),
			...(typeof req.headers["user-agent"] === "string"
				? { "User-Agent": req.headers["user-agent"] }
				: {}),
			...(typeof req.headers.referer === "string"
				? { Referer: req.headers.referer }
				: {}),
		},
		body: JSON.stringify({
			name: body.name,
			email: body.email,
			mobile: body.mobile,
			source: "checklist-modal",
		}),
	});

	if (!upstream.ok) {
		throw new Error("Could not save lead.");
	}
}

async function sendViaSmtp(
	params: { email: string; html: string; text: string; attachmentBuffer: Buffer },
) {
	const host = process.env.SMTP_HOST;
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	if (!host || !user || !pass) {
		throw new Error("SMTP is not configured.");
	}
	const from = process.env.SMTP_FROM || `LeadSnipper <${user}>`;

	const port = Number(process.env.SMTP_PORT || "587");
	const secure =
		process.env.SMTP_SECURE === "true" ||
		process.env.SMTP_SECURE === "1" ||
		port === 465;

	const transporter = nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});

	await transporter.sendMail({
		from,
		to: params.email,
		replyTo: from,
		subject: "Your Cold Email Deliverability Checklist — LeadSnipper",
		html: params.html,
		text: params.text,
		attachments: [
			{
				filename: "LeadSnipper_Deliverability_Checklist_v2.pdf",
				content: params.attachmentBuffer,
			},
		],
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<OkBody | ErrBody>,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ ok: false, error: "Method not allowed" });
	}

	const body = req.body as Record<string, unknown>;
	const name = typeof body.name === "string" ? body.name.trim() : "";
	const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
	const mobile = typeof body.mobile === "string" ? body.mobile.trim() : "";

	if (!name) {
		return res.status(400).json({ ok: false, error: "Full name is required." });
	}
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return res.status(400).json({ ok: false, error: "Valid work email is required." });
	}

	try {
		await saveLeadInBackend(req, { name, email, mobile });

		const pdfPath = path.join(
			process.cwd(),
			"public",
			"LeadSnipper_Deliverability_Checklist_v2.pdf",
		);
		const attachmentBuffer = await fs.readFile(pdfPath);

		const html = emailHtml(name);
		const text = emailText(name);

		await sendViaSmtp({
			email,
			html,
			text,
			attachmentBuffer,
		});

		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error("[send-checklist] failure", error);
		return res
			.status(500)
			.json({ ok: false, error: "Something went wrong. Please try again." });
	}
}
