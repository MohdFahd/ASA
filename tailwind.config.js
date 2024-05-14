/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#13120C",
        secondary: "#F0B624",
        darkLight: "#373737",
      },
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "17px",
      lg: "16px",
      "2xl": "22px",
      "3xl": "28px",
      "4xl": "34px",
      "5xl": "46px",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
