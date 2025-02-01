import pxToRem from "tailwindcss-preset-px-to-rem";
import colors from "./src/styles/colors";
import pxToRemFunc from "./src/utils/pxToRemFunc";
import {
  CARD_FOCUS_DURATION,
  MODAL_FADE_DURATION,
  CARD_HOVER_DURATION,
} from "./src/constants/constants";

// 헤더 높이 : 68
// 푸터 높이 : 94

const HEADER_HEIGHT = pxToRemFunc(68);
const FOOTER_HEIGHT = pxToRemFunc(94);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,tsx,ts}"],
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
        "focus-glow": {
          "0%": { outline: "2px solid rgba(255, 0, 0, 0.8)" }, // 빨간색 아웃라인
          "100%": { outline: "2px solid rgba(255, 0, 0, 0)" }, // 투명하게 사라짐
        },
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        // 모달에서 사용
        "fade-in": `fade-in ${MODAL_FADE_DURATION}s ease-out`,
        "fade-out": `fade-out ${MODAL_FADE_DURATION}s ease-out`,
        "opacity-in": `opacity-in ${MODAL_FADE_DURATION}s ease-out`,
        "opacity-out": `opacity-out ${MODAL_FADE_DURATION}s ease-out`,
        // 검색창에서 포켓몬을 선택했을 때 해당 카드를 표시하기 위해 사용
        "focus-glow": `focus-glow ${CARD_FOCUS_DURATION}s ease-out`,
        // 포켓몬카드 hover시 사용
        "scale-up": `scale-up ${CARD_HOVER_DURATION}s ease-in-out`,
      },
    },
  },
  plugins: [],
};
