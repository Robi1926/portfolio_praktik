/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#0B1633",
      tekst: "#F4DEDE",
      hvid: "#fff",
      sort: "#080808",
      hover: "#6087EF",
      transparent: "#0000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
