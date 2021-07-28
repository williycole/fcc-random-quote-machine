/* eslint-disable */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 0.8s cubic-bezier(1, 0, 0, 10) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      colors: {
        darkPurple: "#100D23",
        pinkPurple: "#C592FF",
        brightGreen: "#00FF9C",
        brightPurple: "#372963",
        redPink: "#FF4081",
        offYellow: "#D6DA86",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
