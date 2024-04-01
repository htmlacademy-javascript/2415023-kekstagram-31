import { addClass, removeClass, bodyElement, getElement } from './dom-utils.js';
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
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

closePictureButton.addEventListener('click', closeBigPicture);

export { openBigPicture, closeBigPicture};
