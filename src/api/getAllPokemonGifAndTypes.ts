import API from "@/api/API";
import { POKEMON_FETCH_UNIT } from "@/constants/constants";
import { PokemonTypeName } from "@/types/pokemonTypeName";
import { Pokemon } from "pokenode-ts";

const getAllPokemonGifAndTypes = (pageParam: number) => {
  const firstPokeid =
    pageParam === 1
      ? pageParam
      : pageParam * POKEMON_FETCH_UNIT - (POKEMON_FETCH_UNIT - 1);
  const lastPokeId = pageParam * POKEMON_FETCH_UNIT;

  let gifArr: string[] = [];
  let koTypes: PokemonTypeName[][] = [];
  const fetchData = async () => {
    for (let i = firstPokeid; i <= lastPokeId; i++) {
      const res = await API.get<Pokemon>(`/pokemon/${i}`);

      // console.log(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default); 포켓몬 gif
      gifArr.push(
        res.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default ?? ""
      );

      let type: PokemonTypeName[] = [];
      for (let j = 0; j < res.data.types.length; j++) {
        // console.log(res.data.types[j].type.name); 포켓몬 타입
        type.push(res.data.types[j].type.name as PokemonTypeName);
      }
      koTypes.push(type);
    }

    const combineGifAndTypesArr = gifArr.map((gif, idx) => {
      return {
        gif,
        types: koTypes[idx],
      };
    });

    return combineGifAndTypesArr;
  };
  return fetchData();
};

export default getAllPokemonGifAndTypes;
