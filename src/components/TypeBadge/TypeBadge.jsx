import typeToKorean from "@/utils/typeToKorean";
import Poison from "@/asset/icon/poison.svg";

function TypeBadge({ type }) {
  return (
    <div>
      {typeToKorean(type)}
      <Poison />
    </div>
  );
}

export default TypeBadge;
