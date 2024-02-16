/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontserratAlternates: ["Montserrat Alternates"],
        BankGothic: ["BankGothic Lt BT"],
        Montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
  
}

