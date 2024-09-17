import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily: {
      Archivo: ["Archivo", "sans-serif"],
    },
    extend: {
      colors: {
        "main-white": "#F0F5FD",
        "main-black": "#221919",
        primary: "#F87171",
        "primary-dark": "#18181B",
        'btn':"#312F2F"
      },
    },
  },
  plugins: [],
};

export default config;
