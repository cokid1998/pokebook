import { Link } from "react-router-dom";

function Card({ pokemon }) {
  // console.log(pokemon);
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="h-[230px] border-2 border-red-100"
    >
      <div>
        {pokemon.id} {pokemon.name}
        <img src={pokemon.gif} />
      </div>
    </Link>
  );
}

export default Card;
