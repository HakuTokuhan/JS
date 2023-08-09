const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let scoreDolphins;
let scoreKoalas;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win(${avgDolphin} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("there is no winner");
  }
}

scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
