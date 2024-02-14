/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lobster':['Lobster','sans-serif'],
        'bangers':['Bangers','sans-serif'],
        'montserrat':['Montserrat Alternates', 'sans-serif'],
        'league':['League Spartan', 'sans-serif']
      },
    },
  },
  plugins: [],
}

