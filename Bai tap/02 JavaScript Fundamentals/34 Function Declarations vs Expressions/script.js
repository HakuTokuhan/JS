function percentageOfWorld1(country, population) {
  console.log(
    `${country} has ${population} million people, so it's about ${
      (population / 7900) * 100
    }% of the world population`
  );
}

percentageOfWorld1("Trung Quoc", 1441);
percentageOfWorld1("Viet Nam", 100);
percentageOfWorld1("Han Quoc", 40);

let percentageOfWorld2 = function (country, population) {
  console.log(
    `${country} has ${population} million people, so it's about ${
      (population / 7900) * 100
    }% of the world population`
  );
};

percentageOfWorld2("Trung Quoc", 1441);
percentageOfWorld2("Viet Nam", 100);
percentageOfWorld2("Han Quoc", 40);
