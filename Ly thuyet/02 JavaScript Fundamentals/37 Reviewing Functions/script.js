const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const YearUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

YearUntilRetirement(1991, "Jonas");
console.log(YearUntilRetirement(1980, "Bob"));
