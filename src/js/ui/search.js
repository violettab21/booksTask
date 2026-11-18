import {
  createButtonElement,
  createDivElement,
  createElement,
  createParagraphElement,
} from "../utils/utils";
import { debounce } from "../utils/debounce";
import "../../styles/search.css";
import searchIcon from "../../assets/search.svg";
import {
  changeBooksList,
  showSearchResultMessage,
} from "./booksList/booksList";
import { searchBook } from "../api/booksApi";
import { setBooks, transformBooks } from "../services/books";
import { updateFilters } from "./filters/filterByAuthorElement";
import { startSearchText } from "./booksList/booksList";

const titleText = "Discover your next great read";
const descriptionText =
  "Search millions of books, build your personal library, and never lose track of what to read next.";
const searchInputPlaceholder = "Search for books by title or author...";

export function createSearchBlock() {
  //create text paragraphs for search block
  const title = createParagraphElement(titleText, ["searchTitle"]);
  const text = createParagraphElement(descriptionText, ["searchText"]);
  //create search text container
  const textBlock = createDivElement(["textBlock"], [title, text]);

  //create input field for search
  const input = createElement("input", ["searchInput"]);
  input.placeholder = searchInputPlaceholder;
  input.name = "search";
  //create debounced version of search handler
  const debounceSearch = debounce(searchBookHandler);
  input.addEventListener("input", debounceSearch);

  const searchIconEl = createElement("img", ["searchIcon"]);
  searchIconEl.src = searchIcon;

  const inputWrapper = createDivElement(
    ["inputWrapper"],
    [searchIconEl, input],
  );

  const button = createButtonElement(
    "Search",
    ["searchButton"],
    searchBookHandler,
  );
  //create search input and button container
  const search = createDivElement(["search"], [inputWrapper, button]);
  //create search container with text block, input and button
  const searchBlock = createDivElement(["searchBlock"], [textBlock, search]);
  return searchBlock;
}

function searchBookHandler() {
  const searchInput = document.querySelector(".searchInput");
  const searchTerm = searchInput.value;
  //handle empty input
  if (searchTerm.trim().length === 0) {
    showSearchResultMessage(startSearchText, ["message"]);
    return;
  }
  showSearchResultMessage("Loading...", ["loader"]);
  //send request to Open Library API
  searchBook(searchInput.value)
    .then((res) => {
      setBooks(transformBooks(res));
      changeBooksList(res);
      updateFilters();
    })
    .catch((err) => {
      showSearchResultMessage(err, ["error", "message"]);
    });
}
