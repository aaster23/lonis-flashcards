import * as $ from 'jquery';
const questionsField = $('#questionText');
const answersField = $('#theAnswerLabel');
let flashCards = [];

$('body').ready(function() {
  if (localStorage.getItem('flashCards')) {
    flashCards = JSON.parse(localStorage.getItem('flashCards'));
  }
  if (flashCards.length > 0) {
    const currentCard = flashCards[0];
    $('#questionText').text(currentCard.question);
    $('#theAnswerLabel').text(currentCard.answer);
  }
  $('#nextButton').toggle();
  $('#cardsCounter').text(flashCards.length);
});

export {
  questionsField,
  answersField,
  flashCards,
};
