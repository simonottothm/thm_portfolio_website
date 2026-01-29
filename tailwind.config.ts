import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1C2E",
          700: "#11263D",
          600: "#1A2F47",
          500: "#23405A",
        },
        accent: {
          start: "#0B66FF",
          end: "#6B9CFF",
          light: "#8BB5FF",
          lighter: "#A8C7FF",
        },
        muted: {
          900: "#0E1116",
          700: "#1C2330",
        },
        border: "#E6E8EC",
        bg: "#0A0F17",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%)",
          },
          "33%": {
            transform: "translateX(30%) translateY(30%)",
          },
          "66%": {
            transform: "translateX(-20%) translateY(20%)",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%)",
          },
          "50%": {
            transform: "translateX(-25%) translateY(-25%)",
          },
        },
        "glow": {
          "0%, 100%": {
            opacity: "0.5",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "button-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(11, 102, 255, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(11, 102, 255, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "gradient-x": "gradient-x 20s ease infinite",
        "gradient-y": "gradient-y 25s ease infinite",
        "glow": "glow 3s ease-in-out infinite",
        "button-pulse": "button-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
