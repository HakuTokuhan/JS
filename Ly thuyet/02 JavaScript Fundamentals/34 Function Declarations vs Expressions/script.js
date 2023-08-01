function calcAgel(birthYeah) {
  return 2037 - birthYeah;
}

calcAgel(1991);

const age1 = calcAgel(1991);
console.log;
age1;

const calcAgel2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = calcAgel2(1991);

console.log(age1, age2);
