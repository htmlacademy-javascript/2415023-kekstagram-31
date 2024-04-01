import { POSTS_NUMBER } from '../utils/post_variables.js';
import { createPost } from './generates-post.js';

// Создаем ленту Кекстограма из постов
const getKekstogramFeed = () => Array.from({length: POSTS_NUMBER}, (_, index) => createPost(index + 1));

export { getKekstogramFeed };
