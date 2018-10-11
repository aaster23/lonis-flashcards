import * as $ from 'jquery';
import { questionsField, answersField, flashCards } from './loading.js';
import { borderBasedOnACRate, changeCard, changeCurrentCard, displayNextCard, shuffle } from './changecards.js';
import { createNewFlashCardFromForm, createNewFlashCardLocally, deleteFlashCardQuestions } from './createAndDeleteCards.js';


createNewFlashCardLocally('Can you name two programming paradigms important for JavaScript app developers?', 'Question 1 answer');
createNewFlashCardLocally('What is a “closure” in JavaScript? Provide an example.', 'Question 2 answer');
createNewFlashCardLocally('What is the difference between const, let and var?', 'Question 3 answer');
createNewFlashCardLocally('What is scope in JavaScript?', 'Question 4 answer');
createNewFlashCardLocally('What is the difference between function expression, fat arrows and function declaration What is “this in JavaScript? ', 'Question 5 answer');

console.log(counter);
console.log(flashCards);

$('#archiveButton').click(function() {
  deleteFlashCardQuestions();
  displayNextCard();
});

$('#yesButton').click(function() {
  changeCard(true);
});

$('#noButton').click(function() {
  changeCard(false);
});

$('#nextButton').click(function() {
  displayNextCard();
});
