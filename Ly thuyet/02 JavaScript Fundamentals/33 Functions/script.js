function logger() {
  console.log("My name is Dan");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const applesOrangeJuice = fruitProcessor(2, 4);
console.log(applesOrangeJuice);
