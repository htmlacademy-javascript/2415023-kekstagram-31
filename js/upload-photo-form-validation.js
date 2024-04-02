// import { bodyElement, isEscapeKey } from './utils/utils.js';
// import { getElement, addClass, removeClass } from './utils/dom-utils.js';
// import { hashtag, HASHTAG_MAX_COUNT, COMMENT_MAX_LENGTH, FormErrorMasseges } from './utils/form_variables.js';

// const uploadForm = getElement('.img-upload__form');


// const uploadFileControl = getElement('#upload-file', uploadForm);
// const photoEditorForm = getElement('.img-upload__overlay');
// const photoEditorResetBtn = getElement('#upload-cancel', photoEditorForm);

// const hashtagInput = getElement('.text__hashtags', photoEditorForm);
// const commentInput = getElement('.text__description', photoEditorForm);
// const createPostButton = getElement('.img-upload__submit', photoEditorForm);

// const pristine = new Pristine(uploadForm);
// pristine.addValidator(hashtagInput, (value) => {
//   console.log(value);
// }, 'ошибка');



// const pristine = new Pristine(photoEditorForm, {
//   classTo: 'img-upload__field-wrapper',
//   errorClass: 'img-upload__field-wrappe--invalid',
//   successClass: 'img-upload__field-wrappe--valid',
//   errorTextParent: 'img-upload__field-wrapper',
//   errorTextTag: 'div',
//   errorTextClass: 'img-upload__field-wrapper--error'
// });

// photoEditorForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Форма валидна');
//   } else {
//     console.log('Форма не валидна');
//   }
// });
