/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: '#343334',
      secondary: '#03fe86',
      tertiary: '#ff6128',
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink, 
    },
    fontFamily: {
      'spartan': ['"League Spartan"', 'sans-serif'],
    }
  },
  plugins: [],
}