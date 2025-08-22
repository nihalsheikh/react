import Card from "./components/Card";
import UserContextProvider from "./context/UserContextProvider";
import Login from './components/Login';
import Profile from "./components/Profile";

function App() {
	return (
		<UserContextProvider>
			<h1 className="text-4xl text-center bg-emerald-500 mt-4 p-4 font-bold">
				Context API using .provider from react
			</h1>

			{/* <Card /> */}
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
