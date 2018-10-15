import * as $ from 'jquery';
import * as sweetAlert from 'sweetalert';
import {
  questionsField,
  answersField,
  flashCards,
} from './loading.js';

const getCurrentCard = function() {
  const currentCard = flashCards.filter((element) => {
    return element.question === questionsField.text();
  });
  return currentCard;
};

const getCurrentCardIndex = function(currentCard) {
  let currentCardIndex = 0;
  for (let i = 0; i < flashCards.length; i++) {
    if (flashCards[i].question === currentCard[0].question) {
      currentCardIndex = i;
    }
  }
  return currentCardIndex;
};

const borderBasedOnACRate = (currentCard) => {
  console.log(currentCard);
  if (currentCard.ACRate <= 50) {
    $('.back').css('background-image', 'url(\'art/Answer-50.png\')');
  } else if (currentCard.ACRate <= 75) {
    $('.back').css('background-image', 'url(\'art/Answer-75.png\')');
  } else {
    $('.back').css('background-image', 'url(\'art/Answer-100.png\')');
  }
};

const shuffle = (arrayToShuffle) => {
  arrayToShuffle = JSON.parse(arrayToShuffle);
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  while (flashCards.length > 0) {
    flashCards.pop();
  }
  arrayToShuffle.forEach((element) => {
    flashCards.push(element);
  });
};

const changeCurrentCard = (yesOrNo) => {
  const currentCardIndex = getCurrentCardIndex(getCurrentCard());
  const currentCard = flashCards[currentCardIndex];
  if (isNaN(currentCard.yes)) {
    currentCard.yes = 0;
  }
  if (isNaN(currentCard.no)) {
    currentCard.no = 0;
  }
  if (isNaN(currentCard.ACRate)) {
    currentCard.ACRate = 0;
  }
  yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
  currentCard.ACRate = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 }`;
  borderBasedOnACRate(currentCard);
};


const answerToQuetion = (yesOrNo) => {
  if (flashCards.length === 1) {
    swal({
      title: 'Your deck has only one card! You need more cards to be able to answer!',
      text: 'Do you want to create new cards?',
      buttons: {
        cancel: true,
        confirm: 'Create',
      },
    }).then((val) =>{
      if (val) {
        $('#buttonsAndCardWrapper').hide('Scale');
        $('#formWrapper').show('Slide');
      }
    });
  }
  else {
    changeCurrentCard(yesOrNo);
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    $('.card').css('transform', 'rotateY(180deg)');
  }
};


const displayNextCard = () => {
  const currentCard = getCurrentCard();
  const currentCardIndex = getCurrentCardIndex(currentCard);
  if (currentCardIndex === flashCards.length - 1) {
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    shuffle(JSON.stringify(flashCards));
    questionsField.text(flashCards[0].question);
    setTimeout(function() {
      answersField.text(flashCards[0].answer);
    }, 1000);
  } else {
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    questionsField.text(flashCards[currentCardIndex + 1].question);
    setTimeout(function() {
      answersField.text(flashCards[currentCardIndex + 1].answer);
    }, 1000);
  }
  $('.card').css('transform', 'rotateY(0deg)');
};

const displayNextCardAfterDeletion = function() {
  const currentCard = getCurrentCard();
  const currentCardIndex = getCurrentCardIndex(currentCard);
  if (currentCardIndex === flashCards.length - 1) {
    shuffle(JSON.stringify(flashCards));
    questionsField.text(flashCards[0].question);
    answersField.text(flashCards[0].answer);
  } else {
    questionsField.text(flashCards[currentCardIndex + 1].question);
    answersField.text(flashCards[currentCardIndex + 1].answer);
  }
};

export {
  borderBasedOnACRate,
  answerToQuetion,
  changeCurrentCard,
  displayNextCard,
  getCurrentCard,
  getCurrentCardIndex,
  displayNextCardAfterDeletion,
};
