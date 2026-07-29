import { Calculator } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogSendingLimitCTA() {
  return (
    <div className="my-8 p-6 rounded-xl border-2 border-[#0058be]/20 bg-[#0058be]/[0.03]">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0058be] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-[17px] text-[#131b2e] mb-2">
            Find how many emails you can send today
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed mb-3">
            Tell us your domain age and warmup stage. Get a safe daily number
            and a simple week-by-week plan so you do not get blocked.
          </p>
          <Link
            href="/tools/cold-email-sending-limit-calculator"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#0058be] hover:text-[#2170e4] transition-colors"
          >
            Try the free Sending Limit Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
