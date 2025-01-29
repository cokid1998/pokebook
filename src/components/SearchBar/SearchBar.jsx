import { Search } from "lucide-react";
import { useDarkMode } from "@/Context/DarkModeContext";
import { useSelectPokemonIdStore, usePokemonListStore } from "@/store/store";
import { useRef, useState } from "react";
import { SEARCHBAR_WIDTH_DURATION } from "@/constants/constants";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchPokemon, setSearchPokemon] = useState([]);
  const { darkMode, handleDarkMode } = useDarkMode();
  const { selectPokemonId, setSelectPokemonId } = useSelectPokemonIdStore();
  const { pokemonList, setPokemonList } = usePokemonListStore();
  const [isFocus, setIsFocus] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const dropdownRef = useRef(null);
  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`relative flex items-center justify-end mx-16
                transition-all duration-300
                ${isFocus ? "w-full" : "mobile:w-160 w-246"}`}
    >
      <input
        type="text"
        placeholder="포켓몬 검색..."
        className={`pl-40 pr-16 py-8 border border-gray-300 dark:border-gray-600 rounded-full
                  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                  transition-all duration-300
                  ${isFocus ? "w-full" : "mobile:w-160  w-246"}
                `}
        onChange={handleOnchange}
        onFocus={() => {
          setIsFocus(true);
          if (isFocus) {
            setIsExpand(true);
          } else {
            setTimeout(() => {
              setIsExpand(true);
            }, SEARCHBAR_WIDTH_DURATION * 1000);
          }
        }}
        onBlur={(e) => {
          const next = e.relatedTarget;
          if (next instanceof HTMLLIElement) {
            return;
          } else {
            setIsFocus(false);
            setIsExpand(false);
          }
        }}
      />
      <Search className="absolute left-12 text-gray-400" size={20} />

      {/* 드롭다운 메뉴 */}
      {isExpand && (
        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden
        transition-all ${
          isExpand ? "animate-opacity-in" : "animate-opacity-out"
        }
        `}
        >
          {pokemonList.map((pokemon) => (
            <li
              key={`${pokemon.name}`}
              className=" flex items-center px-16 py-8 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setSelectPokemonId(pokemon.id);
                setIsExpand(false);
              }}
              tabIndex={-1}
            >
              <img
                src={pokemon.gif}
                alt={pokemon.name}
                className="w-30 h-30 object-contain"
              />
              <div className="ml-12">
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  {pokemon.number}
                </div>
                <div className="text-gray-900 dark:text-gray-100">
                  {pokemon.name}
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
