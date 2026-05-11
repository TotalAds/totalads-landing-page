"use client";

import Link from "next/link";
import React, { useState } from "react";

export function HeroLeadCapture() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
		"idle",
	);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const signupBaseUrl = "https://app.leadsnipper.com/signup";

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const normalizedEmail = email.trim().toLowerCase();
		setErrorMessage(null);
		setStatus("loading");
		const form = e.currentTarget;
		const fd = new FormData(form);
		const honeypot = String(fd.get("companyWebsite") ?? "");
		try {
			const res = await fetch("/api/landing-lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: normalizedEmail,
					source: "hero",
					companyWebsite: honeypot,
				}),
			});
			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};
			if (!res.ok || !data.ok) {
				setStatus("error");
				setErrorMessage(data.error || "Something went wrong. Try again.");
				return;
			}
			setStatus("success");
			window.location.assign(
				`${signupBaseUrl}?email=${encodeURIComponent(normalizedEmail)}`,
			);
		} catch {
			setStatus("error");
			setErrorMessage("Network error. Check your connection and try again.");
		}
	}

	return (
		<div className="relative w-full max-w-xl mx-auto">
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
				noValidate
			>
				<label htmlFor="hero-email" className="sr-only">
					Work email
				</label>
				<input
					id="hero-email"
					name="email"
					type="email"
					autoComplete="email"
					required
					placeholder="Enter your work email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={status === "loading" || status === "success"}
					className="flex-1 min-w-0 rounded-lg border border-[#cbd5e1] bg-white px-4 py-3.5 text-[#1e293b] placeholder:text-[#94a3b8] shadow-sm focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/25 disabled:opacity-60"
				/>
				{/* Honeypot */}
				<input
					type="text"
					name="companyWebsite"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden
					className="absolute -left-[9999px] h-0 w-0 opacity-0"
				/>
				<button
					type="submit"
					disabled={status === "loading" || status === "success"}
					className="shrink-0 rounded-lg bg-[#3b82f6] px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/25 disabled:opacity-60 whitespace-nowrap"
				>
					{status === "loading"
						? "Sending…"
						: "Get started free →"}
				</button>
			</form>
			<p className="mt-2 text-center text-xs text-[#64748b]">
				1,000 emails free · No credit card · Then continue to full signup
			</p>
			{status === "success" && (
				<p className="mt-3 text-center text-sm font-medium text-[#16a34a]">
					Redirecting you to signup...
				</p>
			)}
			{status === "error" && errorMessage && (
				<p className="mt-3 text-center text-sm text-[#dc2626]" role="alert">
					{errorMessage}
				</p>
			)}
			<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
				<Link
					href={signupBaseUrl}
					className="text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb] underline-offset-4 hover:underline"
				>
					Or go straight to signup →
				</Link>
				<Link
					href="/contact"
					className="text-sm font-medium text-[#64748b] hover:text-[#3b82f6]"
				>
					Talk to us
				</Link>
			</div>
		</div>
	);
}
