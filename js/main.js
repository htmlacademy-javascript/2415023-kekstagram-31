import { getKekstogramFeed } from './content-creation/data.js';
import { drowThumbnails } from './content-creation/draws-thumbnails.js';
import { closeBigPicture } from './content-creation/big-picture-switcher.js';
import { loadNextComments } from './content-creation/loads-comments.js';
import { initUploadModal } from './upload-photo-form-switcher.js';

const posts = getKekstogramFeed();
drowThumbnails(posts);
closeBigPicture();
loadNextComments();
initUploadModal();
