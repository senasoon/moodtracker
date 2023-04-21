/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        line: '#dcdcdc',
        buttonBackgroundColor: '#e7e7e7',
        buttonFontColor: '#c8c8c8',
      },
    },
  },
  plugins: [],
};
