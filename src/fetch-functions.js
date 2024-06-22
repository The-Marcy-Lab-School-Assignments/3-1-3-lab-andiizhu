export const getFirstThreeFantasyBooks = async () => {
	// if you have a function that is marked as async, it will return a promise.
	try {
		// fetch data with URL
		const url = `https://openlibrary.org/subjects/fantasy.json`;
		const response = await fetch(url);
		// check to see if response is Ok
		if (!response.ok) throw new Error("Failed to get fantasy books");
		// parse the response body from JSON into JS object
		const jsonData = await response.json();

		// returns 3 books
		return jsonData.works.slice(0, 3).map((work) => {
			return {
				title: work.title,
				author: {
					name: work.authors[0].name,
					urlKey: work.authors[0].key,
				},
				coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`,
			};
		});
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};

export const getAuthor = async (urlKey) => {
	const url = `https://openlibrary.org${urlKey}.json`;
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error(`Failed to get author`);

		const jsonData = await response.json();

		const formattedAuthor = {
			birthDate: jsonData.birth_date,
			bio: jsonData.bio,
			wikipediaUrl: jsonData.wikipedia,
			name: jsonData.name,
			pictureUrl: `https://covers.openlibrary.org/a/id/${jsonData.photos[0]}-M.jpg`,
		};
		return formattedAuthor;
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};

export const createNewUser = async (user) => {
	try {
		const url = `https://jsonplaceholder.typicode.com/users`;
		const options = {
			method: "POST", // The type of HTTP request
			body: JSON.stringify(user), // The data to be sent to the API
			headers: {
				"Content-Type": "application/json", // The format of the body's data
			},
		};
		const response = await fetch(url, options);
		if (!response.ok) throw new Error("Failed to create new user");
		const jsonData = await response.json();

		const formattedUser = {
			username: jsonData.username,
			isCool: jsonData.isCool,
			favoriteLanguage: jsonData.favoriteLanguage,
			id: 11,
		};
		return formattedUser;
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};
