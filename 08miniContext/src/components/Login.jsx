import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [username, setUsernmae] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};

	return (
		<>
			<h2 className="text-3xl font-bold mt-4 text-center bg-amber-700 p-4 text-white">
					Login
			</h2>
			<div className="flex items-center justify-center">
				<div className="flex flex-col w-100 bg-gray-900 m-4 p-2 rounded-xl">
					<input
						type="text"
						placeholder="username"
						value={username}
						onChange={(e) => setUsernmae(e.target.value)}
						className="text-2xl border-blue-400 border-4 rounded-xl text-black m-4 p-5 bg-white"
					/>
					<br />
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="text-2xl border-blue-400 border-4 rounded-xl text-black m-4 p-5 bg-white"
					/>
					<br />
					<button
						onClick={handleSubmit}
						className="text-xl font-bold border-emerald-400 border-4 rounded-xl text-white m-4 p-5 bg-emerald-700 cursor-pointer hover:bg-emerald-400 hover:text-black"
					>
						Submit
					</button>
				</div>
			</div>
		</>
	);
}

export default Login;
