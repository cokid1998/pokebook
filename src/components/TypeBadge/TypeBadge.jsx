import typeToKorean from "@/utils/typeToKorean";
import typeToIcon from "@/utils/typeToIcon";

function TypeBadge({ type }) {
  // tailwind는 스타일로 컴파일되는 시점에서 코드를 지워버린다.
  // 따라서 아래처럼 빌드시 완전한 클래스 네임을 만들어서 bracket notation으로 접근해야한다
  // https://tailwindcss.com/docs/detecting-classes-in-source-files
  const textColor = {
    normal: "text-[#949495]",
    water: "text-[#5185C5]",
    fighting: "text-[#E09C40]",
    grass: "text-[#66A945]",
    flying: "text-[#A2C3E7]",
    electric: "text-[#FBB917]",
    poison: "text-[#735198]",
    psychic: "text-[#DD6B7B]",
    ground: "text-[#9C7743]",
    ice: "text-[#6DC8EB]",
    rock: "text-[#BFB889]",
    dragon: "text-[#535CA8]",
    bug: "text-[#9FA244]",
    dark: "text-[#4C4948]",
    ghost: "text-[#684870]",
    fairy: "text-[#DAB4D4]",
    steel: "text-[#69A9C7]",
    fire: "text-[#E56C3E]",
    stellar: "text-[#44628D]",
  };
  return (
    <div className="min-w-34 max-w-34 flex flex-col gap-4 items-center">
      <span className={`${textColor[type]}`}>{typeToKorean(type)}</span>
      {typeToIcon(type)}
    </div>
  );
}

export default TypeBadge;
