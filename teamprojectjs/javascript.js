let counter = 0;
const questionsField = document.getElementById('questionText');
const answersField = document.getElementById('answerText');
const flashCards = [];
if (localStorage.getItem('flashCards')) {
    flashCards = JSON.parse(localStorage.getItem('flashCards'));
}

const createNewFlashCardLocally = (questionToPush, answerToPush) => {
    flashCards.push({
        question: questionToPush,
        answer: answerToPush,
        acRate: 0
    })
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
}
const createNewFlashCardFromForm = () => {
    const question = document.getElementsByName('qInput')[0];
    const answer = document.getElementsByName('aInput')[0];
    if (!question.value || !answer.value || question.value.replace(/\s/g,"") == "" || answer.value.replace(/\s/g,"") == "") {
        alert('Fill the forms properly!')
    } else {
        createNewFlashCardLocally(question.value, answer.value);
        question.value = '';
        answer.value = '';
    }
}

const deleteFlashCardQuestions = () => {
    if (flashCards.length == 0) {
        throw alert("There are no entries to delete!")
    } else {
        flashCards.pop()
    }
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
    console.log(flashCards)
}

const shuffle = (arrayToShuffle) => {
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
    }
    return arrayToShuffle;
}

function changeCard() {
    if (flashCards.length == 0) {
        throw alert('There are no cards, you must add some!')
    }
    if (counter == flashCards.length) {
        flashCards = shuffle(flashCards);
        console.log(flashCards);
        counter = 0;
    }
    questionsField.innerText = flashCards[counter].question;
    answersField.innerText = flashCards[counter].answer;
    counter++;
}