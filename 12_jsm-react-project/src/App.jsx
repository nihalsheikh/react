import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
	const [hasLiked, setHasLiked] = useState(false);
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log(`${title} Movie was liked: ${hasLiked}`)
	}, [hasLiked])

	return (
		<>
			<div className="card">
				<h2>{title}</h2>

				<button onClick={() => setHasLiked(!hasLiked)}>
					{hasLiked ? "❤️" : "🤍"}
				</button>
			</div>
		</>
	);
};

const App = () => {
	return (
		<div className="card-container">
			<Card
				title="John Wick"
				rating={5}
				isCool={true}
				actors={[{ name: "Keanu Reeves" }]}
			/>
			<Card
				title="Harry Potter"
				rating={5}
				isCool={true}
				actors={[{ name: "Samuel L. Jackson" }]}
			/>
			<Card
				title="Gran Turismo"
				rating={5}
				isCool={true}
				actors={[{ name: "Bradd Pitt" }]}
			/>
		</div>
	);
};

export default App;
