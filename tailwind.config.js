import pxToRem from "tailwindcss-preset-px-to-rem";

const pxToRemFunc = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  presets: [pxToRem],
  theme: {
    screens: {
      mobile: { min: "0px", max: "480px" },
      tablet: { min: "481px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    extend: {
      spacing: {
        "layout-padding-x": pxToRemFunc(64),
      },
    },
  },
  plugins: [],
};
