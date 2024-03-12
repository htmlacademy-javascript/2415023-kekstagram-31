import {POSTS_NUMBER} from './variables.js';
import {createPost} from './generates-post.js';

// Создаем ленту Кекстограма из постов
const kekstogramFeed = () => Array.from({length: POSTS_NUMBER}, (_, index) => createPost(index + 1));
export {kekstogramFeed};
