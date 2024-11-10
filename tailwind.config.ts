import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      colors: {
        accent: '#08E95E',
        customGray: '#c5c5c5',  
        tagBlue: '#0abde3',
        tagPurple: '#a55eea',
        tagPink: '#ff5571',
        tagYellow: '#deef26',
      },
    },
  },
  plugins: [],
};

export default config;
