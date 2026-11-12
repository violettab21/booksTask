import "../styles/main.css";
import { createSearchBlock } from "./search";
import { createElement } from "./utils/utils";

export function createMainContent() {
  const mainItems = document.createDocumentFragment();
  const searchBlock = createSearchBlock();
  mainItems.append(searchBlock);
  const main = createElement("main", ["main"], mainItems);
  return main;
}
