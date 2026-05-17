import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch-inspired light theme tokens
        primary: {
          DEFAULT: "#0058be",
          hover: "#2170e4",
          light: "rgba(0, 88, 190, 0.08)",
          glow: "rgba(0, 88, 190, 0.05)",
          border: "rgba(0, 88, 190, 0.20)",
        },
        surface: {
          DEFAULT: "#faf8ff",
          card: "#ffffff",
          raised: "#f2f3ff",
          muted: "#eaedff",
          highest: "#dae2fd",
        },
        on: {
          surface: "#131b2e",
          "surface-variant": "#424754",
        },
        outline: {
          DEFAULT: "#727785",
          variant: "#c2c6d6",
        },
        // Semantic colors
        amber: {
          DEFAULT: "#b75b00",
          light: "rgba(183, 91, 0, 0.08)",
        },
        error: {
          DEFAULT: "#ba1a1a",
          light: "rgba(186, 26, 26, 0.06)",
        },
        success: {
          DEFAULT: "#10b981",
          light: "rgba(16, 185, 129, 0.08)",
        },
        purple: "#8b5cf6",
        // Legacy compatibility
        brand: {
          DEFAULT: "#0058be",
          blue: "#0058be",
        },
      },
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "clamp(56px, 8vw, 86px)",
          { lineHeight: "1.05", fontWeight: "400" },
        ],
        "display-lg": [
          "clamp(48px, 6.5vw, 78px)",
          {
            lineHeight: "1.08",
            letterSpacing: "-0.04em",
            fontWeight: "800",
          },
        ],
        "headline-lg": [
          "clamp(36px, 4.5vw, 52px)",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "28px", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "24px", fontWeight: "400" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", fontWeight: "500" },
        ],
        "label-mono": [
          "12px",
          {
            lineHeight: "1.0",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],
      },
      spacing: {
        "container-max": "1200px",
        gutter: "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
      },
      maxWidth: {
        container: "1200px",
        content: "640px",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        gradient: "gradient-shift 3s ease infinite",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 88, 190, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 88, 190, 0.4)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(rgba(0, 88, 190, 0.08) 1px, transparent 1px)",
        "grid-small":
          'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'8\' height=\'8\' fill=\'none\' stroke=\'%23e2e8f0\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
      },
    },
  },
  plugins: [],
};

export default config;
