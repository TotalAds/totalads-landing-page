import Link from "next/link";
import React from "react";

export default function DataUse() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "4rem 1.25rem",
        color: "#e5e7eb",
      }}
    >
      <h1
        style={{
          marginBottom: 12,
          fontSize: 18,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        Data Use & Web Respect
      </h1>
      <p style={{ marginBottom: 8, fontSize: 14 }}>
        We access and process only publicly available information.
      </p>
      <p style={{ marginBottom: 8, fontSize: 14 }}>
        We respect website terms and robots.txt directives and do not bypass
        paywalls, authentication, or other access controls. Our service does not
        target sensitive or proprietary content.
      </p>
      <p style={{ marginBottom: 8, fontSize: 14 }}>
        If we receive a request regarding content removal or access concerns, we
        will promptly review and take appropriate action. Users are responsible
        for complying with applicable laws and site policies.
      </p>
      <p style={{ marginBottom: 8, fontSize: 14 }}>
        For takedown or access concerns, contact us at
        <a
          href="mailto:support@leadsnipper.com"
          style={{ marginLeft: 4, textDecoration: "underline" }}
        >
          support@leadsnipper.com
        </a>
        . See our{" "}
        <Link href="/privacy-policy" style={{ textDecoration: "underline" }}>
          Privacy Policy
        </Link>
        and
        <Link href="/terms-of-service">
          <a style={{ marginLeft: 4, textDecoration: "underline" }}>
            Terms of Service
          </a>
        </Link>
        . .
      </p>
      <p style={{ fontSize: 12, color: "#94a3b8" }}>
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>
    </main>
  );
}
