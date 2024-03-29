import { getElement } from './dom-utils.js';
import { drawBigPicture } from './draws-big-picture.js';

const thumbnailsContainer = getElement('.pictures');
const thumbnailTemplate = getElement('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();
const drowThumbnails = (posts) => {
  posts.forEach((post) => {
    const clonedThumbnail = thumbnailTemplate.cloneNode(true);
    const thumbnailImg = clonedThumbnail.querySelector('.picture__img');
    const thumbnailInfo = clonedThumbnail.querySelector('.picture__info');
    const pictureComments = thumbnailInfo.querySelector('.picture__comments');
    const pictureLikes = thumbnailInfo.querySelector('.picture__likes');

    thumbnailImg.src = post.url;
    thumbnailImg.alt = post.description;
    pictureComments.textContent = post.comments.length;
    pictureLikes.textContent = post.likes;

    clonedThumbnail.addEventListener('click', () => {
      drawBigPicture(post);
    });

    fragment.appendChild(clonedThumbnail);
  });

  thumbnailsContainer.appendChild(fragment);
};

export {drowThumbnails};
