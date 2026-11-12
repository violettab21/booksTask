import { createBookCard } from "./bookCard";
import { createElement, createParagraphElement } from "./utils/utils";
import "../styles/booksList.css";

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
    const book = createBookCard(
      books[i].title,
      books[i].author_name,
      books[i].first_publish_year,
      books[i].cover_i,
    );
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
  const error = createParagraphElement(errorText, ["searchError"]);
  changeBooksListContainer(error);
}

export function showStartTyping() {
  const message = createParagraphElement("Enter Search Value", ["searchError"]);
  changeBooksListContainer(message);
}

export function changeBooksListContainer(children) {
  const booksContainer = document.querySelector(".booksList");

  booksContainer.replaceChildren(children);
}
