import { Client, Databases, ID, Query } from "appwrite";
import { data } from "react-router-dom";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const USER_ID = import.meta.env.VITE_APPWRITE_AUTH_USER_ID;

// get access to Appwrite's functionalities by defining a new Appwrite client
const client = new Client()
	.setEndpoint(`${APPWRITE_ENDPOINT}`)
	.setProject(`${PROJECT_ID}`);

// which functionality use from appwrite
const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
	// 1. Use APPWRITE to check if searchTerm exists in the database
	try {
		const result = await database.listDocuments(
			DATABASE_ID,
			COLLECTION_ID,
			[Query.equal("searchTerm", searchTerm)]
		);

		// 2. if searchTerm exists, update the count
		if (result.documents.length > 0) {
			const doc = result.documents[0];

			await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
				count: doc.count + 1,
			});
			// 3. if no document is found, create a new document with the searchTerm and count and set count = 1
		} else {
			await database.createDocument(
				DATABASE_ID,
				COLLECTION_ID,
				ID.unique(),
				{
					searchTerm,
					count: 1,
					movie_id: movie.id,
					poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
				}
			);
		}
	} catch (error) {
		console.log(error);
	}
};

export const getTrendingMovies = async () => {
	try {
		const result = await database.listDocuments(
			DATABASE_ID,
			COLLECTION_ID,
			[Query.limit(5), Query.orderDesc("count")]
		);

		return result.documents;
	} catch (error) {
		console.log(error);
	}
};
