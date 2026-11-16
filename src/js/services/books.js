let booksStorage = [];
let filteredBooks = [];
let filterAuthors = [];
console.log(filterAuthors);

export function setBooks(books) {
  booksStorage = transformBooks(books);
  return booksStorage;
}

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

export function getBooks() {
  return booksStorage;
}

export function getBookByKey(key) {
  return booksStorage.find((book) => book.key === key);
}

export function getBooksAuthors() {
  const books = getBooks();
  const authors = new Set();
  books.forEach((book) => {
    if (book.author_name) {
      if (Array.isArray(book.author_name)) {
        book.author_name.forEach((author) => {
          authors.add(author);
        });
      } else {
        authors.add(book.author_name);
      }
    }
  });
  return Array.from(authors);
}

export function transformBooks(books) {
  return books.map((book) => ({
    key: book.key,
    title: book.title,
    author_name: book.author_name,
    first_publish_year: book.first_publish_year,
    cover_i: book.cover_i,
  }));
}

export function filterBooksByAuthor(authors) {
  console.log(getFilterAuthors());
  console.log(getBooks());
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
