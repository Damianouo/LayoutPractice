/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      colors: {
        swamp: {
          50: "#eefcfd",
          100: "#d4f5f9",
          200: "#afe9f2",
          300: "#77d7e9",
          400: "#39bdd7",
          500: "#1da1bd",
          600: "#1b819f",
          700: "#1d6981",
          800: "#20566a",
          900: "#1f485a",
          950: "#061319",
        },
      },
    },
  },
  plugins: [],
};
