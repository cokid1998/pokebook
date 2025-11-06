import { useModalContent } from "@/store/modalStore";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const modalContent = useModalContent();

  return (
    <>
      {createPortal(modalContent, document.body)}
      {children}
    </>
  );
}
