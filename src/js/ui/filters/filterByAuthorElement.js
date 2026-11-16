import { getBooks, getBooksAuthors } from "../../services/books";
import {
  filterBooksByAuthor,
  getFilterAuthors,
  setFilterAuthors,
} from "../../services/filters";
import { createElement, createParagraphElement } from "../../utils/utils";
import "../../../styles/filters.css";
import { changeBooksList } from "../booksList/booksList";
import { addFiltersSection } from "./filtersElement";

export function createFilterByAuthorElement() {
  const filterByAuthors = createParagraphElement("Filter by authors", [
    "filterByTitle",
  ]);
  const authorsList = createAuthorsListElement();
  const authorsFilterContainerFragment = document.createDocumentFragment();
  authorsFilterContainerFragment.append(filterByAuthors, authorsList);
  const authorsFilterContainer = createElement(
    "div",
    ["filterByAuthorContainer"],
    authorsFilterContainerFragment,
  );
  return authorsFilterContainer;
}

function createAuthorsListElement() {
  const authorsFragment = createAuthorsList();
  const authorsElement = createElement(
    "div",
    ["authorsListContainer"],
    authorsFragment,
  );
  return authorsElement;
}

function createAuthorsList() {
  const authors = getBooksAuthors();
  const authorsFragment = document.createDocumentFragment();
  authors.forEach((author) => {
    const authorItem = createAuthorFilterItem(author);
    authorsFragment.append(authorItem);
  });
  return authorsFragment;
}

function createAuthorFilterItem(author) {
  const fragment = document.createDocumentFragment();
  const authorCheckbox = createElement("input", ["authorCheckbox"]);
  authorCheckbox.type = "checkbox";
  authorCheckbox.name = author;
  authorCheckbox.id = author;

  const label = createElement("label", ["authorLabel"], undefined, author);
  label.htmlFor = authorCheckbox.id;
  fragment.append(authorCheckbox, label);
  const checkboxRow = createElement("div", ["checkBoxRow"], fragment);
  checkboxRow.dataset.author = author;
  checkboxRow.addEventListener("click", handleFilterByAuthor);
  return checkboxRow;
}

export function updateFilters() {
  const filtersSection = document.querySelector(".filtersContainer");
  if (!filtersSection) {
    addFiltersSection();
    return;
  }
  setFilterAuthors([]);
  const filtersContainer = document.querySelector(".authorsListContainer");
  const filtersAuthors = createAuthorsList();
  filtersContainer.replaceChildren(filtersAuthors);
}

export function handleFilterByAuthor(e) {
  const checkboxRow = e.currentTarget;
  const author = checkboxRow.dataset.author;
  const checkbox = checkboxRow.querySelector(".authorCheckbox");

  if (author) {
    if (checkbox.checked) {
      setFilterAuthors([...getFilterAuthors(), author]);
    } else {
      setFilterAuthors(
        getFilterAuthors().filter((authorFilter) => authorFilter !== author),
      );
    }
  }
  const filteredAuthorsOptions = getFilterAuthors();
  if (filteredAuthorsOptions.length > 0) {
    const filteredBooks = filterBooksByAuthor(getFilterAuthors());
    changeBooksList(filteredBooks);
  } else {
    const filteredBooks = getBooks();
    changeBooksList(filteredBooks);
  }
}
