/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2d4a3e',
        'primary-green': '#3a5a4a',
        'accent-yellow': '#f5a623',
        'accent-orange': '#ff8c42',
        'beige': '#f5f0e8',
        'dark-bg': '#1a1a1a',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
