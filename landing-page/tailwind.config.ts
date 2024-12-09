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
        'sunset-yellow': '#ffc20a',
        'white-smoke': '#f5f5f5',
        'ruddy-blue': '#78ACEA',
        'jordy-blue': '#A5C8F1',
        'teal': '#00b8b8',
        'royal-purple': '#7552a3',
      },

    },
  },
  
  plugins: [],
};
export default config;
