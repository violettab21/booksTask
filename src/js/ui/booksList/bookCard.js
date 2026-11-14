import {
  createElement,
  createParagraphElement,
  createButtonElement,
} from "../../utils/utils";
import "../../../styles/bookCard.css";
import favoriteImg from "../../../assets/heart.svg?raw";

const placeholderImage =
  "https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI=";

export function createBookCard(book) {
  //create image block
  const bookImage = createElement("img", ["bookImage"]);

  bookImage.src = getBookImage(book.cover_i);
  const bookImageBlock = createElement("div", ["bookImageBlock"], bookImage);

  //create book info block
  const bookName = createParagraphElement(book.title, ["bookName"]);
  const bookAuthor = createParagraphElement(book.author_name, ["bookAuthor"]);
  const bookYear = createParagraphElement(book.first_publish_year, [
    "bookYear",
  ]);
  const bookInfoFragment = document.createDocumentFragment();
  bookInfoFragment.append(bookName, bookAuthor, bookYear);
  const bookInfoBlock = createElement(
    "div",
    ["bookInfoBlock"],
    bookInfoFragment,
  );

  //create favorite icon
  const favoriteButton = createFavoriteIcon();

  const bookCardFragment = document.createDocumentFragment();
  bookCardFragment.append(bookImageBlock, bookInfoBlock, favoriteButton);

  //create book container
  const bookCardContainer = createElement(
    "div",
    ["bookCard"],
    bookCardFragment,
  );
  bookCardContainer.dataset.key = book.key;
  return bookCardContainer;
}

export function getBookImage(coverI) {
  return coverI
    ? `https://covers.openlibrary.org/b/id/${coverI}.jpg`
    : placeholderImage;
}

export function createFavoriteIcon() {
  const favoriteIconButton = createButtonElement(undefined, [
    "favoriteIconButton",
  ]);
  favoriteIconButton.innerHTML = favoriteImg;
  return favoriteIconButton;
}

export function toggleBookListFavoriteIcon(key) {
  const bookList = document.querySelector(".booksList");
  if (bookList) {
    const bookCard = bookList.querySelector(`.bookCard[data-key='${key}']`);
    if (bookCard) {
      bookCard.classList.toggle("isFavorite");
    }
  }
}
