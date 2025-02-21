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
        supHeading: "clamp(40px,11vw,170px)",
        heading: "clamp(36px,6vw,80px)",
        subHeading: "clamp(19px,5vw,80px)",
        title: "clamp(28px,5vw,60px)",
        paragraph: "clamp(18px, 2vw, 27px)",
        button: "clamp(15px,2vw,19px)"
      },
      fontWeight: {
        heavy: "900"
      },
    },
  },
  plugins: [],
} satisfies Config;
