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

export function transformBooks(books) {
  return books.map((book) => ({
    key: book.key,
    title: book.title,
    author_name: book.author_name,
    first_publish_year: book.first_publish_year,
    cover_i: book.cover_i,
  }));
}
