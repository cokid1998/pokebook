import API from "@/api/API";

const getAllPokemonGifAndTypes = () => {
  let gifArr = [];
  // let koTypes = [];
  const fetchData = async () => {
    for (let i = 0; i < 9; i++) {
      const res = await API.get(`/pokemon/${i + 1}`);
      // console.log(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default); 포켓몬 gif
      gifArr.push(
        res.data.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      );

      // for (let j = 0; j < res.data.types.length; j++) {
      //   const koTypeUrl = res.data.types[j].type.url;
      //   const koTypeRes = await API.get(koTypeUrl);
      //   koTypes.push({ [j]: koTypeRes.data.names[1].name });
      // }
    }

    return gifArr;
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
