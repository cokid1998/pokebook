import API from "@/api/API";
import { PokemonSpecies } from "pokenode-ts";
import { POKEMON_FETCH_UNIT } from "@/constants/constants";

const getAllPokemonIdAndName = async (pageParam: number) => {
  let result = [];

  const firstPokeid =
    pageParam === 1
      ? pageParam
      : pageParam * POKEMON_FETCH_UNIT - (POKEMON_FETCH_UNIT - 1);
  const lastPokeId = pageParam * POKEMON_FETCH_UNIT;

  for (let i = firstPokeid; i <= lastPokeId; i++) {
    try {
      const res = await API.get<PokemonSpecies>(`/pokemon-species/${i}`);
      // console.log(res.data.id); 포켓몬 id
      // console.log(res.data.names[2].name); 포켓몬 한글 이름
      result.push({ id: res.data.id, name: res.data.names[2].name });
    } catch (error) {
      alert(error);
    }
  }

  return result;
};

export default getAllPokemonIdAndName;
