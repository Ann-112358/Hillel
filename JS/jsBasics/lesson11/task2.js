function getToDoItem(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => response.json());
}

function getUser(id) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
}

const pleaseMakeAllPromisesDoneAllTogether = Promise.all([getToDoItem(3), getUser(8)])
	.then((data) => console.log(`DATA: `, data))
	.catch((error) => console.error('Error:', error));

const letsSeeWhatWillBeDoneFirst = Promise.race([getToDoItem(5), getUser(8)])
	.then((data) => console.log(`Here is a win: `, data))
	.catch((error) => console.error('Error:', error));
