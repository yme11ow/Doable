/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/views/**/*.erb',
    'app/components/**/*.erb',
    'app/javascript/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}