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
          DEFAULT: "#eb857a",
          100: "#eb857a",
          200: "#f4cdc1",
          300: "#9DD0c7",
        },
        accent: {
          DEFAULT: "#9DD0c7",
          100: "#9DD0c7",
          200: "#f4cdc1",
        },
        text: {
          DEFAULT: "#131313",
          100: "#131313",
          200: "#4a4a4a",
        },
        bg: {
          DEFAULT: "#fafafa",
          100: "#fafafa",
          200: "#f0f0f0",
          300: "#ffffff",
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
