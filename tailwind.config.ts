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
        // Primary colors - aligned with totalads-frontend
        primary: {
          DEFAULT: "#3b82f6",
          100: "#3b82f6",
          200: "#60a5fa",
          300: "#22c55e",
        },
        // Accent colors
        accent: {
          DEFAULT: "#22c55e",
          100: "#22c55e",
          200: "#16a34a",
        },
        // Text colors - professional slate palette
        text: {
          DEFAULT: "#1e293b",
          100: "#1e293b",
          200: "#475569",
          300: "#64748b",
        },
        // Background colors - clean light theme
        bg: {
          DEFAULT: "#f8fafc",
          100: "#f8fafc",
          200: "#ffffff",
          300: "#f1f5f9",
        },
        // Semantic colors
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        // Brand colors for consistency
        brand: {
          DEFAULT: "#3b82f6",
          main: "#3b82f6",
          secondary: "#60a5fa",
          tertiary: "#22c55e",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        gradient: "gradient-shift 3s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "grid-small":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='%23e2e8f0'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [],
};

export default config;
