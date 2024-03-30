import { addClass, removeClass, bodyElement, getElement } from './dom-utils.js';
import { bigPicture, commentsLoader } from './draws-big-picture.js';

const closePictureButton = getElement('#picture-cancel');


const closeBigPicture = () => {
  addClass(bigPicture, 'hidden');
  removeClass(bodyElement, 'modal-open');

  removeClass(commentsLoader, 'hidden');
};

closePictureButton.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});

export { closeBigPicture };
