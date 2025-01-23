import pxToRem from "tailwindcss-preset-px-to-rem";

const pxToRemFunc = (px) => {
  return `${px / 16}rem`;
};

// 헤더 높이 : 68
// 푸터 높이 : 94

const HEADER_HEIGHT = pxToRemFunc(68);
const FOOTER_HEIGHT = pxToRemFunc(94);

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
        "header-height": HEADER_HEIGHT,
        "content-height": "100svh",
        "footer-height": FOOTER_HEIGHT,
      },
    },
  },
  plugins: [],
};
