/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xl: [{ min: "1150px", max: "2648px" }],
      lg: [{ min: "260px", max: "1149px" }],
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      Sevillana: ["Sevillana","cursive"],
      Exo2: ['Exo 2', 'sans-serif'],
      poppins: ["Poppins", "sans-serif"],
      productsansr: ["productsans-regular"],
      productsansb: ["productsans-bold"],
    },
    extend: {},
  },
  plugins: [],
}
