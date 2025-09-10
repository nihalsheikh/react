import { createContext, useContext } from "react";

export const ThemeContext = createContext({
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});

// making a provider
export const ThemeProvider = ThemeContext.Provider;

// making a hook
export default function useTheme() {
	return useContext(ThemeContext);
}
