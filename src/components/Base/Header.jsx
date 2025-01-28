import { Moon, Search, Sun } from "lucide-react";

import Logo from "@/asset/Logo.png";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="h-header-height sticky top-0 z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-16 py-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Pokemon Logo" className="h-40" />
        </div>

        <div className="flex items-center gap-16">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="포켓몬 검색..."
              className="pl-40 pr-16 py-8 border border-gray-300 dark:border-gray-600 rounded-full w-246 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <Search className="absolute left-12 text-gray-400" size={20} />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-500" size={24} />
            ) : (
              <Moon className="text-gray-500" size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
