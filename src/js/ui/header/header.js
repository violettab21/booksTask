import "../../../styles/header.css";
import { createElement } from "../../utils/utils";
import book from "../../../assets/book.svg";
import { createThemeElement } from "./theme";

export function createHeader() {
  //create fragment for text block
  const logo = createLogoElement();
  const theme = createThemeElement();
  const headerContentFragment = document.createDocumentFragment();
  headerContentFragment.append(logo, theme);
  const headerContent = createElement(
    "div",
    ["headerContent", "container"],
    headerContentFragment,
  );

  //create header element
  const header = createElement("header", ["header"], headerContent);
  return header;
}

export function createLogoElement() {
  const headerItemTextContentPrimary = createElement(
    "p",
    ["headerPrimaryText"],
    null,
    "The Library",
  );

  const headerItemTextContentSecondary = createElement(
    "p",
    ["headerSecondaryText"],
    null,
    "Discover your next favorite book",
  );

  const headerItemTextFragment = document.createDocumentFragment();
  headerItemTextFragment.append(
    headerItemTextContentPrimary,
    headerItemTextContentSecondary,
  );

  const headerItemTextBlock = createElement(
    "div",
    ["headerTextBlock"],
    headerItemTextFragment,
  );

  //create element for icon
  const img = createElement("img", ["headerImage"]);
  img.src = book;
  const headerItemIconBlock = createElement("div", ["headerImageBlock"], img);
  const fragment = document.createDocumentFragment();
  fragment.append(headerItemIconBlock, headerItemTextBlock);
  const headerLogo = createElement("div", ["headerLogoContainer"], fragment);

  return headerLogo;
}
