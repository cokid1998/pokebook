import TypeBadge from "@/components/TypeBadge/TypeBadge";
import { useState } from "react";

function Card({ pokemon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { types, gif, id, name } = pokemon;
  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-16 flex flex-col items-center">
          <div className="w-128 h-128 flex items-center justify-center">
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
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              #{String(id).padStart(3, "0")}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <div className="mt-8 flex gap-8 justify-center">
              {types.map((type, idx) => (
                <TypeBadge key={idx} type={type} koreanType={type.koreanType} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* {isModalOpen && <Modal />} */}
    </>
  );
}

export default Card;
