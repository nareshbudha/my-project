/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#702D77",
        secondary: "#F05327",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        mobile: "450px",
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
