import { createElement, createParagraphElement } from "./utils/utils";
import "../styles/bookCard.css";
import favoriteImg from "../assets/heart.svg";

export function createBookCard(name, author, year, coverI) {
  //create image block
  const bookImage = createElement("img", ["bookImage"]);
  bookImage.src = `https://covers.openlibrary.org/b/id/${coverI}.jpg`;
  const bookImageBlock = createElement("div", ["bookImageBlock"], bookImage);

  //create book info block
  const bookName = createParagraphElement(name, ["bookName"]);
  const bookAuthor = createParagraphElement(author, ["bookAuthor"]);
  const bookYear = createParagraphElement(year, ["bookYear"]);
  const bookInfoFragment = document.createDocumentFragment();
  bookInfoFragment.append(bookName, bookAuthor, bookYear);
  const bookInfoBlock = createElement(
    "div",
    ["bookInfoBlock"],
    bookInfoFragment,
  );

  //create favorite icon
  const favoriteIcon = createElement("img", ["favoriteIcon"]);
  favoriteIcon.src = favoriteImg;
  const favoriteIconContainer = createElement(
    "div",
    ["favoriteIconContainer"],
    favoriteIcon,
  );
  favoriteIconContainer.append(favoriteIcon);

  const bookCardFragment = document.createDocumentFragment();
  bookCardFragment.append(bookImageBlock, bookInfoBlock, favoriteIconContainer);

  //create book container
  const bookCardContainer = createElement(
    "div",
    ["bookCard"],
    bookCardFragment,
  );
  return bookCardContainer;
}
