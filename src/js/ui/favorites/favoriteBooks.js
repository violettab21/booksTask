import {
  createFavoriteBookElement,
  favoriteButtonHandler,
} from "./favoriteBookRow.js";
import { createDivElement } from "../../utils/utils.js";

export function createFavoritesListElement(favorites) {
  //create favorite books list container
  const favoritesFragment = createFavoritesList(favorites);
  const favoritesList = createDivElement(["favoritesList"], favoritesFragment);
  favoritesList.addEventListener("click", (event) => {
    favoriteButtonHandler(event);
  });
  return favoritesList;
}

export function createFavoritesList(favorites) {
  //create favorite books list fragment
  const favoritesFragment = document.createDocumentFragment();
  for (let i = 0; i < favorites.length; i++) {
    const favoriteBook = createFavoriteBookElement(favorites[i]);
    favoritesFragment.append(favoriteBook);
  }
  return favoritesFragment;
}
