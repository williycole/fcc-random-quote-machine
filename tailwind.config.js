/* eslint-disable */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 0.8s cubic-bezier(1, 0, 0, 10) infinite",
      },
      colors: {
        darkPurple: "#100B24",
        brightGreen: "#02AF6D",
        brightPurple: "#E672FF",
        offYellow: "#D6DA86",
        redPink: "#C87692",
        backgroundOpac: "#999393ad",
      },
      textColor: {
        orange: "#f73404",
        lightTan: "#fbf7d6",
        lightBlue: "#a5ebff",
        darkBlue: "#1f1c3d",
        backgroundOpac: "#999393ad",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
