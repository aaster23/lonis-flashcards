import * as $ from 'jquery';
import { questionsField, answersField, flashCards } from './loading.js';
import { answerToQuetion, changeCurrentCard, displayNextCard, getCurrentCard, getCurrentCardIndex, displayNextCardAfterDeletion } from './changecards.js';
import { createNewFlashCardFromForm, createNewFlashCardLocally, deleteFlashCardQuestions } from './createAndDeleteCards.js';
const manipulateDom = function() {
  $('#archiveButton').click(function() {
    deleteFlashCardQuestions();
  });

  $('#yesButton').click(function() {
    answerToQuetion(true);
  });

  $('#noButton').click(function() {
    answerToQuetion(false);
  });

  $('#nextButton').click(function() {
    displayNextCard();
  });

  $('#createButton').click(function() {
    console.log('chudomir');
    $('#buttonsAndCardWrapper').toggle();
    $('#formWrapper').toggle();
  });

  $('#exitCreateForm').click(function() {
    $('#buttonsAndCardWrapper').toggle();
    $('#formWrapper').toggle();
  });

  $('#createCardButton').click(function() {
    createNewFlashCardFromForm();
    alert('Successfully created flash card!')
  });

  $('#questionInput').click(function() {
    if ($('#questionInput').val() === 'Insert question here:') {
      $('#questionInput').val('');
    }
  });

  $('#answerInput').click(function() {
    if ($('#answerInput').val() === 'Insert answer here:') {
      $('#answerInput').val('');
    }
  });
};


export {
  manipulateDom,
};
