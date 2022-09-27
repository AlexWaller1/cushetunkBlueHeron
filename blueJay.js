console.log("Blue Jay!!!");

const hammerHead = {
  name: "Hammerhead",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Venice Sands 5",
  species: "Hammerhead Shark",
  hasCoolJacket: true,
  hasPickerelCola: true,
  friends: ["Taylor", "Harvey", "Wibaux"]
};

console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.hasCoolJacket);
// true
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Harvey
console.log(hammerHead.friends[2]);
// Wibaux
console.log(hammerHead.friends.length);
// 3
let {
  name,
  occupation,
  homePlanet,
  species,
  hasCoolJacket,
  hasPickerelCola,
  friends
} = hammerHead;

console.log(name);
// Hammerhead
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(homePlanet);
// Venice Sands 5
console.log(species);
// Hammerhead Shark
console.log(hasCoolJacket);
// true
console.log(hasPickerelCola);
// true
console.log(friends);
// ['Taylor', 'Harvey', 'Wibaux']
console.log(friends[0]);
// Taylor
console.log(friends[1]);
// Harvey
console.log(friends[2]);
// Wibaux
console.log(friends.length);
// 3
console.log(typeof friends);
// object
console.log(typeof friends[0]);
// string
