import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

const useExitAnimation = (ref, isOpen) => {
  const [readyAni, setReadyAni] = useState(false);
  // `readyAni`는 애니메이션이 준비되었는지를 나타내는 상태.

  useEffect(() => {
    // `useEffect`는 `isOpen`, `readyAni`, 그리고 `ref` 값이 변경될 때마다 실행.

    // 모달이 닫혀있을 때는 바로 리턴시킴
    if (!isOpen && !readyAni && !ref.current) return;

    // 모달이 열려있으면 readyAni를 바로 true로 변경
    setReadyAni(true);

    // 모달이 닫힐 때 실행
    if (!isOpen) {
      // 애니메이션이 끝날 때 실행함수.
      const handleAnimationEnd = () => {
        flushSync(() => setReadyAni(false));
        // `flushSync`는 React 상태 업데이트를 동기적으로 처리.
        // 원래 React는 상태변경을 비동기로 수행하지만 즉시 처리하도록 강제하는 코드
        // 이 경우, 애니메이션이 끝나는 즉시 `readyAni` 상태가 false로 업데이트되고,
        // 컴포넌트의 재렌더링이 지연 없이 즉시 발생.
      };

      // DOM에서 애니메이션이 종료된 순간을 감지하고 이벤트 핸들러를 등록
      ref.current.addEventListener("animationend", handleAnimationEnd);
    }
  }, [isOpen, readyAni, ref]);

  return readyAni;
};

export default useExitAnimation;
