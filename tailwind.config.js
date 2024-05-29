/** @type {import('tailwindcss').Config} */
export default {
  content: ["./layouts/*.{vue,css}", "./components/**/*.{vue,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background-light": "#EEE2DE",
        "background-dark": "#2B2A4C",
        "text-light": "#2B2A4C",
        "text-dark": "#EEE2DE",
        "accent-light": "#EA906C",
        "accent-dark": "#EA906C",
        "link-light": "#B31312",
        "link-dark": "#E11D48"
      }
    }
  },
  plugins: []
};
