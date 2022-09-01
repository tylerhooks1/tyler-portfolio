/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfiar Display', 'serif'],
        Roboto: ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
