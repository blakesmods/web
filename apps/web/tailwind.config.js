import colors from "tailwindcss/colors";

const fontFallback = [
  "Source Sans Pro",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif"
];

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    colors: {
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      fuchsia: colors.fuchsia,
      neutral: colors.neutral,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      purple: colors.purple
    },
    fontFamily: {
      montserrat: ["Montserrat", ...fontFallback],
      rowdies: ["Rowdies", ...fontFallback]
    }
  },
  plugins: []
};
