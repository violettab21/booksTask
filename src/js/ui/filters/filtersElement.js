import { createElement, createParagraphElement } from "../../utils/utils";
import "../../../styles/filters.css";
import { createFilterByAuthorElement } from "./filterByAuthorElement";

export function createFiltersElement() {
  const filtersHeader = createParagraphElement("Filters", ["filtersHeader"]);

  const authorsFilterContainer = createFilterByAuthorElement();

  const fragment = document.createDocumentFragment();
  fragment.append(filtersHeader, authorsFilterContainer);

  const filtersContainer = createElement("div", ["filtersContainer"], fragment);
  return filtersContainer;
}

export function addFiltersSection() {
  const filters = createFiltersElement();
  const booksSection = document.querySelector(".books");
  booksSection.prepend(filters);
}
