/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6448',
        secondary: '#1E1E3A',
        background: '#141527',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}