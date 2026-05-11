export const USD_TO_INR = 96;

export type DisplayCurrency = "INR" | "USD";

export function detectDisplayCurrency(): DisplayCurrency {
  if (typeof window === "undefined") return "INR";

  const languages = navigator.languages ?? [navigator.language];
  const isIndiaLanguage = languages.some((lang) => lang.toUpperCase().endsWith("-IN"));
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  const isIndiaTimeZone = timeZone.includes("Asia/Kolkata");

  return isIndiaLanguage || isIndiaTimeZone ? "INR" : "USD";
}

export function inrToUsd(inr: number): number {
  return inr / USD_TO_INR;
}

export function usdToInr(usd: number): number {
  return usd * USD_TO_INR;
}

export function formatInr(inr: number): string {
  return `₹${Math.max(0, Math.round(inr)).toLocaleString("en-IN")}`;
}

export function formatUsd(usd: number): string {
  return `$${Math.max(0, Number(usd.toFixed(2))).toLocaleString("en-US")}`;
}
