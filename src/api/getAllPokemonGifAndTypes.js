import API from "@/api/API";
import { POKEMON_FETCH_UNIT } from "@/constants/constants";

const getAllPokemonGifAndTypes = (pageParam) => {
  const firstPokeid =
    pageParam === 1
      ? pageParam
      : pageParam * POKEMON_FETCH_UNIT - (POKEMON_FETCH_UNIT - 1);
  const lastPokeId = pageParam * POKEMON_FETCH_UNIT;

  let gifArr = [];
  let koTypes = [];
  const fetchData = async () => {
    for (let i = firstPokeid; i <= lastPokeId; i++) {
      const res = await API.get(`/pokemon/${i}`);
      // console.log(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default); 포켓몬 gif
      gifArr.push(
        res.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      );

      let type = [];
      for (let j = 0; j < res.data.types.length; j++) {
        // console.log(res.data.types[j].type.name); 포켓몬 타입
        type.push(res.data.types[j].type.name);
      }
      koTypes.push(type);
    }
    const combineGifAndTypesArr = gifArr.map((gif, idx) => {
      return {
        gif: gif,
        types: koTypes[idx],
      };
    });

    return combineGifAndTypesArr;
  };
  return fetchData();
};

export default getAllPokemonGifAndTypes;

// // gif
// for (let i = 0; i < 1; i++) {
//   let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
//   const fetchData = async () => {
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log(
//     //   data.sprites.versions["generation-v"]["black-white"].animated
//     //     .front_default
//     // );
//   };
//   fetchData();
// }

// // 타입
// for (let i = 0; i < 1; i++) {
//   const fetchData = async () => {
//     let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     let koTypes = [];
//     for (let i = 0; i < data.types.length; i++) {
//       const koTypeUrl = data.types[i].type.url;
//       const koTypeRes = await fetch(koTypeUrl);
//       const koTypeData = await koTypeRes.json();
//       const koType = koTypeData.names[1].name;
//       koTypes.push(koType);
//     }
//     // console.log(koTypes);
//   };
//   fetchData();
// }
