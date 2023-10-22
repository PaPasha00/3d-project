/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#32f6f7',
        'theme-second': '#fa02fc',
      }
    },
  },
  plugins: [],
}

