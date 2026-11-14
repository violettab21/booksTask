import { getBookImage } from "../booksList/bookCard.js";
import { createElement, createParagraphElement } from "../../utils/utils.js";
import favoriteImg from "../../../assets/heart.svg?raw";
import {
  removeFavorite,
  updateFavoritesCount,
  showNewFavorite,
} from "./favoritesElement.js";
import { toggleBookListFavoriteIcon } from "../booksList/bookCard.js";
import { getBookByKey } from "../../services/books";
import {
  saveFavoriteBook,
  removeFavoriteBook,
  isBookFavorite,
} from "../../services/favoriteBooks";

export function createFavoriteBookElement(book) {
  //create image block
  const bookImage = createElement("img", ["favoriteImage"]);
  bookImage.src = getBookImage(book.cover_i);
  const bookImageBlock = createElement(
    "div",
    ["favoriteImageBlock"],
    bookImage,
  );

  //create book info block
  const bookName = createParagraphElement(book.title, ["favoriteBookName"]);
  const bookAuthor = createParagraphElement(book.author_name, [
    "favoriteBookAuthor",
  ]);
  const bookYear = createParagraphElement(book.first_publish_year, [
    "favoriteBookYear",
  ]);
  const bookInfoFragment = document.createDocumentFragment();
  bookInfoFragment.append(bookName, bookAuthor, bookYear);
  const bookInfoBlock = createElement(
    "div",
    ["favoriteBookInfoBlock"],
    bookInfoFragment,
  );

  const favoriteIconContainer = createFavoriteIcon();

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
  bookRowContainer.dataset.key = book.key;
  return bookRowContainer;
}

export function createFavoriteIcon() {
  const favoriteIconContainer = createElement("div", ["favoriteIconButton"]);
  favoriteIconContainer.innerHTML = favoriteImg;
  /*favoriteIconContainer.addEventListener("click", removeFavoriteBookHandler);*/
  return favoriteIconContainer;
}

/*export function removeFavoriteBookHandler(event) {
  const bookRow = event.currentTarget.closest(".favoriteBookRow");
  const key = bookRow.dataset.key;
  const actualFavoriteBooks = removeFavoriteBook(key);
  removeFavorite(key);
  updateFavoritesCount(actualFavoriteBooks.length);
  toggleBookListFavoriteIcon(key);
}*/

export function favoriteButtonHandler(event) {
  const favButton = event.target.closest(".favoriteIconButton");
  if (favButton) {
    const bookElement = favButton.closest(`[data-key]`);
    const bookKey = bookElement.dataset.key;
    let actualFavoriteBooks;
    if (!isBookFavorite(bookKey)) {
      const bookData = getBookByKey(bookKey);
      actualFavoriteBooks = saveFavoriteBook(bookData);
      showNewFavorite(bookData);
    } else {
      actualFavoriteBooks = removeFavoriteBook(bookKey);
      removeFavorite(bookKey);
    }
    if (event.currentTarget.classList.contains("favoritesList")) {
      toggleBookListFavoriteIcon(bookKey);
    } else {
      bookElement.classList.toggle("isFavorite");
    }

    updateFavoritesCount(actualFavoriteBooks.length);
  }
}
