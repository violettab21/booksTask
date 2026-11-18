let booksStorage = [];

export function setBooks(books) {
  booksStorage = transformBooks(books);
  return booksStorage;
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
