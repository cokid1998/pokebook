import Grass from "@/asset/icon/grass.svg";
import Bug from "@/asset/icon/bug.svg";
import Dark from "@/asset/icon/dark.svg";
import Dragon from "@/asset/icon/dragon.svg";
import Electric from "@/asset/icon/electric.svg";
import Fairy from "@/asset/icon/fairy.svg";
import Fighting from "@/asset/icon/fighting.svg";
import Fire from "@/asset/icon/fire.svg";
import Flying from "@/asset/icon/flying.svg";
import Ghost from "@/asset/icon/ghost.svg";
import Ground from "@/asset/icon/ground.svg";
import Ice from "@/asset/icon/ice.svg";
import Normal from "@/asset/icon/normal.svg";
import Poison from "@/asset/icon/poison.svg";
import Psychic from "@/asset/icon/psychic.svg";
import Rock from "@/asset/icon/rock.svg";
import Steel from "@/asset/icon/steel.svg";
import Water from "@/asset/icon/Water.svg";

const typeToIcon = (type) => {
  switch (type) {
    case "normal":
      return <Normal />;
    case "water":
      return <Water />;
    case "fighting":
      return <Fighting />;
    case "grass":
      return <Grass />;
    case "flying":
      return <Flying />;
    case "electric":
      return <Electric />;
    case "poison":
      return <Poison />;
    case "psychic":
      return <Psychic />;
    case "ground":
      return <Ground />;
    case "ice":
      return <Ice />;
    case "rock":
      return <Rock />;
    case "dragon":
      return <Dragon />;
    case "bug":
      return <Bug />;
    case "dark":
      return <Dark />;
    case "ghost":
      return <Ghost />;
    case "fairy":
      return <Fairy />;
    case "steel":
      return <Steel />;
    case "fire":
      return <Fire />;
    case "stellar":
      return <Fire />; // Todo: 예외처리 필요
    default:
      return "UNKNOWN"; // Todo: 예외처리 필요
  }
};

export default typeToIcon;
