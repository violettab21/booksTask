import { createBookCard } from "./bookCard";
import { createElement } from "./utils/utils";
import "../styles/booksList.css";

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
  const booksList = createElement("div", ["booksList"], booksFragment);
  return booksList;
}
