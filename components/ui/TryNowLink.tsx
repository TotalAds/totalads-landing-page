import Link from "next/link";
import React from "react";

const TRIAL_URL = "https://app.leadsnipper.com/signup?product=leadsnipper";

export function TryNowLink() {
  return (
    <Link href={TRIAL_URL} className="btn-primary !text-sm !py-2 !px-4 rounded-full">
      Try now
    </Link>
  );
}
