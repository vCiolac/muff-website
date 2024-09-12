import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        border: "#384261",
        transparent: 'transparent',
        background: "#2C2231",
        primary: "#008080",
        secondary: "#0a5c5c",
        tertiary: "#025D8A",
        quaternary: "#027588",
        quinary: "#463620",
      },
      rotate: {
        270: '270deg',
      },
      scale: {
        '130': '1.30',
        '150': '1.50',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
