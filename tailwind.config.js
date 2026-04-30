/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'senate-green':       '#005A30',
        'senate-green-light': '#007A40',
        'senate-gold':        '#C9A84C',
        'senate-blue':        '#003366',
        'accent-teal':        '#00897B',
        'accent-amber':       '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
