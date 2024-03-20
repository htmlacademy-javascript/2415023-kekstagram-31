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
