import { getElement } from '../utils/dom-utils.js';
import { hashtag, HASHTAG_MAX_COUNT, COMMENT_MAX_LENGTH, FormErrorMasseges } from './utils/form_variables.js';

const uploadImgForm = getElement('img-upload__overlay');
const hashtagInput = getElement('.text__hashtags', uploadImgForm);
const commentInput = getElement('.text__description', uploadImgForm);
const createPostButton = getElement('.img-upload__submit', uploadImgForm);

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrappe--invalid',
  successClass: 'img-upload__field-wrappe--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});

uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма валидна');
  } else {
    console.log('Форма не валидна');
  }
});
