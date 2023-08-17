'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Giá trị mỗi lần f5: ' + secretNumber);
let score = 20;
let highscores = 0;

// Tu lam them
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscores) {
      highscores = score;
      document.querySelector('.highscore').textContent = highscores;
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? 'Too high!' : 'Too low!';
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--;
        // document.querySelector('.score').textContent = score;
        displayScore(score);
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        // document.querySelector('.score').textContent = 0;
        displayScore(0);
      }
    }

    //   // When guess too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Giá trị mỗi lần f5: ' + secretNumber);
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
