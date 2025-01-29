import { create } from "zustand";

export const useSelectPokemonIdStore = create((set) => {
  return {
    selectPokemonId: null,
    setSelectPokemonId: (id) => {
      set({ selectPokemonId: id });
    },
  };
});

export const usePokemonListStore = create((set) => {
  return {
    pokemonList: [],
    setPokemonList: (newList) => {
      set((state) => ({
        pokemonList: [...state.pokemonList, ...newList],
      }));
    },
  };
});
