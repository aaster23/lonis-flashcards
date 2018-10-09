import * as cardServices from "cards.service.js";
import * as db from "database.js"


$('#submitButton').on('click', function(){
    const question = $('#submitQuestion').val();
    const answer = $('#submitAnswer').val();
    if (!question.value || !answer.value || question.value.replace(/\s/g, '') === '' || answer.value.replace(/\s/g, '') === '') {
      alert('Fill the forms properly!');
    } else {
      cardServices.add({question: question.value, answer: answer.value, yes: 0, no: 0, ACRate: 0});
      question.val('');
      answer.val('');
    }
  });
  const displayNextCard = () => {
    counter++;
    const currentCard = flashCards[counter];
    questionsField.innerText = currentCard.question;
    answersField.innerText = currentCard.answer;
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle()
    if (document.getElementsByClassName('card')[0].style.transform = 'rotateY(180deg)') {
      document.getElementsByClassName('card')[0].style.transform = 'rotateY(0deg)';
    }
  };

  const changeCurrentCard = (yesOrNo) => {
    const currentCard = flashCards[counter];
      yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
      currentCard.ACRate = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 }`;
      console.log(currentCard);
      borderBasedOnACRate(currentCard);
  };

const answerToQuestionCard = (yesOrNo) =>{
    if (flashCards.length === 1) {
        throw alert('There are no cards, you must add some!');
      }
      if (counter === flashCards.length - 1) {
        const currentFlashCard = flashCards[counter];
        do {
          flashCards = shuffle(flashCards);
        }
        while (flashCards[0].question === currentFlashCard.question);
        counter = 0;
        console.log(flashCards);
      }
      changeCurrentCard(yesOrNo);
      $('#yesButton').toggle();
      $('#noButton').toggle();
      $('#nextButton').toggle()
}