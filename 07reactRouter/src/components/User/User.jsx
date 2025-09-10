import React from "react";
import image from "../../assets/image.jpg";
import { useParams } from "react-router-dom";

function User() {
	const { userid } = useParams();
	return (
		<div className="py-16 bg-white">
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:5/12 lg:w-5/12">
						<img src={image} alt="image" />
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2 className="text-2xl text-gray-300 font-bold md:text-4xl bg-emerald-700 text-center px-4 py-4">
							USER : {userid}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;
