import type { Config } from "tailwindcss";

export default {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{mp3,mp4,webm}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        markpro: ["Mark Pro Heavy", "sans-serif"],
        satisfies: ["Satisfy", "sans-serif"],
        ptSans: ["PT Sans Narrow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amita: ["Amita", "sans-serif"]
      },
      fontSize: {
        supHeading: ["clamp(40px, 10vw, 150px)", { lineHeight: "1.1 !important" }],
        heading: ["clamp(38px, 6vw, 90px)", { lineHeight: "1.15 !important" }],
        subHeading: ["clamp(24px, 4.5vw, 70px)", { lineHeight: "1.2 !important" }],
        title: ["clamp(32px, 5vw, 60px)", { lineHeight: "1.3 !important" }],
        paragraph: ["clamp(18px, 2.5vw, 28px)", { lineHeight: "1.5 !important" }],
        button: ["clamp(16px, 2vw, 20px)", { lineHeight: "1.4 !important" }],
        sm: ["16px", { lineHeight: "1.4 !important" }], // text-sm
        base: ["18px", { lineHeight: "1.5 !important" }], // md:text-base
        lg: ["20px", { lineHeight: "1.6 !important" }], // lg:text-lg

      },
      fontWeight: {
        heavy: "900"
      },
    },
  },
  plugins: [],
} satisfies Config;
