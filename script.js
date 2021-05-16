'use strict';

/* 📚 LECTURE#1. [What's the DOM and DOM Manipulation]

  // DOCUMENT is the special object that is the entry point to the DOM. Example: document.querySelector()

  // DOM !== JAVASCRIPT 🧐
  // DOM Methods and Properties for DOM is not part of JS

  // DOM Methods and Properties are accesible via WEB APIs (Application Programming Interface)
  // APIs are libraries and written with JS 

*/

/* 📚 LECTURE#2. [Selecting and Manipulating Elements]

  //📃.textContent is used to set the text
  document.querySelector('.message').textContent = 'Correct Number!';

  console.log(document.querySelector('.message').textContent);
  document.querySelector('.number').textContent = 13;
  document.querySelector('.score').textContent = 20;
  //📃 .value" is used to get the value from input field and also to set the value
  document.querySelector('.guess').value = 12;
  console.log(document.querySelector('.guess').value);
  */

// 📚 LECTURE#3. [Handling Click Events]

//📃 Event is an action that happen on the page. For example: mouse clicked, mouse moving, key preseed etc. With an EventListener we can wait for certain event happening and then react to it

// 1. Pass type of the Event. In this case ('click')
// 2. Tell the event what to do. We need to specify the reaction to the 'click' event. We do that by defining the function. Function executes whenever this click event happens on a check button. This function called 'event handler'
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const defaultState = {
  score: 20,
  background: '#222',
  numberWidth: document.querySelector('.number').style.width,
  message: document.querySelector('.message').textContent,
  input: '',
};

document.querySelector('.again').addEventListener('click', function (reset) {
  // reset the score
  score = defaultState.score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  // reset the background
  document.querySelector('body').style.backgroundColor =
    defaultState.background;

  // reset the number
  document.querySelector('.number').style.width = defaultState.numberWidth;
  document.querySelector('.number').textContent = '?';

  // reset the message
  document.querySelector('.message').textContent = defaultState.message;

  // reset the input
  document.querySelector('.guess').value = defaultState.input;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// 📚 LECTURE#4.Implementing the Game Logic

// Manipulating CSS Styles
// Implementing Highscores
// Refactoring Our Code: The DRY Principle
// Working With Classes
// ASSIGNMENT: Selecting and Manipulating Elements
// Handling Click Events
// Implementing the Game Logic
// Manipulating CSS Styles
// Coding Challenge #1
// Implementing Highscores
// Refactoring Our Code: The DRY Principle
// PROJECT #2: Modal Window
// Working With Classes
// Handling an "Esc" Keypress Event
// Handling an "Esc" Keypress Event
// PROJECT #3: Pig Game
// Rolling the Dice
// Rolling the Dice
// Switching the Active Player
// Switching the Active Player
// Holding Current Score
// Holding Current Score
// Resetting the Game
// Resetting the Game
