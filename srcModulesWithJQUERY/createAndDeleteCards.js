import { questionsField, answersField, flashCards } from './loading.js';
import { changeCard, changeCurrentCard, displayNextCard, shuffle } from './createAndDeleteCards.js';
import * as $ from 'jquery';

const createNewFlashCardLocally = (questionToPush, answerToPush) => {
  flashCards.push({
    question: questionToPush,
    answer: answerToPush,
    yes: 0,
    no: 0,
    ACRate: 0,
  });
  localStorage.setItem('flashCards', JSON.stringify(flashCards));
};
const createNewFlashCardFromForm = () => {
  const question = $('#questionInputTextArea').val();
  const answer = $('#answerInputTextArea').val();
  if (!question.value || !answer.value || question.value.replace(/\s/g, '') === ''
  || answer.value.replace(/\s/g, '') === '') {
    alert('Fill the forms properly!');
  } else {
    createNewFlashCardLocally(question.value, answer.value);
    question.val('');
    answer.val('');
  }
};

const deleteFlashCardQuestions = () => {
  if (flashCards.length === 1) {
    throw alert('You must have atleast one card!');
  } else {
    const newArr = flashCards.reduce((acc, element) =>{
      if (element === flashCards[counter]) {
        return acc;
      }
      acc.push(element);
      return acc;
    }, []);
    flashCards.length = 0;
    newArr.forEach((element) => {
      flashCards.push(element);
    });
    console.log(flashCards);
    if (counter !== 0) {
      counter--;
    }
  }
  localStorage.setItem('flashCards', JSON.stringify(flashCards));
};


export {
  createNewFlashCardFromForm,
  createNewFlashCardLocally,
  deleteFlashCardQuestions,
};
