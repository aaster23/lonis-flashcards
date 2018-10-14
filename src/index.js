import * as $ from 'jquery';
import {
    questionsField,
    answersField,
    flashCards
} from './loading.js';
import {
    answerToQuetion,
    changeCurrentCard,
    displayNextCard,
    getCurrentCard,
    getCurrentCardIndex
} from './changecards.js';
import {
    createNewFlashCardFromForm,
    createNewFlashCardLocally,
    deleteFlashCardQuestions
} from './createAndDeleteCards.js';
import {
    manipulateDom
} from './domManipulations.js';

createNewFlashCardLocally('What is DOM?', 'Document Object Model. With the HTML DOM, JavaScript can access and change all the elements of an HTML document.');
createNewFlashCardLocally('What is HTML?', 'HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.');
createNewFlashCardLocally('What is CSS?', 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen.');
createNewFlashCardLocally('Where to use ID\'s and where Classes?', 'ID\'s are unique. Each page can have only one element with that ID. Classes are NOT unique. You can use the same class on multiple elements.');
createNewFlashCardLocally('What is closure?', 'A closure is the combination of a function and the lexical environment within which that function was declared.');
createNewFlashCardLocally('What is scope? Provide an example.', 'Scope determines the accessibility of variables, objects, and functions from different parts of the code.');
createNewFlashCardLocally('What is lexical scope? Provide an example.', 'Scope determines the accessibility of variables. Lexical scope is the scope defined at lexing time.');
createNewFlashCardLocally('What is \"this\" keyword in JavaScript? Provide an example.', 'This is actually a binding that is made when a function is invoced, and what is references is determined entirely by the call-site where the function is called.');
createNewFlashCardLocally('How arrow functions are different from ordinary functions?', 'Despite being shorter to write, is that arrow functions do not create their own value for \'this\'.');
createNewFlashCardLocally('What is an immediately-invoked function expression? Why use it? Provide an example.', 'IIFE is executes immediately after it\'s created. This avoid polluting the global namespace.');
createNewFlashCardLocally('What is module and why to use it? Pros and cons.', 'Pros: Small, independent, reusable code. Node.js modules use \"require\". ES6 modules use \"import/export\". Asynchronous Module use \"define\".');
createNewFlashCardLocally('What is object in JavaScript?', 'JavaScript objects are containers for keys:values called properties or methods. A method is a function stored as a property.');
createNewFlashCardLocally('What is Babel? Why we use it?', 'Babel is a compiler and developers can program using ES6 language features by using Babel to convert their source code into older versions of JavaScript.');
createNewFlashCardLocally('What is Webpack? Why we use it?', 'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.');
// createNewFlashCardLocally('How many ways of using modules you are aware of?', 'TBA');
createNewFlashCardLocally('What is jQuery?', 'jQuery is a lightweight, \"write less, do more\", JavaScript library.');
createNewFlashCardLocally('Why we use jQuery? Pros and Cons.', 'Pros: Less code. Add Ajax functionality. Eliminates a lot of cross browser javascript issues.');
// createNewFlashCardLocally('What is the value of this in event handlers?', 'TBA');
createNewFlashCardLocally('How to attach dynamic events on the DOM with jQuery?', '$(myFunction).on()');
createNewFlashCardLocally('What is AJAX?', 'With Ajax, Web applications can send and retrieve data from a server asynchronously (in the background).');
createNewFlashCardLocally('Why to use AJAX? Pros and Cons.', 'Pros: Improved User Experience, Reduced Bandwidth, Supports Asynchronous Processing / Cons: Insecurity, Browser Incompatibility, Increased load on Web Server.');
// createNewFlashCardLocally('Provide a practical example of AJAX call.', 'TBA');
createNewFlashCardLocally('What is Promise and how it helps us?', 'A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize.');
// createNewFlashCardLocally('What are async/await keywords?', 'TBA');
createNewFlashCardLocally('How does HTTP works?', 'HyperText Transfer Protocol. Is the language used by browsers to talk to web servers. SET, GET etc.');
createNewFlashCardLocally('What HTTP Headers are?', 'HTTP headers are the name or value pairs that are displayed in the request and response messages of message headers for Hypertext Transfer Protocol (HTTP).');
createNewFlashCardLocally('What are HTTP status codes?', 'Standard response codes given by web site servers on the internet. The codes help identify if page does not load properly.');
createNewFlashCardLocally('What is function generator?', 'A generator is a function that can stop midway and then continue from where it stopped.');
createNewFlashCardLocally('What is fetch API?', 'Fetch allows you to make network requests. Fetch API uses Promises and avoid callback hell.');

manipulateDom();