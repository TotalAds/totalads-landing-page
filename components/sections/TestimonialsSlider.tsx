import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function TestimonialsSlider() {
	const testimonials = [
		{
			quote:
				"We were doing 45% opens on a shared pool until the pool got flagged overnight — opens crashed to 6% with zero copy changes. We switched to LeadSnipper with BYO SES, now we're back to 42% opens and the domain is ours.",
			author: "Arjun Mehta",
			role: "Founder, Growth Agency",
			metric: "Opens: 6% → 42% after switching",
		},
		{
			quote:
				"We were doing ₹15k/mo across a sender, warmup, verifier, and spreadsheets. We switched to LeadSnipper, now one stack at ₹4.2k for the same 35k sends/month.",
			author: "Priya Sharma",
			role: "SDR Team Lead, 200-person SaaS",
			metric: "₹15k/mo → ₹4.2k/mo (4 tools → 1)",
		},
		{
			quote:
				"We were doing bulk sends with no verification — bounces spiked to 15% in the first hour and the domain burned. We switched to LeadSnipper with inline verification, now bounces stay at 1.2% on 10k-send batches.",
			author: "David Park",
			role: "CEO, Outbound Agency (8 clients)",
			metric: "Bounce rate: 15% → 1.2%",
		},
		{
			quote:
				"We were doing 40 minutes every morning across MXToolbox, Postmaster, and our ESP just to greenlight sends. We switched to LeadSnipper's domain health dashboard, now it's a 2-minute check — complaint rate held at 0.02%.",
			author: "Sarah Chen",
			role: "Head of Sales, B2B SaaS",
			metric: "40 min → 2 min daily checks",
		},
		{
			quote:
				"We were doing 2k emails/month safely but couldn't scale without risking the domain. We switched to LeadSnipper, now we're at 25k/month with AI warmup and zero blacklist events in 6 months.",
			author: "Rahul Kapoor",
			role: "VP Sales, Revenue Agency",
			metric: "2k → 25k emails/mo, 0 incidents",
		},
		{
			quote:
				"We were doing 2.1% reply rates on a 'warmed' shared domain. We switched to LeadSnipper and moved to our own SES, now the same sequences pull 6.8% replies.",
			author: "Elena Vasquez",
			role: "Head of Growth, B2B analytics",
			metric: "Reply rate: 2.1% → 6.8%",
		},
		{
			quote:
				"We were doing CSV exports into a third-party verifier and still seeing 7% bounces on cold lists. We switched to LeadSnipper, now hard bounces stay under 0.9% campaign over campaign.",
			author: "Marcus Webb",
			role: "Founder, outbound agency (12 SDRs)",
			metric: "Bounces: 7% → 0.9%",
		},
		{
			quote:
				"We were doing 18% opens after a reputation hit on a shared ESP. We switched to LeadSnipper and routed through our SES with health monitoring, now opens recovered to 34% with identical copy.",
			author: "Kim Okoro",
			role: "Revenue Lead, HR-tech SaaS",
			metric: "Opens: 18% → 34%",
		},
		{
			quote:
				"We were doing ad-hoc MX checks before every launch and still got surprised pauses twice a quarter. We switched to LeadSnipper, now proactive alerts — last 2 quarters had zero unplanned stops.",
			author: "James Liu",
			role: "Director of Demand Gen, Series B",
			metric: "2 surprise pauses/qtr → 0",
		},
	];

	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((current + 1) % testimonials.length);
	const prev = () =>
		setCurrent((current - 1 + testimonials.length) % testimonials.length);

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f0f0] to-[#ffffff]">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
						Teams Who Stopped Renting Their Deliverability.
					</h2>
					<p className="text-[#475569] text-lg">
						Numbers-only stories: what teams measured before vs. after
						LeadSnipper.
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
							className="bg-white border-2 border-[#f0f0f0] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="flex gap-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="text-2xl text-[#f59e0b]">
										★
									</span>
								))}
							</div>
							<p className="text-xl text-[#1e293b] mb-6 leading-relaxed">
								&quot;{testimonials[current].quote}&quot;
							</p>
							<div className="flex items-center justify-between flex-wrap gap-4">
								<div>
									<p className="font-bold text-[#1e293b]">
										{testimonials[current].author}
									</p>
									<p className="text-[#475569] text-sm">
										{testimonials[current].role}
									</p>
								</div>
								<div className="bg-[#f0fdf4] border border-[#bbf7d0] px-4 py-2 rounded-lg">
									<p className="text-[#16a34a] font-bold text-sm">
										{testimonials[current].metric}
									</p>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="flex justify-center gap-4 mt-8">
						<button
							type="button"
							onClick={prev}
							className="p-3 bg-[#f0f0f0] hover:bg-[#3b82f6] text-[#1e293b] hover:text-white rounded-lg transition"
						>
							←
						</button>
						<div className="flex gap-2 items-center">
							{testimonials.map((_, i) => (
								<button
									type="button"
									key={i}
									onClick={() => setCurrent(i)}
									className={`h-2 rounded-full transition-all duration-300 ${
										i === current ? "bg-[#3b82f6] w-8" : "bg-[#e0e0e0] w-2"
									}`}
								/>
							))}
						</div>
						<button
							type="button"
							onClick={next}
							className="p-3 bg-[#f0f0f0] hover:bg-[#3b82f6] text-[#1e293b] hover:text-white rounded-lg transition"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
