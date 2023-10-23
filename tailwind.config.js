/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '129': '23rem',
        '130': '-0',
        '131': '240vh',
        '132': '3rem',
        '133': '72rem'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green-1': "#007930",
      'red-1': '#F52525',
      'black-1': '#3F3F44',
      'blue-1':'#2563eb',
       'black-2': '#1e293b',
       'gray-1': '#F7F7F7',
       'blue-2': '#101928',
       'light-black': '#3F3F44',
       'gray-3': '#7e7e82',
       'gray-4': '#bfbdbd',

    },
  },
  plugins: [],
}

