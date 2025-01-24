const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        role="status"
        aria-label="로딩 중"
        className="relative w-64 h-64 animate-spin"
      >
        <div className="absolute w-full h-1/2 rounded-t-full bg-gradient-to-b from-red-600 to-red-500 shadow-lg">
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
      <div className="text-gray-700 font-medium animate-pulse">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
