const toggleForm = document.querySelectorAll(".toggleform");
const signUp = document.querySelector(".signup");
const logIn = document.querySelector(".login");

toggleForm.forEach((element) => {
	element.addEventListener("click", () => {
		let currentDiv = logIn;
		currentDiv.classList.add("hidden");
		if (currentDiv === logIn) {
			currentDiv = signUp;
		} else {
			currentDiv = logIn;
		}

		currentDiv.classList.remove("hidden");
	});
});

const agreed = document.querySelector(".checkbox");
agreed.addEventListener("click", () => {
	agreed.classList.toggle("agree");
});

const signupBtn = document.querySelector(".sign-up");
const loginBtn = document.querySelector(".log-in");

/* --------------------------- reuseable functions -------------------------- */
const displaySuccessOrError = () => {};
const redirectTOHome = () => {};
const getUserInput = (e) => {
	// Prevent the default form submission
	e.preventDefault();

	// Get the input elements
	const nameInput = document.querySelector(".name");
	const emailInput = document.querySelector(".email");
	const passwordInput = document.querySelector(".password");

	// Get the values from the input fields
	const name = nameInput ? nameInput.value.trim() : "";
	const email = emailInput ? emailInput.value.trim() : "";
	const password = passwordInput ? passwordInput.value : "";

	// Log the values (you can remove this in production)
	console.log("Name:", name);
	console.log("Email:", email);
	console.log("Password:", password);

	// Return an object with the user input
	return { name, email, password };
}

signupBtn.addEventListener("click", (e) => {
	const userInput = getUserInput(e);
});
