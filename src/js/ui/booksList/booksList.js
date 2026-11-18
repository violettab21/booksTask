import { createBookCard } from "./bookCard";
import { createDivElement, createParagraphElement } from "../../utils/utils";
import "../../../styles/booksList.css";
import { getFavoriteBooks } from "../../services/favoriteBooks";
import { favoriteButtonHandler } from "../favorites/favoriteBookRow";

const noBooksText = "No Books Found";
export const startSearchText = "Start Search Your Book";

export function createBooksListElement() {
  //create message paragraph element
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
  //update books list after search
  let content;
  if (books.length === 0) {
    content = createParagraphElement(noBooksText, ["message"]);
  } else {
    content = createBooksList(books);
  }

  changeBooksListContainer(content);
}

export function showSearchResultMessage(message, classes) {
  const messageElement = createParagraphElement(message, classes);
  changeBooksListContainer(messageElement);
}

export function changeBooksListContainer(children) {
  const booksContainer = document.querySelector(".booksList");
  booksContainer.replaceChildren(children);
}
