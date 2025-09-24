import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	// const [products, error, loading] = customReactQuery("/api/products");

	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		// we can't use async await in hooks, so we use iif: Immediately Invoked Function: ()()
		// ()(), in this the first () is the name of the function, the other is used to call the function
		(async () => {
			try {
				setError(false);
				setLoading(true);
				const response = await axios.get(
					"/api/products?search=" + search,
					{
						signal: controller.signal,
					}
				);
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log("Request Cancelled", error.message);
					return;
				}
				console.error(error);
				setError(true);
				setLoading(false);
			}
		})();

		// cleanup mount component
		return () => {
			controller.abort();
		};
	}, [search]);

	// if (error) return <h1>Something went wrong</h1>;

	// if (loading) return <h1>Loading...</h1>;

	return (
		<>
			<h1>Handling API</h1>

			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{loading && <h1>Loading...</h1>}
			{error && <h1>Something went wrong</h1>}

			<h2>Total Products: {products.length} </h2>
		</>
	);
}

export default App;

// custom hook

const customReactQuery = (urlPath) => {
	// const [products, setProducts] = useState([]);
	// const [error, setError] = useState(false);
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	// we can't use async await in hooks, so we use iif: Immediately Invoked Function: ()()
	// 	// ()(), in this the first () is the name of the function, the other is used to call the function
	// 	(async () => {
	// 		try {
	// 			setError(false);
	// 			setLoading(true);
	// 			const response = await axios.get(urlPath);
	// 			console.log(response.data);
	// 			setProducts(response.data);
	// 			setLoading(false);
	// 		} catch (error) {
	// 			console.error(error);
	// 			setError(true);
	// 			setLoading(false);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	})();
	// }, []);

	return [products, error, loading];
};
