import { getRandomInteger } from '../utils/randomizer.js';

const usedIds = [];

const generateUniqueRandomId = (min, max) => {
  let id;
  do {
    id = getRandomInteger(min, max);
  } while (usedIds.includes(id));
  usedIds.push(id);
  return id;
};

export { generateUniqueRandomId };
