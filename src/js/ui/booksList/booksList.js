import { createBookCard } from "./bookCard";
import { createElement, createParagraphElement } from "../../utils/utils";
import "../../../styles/booksList.css";
import { getFavoriteBooks } from "../../services/favoriteBooks";

export function createBooksListElement() {
  const startSearchMessage = createParagraphElement("Start Search YOur Book", [
    "message",
  ]);
  const booksList = createElement("div", ["booksList"], startSearchMessage);
  return booksList;
}

export function createBooksList(books) {
  const booksFragment = document.createDocumentFragment();
  for (let i = 0; i < books.length; i++) {
    const book = createBookCard(books[i]);
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
    content = createParagraphElement("No Books Found", ["message"]);
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
  const message = createParagraphElement("Enter Search Value", ["message"]);
  changeBooksListContainer(message);
}

export function changeBooksListContainer(children) {
  const booksContainer = document.querySelector(".booksList");
  booksContainer.replaceChildren(children);
}
