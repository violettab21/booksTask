import "../../../styles/header.css";
import sun from "../../../assets/sun.svg?raw";
import moon from "../../../assets/moon.svg?raw";
import { createDivElement } from "../../utils/utils";
import { getTheme, saveTheme } from "../../services/theme";

export function createThemeElement() {
  //get theme from local storage
  const savedTheme = getTheme();
  const theme = createDivElement(["theme"]);
  if (savedTheme === "dark") {
    theme.classList.add("dark");
    document.querySelector("body").classList.add("dark");
  }
  setThemeIcon(theme);
  theme.addEventListener("click", changeThemeHandler);
  return theme;
}

export function setThemeIcon(theme) {
  if (theme.classList.contains("dark")) {
    theme.innerHTML = sun;
  } else {
    theme.innerHTML = moon;
  }
}

export function changeThemeHandler(e) {
  const themeEl = e.currentTarget;
  themeEl.classList.toggle("dark");
  if (themeEl.classList.contains("dark")) {
    saveTheme("dark");
    themeEl.innerHTML = sun;
  } else {
    saveTheme("light");
    themeEl.innerHTML = moon;
  }
  document.querySelector("body").classList.toggle("dark");
}
