/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chaos: {
          50: '#F3F3F3',
          100: '#E4E4E4',
          200: '#D5D5D5',
          300: '#B7B7B7',
          400: '#8A8A8A',
          500: '#6C6C6C',
          600: '#4E4E4E',
          700: '#3F3F3F',
          800: '#212121',
          900: '#121212',
          950: '#0D0D0D',
        },
      }
    },
  },
  plugins: [],
}

