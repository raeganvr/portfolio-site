import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url('/images/stars.png')",
        twinkle: "url('/images/twinkling.png')",
      },
      animation: {
        twinkle: "move-twinkle 300s linear infinite",
        glow: "glow 5s infinite",
      },
      keyframes: {
        "move-twinkle": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-10000px 5000px" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px 10px rgba(0, 255, 255, 0.5)" },
          "50%": { boxShadow: "0 0 30px 15px rgba(0, 255, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
