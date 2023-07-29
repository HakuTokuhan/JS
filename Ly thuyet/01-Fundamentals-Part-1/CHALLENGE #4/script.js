let theBill = Number(prompt("The Bill: "));
let tip;

console.log(
  ` The bill was ${theBill}, the tip was ${
    theBill >= 50 && theBill <= 300
      ? (tip = (theBill * 15) / 100)
      : (tip = (theBill * 20) / 100)
  }, and the total value ${theBill + tip}`
);
