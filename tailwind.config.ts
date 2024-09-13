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
        secondary: "#5A110C",
      },
      rotate: {
        270: '270deg',
      },
      scale: {
        '80' : '0.8',
        '130': '1.30',
        '150': '1.50',
      },
      fontFamily: {
        'storm': ['storm', 'sans-serif'],
        'dungeon': ['dungeon', 'sans-serif'],
        'toxType': ['toxType', 'sans-serif'],
        'cloister': ['cloister', 'sans-serif'],
        'angel': ['angel', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
