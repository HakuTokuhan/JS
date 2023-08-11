const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYeah: 1991,
  job: "teacher",
  friend: ["Michael", " Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  preview: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge);

console.log(jonas.preview());
