/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "..index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      KeyframeEffect: {
        underline: {
          // underline animation
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        underline: 'underline 0.5s ease-in-out forwards',
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      // set body to color gray-100
      colors: {
        'black-100': '#34364a',
      }
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

