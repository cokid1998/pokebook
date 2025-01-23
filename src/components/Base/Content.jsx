import { useQueries } from "@tanstack/react-query";
import getAllPokemonIdName from "@/api/getAllPokemonIdAndName";
import getAllPokemonGifAndTypes from "@/api/getAllPokemonGifAndTypes";
import Card from "@/components/Card/Card";

function Content() {
  const result = useQueries({
    queries: [
      { queryKey: ["idNameList"], queryFn: () => getAllPokemonIdName() },
      { queryKey: ["gifList"], queryFn: () => getAllPokemonGifAndTypes() },
    ],
  });

  const [nameInfo, gifInfo] = result;

  if (nameInfo.isLoading || gifInfo.isLoading) return <div>로딩중</div>;
  if (nameInfo.isError || gifInfo.isError)
    return <div>에러가 발생했습니다.</div>;

  const combinePokemonArr = nameInfo.data.map((info, idx) => {
    return {
      id: info.id,
      name: info.name,
      gif: gifInfo.data[idx],
    };
  });
  return (
    <main className="h-content-height flex-1 w-full bg-gray-50 dark:bg-gray-900 px-16 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24">
          {combinePokemonArr.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Content;
