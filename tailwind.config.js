/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "system-ui"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      colors: {
        zephyr: {
          50: "#f3faf8",
          100: "#d7f0eb",
          200: "#aee1d7",
          300: "#7ecabe",
          400: "#64b6ac",
          500: "#399389",
          600: "#2c756f",
          700: "#265f5a",
          800: "#234c4a",
          900: "#20413e",
          950: "#0e2525",
        },
      },
    },
  },
  plugins: [],
};
