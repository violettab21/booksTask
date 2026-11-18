import "../../../styles/header.css";
import {
  createDivElement,
  createElement,
  createParagraphElement,
} from "../../utils/utils";
import book from "../../../assets/book.svg";
import { createThemeElement } from "./theme";

export function createHeader() {
  //create logo and theme blocks
  const logo = createLogoElement();
  const theme = createThemeElement();

  const headerContent = createDivElement(
    ["headerContent", "container"],
    [logo, theme],
  );

  //create header element
  const header = createElement("header", ["header"], headerContent);
  return header;
}

export function createLogoElement() {
  //create paragraphs for logo text
  const headerItemTextContentPrimary = createParagraphElement("The Library", [
    "headerPrimaryText",
  ]);
  const headerItemTextContentSecondary = createParagraphElement(
    "Discover your next favorite book",
    ["headerSecondaryText"],
  );

  //create container for logo text
  const headerItemTextBlock = createDivElement(
    ["headerTextBlock"],
    [headerItemTextContentPrimary, headerItemTextContentSecondary],
  );

  //create element for icon
  const img = createElement("img", ["headerImage"]);
  img.src = book;
  const headerItemIconBlock = createDivElement(["headerImageBlock"], img);

  //create logo container
  const headerLogo = createDivElement(
    ["headerLogoContainer"],
    [headerItemIconBlock, headerItemTextBlock],
  );

  return headerLogo;
}
