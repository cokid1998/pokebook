import typeToKorean from "@/utils/typeToKorean";

function TypeBadge({ type }) {
  return <div>{typeToKorean(type)}</div>;
}

export default TypeBadge;
