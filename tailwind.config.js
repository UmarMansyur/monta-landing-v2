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
        marquee3: 'marquee3 20s linear infinite',
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
        typing2: 'typing 2s steps(20) infinite alternate, blink2 .7s infinite',
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
        marquee3: {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(100%)' },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
        blink: {
          '50%': {
            
          },
          '100%': {
            borderColor: 'transparent'
          }
        },
        blink2: {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: 'transparent'
          }
        },
        typing2: {
          '0%': {
            // width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        }
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'serif': ['Open Sans', ...defaultTheme.fontFamily.serif],
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
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
}

