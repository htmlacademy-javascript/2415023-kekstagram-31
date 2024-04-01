import { DISPLAYED_COMMENTS } from '../utils/post_variables.js';
import { getElement, addClass, removeClass } from '../utils/dom-utils.js';
import { updateDisplayedCommentsCount } from './draws-big-picture.js';

const commentsLoader = getElement('.comments-loader');

const hasHiddenComments = () =>
  getElement('.social__comment.hidden') !== null;

const loadNextComments = () => {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  for (let i = 0; i < DISPLAYED_COMMENTS && i < hiddenComments.length; i++) {
    removeClass(hiddenComments[i], 'hidden');
  }
};

commentsLoader.addEventListener('click', () => {
  loadNextComments();
  if (!hasHiddenComments()) {
    addClass(commentsLoader, 'hidden');
  }
  updateDisplayedCommentsCount();
});

export { loadNextComments };
