import { createBook, formatBookStatus } from './bookModule.js';

const book = createBook("El Filibusterismo", "Jose P. Rizal", 1891);

console.log(book.title);
console.log(book.getBookLabel());
console.log(formatBookStatus(book, "Available"));
