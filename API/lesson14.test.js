const axios = require('axios').default;

test("Verify number of photos", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const responseBody = response.data;
    expect(responseBody).toHaveLength(5000);
    expect(response.status).toBe(200);
})

test("Verify Username Delphine is presented", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const responseBody = response.data;
    const user = responseBody.find(user => user.username === "Delphine");
    expect(user).toBeDefined();
    expect(user.username).toBe("Delphine");
    expect(response.status).toBe(200);
})

test("Verify if new comment is posted", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        "postId": 501,
        "name": "Very interesting post",
        "email": "annaanna@gmail.com",
        "body": "lorem ipsum bla bla bla" 
    });
    const responseBody = response.data;
    expect(responseBody.id).toBeGreaterThan(500);
    expect(response.status).toBe(201);
})

test("Verify all album IDs are unique", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    const responseBody = response.data;
    const Ids = responseBody.map(id => id.id)
    const uniqueIds = new Set(Ids);
    expect(uniqueIds.size).toBe(Ids.length);
    expect(response.status).toBe(200);
})

test("Verify if new ToDo item is added", async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
        "userId": 1,
        "title": "learn JS",
        "completed": "in progress"     
    });
    const responseBody = response.data;
    expect(responseBody.title).toBe("learn JS");
    expect(responseBody.id).toBeGreaterThan(200);
    expect(response.status).not.toBe(404);
})



