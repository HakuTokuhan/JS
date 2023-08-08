const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const YearUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(YearUntilRetirement(1991, "Jonahs"));
console.log(YearUntilRetirement(1980, "Bob"));
