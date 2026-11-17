import { createBookCard } from "./bookCard";
import {
  createDivElement,
  createElement,
  createParagraphElement,
} from "../../utils/utils";
import "../../../styles/booksList.css";
import { getFavoriteBooks } from "../../services/favoriteBooks";

import { favoriteButtonHandler } from "../favorites/favoriteBookRow";

const startSearchText = "Start Search Your Book";
const noBooksText = "No Books Found";

export function createBooksListElement() {
  const startSearchMessage = createParagraphElement(startSearchText, [
    "message",
  ]);
  //create search results container
  const booksList = createDivElement(["booksList"], startSearchMessage);
  booksList.addEventListener("click", favoriteButtonHandler);
  return booksList;
}

export function createBooksList(books) {
  //create fragment with books cards
  const booksFragment = document.createDocumentFragment();
  for (let i = 0; i < books.length; i++) {
    const book = createBookCard(books[i]);
    //check if book is favorite
    const favoriteBooks = getFavoriteBooks();
    if (favoriteBooks.some((favBook) => favBook.key === books[i].key)) {
      book.classList.add("isFavorite");
    }
    booksFragment.append(book);
  }
  return booksFragment;
}

export function changeBooksList(books) {
  let content;
  if (books.length === 0) {
    content = createParagraphElement(noBooksText, ["message"]);
  } else {
    content = createBooksList(books);
  }

  changeBooksListContainer(content);
}

export function showLoader() {
  const loader = createParagraphElement("Loading...", ["loader"]);
  changeBooksListContainer(loader);
}

export function showBooksSearchError(errorText) {
  const error = createParagraphElement(errorText, ["message", "error"]);
  changeBooksListContainer(error);
}

export function showStartTyping() {
  const message = createParagraphElement(startSearchText, ["message"]);
  changeBooksListContainer(message);
}

export function changeBooksListContainer(children) {
  const booksContainer = document.querySelector(".booksList");
  booksContainer.replaceChildren(children);
}
