import { getRandomInteger, getRandomArrayElement } from '../utils/randomizer.js';
import { CommentsUserPicture, USER_NAMES, CommentMessages } from '../utils/post_variables.js';

// создаем комментарий
const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(CommentsUserPicture.MIN, CommentsUserPicture.MAX)}.svg`,
  message: getRandomArrayElement(CommentMessages),
  name: getRandomArrayElement(USER_NAMES)
});

export { createComment };
