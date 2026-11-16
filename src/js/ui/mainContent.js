import "../../styles/main.css";
import { createBooksListElement } from "./booksList/booksList";
import { createFavoritesElement } from "./favorites/favoritesElement";
import { createSearchBlock } from "./search";
import { getFavoriteBooks } from "../services/favoriteBooks";
import { createElement } from "../utils/utils";
import { createFiltersElement } from "./filters/filtersElement";

const favoriteBooks = getFavoriteBooks();

export function createMainContent() {
  const mainItems = document.createDocumentFragment();
  const searchBlock = createSearchBlock();

  const booksList = createBooksListElement();
  const favoriteBooksList = createFavoritesElement(favoriteBooks);
  const booksFragment = document.createDocumentFragment();
  booksFragment.append(booksList, favoriteBooksList);
  const booksSection = createElement("div", ["books"], booksFragment);
  mainItems.append(searchBlock, booksSection);
  const main = createElement("main", ["main", "container"], mainItems);
  return main;
}
