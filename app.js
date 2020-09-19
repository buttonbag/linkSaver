const linkCategory = document.querySelector('#linkCategory');

let linkCategories = [];

console.log(linkCategory);

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
