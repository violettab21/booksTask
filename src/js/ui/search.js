import { createButtonElement, createElement, debounce } from "../utils/utils";
import "../../styles/search.css";
import searchIcon from "../../assets/search.svg";
import {
  changeBooksList,
  showLoader,
  showBooksSearchError,
  showStartTyping,
} from "./booksList/booksList";
import { searchBook } from "../api/booksApi";
import { setBooks, transformBooks } from "../services/books";
import { updateFilters } from "./filters/filterByAuthorElement";

const titleText = "Discover your next great read";
const descriptionText =
  "Search millions of books, build your personal library, and never lose track of what to read next.";
const searchInputPlaceholder = "Search for books by title or author...";

export function createSearchBlock() {
  const title = createElement("p", ["searchTitle"], undefined, titleText);
  const text = createElement("p", ["searchText"], undefined, descriptionText);
  const textFragment = document.createDocumentFragment();
  textFragment.append(title, text);
  const textBlock = createElement("div", ["textBlock"], textFragment);

  const input = createElement("input", ["searchInput"]);
  const debounceSearch = debounce(searchBookHandler);
  input.addEventListener("input", debounceSearch);
  const inputWrapper = createElement("div", ["inputWrapper"], input);
  const searchIconEl = createElement("img", ["searchIcon"]);
  searchIconEl.src = searchIcon;
  inputWrapper.append(searchIconEl, input);

  input.placeholder = searchInputPlaceholder;
  input.name = "search";

  const button = createButtonElement(
    "Search",
    ["searchButton"],
    searchBookHandler,
  );

  const searchFragment = document.createDocumentFragment();
  searchFragment.append(inputWrapper, button);
  const search = createElement("div", ["search"], searchFragment);

  const fragment = document.createDocumentFragment();
  fragment.append(textBlock, search);
  const searchBlock = createElement("div", ["searchBlock"], fragment);
  return searchBlock;
}

function searchBookHandler() {
  const searchInput = document.querySelector(".searchInput");
  const searchTerm = searchInput.value;
  if (searchTerm.trim().length === 0) {
    showStartTyping();
    return;
  }
  showLoader();
  searchBook(searchInput.value)
    .then((res) => {
      setBooks(transformBooks(res));
      changeBooksList(res);
      updateFilters();
    })
    .catch((err) => {
      showBooksSearchError(err);
    });
}
