import { useState } from "react";
import "./App.css";

function App() {
	console.log("Render App:", Math.random());
	const [value, setValue] = useState({ value: 0 });

	// const [multipliedValue, setMultipliedValue] = useState(1);

	// let multipliedValue = value * 5;

	// const multiplyNum = () => {
	// 	// setMultipliedValue(value * 5);
	// 	setValue(value + 1);
	// };

	const clickMe = () => {
		// console.log("logged");
		setValue({ value: 0 });
	};

	return (
		<>
			<h1>Main Value: {value.value} </h1>

			<button onClick={clickMe}>Click to Multiply by 5</button>

			{/* <h2>Multiplied Value: {multipliedValue}</h2> */}
		</>
	);
}

export default App;
