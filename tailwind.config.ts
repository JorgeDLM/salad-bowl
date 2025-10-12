import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          wine: '#7A3D36',
          terra: '#C86B5B',
          'terra-600': '#A25046',
        },
        paper: '#F2E7DE',
        cream: '#F7F1EA',
        ink: '#3C2C29',
        muted: '#E8DCD1',
        border: '#E5D3C5',
        gold: '#C2A27E',
        sage: '#C9D4CC',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
