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
console.log(typeof hasCoolJacket);
// boolean
console.log(typeof null);
// object
console.log(!!null);
// false
let roboProtoType = [];

console.log(roboProtoType.push("Hank-44"));
// 1
console.log("--------------------------------------");
console.log("-----------------------------------");

class Array11 {
  constructor(message = "Array11!!!") {
    this.containter = {};
    this.length = 0;
    this.message = message;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    let rElement = this.container[this.length - 1];
    delete this.container[this.length - 1];
    this.length--;
    return rElement;
  }

  indexOf(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.containter[i] == element) {
        return i;
      }
    }
    return -1;
  }

  includes(element) {
    let i = 0;
    for (; i < this.legnth; i++) {
      if (this.container[i] == element) {
        return true;
      }
    }
    return false;
  }

  splice(index1, index2) {
    let clone = new Array11();
    for (; index1 < index2; index1++) {
      clone.push(this.container[index1]);
    }
    return clone;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = Array11();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.legnth;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array11();
    let i = 0;
    for (; i < arguments.length; i++) {
      newArray.push(arguments[i]);
    }
    let j = 0;
    for (; j < this.length; j++) {
      newArray.push(this.container[j]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.length;
  }

  delete(index) {
    let newArray = new Array11();
    let rElement = this.container[index];
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }
}
