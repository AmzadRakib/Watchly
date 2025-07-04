/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fb8a47",
        secondary: "#ffa448",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}

