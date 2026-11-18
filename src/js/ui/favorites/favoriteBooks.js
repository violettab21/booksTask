import {
  createFavoriteBookElement,
  favoriteButtonHandler,
} from "./favoriteBookRow.js";
import { createDivElement, createParagraphElement } from "../../utils/utils.js";

export function createFavoritesListElement(favorites) {
  //create favorite books list container
  let favoriteListContent;
  if (favorites.length === 0) {
    favoriteListContent = createNoFavoritesMessage();
  } else {
    favoriteListContent = createFavoritesList(favorites);
  }

  const favoritesList = createDivElement(
    ["favoritesList"],
    favoriteListContent,
  );
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

export function createNoFavoritesMessage() {
  const messageElement = createParagraphElement("No favorites", ["message"]);
  return messageElement;
}
