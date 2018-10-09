import {
  saveItem,
  getItem,
  init,
} from './database.js';

import {
  log,
} from './logger.js';

init();
let cards = getItem('flashCards');

const add = function(card) {
  if (!card) {
    throw new Error('No card object provided');
  }

  cards.push(card);

  saveItem('flashCards', cards);

  log(`Add ${card} in data base at ${new Date()}`);
};

const remove = function(card) {
  if (!card) {
    throw new Error('No card object provided');
  }
  cards = cards.filter((cardEl) => cardEl.question !== card.question);

  saveItem('flashCards', cards);

  log(`Remove ${card} from data base at ${new Date()}`);
};

const all = function() {
  log(`Found ${cards.length} in data base at ${new Date()}`);
  return cards;
};

export {
  add,
  all,
  remove,
};
