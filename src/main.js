import "./styles/style.css";
import { createHeader } from "./js/header";
import { createMainContent } from "./js/mainContent";

const header = createHeader();
const mainSection = createMainContent();

document.querySelector("body").append(header, mainSection);
