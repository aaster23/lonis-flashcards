import { questionsField, answersField, flashCards } from './loading.js';
import { answerToQuetion, changeCurrentCard, displayNextCard, getCurrentCard, getCurrentCardIndex, displayNextCardAfterDeletion } from './changecards.js';
import * as $ from 'jquery';
import * as sweetAlert from 'sweetalert';
const createNewFlashCardLocally = (questionToPush, answerToPush) => {
  if (flashCards.filter((e) => e.question === questionToPush).length > 0) {
    swal('No duplicate questions allowed!');
  } else {
    flashCards.push({
      question: questionToPush,
      answer: answerToPush,
      yes: 0,
      no: 0,
      ACRate: 0,
    });
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
  }
};
const createNewFlashCardFromForm = () => {
  const question = $('#questionInput');
  const answer = $('#answerInput');
  if (!question.val() || !answer.val() || question.val().replace(/\s/g, '') === ''
  || answer.val().replace(/\s/g, '') === '') {
    swal('Fill the forms properly!');
  } else {
    if (!flashCards.filter((e) => e.question === question.val()).length > 0) {
      swal('Flash card created successfully');
    }
    createNewFlashCardLocally(question.val(), answer.val());
    question.val('Insert question here:');
    answer.val('Insert answer here:');
  }
};

const deleteFlashCardQuestions = () => {
  if (flashCards.length === 1) {
    throw swal('You must have atleast one card!');
  } else {
    const currentCard = getCurrentCard()[0];
    displayNextCardAfterDeletion();
    const newArr = flashCards.reduce((acc, element) =>{
      if (element.question === currentCard.question) {
        return acc;
      }
      acc.push(element);
      return acc;
    }, []);
    while (flashCards.length > 0) {
      flashCards.pop();
    }
    newArr.forEach((element) => {
      flashCards.push(element);
    });
  }
  console.log(flashCards);
  localStorage.setItem('flashCards', JSON.stringify(flashCards));
};


export {
  createNewFlashCardFromForm,
  createNewFlashCardLocally,
  deleteFlashCardQuestions,
};
