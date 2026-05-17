import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function TestimonialsSlider() {
	const testimonials = [
		{
			quote:
				"We were doing 45% opens on a shared pool until the pool got flagged overnight — opens crashed to 6% with zero copy changes. We switched to LeadSnipper with BYO SES, now we're back to 42% opens and the domain is ours.",
			author: "Arjun Mehta",
			role: "Founder, Growth Agency",
			metric: "Opens: 6% → 42%",
		},
		{
			quote:
				"We were doing ₹15k/mo across a sender, warmup, verifier, and spreadsheets. We switched to LeadSnipper, now one stack at ₹4.2k for the same 35k sends/month.",
			author: "Priya Sharma",
			role: "SDR Team Lead, 200-person SaaS",
			metric: "₹15k → ₹4.2k/mo",
		},
		{
			quote:
				"We were doing bulk sends with no verification — bounces spiked to 15% in the first hour and the domain burned. Now bounces stay at 1.2% on 10k-send batches.",
			author: "David Park",
			role: "CEO, Outbound Agency (8 clients)",
			metric: "Bounces: 15% → 1.2%",
		},
		{
			quote:
				"We were doing 40 minutes every morning across MXToolbox, Postmaster, and our ESP just to greenlight sends. Now it's a 2-minute check.",
			author: "Sarah Chen",
			role: "Head of Sales, B2B SaaS",
			metric: "40 min → 2 min daily",
		},
		{
			quote:
				"We were doing 2k emails/month safely but couldn't scale without risking the domain. Now we're at 25k/month with AI warmup and zero blacklist events.",
			author: "Rahul Kapoor",
			role: "VP Sales, Revenue Agency",
			metric: "2k → 25k emails/mo",
		},
	];

	const [current, setCurrent] = useState(0);
	const next = () => setCurrent((current + 1) % testimonials.length);
	const prev = () =>
		setCurrent((current - 1 + testimonials.length) % testimonials.length);

	return (
		<section className="py-24 px-4 sm:px-6 lg:px-8 section-blue border-t border-[#c2c6d6]/20">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="section-tag justify-center mb-6">Social Proof</span>
					<h2 className="font-heading font-bold text-headline-lg text-[#131b2e] mt-6 mb-4">
						Teams who stopped
						<br />
						<span className="font-display italic text-[#0058be]">renting their deliverability.</span>
					</h2>
					<p className="text-body-md text-[#727785]">
						Numbers-only stories: what teams measured before vs. after LeadSnipper.
					</p>
				</motion.div>

				<div className="relative max-w-3xl mx-auto">
					<AnimatePresence mode="wait">
						<motion.div
							key={current}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className="glass-card rounded-3xl p-8 md:p-12 border border-[#c2c6d6]/20"
						>
							{/* Quote mark */}
							<div className="text-6xl text-[#0058be]/15 font-display leading-none mb-4">&ldquo;</div>
							<p className="text-lg text-[#131b2e] mb-8 leading-relaxed font-body">
								{testimonials[current].quote}
							</p>
							<div className="flex items-center justify-between flex-wrap gap-4">
								<div className="flex items-center gap-3">
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-heading font-bold text-white"
										style={{
											background: "linear-gradient(135deg, #0058be, #2170e4)",
										}}
									>
										{testimonials[current].author
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div>
										<p className="font-heading font-bold text-sm text-[#131b2e]">
											{testimonials[current].author}
										</p>
										<p className="text-xs text-[#727785]">
											{testimonials[current].role}
										</p>
									</div>
								</div>
								<span className="result-badge font-semibold">
									{testimonials[current].metric}
								</span>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="flex justify-center gap-4 mt-8 items-center">
						<button
							type="button"
							onClick={prev}
							className="w-10 h-10 rounded-full border border-[#c2c6d6]/30 flex items-center justify-center text-[#131b2e] hover:bg-[#0058be] hover:text-white hover:border-[#0058be] transition-all text-sm"
						>
							←
						</button>
						<div className="flex gap-1.5 items-center">
							{testimonials.map((_, i) => (
								<button
									type="button"
									key={i}
									onClick={() => setCurrent(i)}
									className={`h-2 rounded-full transition-all duration-300 ${
										i === current
											? "bg-[#0058be] w-6"
											: "bg-[#c2c6d6] w-2 hover:bg-[#727785]"
									}`}
								/>
							))}
						</div>
						<button
							type="button"
							onClick={next}
							className="w-10 h-10 rounded-full border border-[#c2c6d6]/30 flex items-center justify-center text-[#131b2e] hover:bg-[#0058be] hover:text-white hover:border-[#0058be] transition-all text-sm"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
