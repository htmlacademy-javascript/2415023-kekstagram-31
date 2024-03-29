import { getKekstogramFeed } from './data.js';
import { drowThumbnails } from './draws-thumbnails.js';
import { drawBigPicture } from './draws-big-picture.js';
import { closeBigPicture } from './closes-big-picture.js';

const posts = getKekstogramFeed();
drowThumbnails(posts);
