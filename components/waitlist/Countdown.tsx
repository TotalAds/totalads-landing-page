"use client";

import { useEffect, useMemo, useState } from "react";

function diffTo(now: Date, target: Date) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export default function Countdown({ target }: { target: Date }) {
  const [now, setNow] = useState(new Date());
  const remaining = useMemo(() => diffTo(now, target), [now, target]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000); // minute-level
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-gray-300 text-sm">
      Launching in {remaining.days}d {remaining.hours}h {remaining.minutes}m
    </div>
  );
}

