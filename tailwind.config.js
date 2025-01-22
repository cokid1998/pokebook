import pxToRem from "tailwindcss-preset-px-to-rem";

const pxToRemFunc = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  presets: [pxToRem],
  theme: {
    extend: {
      spacing: {
        "layout-padding-x": pxToRemFunc(64),
      },
    },
  },
  plugins: [],
};
