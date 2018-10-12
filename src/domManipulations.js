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
    $('#buttonsAndCardWrapper').hide('Scale');
    $('#formWrapper').show('Slide');
  });

  $('#exitCreateForm').click(function() {
    $('#buttonsAndCardWrapper').show('Scale');
    $('#formWrapper').hide('Scale');
  });

  $('#createCardButton').click(function() {
    createNewFlashCardFromForm();
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
