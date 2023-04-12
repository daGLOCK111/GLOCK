const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	if (username.value === '' || password.value === '') {
		alert('Please enter a username and password.');
	} else {
		alert(`Welcome back, ${username.value}!`);
		form.reset();
	}
});