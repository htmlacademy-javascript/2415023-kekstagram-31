const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const HASHTAG_MAX_COUNT = 5;
const COMMENT_MAX_LENGTH = 140;

const FormErrorMasseges = {
  HASTAG_TEXT: 'Неверная запись хештегов',
  HASHTAG_COUNT: 'Хэштегов должно быть не больше пяти',
  HASHTAG_DUPLICATE: 'Хэштеги не должны повторяться',
  COMMENT_LENGTH: 'Длина комментария превышает 140 символов'
};

export { hashtag, HASHTAG_MAX_COUNT, COMMENT_MAX_LENGTH, FormErrorMasseges };
