import { DISPLAYED_COMMENTS } from './variables.js';
import { getElement, addClass } from './dom-utils.js';

const drawComments = (comments) => {
  const commentsList = getElement('.social__comments');

  // Очищаем содержимое блока со списком комментариев
  commentsList.innerHTML = '';

  // Создаем и добавляем элементы для каждого комментария
  comments.forEach((comment, index) => {
    const commentItem = document.createElement('li');
    addClass(commentItem, 'social__comment');

    const commentPicture = document.createElement('img');
    addClass(commentPicture, 'social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentPicture.width = 35;
    commentPicture.height = 35;

    const commentText = document.createElement('p');
    addClass(commentText, 'social__text');
    commentText.textContent = comment.message;

    commentItem.appendChild(commentPicture);
    commentItem.appendChild(commentText);

    if (index >= DISPLAYED_COMMENTS) {
      addClass(commentItem, 'hidden');
    }

    commentsList.appendChild(commentItem);
  });
};

export { drawComments };
