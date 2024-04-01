import { isEscapeKey } from '../utils/utils.js';
import { addClass, removeClass, bodyElement, getElement } from '../utils/dom-utils.js';
import { bigPicture, commentsLoader } from './draws-big-picture.js';

const closePictureButton = getElement('#picture-cancel');


const closeBigPicture = () => {
  addClass(bigPicture, 'hidden');
  removeClass(bodyElement, 'modal-open');

  removeClass(commentsLoader, 'hidden');
  document.removeEventListener('keydown', onEscKeydown);
};

const openBigPicture = () => {
  removeClass(bigPicture, 'hidden');
  addClass(bodyElement, 'modal-open');

  document.addEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
}

closePictureButton.addEventListener('click', closeBigPicture);

export { openBigPicture, closeBigPicture};
