import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get("/api/jokes")
			.then((res) => {
				setJokes(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<h1>This is frontend</h1>

			<p>Total Jokes: {jokes.length}</p>

			{jokes.map((joke) => (
				<div key={joke.id} className="flex flex-col m-3 p-2 bg-green-600 rounded-xl">
					<h3 className="text-center text-3xl font-bold">{joke.title}</h3>
					<p className="m-2 justify-center">{joke.content}</p>
				</div>
			))}
		</>
	);
}

export default App;
