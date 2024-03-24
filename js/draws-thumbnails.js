import {createPost} from './generates-post.js';
import {POSTS_NUMBER} from './variables.js';

const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture');

const fragment = document.createDocumentFragment();

for (let i = 1; i <= POSTS_NUMBER; i++) {
  const clonedThumbnail = thumbnailTemplate.content.cloneNode(true);
  const thumbnailImg = clonedThumbnail.querySelector('.picture__img');
  const thumbnailInfo = clonedThumbnail.querySelector('.picture__info');
  const pictureComments = thumbnailInfo.querySelector('.picture__comments');
  const pictureLikes = thumbnailInfo.querySelector('.picture__likes');

  const post = createPost(i);
  thumbnailImg.src = post.url;
  thumbnailImg.alt = post.description;
  pictureComments.textContent = post.comments.length;
  pictureLikes.textContent = post.likes;

  fragment.appendChild(clonedThumbnail);
}

thumbnailsContainer.appendChild(fragment);


// открывает - закрывает миниатюру - как это вынести в отдельный модуль?
const bodyElement = document.body;

// Получаем коллекцию всех созданных постов
const thumbnails = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');

// адрес
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const miniPictureImgs = document.querySelectorAll('.picture__img');

// описание
const bigPictureCaption = bigPicture.querySelector('.social__caption');

// лайки
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const miniPictureLikes = document.querySelectorAll('.picture__likes');

// комменты
const bigPictureComments = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentsTotal = bigPicture.querySelector('.social__comment-total-count');
const miniPictureComments = document.querySelectorAll('.picture__comments');

// пункт 4. то что надо спрятать
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {

    // меняем данные большой картинки на данные из миниатюры
    bigPictureImg.src = miniPictureImgs[i].src;
    bigPictureCaption.textContent = miniPictureImgs[i].alt;
    bigPictureLikes.textContent = miniPictureLikes[i].textContent;
    bigPictureComments.textContent = '????'; // откуда брать это значение?
    bigPictureCommentsTotal.textContent = miniPictureComments[i].textContent;

    // пункт 4. прячем что надо спрятать
    // socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    bodyElement.classList.add('modal-open');

    // открываем картинку
    bigPicture.classList.remove('hidden');

    // проверяем все в консоли
    console.log(bigPictureImg.src, miniPictureImgs[i].src);
  });
});

// Закрываем фото по клику на крестик или клавише esc
function closeBigPicture() {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

document.getElementById('picture-cancel').addEventListener('click', closeBigPicture);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});
