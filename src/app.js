import {
	renderBookList,
	renderAuthorInfo,
	renderNewUserForm,
	renderNewUser,
} from "./render-functions.js";
import {
	getFirstThreeFantasyBooks,
	getAuthor,
	createNewUser,
} from "./fetch-functions.js";

export default async function app(appDiv) {
	const bookListEl = document.createElement("ul");
	bookListEl.id = "book-list";
	appDiv.append(bookListEl);

	const authorInfoEl = document.createElement("div");
	authorInfoEl.id = "author-info";
	appDiv.append(authorInfoEl);

	const newUserEl = document.createElement("div");
	newUserEl.id = "new-user";
	appDiv.append(newUserEl);

	const newUserFormEl = document.createElement("form");
	newUserFormEl.id = "new-user-form";
	appDiv.append(newUserFormEl);
	// Render the form!
	// renderNewUserForm;
	renderNewUserForm(newUserFormEl);

	// Fetch the books!
	const books = await getFirstThreeFantasyBooks(); // need to await it because of async
	console.log(books);

	// render out the books
	renderBookList(bookListEl, books);

	bookListEl.addEventListener("click", async (event) => {
		// Check if the clicked element is a button.
		if (event.target.matches("button")) {
			// Get the author information and store it in a constant.
			const author = await getAuthor(event.target.dataset.authorUrlKey);
			// Render the author information :shrug:
			renderAuthorInfo(authorInfoEl, author);
		}
	});

	// books.author.urlKey;

	newUserFormEl.addEventListener("submit", async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formObject = Object.entries(formData);

		const newUser = await createNewUser(formObject);
		renderNewUser(newUserEl, newUser);

		event.target.reset();
	});
}
