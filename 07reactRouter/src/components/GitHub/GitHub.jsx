import React from "react";
import { useLoaderData, useRouteError } from "react-router-dom";

function GitHub() {
	const data = useLoaderData();
	const error = useRouteError();

	if (error) {
		return <div>Error: {error.message}</div>; // Display the error message
	}
	return (
		<>
			<h1 className="text-center m-4 bg-gray-600 text-white p-4 text-4xl">
				GitHub Stats
			</h1>

			<div className="m-4 bg-gray-500 p-2 flex flex-row justify-between">
				<div className="text-center text-black text-2xl flex flex-col">
					<img
						src={data.avatar_url}
						alt="Profile Picture"
						width={300}
					/>
					<div className="mt-4">Username</div>
				</div>

				<div className="text-center m-4 text-white text-xl flex flex-col justify-between">
					<div>Followers: {data.followers}</div>
					<div>Other stats</div>
				</div>
			</div>
		</>
	);
}

export default GitHub;
