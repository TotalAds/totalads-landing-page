import "@/styles/globals.css";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Ensure new pages are visible immediately after navigation
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }

    const handleDone = () => {
      // Force scroll to top on route/hash change complete
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    router.events.on("routeChangeComplete", handleDone);
    router.events.on("hashChangeComplete", handleDone);
    return () => {
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("hashChangeComplete", handleDone);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      {/* subtle footer link */}
      <div
        style={{
          position: "fixed",
          bottom: 8,
          right: 12,
          fontSize: 10,
          opacity: 0.6,
        }}
      >
        <Link href="/legal/data-use" style={{ color: "inherit" }}>
          Data use
        </Link>
      </div>
    </>
  );
}
