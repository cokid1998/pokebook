import { useEffect, useRef, useState } from "react";
import TypeBadge from "@/components/TypeBadge/TypeBadge";
import Modal from "@/components/Modal/Modal";
import useExitAnimation from "@/hooks/useExitAnimation";
import { useSelectPokemonIdStore } from "@/store/store";

function Card({ pokemon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { types, gif, id, name } = pokemon;
  const modalRef = useRef(null);
  const isExiting = useExitAnimation(modalRef, isModalOpen);
  // isExiting을 콘솔로그로 찍어보면 불러온 포켓몬 데이터만큼 실행됨... 성능최적화 필요
  const { selectPokemonId, setSelectPokemonId } = useSelectPokemonIdStore();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const focusRef = useRef();

  useEffect(() => {
    if (id !== selectPokemonId) return;

    focusRef.current.scrollIntoView({
      block: "center",
      inline: "center",
    });
    setSelectPokemonId(id);

    return () => setSelectPokemonId(null);
  }, [id, selectPokemonId, setSelectPokemonId]);

  return (
    <>
      <div
        ref={(node) => {
          if (id === selectPokemonId) focusRef.current = node;
        }}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-[transform, colors] hover:scale-105 cursor-pointer duration-300 ease-in-out
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
                <TypeBadge key={idx} type={type} koreanType={type.koreanType} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {(isModalOpen || isExiting) && (
        <Modal
          modalRef={modalRef}
          pokemon={pokemon}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default Card;
