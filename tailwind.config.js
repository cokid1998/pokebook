import pxToRem from "tailwindcss-preset-px-to-rem";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  presets: [pxToRem],
  theme: {
    extend: {},
  },
  plugins: [],
};
