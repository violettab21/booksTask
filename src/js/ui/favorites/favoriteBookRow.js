import { getBookImage } from "../booksList/bookCard.js";
import {
  createDivElement,
  createElement,
  createParagraphElement,
} from "../../utils/utils.js";
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
  const bookImageBlock = createDivElement(["favoriteImageBlock"], bookImage);

  //create book info block
  const bookName = createParagraphElement(book.title, [
    "favoriteBookName",
    "bookName",
  ]);
  const bookAuthor = createParagraphElement(book.author_name, [
    "favoriteBookAuthor",
    "bookAuthor",
  ]);
  const bookYear = createParagraphElement(book.first_publish_year, [
    "favoriteBookYear",
    "bookYear",
  ]);

  const bookInfoBlock = createDivElement(
    ["favoriteBookInfoBlock"],
    [bookName, bookAuthor, bookYear],
  );

  const favoriteIconContainer = createFavoriteIcon();

  //create book row container
  const bookRowContainer = createDivElement(
    ["favoriteBookRow"],
    [bookImageBlock, bookInfoBlock, favoriteIconContainer],
  );
  bookRowContainer.dataset.key = book.key;
  return bookRowContainer;
}

export function createFavoriteIcon() {
  const favoriteIconContainer = createDivElement(["favoriteIconButton"]);
  favoriteIconContainer.innerHTML = favoriteImg;
  return favoriteIconContainer;
}

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
