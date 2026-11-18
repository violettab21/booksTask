const LOCAL_STORAGE_THEME_KEY = "bookCatalogTheme";
const defaultTheme = "light";

export function saveTheme(theme) {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
}

export function getTheme() {
  const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (savedTheme) {
    const theme = JSON.parse(savedTheme);
    return theme;
  }
  return defaultTheme;
}
