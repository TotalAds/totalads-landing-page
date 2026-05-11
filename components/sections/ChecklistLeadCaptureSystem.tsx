"use client";

import React, { useEffect, useMemo, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

const DISMISS_KEY = "ls_checklist_bar_dismissed_until";
const EXIT_INTENT_KEY = "ls_exit_intent_fired";

export default function ChecklistLeadCaptureSystem() {
	const [showBar, setShowBar] = useState(false);
	const [barDismissed, setBarDismissed] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [submitState, setSubmitState] = useState<SubmitState>("idle");

	const submitError =
		submitState === "error"
			? "Something went wrong. Please try again."
			: "";

	const allowBarByStorage = useMemo(() => {
		if (typeof window === "undefined") return true;
		const raw = window.localStorage.getItem(DISMISS_KEY);
		if (!raw) return true;
		const until = Number(raw);
		if (!Number.isFinite(until)) return true;
		return Date.now() > until;
	}, []);

	useEffect(() => {
		if (!allowBarByStorage) {
			setBarDismissed(true);
		}
	}, [allowBarByStorage]);

	useEffect(() => {
		function onScroll() {
			if (barDismissed) return;
			const root = document.documentElement;
			const totalScrollable = root.scrollHeight - window.innerHeight;
			if (totalScrollable <= 0) return;
			const ratio = window.scrollY / totalScrollable;
			if (ratio >= 0.7) {
				setShowBar(true);
			}
		}

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [barDismissed]);

	useEffect(() => {
		function onMouseLeave(ev: MouseEvent) {
			if (modalOpen) return;
			const alreadyFired = window.sessionStorage.getItem(EXIT_INTENT_KEY);
			if (alreadyFired === "1") return;
			if (ev.clientY <= 10) {
				window.sessionStorage.setItem(EXIT_INTENT_KEY, "1");
				setModalOpen(true);
			}
		}

		document.addEventListener("mouseleave", onMouseLeave);
		return () => document.removeEventListener("mouseleave", onMouseLeave);
	}, [modalOpen]);

	function dismissBar() {
		setShowBar(false);
		setBarDismissed(true);
		const until = Date.now() + 24 * 60 * 60 * 1000;
		window.localStorage.setItem(DISMISS_KEY, String(until));
	}

	function openModal() {
		setSubmitState("idle");
		setModalOpen(true);
	}

	function closeModal() {
		if (submitState === "loading") return;
		setModalOpen(false);
	}

	async function submitChecklistForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitState("loading");

		try {
			const res = await fetch("/api/send-checklist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: fullName.trim(),
					email: email.trim().toLowerCase(),
					mobile: mobile.trim(),
				}),
			});

			const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
			if (!res.ok || !data.ok) {
				setSubmitState("error");
				return;
			}

			setSubmitState("success");
		} catch {
			setSubmitState("error");
		}
	}

	return (
		<>
			{showBar && !barDismissed && (
				<div className="fixed bottom-0 left-0 z-40 w-full bg-[#0F1F3D] text-white shadow-2xl">
					<div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
						<button
							type="button"
							onClick={openModal}
							className="text-left text-sm font-medium text-white hover:text-[#dbeafe]"
						>
							Before you go - grab the free Cold Email Deliverability Checklist -&gt;
						</button>
						<button
							type="button"
							onClick={openModal}
							className="rounded-md bg-[#3B82F6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563eb]"
						>
							Get Free Checklist
						</button>
						<button
							type="button"
							onClick={dismissBar}
							className="absolute right-2 top-2 text-white/80 hover:text-white"
							aria-label="Dismiss sticky checklist bar"
						>
							×
						</button>
					</div>
				</div>
			)}

			{modalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
					onClick={closeModal}
				>
					<div
						className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							onClick={closeModal}
							className="absolute right-4 top-3 text-2xl text-[#64748b] hover:text-[#1e293b]"
							aria-label="Close checklist modal"
						>
							×
						</button>

						<h3 className="text-2xl font-bold text-[#1e293b]">
							Wait - don&apos;t leave without this
						</h3>
						<p className="mt-2 text-sm text-[#475569]">
							The Cold Email Deliverability Checklist is free. 33 items. Takes 20
							minutes.
						</p>

						{submitState === "success" ? (
							<p className="mt-6 rounded-md bg-[#f0fdf4] px-4 py-3 text-sm font-medium text-[#15803d]">
								Check your inbox! The checklist is on its way.
							</p>
						) : (
							<form onSubmit={submitChecklistForm} className="mt-5 space-y-4">
								<div>
									<label
										htmlFor="checklist-name"
										className="mb-1 block text-sm font-medium text-[#1e293b]"
									>
										Full Name
									</label>
									<input
										id="checklist-name"
										type="text"
										required
										value={fullName}
										onChange={(e) => setFullName(e.target.value)}
										className="w-full rounded-md border border-[#cbd5e1] px-3 py-2.5 text-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/25"
									/>
								</div>
								<div>
									<label
										htmlFor="checklist-email"
										className="mb-1 block text-sm font-medium text-[#1e293b]"
									>
										Work Email
									</label>
									<input
										id="checklist-email"
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full rounded-md border border-[#cbd5e1] px-3 py-2.5 text-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/25"
									/>
								</div>
								<div>
									<label
										htmlFor="checklist-mobile"
										className="mb-1 block text-sm font-medium text-[#1e293b]"
									>
										Mobile (optional)
									</label>
									<input
										id="checklist-mobile"
										type="tel"
										value={mobile}
										onChange={(e) => setMobile(e.target.value)}
										className="w-full rounded-md border border-[#cbd5e1] px-3 py-2.5 text-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/25"
									/>
								</div>

								<p className="text-xs text-[#94a3b8]">
									We&apos;ll send the checklist straight to your inbox. No spam,
									ever.
								</p>

								{submitState === "error" && (
									<p className="text-sm text-[#dc2626]">{submitError}</p>
								)}

								<button
									type="submit"
									disabled={submitState === "loading"}
									className="inline-flex w-full items-center justify-center rounded-md bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white hover:bg-[#2563eb] disabled:opacity-70"
								>
									{submitState === "loading" ? (
										<span className="inline-flex items-center gap-2">
											<span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
											Sending...
										</span>
									) : (
										"Get Free Checklist"
									)}
								</button>
							</form>
						)}
					</div>
				</div>
			)}
		</>
	);
}
