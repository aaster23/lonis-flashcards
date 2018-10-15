import * as $ from 'jquery';
import {
  questionsField,
  answersField,
  flashCards,
} from './loading.js';
import {
  answerToQuetion,
  changeCurrentCard,
  displayNextCard,
  getCurrentCard,
  getCurrentCardIndex,
} from './changecards.js';
import {
  createNewFlashCardFromForm,
  createNewFlashCardLocally,
  deleteFlashCardQuestions,
} from './createAndDeleteCards.js';
import {
  manipulateDom,
} from './domManipulations.js';
import {
  init,
} from './database.js';

init();
manipulateDom();
