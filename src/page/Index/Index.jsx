import { useQueries } from "@tanstack/react-query";
import getAllPokemonIdName from "@/api/getAllPokemonIdAndName";
import getAllPokemonGifAndTypes from "@/api/getAllPokemonGifAndTypes";
import Card from "@/components/Card/Card";

function Index() {
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
    <div className="grid grid-cols-3 gap-3">
      {combinePokemonArr.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Index;

/*
  id
  이름
  gif
  타입
  포켓몬 설명
  포켓몬 특성
  그냥 사진
  이로치 사진
*/
