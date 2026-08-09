/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./r6a.html','./r6b.html'],
  theme: {
    extend: {
      colors: {
        paper: '#faf7f2',
        ink: '#221e19',
        muted: '#5f584d',
        rule: '#e8e1d5',
        accent: {
          DEFAULT: '#38684a',
          deep: '#2b5039',
          underline: '#b9cfc1',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        column: '44rem',
      },
    },
  },
  plugins: [],
}
