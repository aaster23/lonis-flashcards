const flashCards = [{
  question: 21,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 49,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 46,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 28,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 47,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 27,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 42,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 21,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 50,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 45,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 35,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 38,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 21,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 33,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 25,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 32,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 25,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 34,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 32,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 46,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 42,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 18,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 19,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 40,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 37,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 26,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 45,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 34,
  answer: 'green',
  yes: 0,
  no: 0,
},
{
  question: 48,
  answer: 'blue',
  yes: 0,
  no: 0,
},
{
  question: 30,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 46,
  answer: 'brown',
  yes: 0,
  no: 0,
},
{
  question: 31,
  answer: 'brown',
  yes: 0,
  no: 0,
},
];

const init = function() {
  if (!localStorage.getItem('flashCards')) {
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
  }

  return JSON.parse(localStorage.getItem('flashCards'));
};

const saveItem = function(itemName, value) {
  localStorage.setItem(itemName, JSON.stringify(value));
};


const getItem = function(itemName) {
  return JSON.parse(localStorage.getItem(itemName));
};

export {
  init,
  saveItem,
  getItem,
};
