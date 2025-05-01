
class GetToDoItem {
    constructor(id) {
        this.id = id;
    }

    getTodos() {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
            .then(response => response.json())
            .then(data => console.log(`TODO item: `, data))
            .catch(error => console.error('Error:', error));
    }
}

class GetUser {
    constructor(id) {
        this.id = id;
    }

    getUser() {
        return fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .then(response => response.json())
            .then(data => console.log(`User: `, data))
            .catch(error => console.error('Error:', error));
    }
}

const todoItem = new GetToDoItem(3);
const user = new GetUser(9);

todoItem.getTodos();
user.getUser();
