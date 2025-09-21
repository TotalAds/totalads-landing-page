import "@/styles/globals.css";

import Link from "next/link";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
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
