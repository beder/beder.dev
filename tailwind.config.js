/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        paper: '#232120',
        ink: '#ece7df',
        muted: '#a8a196',
        rule: '#3a3733',
        accent: {
          DEFAULT: '#4caf50',
          soft: '#3d8f40',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        column: '44rem',
      },
    },
  },
  plugins: [],
}
