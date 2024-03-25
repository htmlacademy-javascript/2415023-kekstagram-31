import {getKekstogramFeed} from './data.js';
import {drawsThumbnails} from './draws-thumbnails.js';

const posts = getKekstogramFeed();
drawsThumbnails(posts);
