import { getBooks } from "./books";

let filteredBooks = [];
let filterAuthors = [];

export function setFilterAuthors(authors) {
  filterAuthors = authors;
  return filterAuthors;
}

export function getFilterAuthors() {
  return filterAuthors;
}

export function setFilteredBooks(books) {
  filteredBooks = books;
  return filteredBooks;
}

export function getFilteredBooks() {
  return filteredBooks;
}

export function filterBooksByAuthor(authors) {
  return setFilteredBooks(
    getBooks().filter((book) => {
      if (book.author_name) {
        return book.author_name.some((authorName) =>
          authors.includes(authorName),
        );
      } else {
        return false;
      }
    }),
  );
}
