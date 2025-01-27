import API from "@/api/API";
import axios from "axios";

const getRandomFlavorText = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx].flavor_text;
};

const getModalPokemonData = (id) => {
  const fetchData = async () => {
    const res = await API.get(`/pokemon-species/${id}`);
    const flavorTextKoArr = res.data.flavor_text_entries.filter(
      (item) => item.language.name === "ko"
    );
    const randomFlavorTextKo = getRandomFlavorText(flavorTextKoArr);
    const genusKo = res.data.genera.filter(
      (item) => item.language.name === "ko"
    )[0].genus;

    const abilityAndShinyRes = await API.get(`/pokemon/${id}`);

    const shinyGif =
      abilityAndShinyRes.data.sprites.versions["generation-v"]["black-white"]
        .animated.front_shiny;

    let abilitiesUrlKo = [];
    abilityAndShinyRes.data.abilities.forEach((item) => {
      abilitiesUrlKo.push(item.ability.url);
    });

    const abilitiesInfoKoArr = [];
    for (let i = 0; i < abilitiesUrlKo.length; i++) {
      await axios.get(abilitiesUrlKo[i]).then((item) => {
        const abilityNameKoInfoArr = item.data.names.filter(
          (nameInfo) => nameInfo.language.name === "ko"
        );
        const abilityFlavorTextKoArr = item.data.flavor_text_entries.filter(
          (item) => item.language.name === "ko"
        );
        const abilityNameKo = abilityNameKoInfoArr[0].name;
        const abilityFlavorTextKo = getRandomFlavorText(abilityFlavorTextKoArr);
        abilitiesInfoKoArr.push({
          abilityNameKo,
          abilityFlavorTextKo,
        });
      });
    }

    return {
      flavorTextKo: randomFlavorTextKo,
      genusKo,
      abilitiesInfoKo: abilitiesInfoKoArr,
      shinyGif,
    };
  };
  return fetchData();
};

export default getModalPokemonData;
