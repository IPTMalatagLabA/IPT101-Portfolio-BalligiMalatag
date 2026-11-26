export function createBook(title, author, year) {
    return {
        title,
        author,
        year,

        getBookLabel() {
            return `${this.title} — ${this.author} (${this.year})`;
        }
    };
}

export function formatBookStatus(book, status) {
    return `Book: ${book.title} | Author: ${book.author} | Year: ${book.year} | Status: ${status}`;
}

export const bookRecord = createBook("Noli Me Tangere", "Jose P. Rizal", 1887);
