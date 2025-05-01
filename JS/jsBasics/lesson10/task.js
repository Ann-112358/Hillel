import Book from './book.js';
import EBook from './ebook.js';

const book1 = new Book("Harry Potter and the Philosopher's Stone", 'J.K.Rowling', 1997);
const book2 = new Book('Atomic Habits', 'J.Clear', 2018);
const book3 = new Book('The Da Vinci Code', 'D.Brown', 2003);
const ebook1 = new EBook('Harry Potter and the Prisoner of Azkaban', 'J.K.Rowling', 1999, 'PDF');

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

console.log('--------------------------------------------------');

book1.Name = null;
book2.Author = true;
book3.Year = 1899;
ebook1.FileFormat = undefined;

console.log(book1.Name);
console.log(book2.Author);
console.log(book3.Year);
console.log(ebook1.FileFormat);

Book.oldestBook([book1, book2, book3], [ebook1]);

console.log('--------------------------------------------------');

const ebook2 = EBook.setAsEBook(book2, 'EPUB');
ebook2.printInfo();
