const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);

// 1.

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

// 2.

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}
