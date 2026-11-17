import {
  createDivElement,
  createElement,
  createParagraphElement,
} from "../../utils/utils.js";

import "../../../styles/favorites.css";
import { createFavoritesListElement } from "./favoriteBooks.js";
import { createFavoriteBookElement } from "./favoriteBookRow.js";
import favoriteImg from "../../../assets/heart.svg?raw";

export function createFavoritesElement(favorites) {
  //create favorites header
  const favoriteHeader = createFavoritesHeaderElement(favorites.length);
  //create favorites list
  const favoriteList = createFavoritesListElement(favorites);

  const favoritesContainer = createDivElement(
    ["favoritesContainer"],
    [favoriteHeader, favoriteList],
  );
  return favoritesContainer;
}

export function createFavoritesHeaderElement(favoritesCount) {
  //create favorites title text
  const favoritesTitle = createParagraphElement("Favorites", [
    "favoritesTitle",
  ]);
  const favoritesDescription = createParagraphElement(
    `${favoritesCount} books saved`,
    ["favoritesCountText"],
  );
  const favoritesTitleTextContainer = createDivElement(
    ["favoritesTitleTextContainer"],
    [favoritesTitle, favoritesDescription],
  );
  //icon
  const favoriteIconContainer = createDivElement(["favoritesIconContainer"]);
  favoriteIconContainer.innerHTML = favoriteImg;

  const favoriteTitleContainer = createDivElement(
    ["favoriteTitleContainer"],
    [favoriteIconContainer, favoritesTitleTextContainer],
  );
  const favoriteHeader = createDivElement(
    ["favoritesHeader"],
    favoriteTitleContainer,
  );
  return favoriteHeader;
}

export function showNewFavorite(book) {
  const favoriteBookContainer = document.querySelector(".favoritesList");
  const newFavoriteBookRow = createFavoriteBookElement(book);
  favoriteBookContainer.append(newFavoriteBookRow);
}

export function removeFavorite(bookKey) {
  const favoriteBookContainer = document.querySelector(".favoritesList");
  const favoriteBooksElements =
    favoriteBookContainer.querySelectorAll(".favoriteBookRow");
  console.log(favoriteBooksElements);
  const removedBook = Array.from(favoriteBooksElements).find(
    (element) => element.dataset.key === bookKey,
  );
  removedBook.remove();
}

export function updateFavoritesCount(count) {
  const countTextElement = document.querySelector(".favoritesCountText");
  countTextElement.textContent = `${count} books saved`;
}
