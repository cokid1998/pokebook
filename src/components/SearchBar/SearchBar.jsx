import { Search } from "lucide-react";
import { useSelectPokemonIdStore, usePokemonListStore } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { SEARCHBAR_WIDTH_DURATION } from "@/constants/constants";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [filterPokemon, setFilterPokemon] = useState([]);
  const { setSelectPokemonId } = useSelectPokemonIdStore();
  const { pokemonList } = usePokemonListStore();

  const [isFocus, setIsFocus] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!search) return;
    const trimmedSearch = search.replace(/\s+/g, "");
    console.log(trimmedSearch);
    const result = pokemonList.filter((pokemon) => {
      // 글자 하나 입력할때마다 포켓몬카드개수만큼 코드가 실행됨...
      // console.log(pokemon.name.includes(search));
      return pokemon.name.includes(trimmedSearch);
    });
    setFilterPokemon(result);
  }, [pokemonList, search]);

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
        value={search}
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
          className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden min-h-42
        transition-all ${
          isExpand ? "animate-opacity-in" : "animate-opacity-out"
        }
        `}
        >
          {search ? (
            filterPokemon.map((pokemon) => (
              <li
                key={`${pokemon.name}`}
                className="flex items-center px-16 py-8 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectPokemonId(pokemon.id);
                  setIsExpand(false);
                  setSearch("");
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
            ))
          ) : (
            <li className="w-full flex items-center px-16 py-8 dark:text-gray-100">
              화면에 표시된 포켓몬 정보만 검색이 가능합니다.😭
            </li>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
