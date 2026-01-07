import { ThemeContext } from "@/context/themeContext";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;
  const { theme, toggleTheme } = context;

  const toggle = () => {
    console.log("toggle", theme);
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="fixed right-6 cursor-pointer bottom-8 " onClick={toggle}>
      {theme === "dark" ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};
export default ThemeSwitcher;
