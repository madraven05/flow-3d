/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        "space-mono": ["Space Mono", "sans-serif"],
      },
      colors: {
        primary: "#edeae5",
        "green-light": "#9fedd7",
        "green-dark": "#026670",
        "yellow-light": "#fef9c7",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px -50px) scale(0.8)",
          },
          "66%": {
            transform: "translate(-20px, 30px) scale(1.2)",
          },
        },
      },
      animation: {
        blob: "blob 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
