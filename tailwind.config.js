/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteBackground: "#ffffff",
        textBlackColor: "#636773",
        grayBackground: "#E5E4E2",
        // cardBlueBackground: "#ebf0ff",
        // cardYellowBackground: "#fff8e7",
        // cardRedBackground: "#feedf3",
      },
    },
  },
  plugins: [],
};
