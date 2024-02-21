/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:'7d7c7d',
          50:  '#ffffff',
          100: '#e5e5e5',
          200: '#cbcbcb',
          300: '#b1b0b1',
          400: '#979697',
          500: '#7d7c7d',
          600: '#646364',
          700: '#4b4a4b',
          800: '#323232',
          900: '#191919',
          950: '#000000',
        },
        secondary: {
          DEFAULT:'#915a21',
          50:  '#ffffff',
          100: '#e9ded3',
          200: '#d3bda6',
          300: '#bd9c7a',
          400: '#a77b4d',
          500: '#915a21',
          600: '#74481a',
          700: '#573614',
          800: '#3a240d',
          900: '#1d1207',
          950: '#000000',
        },
        
      },
      fontFamily: {
        primary: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
