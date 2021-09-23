const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      fontFamily: {
        'argent': ['Argent', 'sans-serif'],
        'brandon': ['Brandon', 'serif'],
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        DEFAULT: '#5B5B5B'
      },
      red: {
        light: '#FFBFBF',
        DEFAULT: '#CE2124',
      },
      brown: {
        light: '#F7F1E6',
        DEFAULT: '#D2AD57',
        dark: '#B48330',
        darkest: '#3C2E0E'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
