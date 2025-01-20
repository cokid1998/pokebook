import getOnePokemonGifAndTypes from "@/api/getOnePokemonGifAndTypes";
import getOnePokemonAndName from "@/api/getOnePokemonIdAndName";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const result = useQueries({
    queries: [
      {
        queryKey: [`pokemonDetailName/${id}`],
        queryFn: () => getOnePokemonAndName(id),
      },
      {
        queryKey: [`pokemonDetailGif/${id}`],
        queryFn: () => getOnePokemonGifAndTypes(id),
      },
    ],
  });
  const [name, gif] = result;

  if (name.isLoading || gif.isLoading) return <div>로딩중</div>;

  return (
    <div>
      {/* <div>
        {name.data}
        <img src={gif.data} />
      </div> */}
      asdf
    </div>
  );
}

export default Detail;
