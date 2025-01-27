import { useInfiniteQuery } from "@tanstack/react-query";
import getAllPokemonIdName from "@/api/getAllPokemonIdAndName";
import getAllPokemonGifAndTypes from "@/api/getAllPokemonGifAndTypes";
import Card from "@/components/Card/Card";
import React, { useEffect, useRef } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";

function Content() {
  const ref = useRef(null);
  const {
    data,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["pokemonData"],
    queryFn: async ({ pageParam }) => {
      const idNameList = await getAllPokemonIdName(pageParam + 1);
      const gifTypesList = await getAllPokemonGifAndTypes(pageParam + 1);
      return idNameList.map((info, idx) => ({
        id: info.id,
        name: info.name,
        gif: gifTypesList[idx].gif,
        types: gifTypesList[idx].types,
      }));
    },
    getNextPageParam: (lastPage, allPages) => {
      // 다음 페이지의 파라미터 반환 (예: next 페이지가 존재하면 증가)
      return lastPage.length > 0 ? allPages.length : undefined;
    },
    suspense: true,
  });

  useEffect(() => {
    const cb = (entry) => {
      if (entry[0].isIntersecting) {
        // Todo: 무한스크롤 영역에 도달했을 때 실행되는 로직
        fetchNextPage();
      }
    };
    const option = { threshold: 1 };
    const observer = new IntersectionObserver(cb, option);
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  // Todo: suspense 에러처리
  // if (nameInfo.isError || gifTypesInfo.isError)
  //   return <div>에러가 발생했습니다.</div>;

  console.log(isFetchingNextPage);

  return (
    <main className="flex-1 w-full bg-gray-50 dark:bg-gray-900 px-16 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24 mb-24">
          {data.pages.map((page, idx) => {
            return (
              <React.Fragment key={idx}>
                {page.map((pokemon) => (
                  <Card key={pokemon.id} pokemon={pokemon} />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {isFetchingNextPage && <Skeleton />}
      <div className="h-1" ref={ref} />
    </main>
  );
}

export default Content;
