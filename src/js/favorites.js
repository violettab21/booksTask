import { createElement, createParagraphElement } from "./utils/utils";
import favoriteImg from "../assets/heart.svg";
import "../styles/favorites.css";

export function createFavoritesElement(favorites) {
  //create favorites title text
  const favoritesTitle = createParagraphElement("Favorites", [
    "favoritesTitle",
  ]);
  const favoritesDescription = createParagraphElement(
    `${favorites.length} books saved`,
    ["favoritesCountText"],
  );
  const favoritesTitleTextFragment = document.createDocumentFragment();
  favoritesTitleTextFragment.append(favoritesTitle, favoritesDescription);
  const favoritesTitleTextContainer = createElement(
    "div",
    ["favoritesTitleTextContainer"],
    favoritesTitleTextFragment,
  );
  //icon
  const favoriteIcon = createElement("img", ["favoritesIcon"]);
  favoriteIcon.src = favoriteImg;
  const favoriteIconContainer = createElement(
    "div",
    ["favoritesIconContainer"],
    favoriteIcon,
  );
  favoriteIconContainer.append(favoriteIcon);

  const favoritesTitleFragment = document.createDocumentFragment();
  favoritesTitleFragment.append(
    favoriteIconContainer,
    favoritesTitleTextContainer,
  );

  const favoriteTitleContainer = createElement(
    "div",
    ["favoriteTitleContainer"],
    favoritesTitleFragment,
  );
  const favoriteHeader = createElement(
    "div",
    ["favoritesHeader"],
    favoriteTitleContainer,
  );

  //create favorites list
  const favoriteList = createFavoritesList(favorites);
  const fr = document.createDocumentFragment();
  fr.append(favoriteHeader, favoriteList);

  const favoritesContainer = createElement("div", ["favoritesContainer"], fr);
  return favoritesContainer;
}

export function createFavoritesList(favorites) {
  const favoritesFragment = document.createDocumentFragment();
  for (let i = 0; i < favorites.length; i++) {
    const favoriteBook = createFavoriteBook(
      favorites[i].title,
      favorites[i].author_name,
      favorites[i].first_publish_year,
      favorites[i].cover_i,
    );
    favoritesFragment.append(favoriteBook);
  }
  const favoritesList = createElement(
    "div",
    ["favoritesList"],
    favoritesFragment,
  );
  return favoritesList;
}

export function createFavoriteBook(name, author, year, coverI) {
  //create image block
  const bookImage = createElement("img", ["favoriteImage"]);
  bookImage.src = `https://covers.openlibrary.org/b/id/${coverI}.jpg`;
  const bookImageBlock = createElement(
    "div",
    ["favoriteImageBlock"],
    bookImage,
  );

  //create book info block
  const bookName = createParagraphElement(name, ["favoriteBookName"]);
  const bookAuthor = createParagraphElement(author, ["favoriteBookAuthor"]);
  const bookYear = createParagraphElement(year, ["favoriteBookYear"]);
  const bookInfoFragment = document.createDocumentFragment();
  bookInfoFragment.append(bookName, bookAuthor, bookYear);
  const bookInfoBlock = createElement(
    "div",
    ["favoriteBookInfoBlock"],
    bookInfoFragment,
  );

  //create favorite icon
  const favoriteIcon = createElement("img", ["favoritesFavoriteIcon"]);
  favoriteIcon.src = favoriteImg;
  const favoriteIconContainer = createElement(
    "div",
    ["favoritesFavoriteIconContainer"],
    favoriteIcon,
  );
  favoriteIconContainer.append(favoriteIcon);

  const favoriteBookRowFragment = document.createDocumentFragment();
  favoriteBookRowFragment.append(
    bookImageBlock,
    bookInfoBlock,
    favoriteIconContainer,
  );

  //create book row container
  const bookRowContainer = createElement(
    "div",
    ["favoriteBookRow"],
    favoriteBookRowFragment,
  );
  return bookRowContainer;
}
