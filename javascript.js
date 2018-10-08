let counter = 0;
const questionsField = document.getElementById('questionText');
const answersField = document.getElementById('theAnswerLabel');
const scoreBox = document.getElementById('score');
let flashCards = [];

const rotateContainer = (backFront) => {
    if (backFront) {
        document.getElementsByClassName('card')[0].style.transform = "rotateY(180deg)";
    } else {
        document.getElementsByClassName('card')[0].style.transform = "rotateY(0deg)";
    }
}

const loadingInitialization = () => {
    if (localStorage.getItem('flashCards')) {
        flashCards = JSON.parse(localStorage.getItem('flashCards'));
    }
    if (flashCards.length > 0) {
        const currentCard = flashCards[counter];
        questionsField.innerText = currentCard.question;
        answersField.innerText = currentCard.answer;
        console.log(currentCard)
    }
    document.getElementById("nextButton").style.visibility = "hidden";
}
const createNewFlashCardLocally = (questionToPush, answerToPush) => {
    flashCards.push({
        question: questionToPush,
        answer: answerToPush,
        yes: 0,
        no: 0,
        ACRate: 0,
    })
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
}
const createNewFlashCardFromForm = () => {
    const question = document.getElementsByName('qInput')[0];
    const answer = document.getElementsByName('aInput')[0];
    if (!question.value || !answer.value || question.value.replace(/\s/g, "") == "" || answer.value.replace(/\s/g, "") == "") {
        alert('Fill the forms properly!')
    } else {
        createNewFlashCardLocally(question.value, answer.value);
        question.value = '';
        answer.value = '';
    }
}

const deleteFlashCardQuestions = () => {
    if (flashCards.length == 1) {
        throw alert("You must have atleast one card!")
    } else {
        flashCards = flashCards.reduce((acc, element) =>{
            if(element === flashCards[counter]){
                return acc;
            }
            acc.push(element);
            return acc;
        },[])
        counter--;
    }
    displayNextCard();
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

const changeCard = (yesOrNo) => {
    if (flashCards.length == 1) {
        throw alert('There are no cards, you must add some!')
    }
    if (counter == flashCards.length - 1) {
        let currentFlashCard = flashCards[counter];
        do {
            flashCards = shuffle(flashCards);
        }
        while (flashCards[0].question == currentFlashCard.question);
        counter = 0;
        console.log(flashCards)
    }
    changeCurrentCard(yesOrNo);
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("nextButton").style.visibility = "visible";
    document.getElementById("")
}

const changeCurrentCard = (yesOrNo) => {
    const currentCard = flashCards[counter];
    yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
    currentCard.ACRate = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 }`;
    console.log(currentCard)
    borderBasedOnACRate(currentCard)
}
const displayNextCard = () => {
    counter++;
    const currentCard = flashCards[counter];
    questionsField.innerText = currentCard.question;
    answersField.innerText = currentCard.answer;
    document.getElementById("yesButton").style.display = "block";
    document.getElementById("noButton").style.display = "block";
    document.getElementById("nextButton").style.visibility = "hidden";
    if(document.getElementsByClassName('card')[0].style.transform = "rotateY(180deg)"){
        document.getElementsByClassName('card')[0].style.transform = "rotateY(0deg)";
    }
}

const borderBasedOnACRate = (currentCard) =>{
    const back = document.getElementsByClassName('back')[0].style;
    if(currentCard.ACRate <= 50){
        back.backgroundImage = "url('art/Answer-50.png')";
    }
    else if(currentCard.ACRate <= 75){
        back.backgroundImage = "url('art/Answer-75.png')";
    }
    else{
        back.backgroundImage = "url('art/Answer-100.png')";
    }
}

createNewFlashCardLocally('Ye boi', 'No boy');
createNewFlashCardLocally('Da', 'Ne')
createNewFlashCardLocally('Shte zatvarq lih ostela', 'da');
createNewFlashCardLocally('i az ko praq', 'nikoi ne znae');
createNewFlashCardLocally('bace kiro','100 tei prai we')