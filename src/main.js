import "./styles/style.css";
import { createHeader } from "./js/header";
import { createMainContent } from "./js/mainContent";
import { createFooterElement } from "./js/footer";

const header = createHeader();
const mainSection = createMainContent();
const footer = createFooterElement();

document.querySelector("body").append(header, mainSection, footer);
