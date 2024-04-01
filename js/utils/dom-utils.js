const bodyElement = document.body;

const getElement = (selector) => document.querySelector(selector);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

export { bodyElement, getElement, addClass, removeClass };
