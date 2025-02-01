import "pokenode-ts";

/**
 * 포켓몬 데이터 타입을 확장
 * - `cries`: 포켓몬의 울음소리 관련 정보. PokéAPI 문서에 정의되어 있으나, `pokenode-ts`의 기본 `Pokemon` 타입에는 포함되어 있지 않음.
 * - `past_abilities`: API 응답에 존재하지만, PokéAPI 문서에 명확한 설명이 없는 속성. 정확한 의미가 불분명하여 `any` 타입으로 정의.
 */

interface CriesType {
  latest: APIResource;
  legacy: APIResource;
}

declare module "pokenode-ts" {
  interface Pokemon {
    cries: CriesType[];
    past_abilities: any; // 공식 문서에 정의돼있지 않아 `any` 타입으로 처리
  }

  interface FlavorText {
    version?: NamedAPIResource;
    version_group?: NamedAPIResource;
  }
}
