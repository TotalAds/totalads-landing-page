import { motion } from "framer-motion";
import React from "react";

/**
 * Press / community trust row — wordmarks only (no third-party logo assets).
 */
export default function FeaturedInBar() {
	const items = [
		{ label: "Product Hunt", href: "https://www.producthunt.com" },
		{ label: "Indie Hackers", href: "https://www.indiehackers.com" },
		{ label: "BetaList", href: "https://betalist.com" },
	];

	const segments = [
		"Outbound agencies",
		"Series A–B SaaS",
		"Founder-led GTM",
	];

	return (
		<section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#fafafa] border-b border-[#e2e8f0]">
			<div className="max-w-7xl mx-auto">
				<p className="text-center text-[#64748b] text-xs font-semibold uppercase tracking-wider mb-6">
					As seen on
				</p>
				<motion.div
					initial={{ opacity: 0, y: 6 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-10"
				>
					{items.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#1e293b] text-sm md:text-base font-semibold hover:text-[#3b82f6] transition-colors"
						>
							{item.label}
						</a>
					))}
				</motion.div>
				<p className="text-center text-[#64748b] text-xs font-semibold uppercase tracking-wider mb-4">
					Built for teams like
				</p>
				<div className="flex flex-wrap justify-center gap-3">
					{segments.map((name) => (
						<span
							key={name}
							className="inline-flex items-center rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#475569] shadow-sm"
						>
							{name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
