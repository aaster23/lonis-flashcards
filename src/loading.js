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
    console.log(currentCard);
  }
  $('#nextButton').toggle();
});

export {
  questionsField,
  answersField,
  flashCards,
};
