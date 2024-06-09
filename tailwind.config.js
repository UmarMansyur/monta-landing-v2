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
      animation: {
        marquee: 'marquee 5s ease-in-out infinite alternate',
        marquee2: 'marquee 5s ease-in-out infinite alternate-reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-10%)' },
        },
        marquee2: {
          '-10%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      // set body to color gray-100
      colors: {
        'black-100': '#34364a',
      },
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

