/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '380px', // Nuevo breakpoint personalizado
      },
      fontFamily: {
        'fuenteSpace': ['Space Mono']
      },
    },
  },
  plugins: [],
}

