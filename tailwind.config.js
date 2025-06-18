/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkRed: '#80001c',
          customGray: '#3c3c43',
        },
      },
    },
  },
  plugins: [],
}