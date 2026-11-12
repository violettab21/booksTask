import { createElement, createParagraphElement } from "./utils/utils";
import "../styles/footer.css";

const linkHref = "https://openlibrary.org/";

export function createFooterElement() {
  const link = createElement("a", ["footerLink"], undefined, "Open Library");
  link.href = linkHref;

  const footerText = createParagraphElement(
    "Powered by ",
    ["footerText"],
    link,
  );
  const footer = createElement("footer", ["footer"], footerText);
  return footer;
}
