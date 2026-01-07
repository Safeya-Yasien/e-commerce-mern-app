import { createContext } from "react";

export interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: (theme: "dark" | "light") => void;
}

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});
