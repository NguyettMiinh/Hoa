/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGrayGreen: '#3d574e',
          grayGreen: '#4c6f60',
          darkGreen: '#1f342d',
          customGray: '#3c3c43',
          lightGray: '#6b967f'
        },
      },
    },
  },
  plugins: [],
}