import { DISPLAYED_COMMENTS } from './variables.js';
import { getElement, addClass, removeClass } from './dom-utils.js';
import { drawComments } from './draws-comments.js';
// import { openBigPicture } from './big-picture-switcher.js';

const bigPicture = getElement('.big-picture');
const bigPictureImg = getElement('.big-picture__img img');
const bigPictureCaption = getElement('.social__caption');
const bigPictureLikes = getElement('.likes-count');
const bigPictureComments = getElement('.social__comment-shown-count');
const bigPictureCommentsTotal = getElement('.social__comment-total-count');
const commentsLoader = getElement('.comments-loader');

// Функция для обновления числа отображаемых комментариев
const updateDisplayedCommentsCount = () => {
  const displayedCommentsCount = document.querySelectorAll('.social__comment:not(.hidden)').length;
  bigPictureComments.textContent = displayedCommentsCount;
};

// Отрисовываем изображение
const drawBigPicture = ({url, description, likes, comments}) => {

  bigPictureImg.src = url;
  bigPictureCaption.textContent = description;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsTotal.textContent = comments.length;

  drawComments(comments);
  updateDisplayedCommentsCount();

  if (comments.length < DISPLAYED_COMMENTS) {
    addClass(commentsLoader, 'hidden');
  } else {
    removeClass(commentsLoader, 'hidden');
  }
};

export { drawBigPicture, updateDisplayedCommentsCount, bigPicture, commentsLoader };
