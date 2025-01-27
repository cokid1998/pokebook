import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { X } from "lucide-react";
import TypeBadge from "@/components/TypeBadge/TypeBadge";
import getModalPokemonData from "@/api/getModalPokemonData";
import ShinyToggle from "@/components/Modal/ShinyToggle";

function Modal({ modalRef, isModalOpen, setIsModalOpen, pokemon }) {
  const [showShiny, setShowShiny] = useState(false);
  const { types, gif, name, id } = pokemon;

  useBodyScrollLock(isModalOpen);

  const { data, isLoading } = useQuery({
    queryKey: [`pokemon/${id}`],
    queryFn: () => getModalPokemonData(id),
    // staleTime: 10000,
    // gcTime: 10000,
  });

  if (isLoading) return null;

  const { flavorTextKo, genusKo, abilitiesInfoKo, shinyGif } = data;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-16 ${
        isModalOpen ? "animate-opacity-in" : "animate-opacity-out"
      }`}
      onClick={() => setIsModalOpen((prev) => !prev)}
      ref={modalRef}
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
                  src={showShiny ? shinyGif : gif}
                  alt={pokemon.name}
                  className="mobile:w-128 mobile:h-128 w-188 h-188 object-contain pixelated"
                  style={{
                    imageRendering: "pixelated",
                  }}
                />
              </div>
              <ShinyToggle setShowShiny={setShowShiny} />
            </div>
          </div>
          <div className="mt-24">
            <p className="text-gray-700 dark:text-gray-300 font-black text-24">
              {genusKo}
            </p>
            <div className="mt-16 flex gap-8">
              {types.map((type, index) => (
                <TypeBadge key={index} type={type} />
              ))}
            </div>
          </div>
          <p className="mt-24 text-gray-700 dark:text-gray-300">
            {flavorTextKo}
          </p>
          <div className="mt-24">
            <h3 className="font-semibold mb-8 text-gray-900 dark:text-white">
              {name}의 특성
            </h3>
            {abilitiesInfoKo.map((ability, index) => {
              return (
                <div key={index} className="mb-8">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {ability.abilityNameKo}:{" "}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {ability.abilityFlavorTextKo}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
