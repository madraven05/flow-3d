/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ["Mulish", 'sans-serif'],
        'space-mono': ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

