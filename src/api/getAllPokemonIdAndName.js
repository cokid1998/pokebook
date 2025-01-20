import API from "@/api/API";

const getAllPokemonIdAndName = async () => {
  let result = [];

  for (let i = 0; i < 9; i++) {
    try {
      const res = await API.get(`/pokemon-species/${i + 1}`);
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

// // id name
// for (let i = 0; i < 1; i++) {
//   let url = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}`;
//   const fetchData = async () => {
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log(data.id);
//     // console.log(data.names[2].name);
//   };
//   fetchData();
// }

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

// // 포켓몬 설명
// for (let i = 0; i < 1; i++) {
//   const fetchData = async () => {
//     let url = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log(data.flavor_text_entries[23].flavor_text);
//   };
//   fetchData();
// }

// // 포켓몬 능력
// for (let i = 0; i < 1; i++) {
//   const fetchData = async () => {
//     let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     let koNameAbilities = [];

//     for (let i = 0; i < data.abilities.length; i++) {
//       const url = data.abilities[i].ability.url;
//       const res = await fetch(url);
//       const koAilitiesInfo = await res.json();
//       const title = koAilitiesInfo.names[1].name;
//       const desc = koAilitiesInfo.flavor_text_entries[19].flavor_text;
//       koNameAbilities.push({ [title]: desc });
//     }
//     // console.log(koNameAbilities);
//   };
//   fetchData();
// }
