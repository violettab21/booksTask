import "../../styles/main.css";
import { createBooksListElement } from "./booksList/booksList";
import { createFavoritesElement } from "./favorites/favoritesElement";
import { createSearchBlock } from "./search";
import { getFavoriteBooks } from "../services/favoriteBooks";
import { createDivElement, createElement } from "../utils/utils";

const favoriteBooks = getFavoriteBooks();

export function createMainContent() {
  const searchBlock = createSearchBlock();

  const booksList = createBooksListElement();
  const favoriteBooksList = createFavoritesElement(favoriteBooks);

  const booksSection = createDivElement(
    ["books"],
    [booksList, favoriteBooksList],
  );
  const main = createElement(
    "main",
    ["main", "container"],
    [searchBlock, booksSection],
  );
  return main;
}
