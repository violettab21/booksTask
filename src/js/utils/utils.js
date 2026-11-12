export function createElement(tag, classes, children, text) {
  const element = document.createElement(tag);
  if (classes) {
    element.classList.add(...classes);
  }
  if (text) {
    element.textContent = text;
  }
  if (children) {
    element.append(children);
  }

  return element;
}

export function createParagraphElement(text, classes, children) {
  const element = createElement("p", classes, children, text);
  return element;
}
