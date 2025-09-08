import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto-style": ["Roboto Condensed", "sans-serif"],
      },
      fontWeight: {
        "Roboto-regular": "400",
        "Roboto-semibold": "700",
        "Roboto-bold": "900",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slide: "slide 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
