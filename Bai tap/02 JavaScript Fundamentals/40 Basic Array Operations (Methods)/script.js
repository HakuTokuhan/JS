const neighbours = ["China", "Lao", "Campuchia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[2] = "Sweden";
console.log(neighbours);
