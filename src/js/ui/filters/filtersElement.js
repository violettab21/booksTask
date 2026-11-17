import { createDivElement, createParagraphElement } from "../../utils/utils";
import "../../../styles/filters.css";
import { createFilterByAuthorElement } from "./filterByAuthorElement";

export function createFiltersElement() {
  //create filters header element
  const filtersHeader = createParagraphElement("Filters", ["filtersHeader"]);
  //create filter by author element
  const authorsFilterContainer = createFilterByAuthorElement();
  //create filters header element
  const filtersContainer = createDivElement(
    ["filtersContainer"],
    [filtersHeader, authorsFilterContainer],
  );
  return filtersContainer;
}

//function for filters section adding in DOM
export function addFiltersSection() {
  const filters = createFiltersElement();
  const booksSection = document.querySelector(".books");
  booksSection.prepend(filters);
}
