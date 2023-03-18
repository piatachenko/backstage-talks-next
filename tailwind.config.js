/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        issue6: "#FFFFFF",
        issue5: "#00C1B5",
        issue4: "#FF6519",
        issue3: "#FFBE00",
        issue2: "#1D3FBB",
        issue1: "#E30512",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
