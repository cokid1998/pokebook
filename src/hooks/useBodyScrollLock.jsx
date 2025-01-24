import { useEffect } from "react";

/**
 * 기능
 * 1. 모달이 열리면 외부 스크롤을 막음
 *
 * 2. 모달이 열리면 스크롤바의 width를 계산해서 body태그에 padding-right로 추가
 * (모달이 열리면서 스크롤바가 없어지며 기존 UI가 깨지는 현상 방지)
 */

function useBodyScrollLock(isModalOpen) {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
}

export default useBodyScrollLock;
