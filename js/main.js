import { getKekstogramFeed } from './data.js';
import { drowThumbnails } from './draws-thumbnails.js';
import { closeBigPicture } from './closes-big-picture.js';
import { loadNextComments } from './loads-comments.js';

const posts = getKekstogramFeed();
drowThumbnails(posts);
closeBigPicture();
loadNextComments();
