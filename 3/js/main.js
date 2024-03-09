// Объявляем переменные
// Посты
const POSTS_NUMBER = 25;

const PHOTO_ID = {
  min: 1,
  max: POSTS_NUMBER
};

const DESCRIPTIONS = [
  'Снимали дроном отель, смотрите какой у нас классный пляж',
  'Вход на пляж. Оригинальная работа',
  'Чистая голубая водичка и никого вокруг. Красота!',
  'А вот и сам фотограф. Всем привет 👋',
  'Мое ощущение от первого погружения в воду',
  'Девчонки, поехали кататься 😉',
  'Лучший десерт - полезный десерт. Всем отличного настроения и помните - "Вы - то что вы едите"',
  'Клюквенный морс. Далекие воспоминаняи из детства. Жаль к бабушке в гости уже не съездить 😢',
  'Недалеко аэродром, встречать каждый самолет было классно в начале воздуха. Сейчас уже поднадоели',
  'Классный органайзер для обуви. Только сегодня по промо цене, 3000 Кексомарок! Налетай!',
  'Дорожка на пляж. Белый песочек, теплая вода... ммм... Завидуйте!',
  'Новая малышка. Врум-врум 🚗',
  'Что-то непонятное сегодня на ужин. Даешь меньше овощей и больше рыбы. Мяу!',
  'Организовали фотосъемку для нашего рыжика. У фотографа чудное видение. ничего не сказать',
  'Разыгрываем крутые теплые домашние тапки, для участия в розыгрыше подпишитесь на всех моих 500 подписок и отправьте 5000 Кексомарок на мой счет. Победитель будет выбран случайно.',
  'Дорога домой. Грустно, но ничего - вернемся через полгодика снова',
  'Ездили на концерт. Красота!',
  'Ничего не знаю про автомобили, вот просто фотка. Красный - классно',
  'Отличные тапки - не вляпаешься в Кексовы какашки, а каждая пылинка будет резать тебе глаз по дороге в туалет, разве не замечательно? Надо брать!',
  'Прощай-прощай отельчик. Спасибо за классный отдых!',
  'Отличное малокалорийное бюлюдо. Каждому прокомментировавшему пришлю в личку 🤤',
  'Потрясающий закат. Как же тут хорошо!',
  'Маленький житель пляжа. Кстати, тарелка жаренных крабов всего-то 200 Кексорублей! Вкуснятина!',
  'Ну где же ручки, ну где же ваши ручки? Давай поднимем ручки и будем танцевать! 🎵💖',
  'на первый взгляд на нас нападает инопланетянин. Вам кажется, это всего лишь гиппопотам *нервно смеется*'
];

const LIKES_NUMBER = {
  min: 15,
  max: 200
};


// Комменты
const COMMENTS_NUMBER = {
  min: 0,
  max: 30
};

const USER_NAMES = [
  'Максим',
  'Алина',
  'Павел',
  'Анастасия',
  'Даниил',
  'Наталья',
  'Иван',
  'Полина',
  'Артем',
  'Ольга'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


// Основная часть кода
// Рандмайзер
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


// Создание постов
const postUsedId = [];

const createPost = () => {
  const randomPostId = getRandomInteger(PHOTO_ID.min, PHOTO_ID.max);
  const randomPostLikesNumber = getRandomInteger(LIKES_NUMBER.min, LIKES_NUMBER.max - 1);

  // Создаем комменты

  const createComment = () => ({
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)],
    name: USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)]
  });

  // Создаем массив комментов
  const commentsList = [];
  const commentsNumber = getRandomInteger(COMMENTS_NUMBER.min, COMMENTS_NUMBER.max);
  for (let i = 1; i <= commentsNumber; i++) {
    const postComments = createComment();
    postComments.id = randomPostId.toString() + (i - 1).toString();
    commentsList.push(postComments);
  }

  // Создаем пост
  if (!postUsedId.includes(randomPostId)) {
    postUsedId.push(randomPostId);

    return {
      id: randomPostId,
      url: `photos/${[randomPostId]}.jpg`,
      description: DESCRIPTIONS[randomPostId - 1],
      likes: randomPostLikesNumber,
      comments: commentsList
    };
  } else {
    return createPost();
  }
};


// Создаем ленту Кекстограма из постов
const kekstogramFeed = [];
while (postUsedId.length < POSTS_NUMBER) {
  const post = createPost();
  kekstogramFeed.push(post);
}

// console.log(kekstogramFeed);
