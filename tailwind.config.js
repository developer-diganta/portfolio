/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#343334",
      secondary: "#03fe86",
      tertiary: "#ff6128",
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    fontFamily: {
      spartan: ['"League Spartan"', "sans-serif"],
    },
  },
  plugins: [],
};
