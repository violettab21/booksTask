export function createElement(tag, classes, children, text) {
  const element = document.createElement(tag);
  if (classes) {
    element.classList.add(...classes);
  }
  if (text) {
    element.textContent = text;
  }
  if (children) {
    if (Array.isArray(children)) {
      element.append(...children);
    } else {
      element.append(children);
    }
  }

  return element;
}

export function createDivElement(classes, children) {
  const element = createElement("div", classes, children);
  return element;
}

export function createParagraphElement(text, classes, children) {
  const element = createElement("p", classes, children, text);
  return element;
}

export function createButtonElement(text, classes, onClick, children) {
  const button = createElement("button", classes, children, text);
  if (onClick) {
    button.addEventListener("click", (event) => {
      onClick(event);
    });
  }

  return button;
}

export function createFragment() {
  const fragment = document.createDocumentFragment();
  return fragment;
}

export function debounce(func) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
    }, 500);
  };
}
