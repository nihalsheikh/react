export const githubInfoLoader = async () => {
	try {
		const username = "nihalsheikh";
		const response = await fetch(
			`https://api.github.com/users/${username}`,
			{
				method: "GET",
				headers: {
					Accept: "application/vnd.github+json",
					"X-GitHub-Api-Version": "2022-11-28",
				},
			}
		);

		if (!response.ok) {
			throw new Error(
				`GitHub API Error: ${response.status} ${response.statusText}`
			);
		}
		const userData = await response.json();

		return {
			login: userData.login,
			name: userData.name,
			avatar_url: userData.avatar_url,
			followers: userData.followers,
			following: userData.following,
			public_repos: userData.public_repos,
			bio: userData.bio,
			location: userData.location,
			blog: userData.blog,
		};
	} catch (error) {
		console.error("Error fetching GitHub data:", error);
		return {
			login: "github-user",
			name: "GitHub User",
			avatar_url: "https://via.placeholder.com/150",
			followers: 0,
			following: 0,
			public_repos: 0,
			bio: "Unable to load GitHub data",
			location: "Unknown",
			blog: "",
		};
	}
};
