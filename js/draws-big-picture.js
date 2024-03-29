import { getElement, addClass, removeClass, bodyElement } from './dom-utils.js';
import { drawComments } from './draws-comments.js';

const bigPicture = getElement('.big-picture');
const bigPictureImg = getElement('.big-picture__img img');
const bigPictureCaption = getElement('.social__caption');
const bigPictureLikes = getElement('.likes-count');
const bigPictureComments = getElement('.social__comment-shown-count');
const bigPictureCommentsTotal = getElement('.social__comment-total-count');

const drawBigPicture = ({url, description, likes, comments}) => {
  removeClass(bigPicture, 'hidden');
  addClass(bodyElement, 'modal-open');

  bigPictureImg.src = url;
  bigPictureCaption.textContent = description;
  bigPictureLikes.textContent = likes;
  bigPictureComments.textContent = comments.length;
  bigPictureCommentsTotal.textContent = comments.length;

  drawComments(comments);
};

export {drawBigPicture, bigPicture};
