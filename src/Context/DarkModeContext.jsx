import { useContext, useState, createContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "dark"
  );

  const handleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", prev ? "light" : "dark");
      return !prev;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>{children}</div>
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
