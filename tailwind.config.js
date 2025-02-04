const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.js",
    "./styles/**/*.css",
    "./components/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
  ],
  theme: {
    fontFamily: {
      dance: ['"Dancing Script"'],
    },
    screens: {
      xs: "630px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "custom-yellow": "#FB7A16",
        "custom-yellow2": "#FF6663",
        "custom-maroon": "#410B3B",
        "custom-background": "#06202A",
        "custom-bg": "#AB61F7",
        "custom-indigo": "#6366F1",
      },
    },
  },
};
