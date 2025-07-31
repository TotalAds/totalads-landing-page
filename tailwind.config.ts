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
        primary: {
          DEFAULT: "#25D366",
          100: "#25D366",
          200: "#20B754",
          300: "#1A9444",
        },
        accent: {
          DEFAULT: "#34B7F1",
          100: "#34B7F1",
          200: "#0099CC",
        },
        text: {
          DEFAULT: "#075E54",
          100: "#075E54",
          200: "#128C7E",
        },
        bg: {
          DEFAULT: "#F4F4F4",
          100: "#F4F4F4",
          200: "#EBEBEB",
          300: "#FFFFFF",
        },
        success: "#0be881",
        warning: "#ffd32a",
        error: "#ff3f34",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 211, 102, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(37, 211, 102, 0.6)" },
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
