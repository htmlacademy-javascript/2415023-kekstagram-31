import { getElement, addClass, removeClass, bodyElement } from './dom-utils.js';

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
};

export {drawBigPicture};

// пункт 4. прячем что надо спрятать
// socialCommentCount.classList.add('hidden');
// commentsLoader.classList.add('hidden');


// thumbnails.forEach((thumbnail, i) => {
//   thumbnail.addEventListener('click', () => {

//     // меняем данные большой картинки на данные из миниатюры

//     bodyElement.classList.add('modal-open');

//     // открываем картинку
//     bigPicture.classList.remove('hidden');

//     // проверяем все в консоли
//     console.log(bigPictureImg.src, miniPictureImgs[i].src);
//   });
// });

// });
