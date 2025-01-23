import typeToKorean from "@/utils/typeToKorean";
import typeToIcon from "@/utils/typeToIcon";

function TypeBadge({ type }) {
  return (
    <div className="min-w-34 max-w-34 flex flex-col gap-4">
      {typeToKorean(type)}
      {typeToIcon(type)}
    </div>
  );
}

export default TypeBadge;
