const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neighbours: ["Norway", "Russia", "Sweden"],
  checkIsland: function () {
    return this.neighbours.length > 0 ? "not" : "a";
  },

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
};

console.log(myCountry.describe());
console.log(`${myCountry.country} is ${myCountry.checkIsland()} island`);
