import {getRandomInteger} from './randomizer.js';
import {POSTS_DESCRIPTIONS, LikesNumber, CommentsNumber} from './variables.js';
import {createComment} from './generates-coment.js';

// создаем пост
const createPost = (id) => {
  const randomPostLikesNumber = getRandomInteger(LikesNumber.MIN, LikesNumber.MAX - 1);
  const commentsNumber = getRandomInteger(CommentsNumber.MIN, CommentsNumber.MAX);

  let photoDescription;
  if (id <= POSTS_DESCRIPTIONS.length) {
    photoDescription = POSTS_DESCRIPTIONS[id - 1];
  } else {
    photoDescription = 'Описание фотографии отсутствует';
  }

  return {
    id,
    url: `photos/${id}.jpg`,
    description: photoDescription,
    likes: randomPostLikesNumber,
    comments: Array.from({length: commentsNumber}, (_, index) => createComment(id.toString() + (index).toString()))
  };
};

export {createPost};
