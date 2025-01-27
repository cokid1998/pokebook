import { useQueries } from "@tanstack/react-query";
import getAllPokemonIdName from "@/api/getAllPokemonIdAndName";
import getAllPokemonGifAndTypes from "@/api/getAllPokemonGifAndTypes";
import Card from "@/components/Card/Card";
import { useEffect, useRef } from "react";

function Content() {
  const ref = useRef(null);
  const result = useQueries({
    queries: [
      {
        queryKey: ["idNameList"],
        queryFn: () => getAllPokemonIdName(),
        suspense: true,
      },
      {
        queryKey: ["gifTypesList"],
        queryFn: () => getAllPokemonGifAndTypes(),
        suspense: true,
      },
    ],
  });

  useEffect(() => {
    const cb = (entry) => {
      if (entry[0].isIntersecting) {
        // Todo: 무한스크롤 영역에 도달했을 때 실행되는 로직
      }
    };
    const option = { threshold: 1 };
    const observer = new IntersectionObserver(cb, option);
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const [nameInfo, gifTypesInfo] = result;

  // Todo: suspense 에러처리
  // if (nameInfo.isError || gifTypesInfo.isError)
  //   return <div>에러가 발생했습니다.</div>;

  const combinePokemonArr = nameInfo.data.map((info, idx) => {
    return {
      id: info.id,
      name: info.name,
      gif: gifTypesInfo.data[idx].gif,
      types: gifTypesInfo.data[idx].types,
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
      <div className="h-1" ref={ref} />
    </main>
  );
}

export default Content;
