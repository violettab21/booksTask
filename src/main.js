import "./styles/style.css";
import { createHeader } from "./js/header";

const header = createHeader();
document.querySelector("#app").append(header);
