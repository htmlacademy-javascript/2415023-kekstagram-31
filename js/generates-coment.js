import {getRandomInteger, getRandomArrayElement} from './randomizer.js';
import {CommentsUserPicture, USER_NAMES, CommentMessages} from './variables.js';

// создаем комментарий
const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(CommentsUserPicture.MIN, CommentsUserPicture.MAX)}.svg`,
  message: getRandomArrayElement(CommentMessages),
  name: getRandomArrayElement(USER_NAMES)
});

export {createComment};
