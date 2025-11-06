import { ReactNode } from "react";
import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";

type ModalState = {
  isOpen: boolean;
  modalContent: ReactNode | null;
};

const init: ModalState = {
  isOpen: false,
  modalContent: null,
};

export const useModalStore = create(
  devtools(
    combine(init, (set) => ({
      actions: {
        openModal: (modalContent: ReactNode) => {
          set({
            isOpen: true,
            modalContent,
          });
        },
        closeModal: () => {
          set({
            isOpen: false,
            modalContent: null,
          });
        },
      },
    })),
    { name: "modalStore" }
  )
);

export const useOpenModal = () => {
  return useModalStore((store) => store.actions.openModal);
};

export const useCloseModal = () => {
  return useModalStore((store) => store.actions.closeModal);
};

export const useModalContent = () => {
  return useModalStore((store) => store.modalContent);
};
