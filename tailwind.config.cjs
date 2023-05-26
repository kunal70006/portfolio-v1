const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["WorkSans", "Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "hero-button": "2px 2px",
        "hero-hovered": "6px 6px",
      },
    },
  },
  plugins: [],
};
