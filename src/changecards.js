import * as $ from 'jquery';
import {
  questionsField,
  answersField,
  flashCards,
} from './loading.js';

const borderBasedOnACRate = (currentCard) => {
  console.log(`${currentCard.yes} yes with ${currentCard.no} with AC: ${currentCard.ACRate}`);
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
  arrayToShuffle.forEach((element) =>{
    flashCards.push(element);
  });
  console.log(flashCards);
};

const answerToQuetion = (yesOrNo) => {
  if (flashCards.length === 1) {
    throw alert('There are no cards, you must add some!');
  } else {
    changeCurrentCard(yesOrNo);
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    $('.card').css('transform', 'rotateY(180deg)');
  }
};

const changeCurrentCard = (yesOrNo) => {
  const currentCard = getCurrentCard();
  yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
  currentCard.ACRate = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 }`;
  borderBasedOnACRate(currentCard);
};
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

const displayNextCard = () => {
  const currentCard = getCurrentCard();
  const currentCardIndex = getCurrentCardIndex(currentCard);
  if (currentCardIndex === flashCards.length - 1) {
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    shuffle(JSON.stringify(flashCards));
    questionsField.text(flashCards[0].question);
    answersField.text(flashCards[0].answer);
  } else {
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    questionsField.text(flashCards[currentCardIndex + 1].question);
    answersField.text(flashCards[currentCardIndex + 1].answer);
  }
  $('.card').css('transform', 'rotateY(0deg)');
};

const displayNextCardAfterDeletion = function(){
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
}

export {
  borderBasedOnACRate,
  answerToQuetion,
  changeCurrentCard,
  displayNextCard,
  getCurrentCard,
  getCurrentCardIndex,
  displayNextCardAfterDeletion
};
