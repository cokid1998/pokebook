import { useEffect, useRef, memo } from "react";
import TypeBadge from "@/components/TypeBadge/TypeBadge";
import Modal from "@/components/Modal/Modal";
import useExitAnimation from "@/hooks/useExitAnimation";
import { useSelectPokemonIdStore } from "@/store/store";
import { CARD_FOCUS_DURATION } from "@/constants/constants";
import { GlobalStatePokemonType } from "@/types/globalStatePokemonType";
import { useModalStore, useOpenModal } from "@/store/modalStore";

interface CardProps {
  pokemon: GlobalStatePokemonType;
}

function Card({ pokemon }: CardProps) {
  const { isOpen } = useModalStore();
  const { types, gif, id, name } = pokemon;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const isExiting = useExitAnimation(modalRef, isOpen);
  // isExiting을 콘솔로그로 찍어보면 불러온 포켓몬 데이터만큼 실행됨... 성능최적화 필요
  // Todo: isExiting 로직 삭제 후 모달 삭제 애니메이션 구현
  const { selectPokemonId, resetSelectedPokemonId } = useSelectPokemonIdStore();
  const openModal = useOpenModal();

  const handleClick = () => {
    openModal(<Modal ref={modalRef} pokemon={pokemon} />);
  };

  const focusRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (id !== selectPokemonId) return;
    focusRef.current?.scrollIntoView({
      block: "center",
      inline: "center",
    });
    const timeoutId = setTimeout(() => {
      resetSelectedPokemonId();
    }, CARD_FOCUS_DURATION * 1000);
    return () => clearTimeout(timeoutId);
  }, [id, selectPokemonId, resetSelectedPokemonId]);

  return (
    <>
      <div
        ref={(node) => {
          if (id === selectPokemonId) focusRef.current = node;
        }}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-[transform, colors] cursor-pointer
          transition-all hover:scale-105
          ${
            id === selectPokemonId
              ? "animate-focus-glow border-red-500"
              : "border-gray-300"
          }
          `}
        onClick={handleClick}
      >
        <div className="p-16 flex flex-col items-center">
          <div className="w-fit h-fit flex items-center justify-center">
            <img
              src={gif}
              alt={"pokemon.gif"}
              className="w-96 h-96 object-contain pixelated"
              style={{
                imageRendering: "pixelated",
              }}
            />
          </div>

          <div className="mt-16 text-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm inline-block mb-10">
              #{String(id).padStart(3, "0")}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <div className="mt-8 flex gap-10 justify-center">
              {types.map((type, idx) => (
                <TypeBadge key={idx} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Card);
