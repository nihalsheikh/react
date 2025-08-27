import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
	return (
		<>
			<h1 className="m-2 p-2 text-4xl font-bold text-white bg-emerald-700 text-center">
				Redux: React-Redux and Redux Toolkit
			</h1>
			<h2 className="text-center m-2 p-2 text-3xl bg-fuchsia-700 text-white">
				Todo App
			</h2>
			<div className="flex flex-col item-center justify center m-4 p-4 bg-blue-400">
				<AddTodo />
				<Todos />
			</div>
		</>
	);
}

export default App;
