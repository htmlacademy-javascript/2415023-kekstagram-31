/*
написать: Функции для создания массива из 25ти объектов
Каждый объект - описание фотографии, которое пишет пользователь
объект: id  - число от 1 до 25
url -  адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
description - описание фотографии
likes - количество лайков. Случайное число от 15 до 200.
comments -  массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
*/

// Посты
const POSTS_NUMBER = 25;

const PHOTO_ID = {
  min: 1,
  max: 25
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
  'Отличные тапки - не вляпаешься в Кексовы какашки ночью! Заодно увидишь всю пыль. Надо брать!',
  'Прощай-прощай отельчик. Спасибо за классный отдых!'
];

const LIKES_NUMBER = {
  min: 15,
  max: 20
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
]

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const createPost = () => {
  const

  return {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: [
      const COMMENT = {
        id: '',
        avatar: '',
        message: '',
        name: '',
      };
    ]
  }
}
