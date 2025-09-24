import { useState } from "react";
import "./App.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(0);

	return (
		<div style={{ padding: "2rem" }}>
			<h1>Production Mistakes</h1>

			<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
				Toggle Login
			</button>

			<div>
				<h3>&& operator</h3>
				{isLoggedIn && <p>Chai code videos</p>}
			</div>

			<div>
				<h3>Ternary operator</h3>
				{isLoggedIn ? <p>Chai code videos</p> : <h2>Please login</h2>}
			</div>
		</div>
	);
}

export default App;
