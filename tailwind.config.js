/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dcs-red':        '#E31E24',
        'dcs-red-dark':   '#B5181D',
        'dcs-navy':       '#1A2B49',
        'dcs-navy-light': '#243B63',
        'dcs-navy-dark':  '#0F1A2E',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
