'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let score = 20;
let highscore = 0;

let luckyNumber = Math.round(Math.random() * 20 + 1);
let number = document.querySelector('.number');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', () => {
  let input = Number(document.querySelector('.guess').value);

  if (!input) {
    displayMessage('No number!');
  } else if (input === luckyNumber) {
    number.textContent = luckyNumber;
    displayMessage('You won!!!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (input !== luckyNumber) {
    if (score > 1) {
      input > luckyNumber
        ? displayMessage('Too high!')
        : displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', () => {
  score = 20;
  luckyNumber = Math.round(Math.random() * 20 + 1);
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
