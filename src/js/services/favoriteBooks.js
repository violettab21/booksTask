const LOCAL_STORAGE_FAVORITES_KEY = "favorites";

export function saveFavoriteBook(book) {
  const favoriteBooks = getFavoriteBooks();
  favoriteBooks.push(book);
  localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  return favoriteBooks;
}

export function removeFavoriteBook(bookKey) {
  let favoriteBooks = getFavoriteBooks();
  favoriteBooks = favoriteBooks.filter(
    (storageBook) => storageBook.key !== bookKey,
  );
  localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  return favoriteBooks;
}

export function isBookFavorite(bookKey) {
  const favoriteBooksData = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
  if (!favoriteBooksData) {
    return false;
  }
  const favoriteBooks = JSON.parse(favoriteBooksData);
  return favoriteBooks.some((book) => book.key === bookKey);
}

export function getFavoriteBooks() {
  const favoriteBooksData = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY);
  if (favoriteBooksData) {
    const favoriteBooks = JSON.parse(favoriteBooksData);
    return favoriteBooks;
  }
  return [];
}
