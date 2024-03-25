import {getKekstogramFeed} from './data.js';
import {drowThumbnails} from './draws-thumbnails.js';

const posts = getKekstogramFeed();
drowThumbnails(posts);
