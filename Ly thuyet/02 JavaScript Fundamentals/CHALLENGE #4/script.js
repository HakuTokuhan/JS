const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 20) / 100;
  }
}

for (let tipNumber = 0; tipNumber < bills.length; tipNumber++) {
  tips[tipNumber] = calcTip(bills[tipNumber]);
}

for (let totalNumber = 0; totalNumber < bills.length; totalNumber++) {
  totals[totalNumber] = bills[totalNumber] + tips[totalNumber];
}

console.log(tips);
console.lo;
// BONUS

const arr = [1123, 432, 343, 673, 123];
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / (arr.length + 1);
}
