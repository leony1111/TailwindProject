/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    '.templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {

    extend: {
      colors: {
        'bubble-gum': '#FF3023',
        'bermuda': '#FF4438',
      },
    },
  },
  plugins: [],
}

