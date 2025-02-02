import { create } from "zustand";
import { GlobalStatePokemonType } from "@/types/globalStatePokemonType";

interface SelectPokemonIdState {
  selectPokemonId: number | null;
  setSelectPokemonId: (id: number) => void;
  resetSelectedPokemonId: () => void;
}

export const useSelectPokemonIdStore = create<SelectPokemonIdState>((set) => {
  return {
    selectPokemonId: null,
    setSelectPokemonId: (id: number) => {
      set({ selectPokemonId: id });
    },
    resetSelectedPokemonId: () => {
      set({ selectPokemonId: null });
    },
  };
});

interface PokemonListState {
  pokemonList: GlobalStatePokemonType[];
  setPokemonList: (newList: GlobalStatePokemonType[]) => void;
}

export const usePokemonListStore = create<PokemonListState>((set) => {
  return {
    pokemonList: [],
    setPokemonList: (newList) => {
      set(({ pokemonList }) => ({
        pokemonList: [...pokemonList, ...newList],
      }));
    },
  };
});
