/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c4b50",
        secondary: "#f1754d",
        tertiary: "#e7e7ea",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
