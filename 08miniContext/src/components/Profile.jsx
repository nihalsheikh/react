import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user } = useContext(UserContext);

	if (!user)
		return (
			<div className="text-red-600 text-4xl font-bold bg-amber-300 m-4 p-4 text-center">
				Please Login
			</div>
		);

	return (
		<div className="text-4xl font-bold bg-emerald-600 text-white m-4 p-4 text-center">
			{" "}
			Welcome! {user.username}{" "}
		</div>
	);
}

export default Profile;
