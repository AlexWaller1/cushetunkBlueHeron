console.log("Sandhill Crane!!!");
// Sandhill Crane
const Hammerhead = {};
Hammerhead["name"] = "Hammerhead";
Hammerhead["occupation"] = "Pickerel Cola Space Truck Driver";
Hammerhead["homePlanet"] = "Venice Sands 5";
Hammerhead["hasPickerelCola"] = true;
Hammerhead["hasCoolJacket"] = true;
Hammerhead["friends"] = ["Taylor", "Harvey", "Wibaux"];

console.log(Hammerhead.name);
// Hammerhead
console.log(Hammerhead.occupation);
// Pickerel Cola Space Truck Driver
console.log(Hammerhead.homePlanet);
// Venice Sands 5
console.log(Hammerhead.hasPickerelCola);
// true
console.log(Hammerhead.hasCoolJacket);
// true
console.log(Hammerhead.friends[0]);
// Taylor
console.log(Hammerhead.friends[1]);
// Harvey
console.log(Hammerhead.friends[2]);
// Wibaux
console.log(Hammerhead.friends.length);
// 3
console.log(typeof Hammerhead.friends);
// object
console.log(typeof Hammerhead);
// object
console.log(typeof Hammerhead.homePlanet);
// string
const {
  name: sharkName,
  occupation,
  homePlanet,
  hasPickerelCola,
  hasCoolJacket,
  friends
} = Hammerhead;

console.log(sharkName);
// sharkName
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(homePlanet);
// Venice Sands 5
console.log(hasPickerelCola);
// true
console.log(hasCoolJacket);
// true
console.log(friends[0]);
// Taylor
console.log(friends[1]);
// Harvey
console.log(friends[2]);
// Wibaux
console.log("--------------------------------------");
console.log("------------------------------------");

class RoboArray {
  constructor(message = "RoboArray") {
    this.container = {};
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
      if (this.container[i] === element) {
        return i;
      }
    }
    return -1;
  }

  includes(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.container[i] === element) {
        return true;
      }
    }
    return false;
  }

  splice(index1, index2) {
    let clone = new RoboArray("Cloned RoboArray!");
    for (; index1 < index2; index1++) {
      newArray.push(this.container[index1]);
    }

    return clone;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new RoboArray("Array Shifted!");
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    this.message = newArray.message;
    return rElement;
  }

  unshift(args) {
    let newArray = new RoboArray("Array Unshifted!!!");
    let i = 0;
    for (; i < arguments.length; i++) {
      newArray.push(arguments[i]);
    }
    i = 0;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    this.message = newArray.message;
    return this.length;
  }

  delete(index) {
    let rElement = this.container[index];
    let newArray = new RoboArray("Element Deleted");
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    this.message = newArray.message;
    return rElement;
  }

  insert(element, index) {
    let newArray = new RoboArray("Element Inserted!");
    let i = 0;
    for (; i < this.length; i++) {
      if (i === index) {
        newArray.push(element);
        newArray.push(this.container[i]);
      } else {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    this.message = newArray.message;
    return this.container;
  }

  reverse() {
    let i = 0;
    let j = this.length - 1;
    let temp = 0;
    for (; i < j; i++, j--) {
      temp = this.container[i];
      this.container[i] = this.container[j];
      this.container[j] = temp;
    }
    this.message = "Array Reversed";
    return this.container;
  }

  at(index) {
    return this.container[index];
  }

  find(func) {
    let i = 0;
    for (; i < this.length; i++) {
      if (func(this.container[i])) {
        return this.container[i];
      }
    }
    return "No Element Matched this Condtion";
  }
}

const robots = new RoboArray();

console.log(robots.push("Hank-44"));
// 1
console.log(robots.push("Warren-21"));
// 2
console.log(robots.push("Mellon-Tech"));
// 3
console.log(robots.push("Eggplant-Head"));
// 4
console.log(robots.find(x => x === "Mellon-Tech"));
// Mellon-Tech
console.log(robots.find(x => x.length === 13));
// Eggplant-Head
