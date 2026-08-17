import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark boardroom base — no neon, desaturated jewel accents
        base: {
          900: "#08090D",
          800: "#0A0B0F",
          700: "#0E1016",
          600: "#12141C",
        },
        ink: {
          DEFAULT: "#E7E9EE",
          muted: "#8A90A2",
          faint: "#5A607280",
        },
        accent: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          teal: "#2DD4BF",
          amber: "#F0B429",
          rose: "#F43F6E",
          sky: "#38BDF8",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          strong: "rgba(255,255,255,0.06)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        "2xl": "1.15rem",
        "3xl": "1.6rem",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px -12px rgba(0,0,0,0.6)",
        float: "0 20px 60px -22px rgba(0,0,0,0.75)",
        glow: "0 0 0 1px rgba(99,102,241,0.18), 0 8px 40px -12px rgba(99,102,241,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 14s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
