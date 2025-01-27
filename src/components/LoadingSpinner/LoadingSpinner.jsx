const LoadingSpinner = ({ type }) => {
  // tailwind는 스타일로 컴파일되는 시점에서 코드를 지워버린다.
  // 따라서 아래처럼 빌드시 완전한 클래스 네임을 만들어서 bracket notation으로 접근해야한다
  // https://tailwindcss.com/docs/detecting-classes-in-source-files
  const typeColor = {
    normal: "[#949495]",
    water: "[#5185C5]",
    fighting: "[#E09C40]",
    grass: "[#66A945]",
    flying: "[#A2C3E7]",
    electric: "[#FBB917]",
    poison: "[#735198]",
    psychic: "[#DD6B7B]",
    ground: "[#9C7743]",
    ice: "[#6DC8EB]",
    rock: "[#BFB889]",
    dragon: "[#535CA8]",
    bug: "[#9FA244]",
    dark: "[#4C4948]",
    ghost: "[#684870]",
    fairy: "[#DAB4D4]",
    steel: "[#69A9C7]",
    fire: "[#E56C3E]",
    stellar: "[#44628D]",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        role="status"
        aria-label="로딩 중"
        className="relative w-64 h-64 animate-spin"
      >
        <div
          className={`absolute w-full h-1/2 rounded-t-full shadow-lg bg-${typeColor[type]}`}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gray-800" />
          <div className="absolute top-[15%] left-[10%] w-[35%] h-[20%] bg-white/20 rounded-full transform -rotate-12" />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-gradient-to-b from-gray-100 to-white shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gray-800" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full border-4 border-gray-800 shadow-inner">
          <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white rounded-full" />
        </div>
      </div>
      <div className={`text-${typeColor[type]} font-black animate-pulse`}>
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;
