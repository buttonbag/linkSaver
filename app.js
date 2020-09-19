const linkCategory = document.querySelector('#linkCategory');
const submitBtn = document.querySelector('#submitBtn');
const addBtn = document.querySelector('#addBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const addLinkPanel = document.querySelector('#addLinkPanel');

let linkCategories = [];
let links = [];

addBtn.addEventListener('click', (event) => {
	console.log('Clicked add');
	showFormPanel();
});

cancelBtn.addEventListener('click', (event) => {
	event.preventDefault();
	hideFormPanel();
});

showFormPanel = () => {
	addLinkPanel.classList.remove('hidden');
};
hideFormPanel = () => {
	addLinkPanel.classList.add('hidden');
};

linkCategory.addEventListener('keydown', (event) => {
	if (event.keyCode === 188) {
		event.preventDefault();
		console.log('user pressed comma');
		linkCategories.push(linkCategory.value);
		console.log(linkCategories);
		linkCategory.value = '';

		displayLinkCategories();
	}
});

displayLinkCategories = () => {
	console.log('Displaying Categories here');
};

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const title = linkTitle.value;
	const url = linkUrl.value;
	const categories = linkCategories;

	const newLink = {
		title: title,
		url: url,
		categories: categories,
	};

	console.log(newLink);

	links.push(newLink);

	linkTitle.value = '';
	linkUrl.value = '';
	linkCategory.value = '';
	linkCategories = [];

	displayLinkCategories();
	hideFormPanel();
});
