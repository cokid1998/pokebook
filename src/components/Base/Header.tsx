import { Moon, Sun } from "lucide-react";
import Logo from "@/asset/Logo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import { DARKMODE_TOGGLE_DURATION } from "@/constants/constants";
import { useSetTheme, useTheme } from "@/store/themeStore";

function Header() {
  const currentTheme = useTheme();
  const setTheme = useSetTheme();

  const handleDarkMode = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="h-header-height sticky top-0 z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-16 py-12">
      <div>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`flex items-center`}>
            <img src={Logo} alt="Pokemon Logo" className="h-40" />
          </div>

          <div className="flex items-center justify-end w-full">
            <SearchBar />

            <button
              onClick={handleDarkMode}
              className={`mr-16 mobile:mr-0 p-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-${
                DARKMODE_TOGGLE_DURATION * 1000
              }`}
            >
              {currentTheme === "light" ? (
                <Sun className={`text-gray-500`} size={24} />
              ) : (
                <Moon className={`text-gray-500`} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
