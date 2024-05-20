const colors = require('./src/assets/colors/colos.json');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...colors
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      frank: ["'FrankNew'", 'sans-serif'],
      inter: ["'Inter'", 'sans-serif'],
      dancing: ['"Dancing Script"', 'cursive'],
    },
  },
  plugins: [],
}