/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#6670da',
        'color-secondary': '#301f5e',
        'color-tertiary': '#231f2c',
        'white': '#FFFFFF',
        'white-gray': '#eaeaea',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        badeen: ['"Badeen Display"', 'sans-serif'],
        russo: ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
