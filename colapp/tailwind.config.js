/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        logo: "14px",
      },
      lineHeight: {
        list: "100%",
      }
    },
  },
  plugins: [],
}
