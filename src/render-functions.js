export const renderBookList = (bookListEl, books) => {
	// take in a container and data
	// render the data in the container
	bookListEl.innerHTML = ""; // clears out the HTML to reset the page.
	books.forEach((book) => {
		//created elements
		const li = document.createElement("li");
		const img = document.createElement("img");
		const p = document.createElement("p");
		const button = document.createElement("button");

		// manipulated the contents of the elements
		img.src = book.coverUrl;
		img.alt = `An old cover of ${book.title}`;

		p.textContent = `Title: ${book.title}`;

		button.textContent = `View ${book.author.name}`;
		button.setAttribute("data-author-url-key", book.author.urlKey);
		// button.dataset.authorUrlKey = book.author.urlKey;

		// append
		li.append(img, p, button);
		bookListEl.append(li);
	});
};

export const renderAuthorInfo = (authorInfoEl, author) => {
	authorInfoEl.innerHTML = "";
	const h2 = document.createElement("h2");
	const img = document.createElement("img");
	const p = document.createElement("p");
	const p2 = document.createElement("p");
	const a = document.createElement("a");

	h2.textContent = author.name;
	img.src = author.pictureUrl;
	img.alt = `A picture of ${author.name}`;
	p.textContent = `Born: ${author.birthDate}`;
	p2.textContent = author.bio;
	a.href = author.wikipediaUrl;
	a.textContent = `Wikipedia Link`;

	authorInfoEl.append(h2, img, p, p2, a);
};

export const renderNewUserForm = (newUserFormEl) => {
	newUserFormEl.innerHTML = `
	<label for="username">Username</label>
	<input id="username" name="username">
	<label for="is-cool">Is this user cool?</label>
	<input type="checkbox" id="is-cool" name="isCool">
	<label for="favorite-language">Favorite Language</label>
	<select name="favoriteLanguage" id="favorite-language">
		<option value="None">None</option>
		<option value="JavaScript">JavaScript</option>
		<option value="Python">Python</option>
		<option value="Ruby">Ruby</option>
	</select>
	<button>Create User</button>`;
};

export const renderNewUser = (newUserEl, newUser) => {
	newUserEl.innerHTML = "";
	const h2 = document.createElement("h2");
	h2.textContent = newUser.username;
	h2.dataset.userId = newUser.id;
	const p = document.createElement("p");
	if (newUser.isCool === true) p.textContent = `The hippest in the house!`;
	else p.textContent = "A real square.";
	const p2 = document.createElement("p");
	p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

	newUserEl.append(h2, p, p2);
};
