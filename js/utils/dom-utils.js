const getElement = (selector, context = document) => context.querySelector(selector);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

export { getElement, addClass, removeClass };
