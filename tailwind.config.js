/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
        kleeOne: ['Klee One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'animatedBorder': {
          '0%, 100%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { 'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%' }
        }
      },
      animation: {
        'animatedBorder': 'animatedBorder 8s ease-in-out infinite 1s'
      },
    },
  },
  plugins: [],
}

