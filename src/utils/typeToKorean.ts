import { PokemonTypeName } from "@/types/pokemonTypeName";

const typeToKorean = (type: PokemonTypeName) => {
  switch (type) {
    case "normal":
      return "일반";
    case "water":
      return "물";
    case "fighting":
      return "격투";
    case "grass":
      return "풀";
    case "flying":
      return "비행";
    case "electric":
      return "전기";
    case "poison":
      return "독";
    case "psychic":
      return "에스퍼";
    case "ground":
      return "땅";
    case "ice":
      return "얼음";
    case "rock":
      return "바위";
    case "dragon":
      return "드래곤";
    case "bug":
      return "벌레";
    case "dark":
      return "악";
    case "ghost":
      return "고스트";
    case "fairy":
      return "페어리";
    case "steel":
      return "강철";
    case "fire":
      return "불꽃";
    case "stellar":
      return "스텔라";
    default:
      return "UNKNOWN";
  }
};

export default typeToKorean;
