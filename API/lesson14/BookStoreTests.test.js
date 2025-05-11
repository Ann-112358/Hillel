import AuthController from './controllers/authController.js';
import BookController from './controllers/bookController.js';
import {userName, password, isbn, userId } from './controllers/config.js';

let authController;
let token;
let bookController;

beforeAll(async () =>{
    authController = new AuthController(userName, password);
    token = await authController.getToken();
    bookController = new BookController(token);
})

test("Verify number of books", async () => {
    const response = await bookController.getAllBooks();
    const responseBody = response.data;

    expect(responseBody.books).toHaveLength(8)
    expect(response.status).toBe(200);
});

test("Verify that all books are published after 2010", async () => {
    const response = await bookController.getAllBooks();
    const responseBody = response.data;
    const books = responseBody.books;
    const publishYears = books.map(book => new Date(book.publish_date).getFullYear());

    publishYears.forEach(year => expect(year).toBeGreaterThan(2010));
    expect(response.status).toBe(200);
});

test("Add book", async () => {
    const response = await bookController.addBook(userId, isbn) 
    const responseBody = response.data; 
    const isIsbnPresent = responseBody.books.some(book => book.isbn === isbn);

    expect(isIsbnPresent).toBe(true);   
    expect(response.status).toBe(201);
});

test("Delete book", async () => {
    const response = await bookController.deleteBook(userId, isbn)

    expect(response.status).toBe(204);
});

test("Verify book by ISBN", async () => {
    const response = await bookController.verifyIsbn();
    const responseBody = response.data;

    expect(responseBody.title).toBe("Learning JavaScript Design Patterns");
    expect(response.status).toBe(200);
});

test("Delete books", async () => {
    const response = await bookController.deleteAllBooks()
   
    expect(response.status).toBe(204);
});

