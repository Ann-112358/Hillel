import Book from './Book.js';

export default class EBook extends Book {
	constructor(name, author, year, fileFormat) {
		super(name, author, year);
		this.fileFormat = fileFormat;
	}

	printInfo() {
		super.printInfo();
		console.log(`File Format: ${this.fileFormat}`);
	}

	static setAsEBook(book, fileFormat) {
		return new EBook(book.name, book.author, book.year, fileFormat);
	}

	set FileFormat(fileFormat) {
		if (typeof fileFormat !== 'string' || fileFormat.length < 1 || fileFormat === null || fileFormat === undefined) {
			console.log('Invalid file format');
			return;
		}
		this.fileFormat = fileFormat;
	}

	get FileFormat() {
		return this.fileFormat;
	}
}
