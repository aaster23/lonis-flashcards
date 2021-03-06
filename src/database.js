const flashCards = [{
  question: 'What is DOM?',
  answer: 'Document Object Model. With the HTML DOM, JavaScript can access and change all the elements of an HTML document.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is HTML?',
  answer: 'HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is CSS?',
  answer: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'Where to use ID\'s and where Classes?',
  answer: 'ID\'s are unique. Each page can have only one element with that ID. Classes are NOT unique. You can use the same class on multiple elements.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is closure?',
  answer: 'A closure is the combination of a function and the lexical environment within which that function was declared.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is scope? Provide an example.',
  answer: 'Scope determines the accessibility of variables, objects, and functions from different parts of the code.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is lexical scope? Provide an example.',
  answer: 'Scope determines the accessibility of variables. Lexical scope is the scope defined at lexing time.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is \"this\" keyword in JavaScript? Provide an example.',
  answer: 'This is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'How arrow functions are different from ordinary functions?',
  answer: 'Despite being shorter to write, is that arrow functions do not create their own value for \'this\'.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is an immediately-invoked function expression? Why use it? Provide an example.',
  answer: 'IIFE is executed immediately after it\'s created. This avoid polluting the global namespace.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is module and why to use it? Pros and cons.',
  answer: 'Pros: \"Modules\" refers to small units of independent, reusable code. Cons: Used mostly in big projects.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is object in JavaScript?',
  answer: 'JavaScript objects are containers for keys:values called properties or methods. A method is a function stored as a property.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is Babel? Why we use it?',
  answer: 'Babel is a compiler and developers can program using ES6 language features by using Babel to convert their source code into older versions of JavaScript.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is Webpack? Why we use it?',
  answer: 'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'How many ways of using modules you are aware of?',
  answer: 'Node.js modules use \"require\". ES6 modules use \"import/export\". Asynchronous Module use \"define\".',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is jQuery?',
  answer: 'jQuery is a lightweight, \"write less, do more\", JavaScript library.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'Why we use jQuery? Pros and Cons.',
  answer: 'Pros: Less code. Add Ajax functionality. Eliminates a lot of cross browser javascript issues.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is the value of \'this\' in event handlers?',
  answer: 'Every browser sets \'this\' to the element which fired the event.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'How to attach dynamic events on the DOM with jQuery?',
  answer: '$(myElement).on()',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is AJAX?',
  answer: 'With Ajax, Web applications can send and retrieve data from a server asynchronously (in the background).',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'Why to use AJAX? Pros and Cons.',
  answer: 'Pros: Improved User Experience, Reduced Bandwidth, Supports Asynchronous Processing / Cons: Insecurity, Browser Incompatibility, Increased load on Web Server.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'Provide a practical example of AJAX call.',
  answer: 'xmlhttp.open(\"GET\", \"mypage.php?q=\", true);',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is Promise and how it helps us?',
  answer: 'A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What are async/await keywords?',
  answer: '\'Async\' before a function means a function always returns a promise. \'Await\' makes JavaScript wait until that promise settles and returns its result.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'How does HTTP works?',
  answer: 'HyperText Transfer Protocol. Is the language used by browsers to talk to web servers. SET, GET etc.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What HTTP Headers are?',
  answer: 'HTTP headers are the name or value pairs that are displayed in the request and response messages of message headers for Hypertext Transfer Protocol (HTTP).',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What are HTTP status codes?',
  answer: 'Standard response codes given by web site servers on the internet. The codes help identify if page does not load properly.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is function generator?',
  answer: 'A generator is a function that can stop midway and then continue from where it stopped.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
{
  question: 'What is fetch API?',
  answer: 'Fetch allows you to make network requests. Fetch API uses Promises and avoid callback hell.',
  yes: 0,
  no: 0,
  ACRate: 0,
},
];

const init = function() {
  if (!localStorage.getItem('flashCards')) {
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
  }

  return JSON.parse(localStorage.getItem('flashCards'));
};

export {
  init,
};
