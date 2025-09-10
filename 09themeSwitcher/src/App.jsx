import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	const lightTheme = () => {
		setThemeMode("light");
	};

	const darkTheme = () => {
		setThemeMode("dark");
	};

	// actaul change in a theme
	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
			<h1 className="text-4xl font-bold bg-emerald-600 m-4 p-4 text-white text-center">
				Tailwind Switch Themes: Light - Dark
			</h1>

			<div className="flex flex-col min-h-screen items-center">
				<div className="h-auto">
					<div className="w-full text-2xl max-w-sm mx-auto flex justify-items-center mb-4">
						<ThemeButton />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
