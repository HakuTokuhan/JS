'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Helllo')('Jonas');

// Challenge
const greeArr = greeting => console.log(`${greeting} ${name}`);

greeArr('Hi')('Jonas');
