function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}

console.log(describePopulation("Trung Quoc", 1441));
console.log(describePopulation("Viet Nam", 100));
console.log(describePopulation("Han Quoc", 40));
