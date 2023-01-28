/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        black: "rgb(21, 21, 21)",
        white: "rgb(255, 255, 255)",
        green: "rgb(78, 225, 159)",
        gray: "rgb(219, 219, 219)",
        darkGray: "rgb(36, 36, 36)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
