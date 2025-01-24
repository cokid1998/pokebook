import pxToRem from "tailwindcss-preset-px-to-rem";
import colors from "./src/styles/colors";
import pxToRemFunc from "./src/utils/pxToRemFunc";

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
      colors,
      spacing: {
        "layout-padding-x": pxToRemFunc(64),
        "header-height": HEADER_HEIGHT,
        "content-height": "100svh",
        "footer-height": FOOTER_HEIGHT,
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
        "opacity-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "opacity-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "opacity-in": "opacity-in 0.2s ease-out",
        "opacity-out": "opacity-out 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
