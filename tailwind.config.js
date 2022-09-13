/** @type {import('tailwindcss').Config} */

const { colors } = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "#efe8e0",
        color_1: "#70367c",
        color_2: "#95cfd5",
        color_3: "#fd7e50",
        black: "#310e3a",
        debug: "#f87171"
      }
    },
  },
  plugins: [],
  safelist: [
    {pattern: /ring-(color_1|color_2|color_3)/},
    {pattern: /bg-(color_1|color_2|color_3)/}
  ]
}
