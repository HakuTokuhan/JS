'use strict';

// Selecting elements
const score0El = document.querySelector('#.score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('.current--0');
const current1EL = document.getElementById('.current--1');
const diceEl = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');

// Start conditions
score0El.texContent = 0;
score1El.texContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice funtionality
bntRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice != 1) {
    // Add dice to current score
    currentScore += dice;
    current0EL.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
