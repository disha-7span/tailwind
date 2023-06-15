const { urlencoded } = require('express')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      'greyblue': '#374B5C',
      'orange': '#FF9100',
      'white': '#ffffff',
      'lightgreen': '#00DBD0',
      'lightyellow': '#F6F5F1'
    },
    fontFamily: {
      'sans': ['Libre Baskerville'],
    },
    extend: {
      backgroundImage: {
        'footer-bg': 'url(./image/background.jpg)'
      }
    },
  },
}
plugins: []


