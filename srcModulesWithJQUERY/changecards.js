import * as $ from 'jquery';
import {
    questionsField,
    answersField,
    flashCards,
} from './loading.js';

const borderBasedOnACRate = (currentCard) => {
    if (currentCard.ACRate <= 50) {
        $('.back').css('background-image', 'url(\'art/Answer-50.png\')');
    } else if (currentCard.ACRate <= 75) {
        $('.back').css('background-image', 'url(\'art/Answer-75.png\')');
    } else {
        $('.back').css('background-image', 'url(\'art/Answer-100.png\')');
    }
};

const shuffle = (arrayToShuffle) => {
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
    }
    flashCards.length = 0;
    arrayToShuffle.forEach((element) => {
        flashCards.push(element);
    });
};

const changeCard = (yesOrNo) => {
    if (flashCards.length === 1) {
        throw alert('There are no cards, you must add some!');
    }
    if (counter === flashCards.length - 1) {
        const currentFlashCard = flashCards[counter];
        do {
            console.log(`Wtf bro?`);
        }
        while (flashCards[0].question === currentFlashCard.question);
        counter = 0;
        console.log(flashCards);
    }
    changeCurrentCard(yesOrNo);
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
};

const changeCurrentCard = (yesOrNo) => {
    const currentCard = flashCards[counter];
    yesOrNo ? currentCard.yes += 1 : currentCard.no += 1;
    currentCard.ACRate = `${Math.floor((currentCard.yes) / (currentCard.yes + currentCard.no) * 100, 2) || 0 }`;
    console.log(currentCard);
    borderBasedOnACRate(currentCard);
};

const displayNextCard = () => {
    console.log(counter)
    const currentCard = flashCards[counter];
    questionsField.text(currentCard.question);
    answersField.text(currentCard.answer);
    $('#yesButton').toggle();
    $('#noButton').toggle();
    $('#nextButton').toggle();
    changeCard();
};

export {
    borderBasedOnACRate,
    changeCard,
    changeCurrentCard,
    displayNextCard,
    shuffle,
};