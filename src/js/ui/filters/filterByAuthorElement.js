import { getBooks, getBooksAuthors } from "../../services/books";
import {
  filterBooksByAuthor,
  getFilterAuthors,
  setFilterAuthors,
} from "../../services/filters";
import {
  createDivElement,
  createElement,
  createParagraphElement,
} from "../../utils/utils";
import "../../../styles/filters.css";
import { changeBooksList } from "../booksList/booksList";
import { addFiltersSection } from "./filtersElement";

export function createFilterByAuthorElement() {
  const filterByAuthors = createParagraphElement("Filter by authors", [
    "filterByTitle",
  ]);
  const authorsList = createAuthorsListElement();

  const authorsFilterContainer = createDivElement(
    ["filterByAuthorContainer"],
    [filterByAuthors, authorsList],
  );
  return authorsFilterContainer;
}

function createAuthorsListElement() {
  //create filter by author container
  const authorsFragment = createAuthorsList();
  const authorsElement = createDivElement(
    ["authorsListContainer"],
    authorsFragment,
  );
  authorsElement.addEventListener("click", handleFilterByAuthor);

  return authorsElement;
}

function createAuthorsList() {
  //create authors checkboxes fragment
  const authors = getBooksAuthors();
  const authorsFragment = document.createDocumentFragment();
  authors.forEach((author) => {
    const authorItem = createAuthorFilterItem(author);
    authorsFragment.append(authorItem);
  });
  return authorsFragment;
}

function createAuthorFilterItem(author) {
  const authorCheckbox = createElement("input", ["authorCheckbox"]);
  authorCheckbox.type = "checkbox";
  authorCheckbox.name = author;
  authorCheckbox.id = author;

  const label = createElement("label", ["authorLabel"], undefined, author);
  label.htmlFor = authorCheckbox.id;

  const checkboxRow = createDivElement(
    ["checkBoxRow"],
    [authorCheckbox, label],
  );
  checkboxRow.dataset.author = author;
  return checkboxRow;
}

export function updateFilters() {
  const filtersSection = document.querySelector(".filtersContainer");
  //if no filters element, create filters container
  if (!filtersSection) {
    addFiltersSection();
    return;
  }
  //reset filters storage
  setFilterAuthors([]);
  const filtersContainer = document.querySelector(".authorsListContainer");
  const filtersAuthors = createAuthorsList();
  //update authors list in DOM
  filtersContainer.replaceChildren(filtersAuthors);
}

export function handleFilterByAuthor(e) {
  const checkboxRow = e.target.closest(".checkBoxRow");
  if (checkboxRow) {
    const author = checkboxRow.dataset.author;
    const checkbox = checkboxRow.querySelector(".authorCheckbox");
    //update selected filters storage
    if (author) {
      if (checkbox.checked) {
        setFilterAuthors([...getFilterAuthors(), author]);
      } else {
        setFilterAuthors(
          getFilterAuthors().filter((authorFilter) => authorFilter !== author),
        );
      }
    }
    //get selected filters by authors
    const filteredAuthorsOptions = getFilterAuthors();
    if (filteredAuthorsOptions.length > 0) {
      const filteredBooks = filterBooksByAuthor(getFilterAuthors());
      //update books list in DOM with filtered books
      changeBooksList(filteredBooks);
    } else {
      //if all checkboxes are uncheck show books by initial search
      const filteredBooks = getBooks();
      changeBooksList(filteredBooks);
    }
  }
}
