import { addClass, removeClass, bodyElement, getElement } from './dom-utils';

const socialCommentCount = getElement('.social__comment-count');
const commentsLoader = getElement('.comments-loader');
const closePictureButton = getElement('#picture-cancel');
const bigPicture = getElement('.big-picture');

const closeBigPicture = () => {
  addClass(bigPicture, 'hidden');
  removeClass(bodyElement, 'modal-open');
};

closePictureButton.addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});

export { closeBigPicture };
