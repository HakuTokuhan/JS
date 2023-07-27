const age = 18;
if (age === 18) console.log("You just became an adult(strict)");

if (age == 18) console.log("You just became an adult(loose)");

const favourite = Number(prompt("What your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing number");
} else if (favourite === 7) {
  console.log("7 is aslo a cool number");
} else if (favourite === 9) {
  console.log("9 is aslo a cool number");
} else {
  console.log("Number is not 27 or 9 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
