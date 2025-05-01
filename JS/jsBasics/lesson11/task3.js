async function getToDoItem(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		if (!response.ok) {
			throw new Error('Request failed');
		}
		const data = await response.json();
		return console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
}

async function getUser(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if (!response.ok) {
			throw new Error('Request failed');
		}
		const data = await response.json();
		return console.log(data);
	} catch (error) {
		console.log(`Error:`, error);
	}
}

getToDoItem(8);
getUser(6);
