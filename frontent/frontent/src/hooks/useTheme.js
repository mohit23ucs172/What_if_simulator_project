import { useTheme } from "../context/ThemeContext";

export default function useThemeHook() {
  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleTheme };
}
