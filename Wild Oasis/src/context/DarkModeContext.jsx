import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const userPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    userPreference,
    "isDarkMode"
  );

  const toggleDarkMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
