import type { NextApiRequest, NextApiResponse } from "next";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type OkBody = { ok: true };
type ErrBody = { ok: false; error: string };

function unwrapApiPayload(body: unknown): unknown {
	if (
		body &&
		typeof body === "object" &&
		"payload" in body &&
		(body as { payload: unknown }).payload !== undefined
	) {
		return (body as { payload: unknown }).payload;
	}
	return body;
}

function extractUpstreamError(raw: unknown): string {
	const payload = unwrapApiPayload(raw);
	if (payload && typeof payload === "object") {
		const p = payload as Record<string, unknown>;
		if (typeof p.message === "string" && p.message.length > 0) {
			return p.message;
		}
		if (typeof p.error === "string" && p.error.length > 0) {
			return p.error;
		}
	}
	if (
		raw &&
		typeof raw === "object" &&
		typeof (raw as { message?: unknown }).message === "string"
	) {
		return (raw as { message: string }).message;
	}
	return "Something went wrong. Try again.";
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<OkBody | ErrBody>,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ ok: false, error: "Method not allowed" });
	}

	const baseUrl = process.env.TOTALADS_API_URL?.replace(/\/$/, "");
	const secret = process.env.LANDING_LEAD_INGEST_SECRET?.trim();

	if (!baseUrl || !secret || secret.length < 24) {
		console.error(
			"[landing-lead] TOTALADS_API_URL or LANDING_LEAD_INGEST_SECRET not configured",
		);
		return res.status(503).json({
			ok: false,
			error: "Lead capture is temporarily unavailable.",
		});
	}

	const body = req.body as Record<string, unknown>;
	const email =
		typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
	const source =
		typeof body.source === "string" ? body.source.trim().slice(0, 64) : "hero";
	const companyWebsite =
		typeof body.companyWebsite === "string" ? body.companyWebsite : "";

	if (!email || !EMAIL_RE.test(email)) {
		return res.status(400).json({ ok: false, error: "Valid work email required" });
	}

	const xf = req.headers["x-forwarded-for"];
	const visitorIp =
		(typeof xf === "string" && xf.split(",")[0]?.trim()) || req.socket.remoteAddress;

	try {
		const upstream = await fetch(`${baseUrl}/public/landing-leads`, {
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
				email,
				source: source || "hero",
				companyWebsite,
			}),
		});

		const raw = await upstream.json().catch(() => ({}));

		if (!upstream.ok) {
			const msg = extractUpstreamError(raw);
			const status =
				upstream.status >= 400 && upstream.status < 600
					? upstream.status
					: 502;
			return res.status(status).json({ ok: false, error: msg });
		}

		return res.status(200).json({ ok: true });
	} catch (e) {
		console.error("[landing-lead] upstream error", e);
		return res.status(502).json({
			ok: false,
			error: "Could not reach signup service. Try again later.",
		});
	}
}
