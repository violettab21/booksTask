import "./styles/style.css";
import { createHeader } from "./js/ui/header/header";
import { createMainContent } from "./js/ui/mainContent";
import { createFooterElement } from "./js/ui/footer";

const header = createHeader();
const mainSection = createMainContent();
const footer = createFooterElement();

document.querySelector("body").append(header, mainSection, footer);
