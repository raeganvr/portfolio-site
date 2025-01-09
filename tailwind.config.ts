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
        twinkle: "move-twinkle 200s linear infinite",
      },
      keyframes: {
        "move-twinkle": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-10000px 5000px" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
