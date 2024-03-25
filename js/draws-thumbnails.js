const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture');

const fragment = document.createDocumentFragment();

const drawsThumbnails = (posts) => {
  posts.forEach((post) => {
    const clonedThumbnail = thumbnailTemplate.content.cloneNode(true);
    const thumbnailImg = clonedThumbnail.querySelector('.picture__img');
    const thumbnailInfo = clonedThumbnail.querySelector('.picture__info');
    const pictureComments = thumbnailInfo.querySelector('.picture__comments');
    const pictureLikes = thumbnailInfo.querySelector('.picture__likes');

    thumbnailImg.src = post.url;
    thumbnailImg.alt = post.description;
    pictureComments.textContent = post.comments.length;
    pictureLikes.textContent = post.likes;

    fragment.appendChild(clonedThumbnail);
  });

  thumbnailsContainer.appendChild(fragment);
};

export {drawsThumbnails};
