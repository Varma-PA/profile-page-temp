import { createContext } from "react";

type ThemeContextType = "light" | "dark" | null;

// interface ThemeContextType{
//     color: string;
// }

const ThemeContext: any = createContext<ThemeContextType>(null);

export { ThemeContext };
