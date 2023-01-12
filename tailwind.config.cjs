/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Inter"],
        },
    },
  },
  plugins: [],
}
