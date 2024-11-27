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
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
      },
      colors: {
        'ibm-blue': '#006699', // Define IBM blue
        'nice-blue': '#4A90E2',
        'charcoal': '#36454F',
        'mcd-yellow': '#FFC72C',
        'white-smoke': '#f5f5f5',
      },

    },
  },
  
  plugins: [],
};
export default config;
