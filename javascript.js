let counter = 0;
const questionsField = document.getElementById('questionText');
const answersField = document.getElementById('theAnswerLabel');
const scoreBox = document.getElementById('score');
let flashCards = [];
const loadingInitialization = () => {
  if (localStorage.getItem('flashCards')) {
    flashCards = JSON.parse(localStorage.getItem('flashCards'));
  }
  if (flashCards.length > 0) {
    const currentCard = flashCards[counter];
    questionsField.innerText = currentCard.question;
    answersField.innerText = currentCard.answer;
    console.log(currentCard);
    scoreBox.innerText = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 } %`;
  }
};
const createNewFlashCardLocally = (questionToPush, answerToPush) => {
  flashCards.push({
    question: questionToPush,
    answer: answerToPush,
    yes: 0,
    no: 0,
  });
  localStorage.setItem('flashCards', JSON.stringify(flashCards));
};
const createNewFlashCardFromForm = () => {
  const question = document.getElementsByName('qInput')[0];
  const answer = document.getElementsByName('aInput')[0];
  if (!question.value || !answer.value || question.value.replace(/\s/g, '') === '' || answer.value.replace(/\s/g, '') === '') {
    alert('Fill the forms properly!');
  } else {
    createNewFlashCardLocally(question.value, answer.value);
    question.value = '';
    answer.value = '';
  }
};

const deleteFlashCardQuestions = () => {
  if (flashCards.length === 0) {
    throw alert('There are no entries to delete!');
  } else {
    flashCards.pop();
  }
  localStorage.setItem('flashCards', JSON.stringify(flashCards));
  console.log(flashCards);
};

const shuffle = (arrayToShuffle) => {
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  return arrayToShuffle;
};

const changeCard = function(yesOrNo) {
  if (flashCards.length === 0) {
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
  displayNextCard();
}

const changeCurrentCard = (yesOrNo) => {
  const currentCard = flashCards[counter];
    yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
    console.log(currentCard);
};

const displayNextCard = () =>{
  counter++;
  const currentCard = flashCards[counter];
  questionsField.innerText = currentCard.question;
  answersField.innerText = currentCard.answer;
  scoreBox.innerText = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 } %`;
};
