/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '868px',

      md: '1092px',

      lg: '1024px',

      xl: '1300px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        main: 'rgb(30 58 138 / 1)',
        'text-main': '#868282',
      },
    },
  },
  plugins: [],
}
