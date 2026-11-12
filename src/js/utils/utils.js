export function createElement(tag, classes, children, text) {
  const element = document.createElement(tag);
  if (classes) {
    element.classList.add(...classes);
  }

  if (children) {
    element.append(children);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}
