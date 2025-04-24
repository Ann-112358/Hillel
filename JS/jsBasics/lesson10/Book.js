export default class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Name: ${this.name} | Author: ${this.author} | Year: ${this.year} |`);
    }

    static oldestBook(books, ebooks) {
        let allBooks = books.concat(ebooks);
        let oldest = allBooks.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
        return console.log(`Oldest book: ${oldest.name} | Author: ${oldest.author} | Year: ${oldest.year}`);
      
    }

    set Name(name) {
        if (typeof name !== 'string' || name.length < 1 || name === null || name === undefined) {
            console.log("Invalid name");
        } else this.name = name;
    }
    get Name() {
        return this.name.toUpperCase();
    }

    set Author(author) {
        if (typeof author !== 'string' || author.length < 1 || author === null || author === undefined) {
            console.log("Invalid author");
        } else this.author = author;
    }
    get Author() {
        return this.author;
    }

    set Year(year) {
        if (typeof year !== 'number' || year < 1900 || year === null || year === undefined) {
            console.log("Invalid year");
        } else this.year = year;
    }

    get Year() {
        return this.year;
    }
}

