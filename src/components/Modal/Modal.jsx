import { X } from "lucide-react";
import { useState } from "react";
import TypeBadge from "@/components/TypeBadge/TypeBadge";

function Modal({ isModalOpen, setIsModalOpen, pokemon }) {
  const [showShiny, setShowShiny] = useState(false);
  const { types, gif, name } = pokemon;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-16 ${
        isModalOpen ? "animate-opacity-in" : "animate-opacity-out"
      }`}
      onClick={() => setIsModalOpen((prev) => !prev)}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto  ${
          isModalOpen ? "animate-fade-in" : "animate-fade-out"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-24">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {name}
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-24 flex justify-center">
            <div className="relative text-center">
              <div className="mobile:w-192 mobile:h-192 w-252 h-252 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                <img
                  src={showShiny ? pokemon.shinyImage : gif}
                  alt={pokemon.name}
                  className="mobile:w-128 mobile:h-128 w-188 h-188 object-contain pixelated"
                  style={{
                    imageRendering: "pixelated",
                  }}
                />
              </div>
              <button
                onClick={() => setShowShiny(!showShiny)}
                className="mt-8 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                {showShiny ? "일반 색상 보기" : "이로치 색상 보기"}
              </button>
            </div>
          </div>
          <div className="mt-24">
            <p className="text-gray-700 dark:text-gray-300 font-black text-24">
              씨앗포켓몬{/* {pokemon.classification} */}
            </p>
            <div className="mt-16 flex gap-8">
              {types.map((type, index) => (
                <TypeBadge key={index} type={type} />
              ))}
            </div>
          </div>
          <p className="mt-24 text-gray-700 dark:text-gray-300">
            태어났을 때부터 등에 이상한 씨앗이 심어져 있으며 몸과 함께 자란다고
            한다. {/* {pokemon.description} */}
          </p>
          <div className="mt-24">
            <h3 className="font-semibold mb-8 text-gray-900 dark:text-white">
              이상해씨의 특성 {/* {pokemon.koreanName}의 특성 */}
            </h3>
            <div className="mb-8">
              <span className="font-black text-gray-900 dark:text-white">
                심록:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                위급할 때 풀타입의 위력이 올라간다.
              </span>
            </div>
            <div className="mb-8">
              <span className="font-black text-gray-900 dark:text-white">
                엽록소:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                맑을 때 스피드가 올라간다.
              </span>
            </div>
            {/* {pokemon.abilities.map((ability, index) => (
              <div key={index} className="mb-8">
                <span className="font-medium text-gray-900 dark:text-white">
                  {ability.name}:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {ability.description}
                </span>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
