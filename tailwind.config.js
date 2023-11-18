/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Monument Extended"', 'sans-serif'],
        'body': ['"Mona-Sans-Regular"', 'sans-serif'],
        'link': ['"Mona-Sans-RegularWide"', 'sans-serif'],
      },
      colors: {
        green: '#DCFC36',
        red: '#F42938',
        yellow: '#F8DE22',
        blue: '#014E9E',
        dark: '#161616',
        grey: '#2E2E2E',
      },
      screens: {
        'xs': '430px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

