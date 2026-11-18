import "../../../styles/header.css";
import sun from "../../../assets/sun.svg?raw";
import moon from "../../../assets/moon.svg?raw";
import { createDivElement } from "../../utils/utils";
import { getTheme, saveTheme } from "../../services/theme";

export function createThemeElement() {
  //get theme from local storage
  const savedTheme = getTheme();
  //create theme container
  const theme = createDivElement(["theme"]);
  //add theme class if theme is dark (if no class - light theme is used)
  if (savedTheme === "dark") {
    theme.classList.add("dark");
    document.querySelector("body").classList.add("dark");
  }
  //set theme icon based on saved value, default if light (sun icon)
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
  //save theme to local storage and update icon based on theme
  if (themeEl.classList.contains("dark")) {
    saveTheme("dark");
    themeEl.innerHTML = sun;
  } else {
    saveTheme("light");
    themeEl.innerHTML = moon;
  }
  //add or remove dark class for body element when theme changed
  document.querySelector("body").classList.toggle("dark");
}
