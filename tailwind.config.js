/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#EDEDED',
          secondary: '#B2B8AC',
          text: '#232422'
        },
        dark: {
          primary: '#121212',
          secondary: '#393C37',
          text: '#D5DACF'
        }
      },
    },
    fontFamily: {
      gothic: ['var(--font-dotgothic)', 'sans-serif'],
    },
  },
};