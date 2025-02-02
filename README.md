# 포켓몬 도감
![pokebookimage](https://github.com/user-attachments/assets/e1f9c34f-94dd-40c6-84eb-a4f802c060b3)

- 포켓몬 정보를 확인하고 카드 클릭 시 원하는 포켓몬의 정보를 알 수 있습니다.
- **작업 기간:** 25.01 - 진행 중
- **배포 링크:** [링크](https://pokebook-ruby.vercel.app/)
- **Figma 구상도:** [디자인 시안](https://www.figma.com/design/2O2PukBFLaXxl3DWnsCImm/PokeBook?node-id=0-1&t=xZPROPfACi3a4jJL-1)
- **Stack:** React, TypeScript, React Query, Zustand, TailwindCSS, Vite

## 기능
- 포켓몬을 9개씩 확인할 수 있습니다.
- 스크롤할 경우 9개의 포켓몬이 추가됩니다.
- 포켓몬카드 클릭 시 모달로 포켓몬 정보를 확인할 수 있습니다.
- 다크모드 / 라이트모드
- 찾고 싶은 포켓몬을 검색할 수 있습니다.
- 검색된 포켓몬을 클릭할 경우 해당 포켓몬 카드로 focus됩니다.

## UI / UX
- 모달 관련 디테일(외부 스크롤, Layout Shift, 닫힐 때 애니메이션 적용) [관련 포스팅](https://velog.io/@cokid/%EC%9A%B0%EC%95%84%ED%95%9C-%EB%AA%A8%EB%8B%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- localStorage를 활용해 다크모드/라이트모드를 구현해서 새로고침해도 테마가 유지 됨
- <details>
  <summary>로딩스피너의 색을 선택된 포켓몬의 타입과 동일하게 설정</summary>
  <div>
    <img width="315" src="https://github.com/user-attachments/assets/a279e2e1-112f-45d8-ac63-5e4aa8e11d39"/>
    <img width="315" src="https://github.com/user-attachments/assets/b2371ca3-0b19-4a29-84e6-f07af8e26292"/>
    <img width="315" src="https://github.com/user-attachments/assets/05c22c45-2347-4ebb-8348-3d376dd2e354"/>
  </div>
</details>

## DX
- Suspense를 활용해 UI와 로딩처리 로직 분리 [관련 포스팅](https://velog.io/@cokid/Suspense%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81)
- <details>
    <summary>변경될 가능성이 있는 부분은 변수로 관리</summary>
    <img width="451" alt="스크린샷 2025-02-03 오전 12 37 17" src="https://github.com/user-attachments/assets/3f620f97-786d-4415-b312-d2a31313cc7f" />
</details>

## 최적화
- React.memo를 활용한 리렌더링 최소화 [관련 포스팅](https://velog.io/@cokid/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90-memo%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%A0%9C%EA%B1%B0)

## SEO
- sitemap.xml과 robots.txt를 추가해 SEO에 신경썼습니다.
- OG태그를 추가해 카카오톡으로 공유했을 때 프로젝트 정보가 미리보기로 나오게 했습니다.
<details>
  <summary>Lighthouse로 측정</summary>
<img width="1050" alt="스크린샷 2025-02-03 오전 12 41 49" src="https://github.com/user-attachments/assets/d902c477-b45f-4fda-bf02-72959954b95a" />
</details>
<details>
  <summary>OG태그</summary>
<img width="268" alt="스크린샷 2025-02-03 오전 12 43 32" src="https://github.com/user-attachments/assets/78976dab-1369-4c17-ad66-9d05e2879573" />
</details>
<details>
  <summary>sitemap.xml</summary>
  <img width="538" alt="스크린샷 2025-02-03 오전 12 44 14" src="https://github.com/user-attachments/assets/c90279ca-acc0-4c48-b88e-aa7fc48fa3cf" />
</details>
<details>
  <summary>robots.txt</summary>
  <img width="526" alt="스크린샷 2025-02-03 오전 12 44 39" src="https://github.com/user-attachments/assets/e58b1883-82f8-4a69-a2cf-af78798f3dc1" />
</details>

## 추가 기능(예정)
- [x] TS로 마이그레이션
- [ ] 한/영 전환
- [ ] API호출 최적화로 FCP 향상
- [ ] API에러 처리
- [ ] 검색창에 포켓몬을 화살표를 이용해 선택할 수 있도록

## 작업 화면
|Main|Dark Mode|
|----|---------|
|<img width="1334" alt="스크린샷 2025-02-03 오전 12 46 15" src="https://github.com/user-attachments/assets/7d34faca-a066-44f7-a07f-9bfb59a30711" />|<img width="1352" alt="스크린샷 2025-02-03 오전 12 46 44" src="https://github.com/user-attachments/assets/eb41fab0-ae4b-4f58-bf84-23f33605644c" />|

|Modal|Dark Mode Modal|
|-----|---------------|
|<img width="1347" alt="스크린샷 2025-02-03 오전 12 46 35" src="https://github.com/user-attachments/assets/5b4d0747-739d-4a47-8f4c-06f5952e7c4c" />|<img width="1340" alt="스크린샷 2025-02-03 오전 12 47 05" src="https://github.com/user-attachments/assets/59d42438-d453-4632-aec0-3bfd8a6eb168" />|

|Search|Search to Focus|
|------|---------------|
|![search](https://github.com/user-attachments/assets/deaa0630-6404-4808-af24-3e5690f1499b)|![search to focus](https://github.com/user-attachments/assets/7af2f1b9-ce47-4675-84e0-5b9ad11beaf8)|
|- 원하는 포켓몬을 검색|- 검색한 포켓몬을 선택하면 해당 포켓몬카드로 Focus|


## 👉 [프로젝트 포스팅](https://velog.io/@cokid/series/%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90)

## 👉 [프로젝트 이슈](https://github.com/cokid1998/pokebook/issues)

## Git Convention
```
Feat: 새로운 기능추가
Fix: 버그 수정
Docs: 문서 수정
Style: CSS 등 사용자 UI 디자인 변경
Refactor: 리팩토링
Test: 테스트 코드
Chore: 설정파일 및 자잘한 코드 수정
```
