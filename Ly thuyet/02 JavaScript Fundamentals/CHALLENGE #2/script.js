let bill = prompt("Bill: ");

function calcTip(bill) {
  if (bill > 50 || bill < 300) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 20) / 100;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bill[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];