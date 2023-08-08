let theBill = Number(prompt("The Bill: "));
let tip =
  theBill >= 50 && theBill <= 300 ? (theBill * 15) / 100 : (theBill * 20) / 100;

console.log(
  ` The bill was ${theBill}, the tip was ${tip}
  , and the total value ${theBill + tip}`
);
