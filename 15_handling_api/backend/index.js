// server backend
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
	const products = [
		{
			id: 1,
			name: "wireless bluetooth headphones",
			price: 79.99,
			image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 2,
			name: "smartphone case",
			price: 24.99,
			image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 3,
			name: "coffee mug",
			price: 12.5,
			image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 4,
			name: "laptop stand",
			price: 45.0,
			image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 5,
			name: "running shoes",
			price: 89.99,
			image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 6,
			name: "backpack",
			price: 55.75,
			image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 7,
			name: "desk lamp",
			price: 32.0,
			image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 8,
			name: "water bottle",
			price: 18.99,
			image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 9,
			name: "wireless mouse",
			price: 29.5,
			image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
		{
			id: 10,
			name: "sunglasses",
			price: 65.0,
			image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=300",
		},
	];

	if (req.query.search) {
		const filterProducts = products.filter((product) =>
			product.name.includes(req.query.search)
		);

		res.send(filterProducts)
		return; // imp to return/exit the method, else this will crash application
	}

	// we want some filtering in url params like following
	// http://localhost:3000/api/products?search=wireless
	// ? in url is Query parameter
	setTimeout(() => {
		res.send(products);
	}, 3000);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
