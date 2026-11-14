import { createFavoriteBookElement } from "./favoriteBookRow.js";
import { createElement } from "../../utils/utils.js";

export function createFavoritesListElement(favorites) {
  const favoritesFragment = createFavoritesList(favorites);
  const favoritesList = createElement(
    "div",
    ["favoritesList"],
    favoritesFragment,
  );
  return favoritesList;
}

export function createFavoritesList(favorites) {
  const favoritesFragment = document.createDocumentFragment();
  for (let i = 0; i < favorites.length; i++) {
    const favoriteBook = createFavoriteBookElement(favorites[i]);
    favoritesFragment.append(favoriteBook);
  }
  return favoritesFragment;
}
