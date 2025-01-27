function ShinyToggle({ setShowShiny }) {
  return (
    <div className="flex justify-center items-end mt-12">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => setShowShiny((prev) => !prev)}
        />
        <div className="w-44 h-24 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-20 after:w-20 after:transition-all dark:border-gray-200 peer-checked:bg-blue-300"></div>
        <span className="ml-12 text-base font-bold text-black dark:text-gray-300">
          이로치
        </span>
      </label>
    </div>
  );
}

export default ShinyToggle;
