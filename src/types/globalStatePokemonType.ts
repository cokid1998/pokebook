import { NamedAPIResource } from "pokenode-ts";
import { PokemonTypeName } from "@/types/pokemonTypeName";

export interface GlobalStatePokemonType {
  gif: NamedAPIResource["url"];
  id: number;
  name: string;
  types: PokemonTypeName[];
}
