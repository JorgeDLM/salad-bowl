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
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Paleta principal Salad Bowl - Verdes
        'sb-green': {
          50: '#F0F8F3',    // muy claro
          100: '#D9F0E3',   // claro
          200: '#B3E1C7',   // claro medio
          300: '#8DD2AB',   // medio claro
          400: '#BFD96A',   // lima claro (logo)
          500: '#7BC96F',   // verde medio
          600: '#5FB663',   // verde medio-oscuro
          700: '#0f4f44',   // forest/teal oscuro (principal)
          800: '#0A3A32',   // muy oscuro
          900: '#062721',   // casi negro
        },
        // Paleta secundaria - Teals
        'sb-teal': {
          50: '#F0FAFA',
          100: '#D9F4F3',
          200: '#A9D8D4',   // teal claro de fondos
          300: '#7DBFB8',
          400: '#51A69D',
          500: '#3A8B82',
          600: '#2D6E68',
          700: '#20524E',
          800: '#163936',
          900: '#0D2422',
        },
        // Neutros cálidos
        'sb-cream': '#F7F8F3',       // fondo neutral claro
        ink: '#1a1a1a',              // texto principal
        
        // Compatibilidad con nombres antiguos
        'sb-green-700': '#0f4f44',
        'sb-green-500': '#BFD96A',
        'sb-teal-200': '#A9D8D4',
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
