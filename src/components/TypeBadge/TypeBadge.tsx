import typeToKorean from "@/utils/typeToKorean";
import typeToIcon from "@/utils/typeToIcon";
import colors from "@/styles/colors";
import { PokemonTypeName } from "@/types/pokemonTypeName";

interface TypeBadgeProps {
  type: PokemonTypeName;
}

function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <div className="min-w-34 max-w-34 flex flex-col gap-4 items-center">
      <span className="min-w-50 text-center" style={{ color: colors[type] }}>
        {typeToKorean(type)}
      </span>
      {typeToIcon(type)}
    </div>
  );
}

export default TypeBadge;
