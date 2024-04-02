import { bodyElement, isEscapeKey } from './utils/utils.js';
import { getElement, addClass, removeClass } from './utils/dom-utils.js';

const uploadForm = getElement('.img-upload__form');

const uploadFileControl = getElement('#upload-file', uploadForm);
const photoEditorForm = getElement('.img-upload__overlay');
const photoEditorResetBtn = getElement('#upload-cancel', photoEditorForm);

const hashtagInput = getElement('.text__hashtags', photoEditorForm); // PRISTINE

const onPhotoEditorResetBtnClick = () => closePhotoEditor();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

function closePhotoEditor () {
  addClass(photoEditorForm, 'hidden');
  removeClass(bodyElement, 'modal-open');
  bodyElement.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileControl.value = '';
}

export const initUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    removeClass(photoEditorForm, 'hidden');
    addClass(bodyElement, 'modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    bodyElement.addEventListener('keydown', onDocumentKeydown);
  });
};

const pristine = new Pristine(uploadForm);
pristine.addValidator(hashtagInput, (value) => {
  console.log(value);
}, 'ошибка');
