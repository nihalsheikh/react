// Backend server
// we are assembling JS file in a module way
// to specify this, we write: "type": "module" in json file, only write one format & not both
import express from "express"; // module syntax: this works asynchronously
// const express = require("express") // commonjs syntax: this works synchronously

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Server is ready");
// });

// PORT is made in .env to keep it secure at Production
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

// get some jokes from a route we create
app.get("/api/jokes", (req, res) => {
	const jokes = [
		{
			id: 1,
			title: "First Joke",
			content: "This is a first joke",
		},
		{
			id: 2,
			title: "Second Joke",
			content: "This is a second joke",
		},
		{
			id: 3,
			title: "Third Joke",
			content: "This is a third joke",
		},
		{
			id: 4,
			title: "Fourth Joke",
			content: "This is a fourth joke",
		},
		{
			id: 5,
			title: "Fifth Joke",
			content: "This is a fifth joke",
		},
	]; 

	res.send(jokes)
});
