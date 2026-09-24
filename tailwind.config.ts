import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060a12",
          900: "#0a0f1a",
          800: "#0e1525",
          700: "#141e35",
          600: "#1c2b4a",
        },
        sky: {
          DEFAULT: "#87ceeb",
          dim: "rgba(135,206,235,0.16)",
          faint: "rgba(135,206,235,0.07)",
          bright: "#a5e0f7",
        },
        gold: {
          DEFAULT: "#d4a843",
          bright: "#e8c267",
          dim: "rgba(212,168,67,0.22)",
          faint: "rgba(212,168,67,0.08)",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
