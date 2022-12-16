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
      if (this.container[i] == element) {
        return i;
      }
    }
    return -1;
  }

  includes(element) {
    let i = 0;
    for (; i < this.length; i++) {
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
    let newArray = new Array11();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
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
    if (index > this.length - 1 || index < 0) {
      return "array does not have this index";
    }
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

  insert(element, index) {
    if (index > this.length || index < 0) {
      return "cannot insert at this index";
    }
    let newArray = new Array11();
    let i = 0;
    for (; i < this.length; i++) {
      if (i == index) {
        newArray.push(element);
        newArray.push(this.container[i]);
      } else {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = this.length;
    return this.container;
  }
}

const robots = new Array11();

let testObj = {};

testObj[0] = "test";

console.log(testObj);

console.log(robots.push("Hank-44"));
// 1
console.log(robots.push("Warren-21"));
// 2
console.log(robots.push("Mellon-Tech"));
// 3
console.log(robots.push("Eggplant-Head"));
// 4
console.log(robots.length);
// 4
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.push("test"));
// 5
console.log(robots.pop());
// test
console.log(robots.length);
// 4
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("test"));
// -1
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("test"));
// false
console.log("Blue Jay");
// Blue Jay
console.log(!!undefined);
// false
let roboClone1 = robots.splice(2, 4);

console.log(roboClone1.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(roboClone1.length);
// 2
console.log(robots.shift());
// Hank-44
console.log(robots.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head'}
console.log(robots.length);
// 3
console.log(robots.unshift("Hank-44", "Bender", "Test"));
// 6
console.log(robots.container);
// {0: 'Hank-44', 1: 'Bender', 2: 'Test', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(robots.delete(2));
// Test
console.log(robots.container);
// {0: 'Hank-44', 1: 'Bender', 2: 'Warren-21', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(robots.length);
// 5
console.log(robots.delete(-2));
// array does not have this index
console.log(robots.insert("Rising Dough", 3));
// {0: 'Hank-44', 1: 'Bender', 2: 'Warren-21', 3: 'Rising Dough', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(robots.insert("test", 21));
// cannot insert at this index
console.log(robots.insert("test", -12));
// cannot insert at this index
console.log("----------------------------------------------");
console.log("----------------------------------------------");

class PrimeMap {
  constructor(message = "PrimeMap!") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  set(key, value) {
    this.container[key] = value;
    this.size++;
  }

  get(key) {
    return this.container[key];
  }

  has(key) {
    if (this.container[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  delete(key) {
    delete this.container[key];
    this.size--;
  }
}

let charsMap = new PrimeMap();

charsMap.set("a", 1);
charsMap.set("b", 2);
charsMap.set("c", 3);
charsMap.set("d", 4);
charsMap.set("e", 5);
charsMap.set("f", 6);
charsMap.set("g", 7);
charsMap.set("h", 8);
charsMap.set("i", 9);
charsMap.set("j", 10);
charsMap.set("k", 11);
charsMap.set("l", 12);

console.log(charsMap.size);
// 12
console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("b"));
// 2

charsMap.set("m", 13);
charsMap.set("n", 14);
charsMap.set("o", 15);
charsMap.set("p", 16);
charsMap.set("q", 17);
charsMap.set("r", 18);
charsMap.set("s", 19);
charsMap.set("t", 20);
charsMap.set("u", 21);

console.log(charsMap.size);
// 21

charsMap.set("v", 22);
charsMap.set("w", 23);
charsMap.set("x", 24);
charsMap.set("y", 25);
charsMap.set("z", 26);

console.log(charsMap.size);
// 26
console.log(charsMap.get("y"));
// 25

charsMap.set("A", 27);
charsMap.set("B", 28);
charsMap.set("C", 29);
charsMap.set("D", 30);
charsMap.set("E", 31);
charsMap.set("F", 32);
charsMap.set("G", 33);
charsMap.set("H", 34);
charsMap.set("I", 35);
charsMap.set("J", 36);
charsMap.set("K", 37);
charsMap.set("L", 38);
charsMap.set("M", 39);
charsMap.set("N", 40);
charsMap.set("O", 41);
charsMap.set("P", 42);
charsMap.set("Q", 43);
charsMap.set("R", 44);
charsMap.set("S", 45);
charsMap.set("T", 46);
charsMap.set("U", 47);
charsMap.set("V", 48);
charsMap.set("W", 49);
charsMap.set("X", 50);
charsMap.set("Y", 51);
charsMap.set("Z", 52);

console.log(charsMap.size);
// 52

charsMap.set("`", 53);
charsMap.set("~", 54);
charsMap.set("1", 55);
charsMap.set("!", 56);
charsMap.set("@", 57);
charsMap.set("2", 58);
charsMap.set("#", 59);
charsMap.set("3", 60);
charsMap.set("$", 61);
charsMap.set("4", 62);
charsMap.set("%", 63);
charsMap.set("5", 64);
charsMap.set("^", 65);
charsMap.set("6", 66);
charsMap.set("&", 67);
charsMap.set("7", 68);
charsMap.set("*", 69);
charsMap.set("8", 70);
charsMap.set("(", 71);
charsMap.set("9", 72);
charsMap.set(")", 73);
charsMap.set("0", 74);
charsMap.set("-", 75);
charsMap.set("_", 76);
charsMap.set("+", 77);
charsMap.set("=", 78);
charsMap.set("{", 79);
charsMap.set("[", 80);
charsMap.set("}", 81);
charsMap.set("]", 82);
charsMap.set("|", 83);
charsMap.set(":", 84);
charsMap.set(";", 85);
charsMap.set("'", 86);
charsMap.set("<", 87);
charsMap.set(",", 88);
charsMap.set(">", 89);
charsMap.set(".", 90);
charsMap.set("?", 91);
charsMap.set("/", 92);

class HashMap {
  constructor(message = "Hashmap") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  hash(element) {
    if (typeof element !== "string") {
      element = element.toString();
    }
    let elString = "";
    let i = 0;

    for (; i < element.length; i++) {
      let char = element.charAt(i);
      let charNum = charsMap.get(char);
      elString = elString.concat(charNum);
    }
    return parseInt(elString);
  }

  set(key, value) {
    key = this.hash(key);
    this.container[key] = value;
    this.size++;
    return this.size;
  }

  get(key) {
    key = this.hash(key);
    return this.container[key];
  }

  has(key) {
    key = this.hash(key);
    if (this.container[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  delete(key) {
    key = this.hash(key);
    delete this.container[key];
    this.size--;
    return this.size;
  }
}

const testMap = new HashMap();

console.log(testMap.hash("Bodhi"));
// 2815489
console.log(testMap.hash("Bodhi"));
// 2815489
console.log(testMap.hash("Beezer"));
// 285526518
console.log(testMap.hash("Beezer"));
// 285526518
console.log(testMap.hash("Chipper"));
// 29891616518
console.log(testMap.hash("Chipper"));
// 29891616518
const roboMap = new HashMap();

console.log(roboMap.set(0, "Hank-44"));
// 1
console.log(roboMap.set(1, "Warren-21"));
// 2
console.log(roboMap.set(2, "Mellon-Tech"));
// 3
console.log(roboMap.set(3, "Eggplant-Head"));
// 4
console.log(roboMap.get(0));
// Hank-44
console.log(roboMap.get(1));
// Warren-21
console.log(roboMap.get(2));
// Mellon-Tech
console.log(roboMap.get(3));
// Eggplant-Head
console.log(roboMap.has(0));
// true
console.log(roboMap.has(1));
// true
console.log(roboMap.has(2));
// true
console.log(roboMap.has(3));
// true
console.log(roboMap.has(4));
// false
console.log(roboMap.set(4, "test"));
// 5
console.log(roboMap.has(4));
// true
console.log(roboMap.delete(4));
// 4
console.log(roboMap.has(4));
// false
console.log("----------------------------------------");
console.log("-----------------------------------");
console.log("Blue Jay!");
// Blue Jay!
const robots211 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots211[0]);
// Hank-44
console.log(robots211[1]);
// Warren-21
console.log(robots211[2]);
// Mellon-Tech
console.log(robots211[3]);
// Eggplant-Head
console.log(robots211.length);
// 4
console.log(typeof robots211[0]);
// string

class RoboBand {
  constructor(message = "Robo Rock Band!") {
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
    if (index1 >= index2) {
      return [];
    }
    let rArray = new RoboBand("RoboClone!");
    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new RoboBand("shift function!");
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new RoboBand("unshift function!");
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
    let rElement = this.container[index];
    let newArray = new RoboBand("delete function!");
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

  insert(element, index) {
    let newArray = new RoboBand("insert function!");
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
    return this.container;
  }
}

const roboBand1 = new RoboBand("RoboBand!");

console.log(roboBand1.push("Hank-44"));
// 1
console.log(roboBand1.push("Warren-21"));
// 2
console.log(roboBand1.push("Mellon-Tech"));
// 3
console.log(roboBand1.push("Eggplant-Head"));
// 4
console.log(roboBand1.push("test"));
// 5
console.log(roboBand1.length);
// 5
console.log(roboBand1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'test'}
console.log(roboBand1.container[0]);
// Hank-44
console.log(roboBand1.container[1]);
// Warren-21
console.log(roboBand1.container[2]);
// Mellon-Tech
console.log(roboBand1.container[3]);
// Eggplant-Head
console.log(roboBand1.pop());
// test
console.log(roboBand1.length);
// 4

// shift unshift delete insert

console.log(roboBand1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(roboBand1.indexOf("Hank-44"));
// 0
console.log(roboBand1.indexOf("Warren-21"));
// 1
console.log(roboBand1.indexOf("Mellon-Tech"));
// 2
console.log(roboBand1.indexOf("Eggplant-Head"));
// 3
console.log(roboBand1.indexOf("Crash Bandicoot"));
// -1
console.log(roboBand1.includes("Hank-44"));
// true
console.log(roboBand1.includes("Warren-21"));
// true
console.log(roboBand1.includes("Mellon-Tech"));
// true
console.log(roboBand1.includes("Eggplant-Head"));
// true
console.log(roboBand1.includes("Crash Bandicoot"));
// false
const roboBandClone1 = roboBand1.splice(2, 4);

console.log(roboBandClone1.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(roboBandClone1.length);
// 2
console.log(roboBand1.message);
// RoboBand1
console.log(roboBandClone1.message);
// RoboClone!
console.log(roboBand1.shift());
// Hank-44
console.log(roboBand1.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head'}
console.log(roboBand1.length);
// 3
console.log(roboBand1.message);
// RoboBand! never got the message from shift method because message was never reassigned
console.log(roboBand1.unshift("Hank-44", "Hank-44"));
// 5
console.log(roboBand1.container);
// {0: 'Hank-44', 1: 'Hank-44', 2: 'Warren-21', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(roboBand1.delete(1));
// Hank-44
console.log(roboBand1.length);
// 4
console.log(roboBand1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(roboBand1.insert("Bender", 2));
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(roboBand1.length);
// 5
console.log("----------------------------------------------");
console.log("------------------------------------");

class RoboProtoMap {
  constructor(message = "RoboProtoMap") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  set(key, value) {
    this.container[key] = value;
    this.size++;
    return this.size;
  }

  get(key) {
    return this.container[key];
  }

  has(key) {
    if (this.container[key] === undefined) {
      return false;
    }
    return true;
  }

  delete(key) {
    delete this.container[key];
    this.size--;
    return this.size;
  }
}

const proto1 = new RoboProtoMap("Proto Map 1!");

console.log(proto1.set(1, "Hank-44"));
// 1
console.log(proto1.set(2, "Warren-21"));
// 2
console.log(proto1.set(3, "Mellon-Tech"));
// 3
console.log(proto1.set(4, "Eggplant-Head"));
// 4
console.log(proto1.size);
// 4
console.log(proto1.get(1));
// Hank-44
console.log(proto1.get(2));
// Warren-21
console.log(proto1.get(3));
// Mellon-Tech
console.log(proto1.get(4));
// Eggplant-Head
console.log(proto1.get(0));
// undefined
console.log(proto1.has(1));
// true
console.log(proto1.has(2));
// true
console.log(proto1.has(3));
// true
console.log(proto1.has(4));
// true
console.log(proto1.has(0));
// false
console.log(proto1.delete(3));
// 3
console.log(proto1.get(3));
// undefined
console.log(proto1.size);
// 3
console.log(proto1.set(3, "Mellon-Tech"));
// 4
console.log(proto1.get(3));
// Mellon-Tech
console.log("--------------------------------------------");
console.log("-----------------------------------------");

let subMap = new RoboProtoMap();

subMap.set("a", 1);
subMap.set("b", 2);
subMap.set("c", 3);
subMap.set("d", 4);
subMap.set("e", 5);
subMap.set("f", 6);
subMap.set("g", 7);
subMap.set("h", 8);
subMap.set("i", 9);
subMap.set("j", 10);
subMap.set("k", 11);
subMap.set("l", 12);
subMap.set("m", 13);
subMap.set("n", 14);

console.log(subMap.get("a"));
// 1
console.log(subMap.get("b"));
// 2

subMap.set("o", 15);
subMap.set("p", 16);
subMap.set("q", 17);
subMap.set("r", 18);
subMap.set("s", 19);
subMap.set("t", 20);
subMap.set("u", 21);
subMap.set("v", 22);
subMap.set("w", 23);
subMap.set("x", 24);
subMap.set("y", 25);
subMap.set("z", 26);

console.log(subMap.get("x"));
// 24
console.log(subMap.get("y"));
// 25

subMap.set("A", 27);
subMap.set("B", 28);
subMap.set("C", 29);
subMap.set("D", 30);
subMap.set("E", 31);
subMap.set("F", 32);
subMap.set("G", 33);
subMap.set("H", 34);
subMap.set("I", 35);
subMap.set("J", 36);
subMap.set("K", 37);
subMap.set("L", 38);
subMap.set("M", 39);
subMap.set("N", 40);
subMap.set("O", 41);
subMap.set("P", 42);

console.log(subMap.get("C"));
// 29
console.log(subMap.get("D"));
// 30

subMap.set("Q", 43);
subMap.set("R", 44);
subMap.set("S", 45);
subMap.set("T", 46);
subMap.set("U", 47);
subMap.set("V", 48);
subMap.set("W", 49);
subMap.set("X", 50);
subMap.set("Y", 51);
subMap.set("Z", 52);

console.log(subMap.get("Y"));
// 51
console.log(subMap.get("Z"));
// 52

subMap.set("1", 53);
subMap.set("2", 54);
subMap.set("3", 55);
subMap.set("4", 56);
subMap.set("5", 57);
subMap.set("6", 58);
subMap.set("7", 59);
subMap.set("8", 60);
subMap.set("9", 61);
subMap.set("0", 62);

console.log(subMap.get("9"));
// 61
console.log(subMap.get("0"));
// 62

subMap.set("`", 63);
subMap.set("~", 64);
subMap.set("!", 65);
subMap.set("@", 66);
subMap.set("#", 67);
subMap.set("$", 68);
subMap.set("%", 69);
subMap.set("^", 70);
subMap.set("&", 71);
subMap.set("*", 72);
subMap.set("(", 73);
subMap.set(")", 74);
subMap.set("-", 75);
subMap.set("_", 76);
subMap.set("=", 77);
subMap.set("+", 78);
subMap.set("{", 79);
subMap.set("[", 80);
subMap.set("}", 81);
subMap.set("]", 82);
subMap.set("|", 83);
subMap.set(":", 84);
subMap.set(";", 85);
subMap.set("'", 86);
subMap.set("<", 87);
subMap.set(",", 88);
subMap.set(">", 89);
subMap.set(".", 90);
subMap.set("?", 91);
subMap.set("/", 92);

console.log(subMap.get("."));
// 90
console.log(subMap.get("/"));
// 92

class RoboActive {
  constructor(message = "RoboActive!") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  hash(key) {
    if (typeof key !== "string") {
      key = key.toString();
    }
    let hashKey = "";
    let i = 0;
    for (; i < key.length; i++) {
      let newKey = key.charAt(i);
      let char = subMap.get(newKey);
      hashKey = hashKey.concat(char);
    }
    return parseInt(hashKey);
  }

  set(key, value) {
    key = this.hash(key);
    this.container[key] = value;
    this.size++;
    return this.size;
  }

  get(key) {
    key = this.hash(key);
    return this.container[key];
  }

  has(key) {
    key = this.hash(key);
    if (this.container[key] === undefined) {
      return false;
    }
    return true;
  }

  delete(key) {
    key = this.hash(key);
    delete this.container[key];
    this.size--;
    return this.size;
  }
}

let testMap2 = new RoboActive();

console.log(testMap2.hash("Beezer"));
// 285526518
console.log(testMap2.hash("Beezer"));
// 285526518
console.log(testMap2.hash("Chipper"));
// 29891616518
console.log(testMap2.hash("Chipper"));
// 29891616518
console.log(testMap2.hash("Bodhi"));
// 2815489
console.log(testMap2.hash("Bodhi"));
// 2815489
const roboMap5 = new RoboActive();

console.log(roboMap5.set(1, "Hank-44"));
// 1
console.log(roboMap5.set(2, "Warren-21"));
// 2
console.log(roboMap5.set(3, "Mellon-Tech"));
// 3
console.log(roboMap5.set(4, "Eggplant-Head"));
// 4
console.log(roboMap5.size);
// 4
console.log(roboMap5.get(1));
// Hank-44
console.log(roboMap5.get(2));
// Warren-21
console.log(roboMap5.get(3));
// Mellon-Tech
console.log(roboMap5.get(4));
// Eggplant-Head
console.log(roboMap5.has(1));
// true
console.log(roboMap5.has(2));
// true
console.log(roboMap5.has(3));
// true
console.log(roboMap5.has(4));
// true
console.log(roboMap5.delete(2));
// 3
console.log(roboMap5.get(2));
// undefined
console.log(roboMap5.has(2));
// false
console.log(roboMap5.set(2, "Warren-21"));
// 4
console.log(roboMap5.get(2));
// Warren-21
console.log(roboMap5.has(2));
// true
console.log(roboMap5.size);
// 4
console.log("-------------------------------------------");
console.log("-----------------------------------------");

const hammerHead5 = {
  name: "Hammerhead",
  species: "Hammerhead Shark",
  homePlanet: "Venice Sands 5",
  occupation: "Pickerel Cola Space Truck Driver",
  hasPickerelCola: true,
  hasCoolJacket: true,
  friends: ["Taylor", "Harvey", "Wibaux"]
};

console.log(hammerHead5.name);
// Hammerhead
console.log(hammerHead5.species);
// Hammerhead Shark
console.log(hammerHead5.homePlanet);
// Venice Sands 5
console.log(hammerHead5.occupation);
// Pickerel Cola Space Truck Driver
console.log(hammerHead5.hasPickerelCola);
// true
console.log(hammerHead5.hasCoolJacket);
// true
console.log(hammerHead5.friends[0]);
// Taylor
console.log(hammerHead5.friends[1]);
// Harvey
console.log(hammerHead5.friends[2]);
// Wibaux
console.log(hammerHead5.friends.length);
// 3
console.log(Object.keys(hammerHead5)[0]);
// name
console.log(Object.values(hammerHead5)[3]);
// Pickerel Cola Space Truck Driver
const {
  name: hammerHeadName,
  species: hammerHeadSpecies,
  homePlanet: veniceSands,
  occupation: spaceTruck,
  hasPickerelCola: pickerel,
  hasCoolJacket: coolJacket,
  friends: piscesFriends
} = hammerHead5;

console.log(hammerHeadName);
// Hammerhead
console.log(hammerHeadSpecies);
// Hammerhead Shark
console.log(veniceSands);
// Venice Sands 5
console.log(spaceTruck);
// Pickerel Cola Space Truck Driver
console.log(pickerel);
// true
console.log(coolJacket);
// true
console.log(piscesFriends.length);
// 3
console.log(piscesFriends[0]);
// Taylor
console.log(piscesFriends[1]);
// Harvey
console.log(piscesFriends[2]);
// Wibaux
console.log(typeof coolJacket);
// boolean
console.log(typeof spaceTruck);
// string
console.log(typeof pickerel);
// boolean
console.log(typeof piscesFriends);
// object
console.log(typeof piscesFriends.length);
// number
console.log("---------------------------------------------");
console.log("----------------------------------------");

const robots9 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

function reverse(array) {
  let i = 0;
  let j = array.length - 1;
  for (; i < j; i++, j--) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(reverse(robots9));
// ['Eggplant-Head', 'Mellon-Tech', 'Warren-21', 'Hank-44']

let racecar = "racecar";

let lamp = "lamp";

let radar = "radar";

let television = "television";

let kayak = "kayak";

let robot = "robot";

function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;

  for (; i < j; i++, j--) {
    if (string.charAt(i) !== string.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(racecar));
// true
console.log(isPalindrome(lamp));
// false
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(television));
// false
console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(robot));

console.log("--------------------------------------------");
console.log("----------------------------------------");

console.log(Math.sqrt(9));
// 3

let nine = 9;

let three = 3;

let five = 5;

let seventyThree = 73;

let ninetyFour = 94;

let eightySeven = 87;

function isPrimeNum(num) {
  if (num <= 2) {
    return false;
  }
  let sqrt = Math.sqrt(num);
  let i = 2;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNum(nine));
// false
console.log(isPrimeNum(three));
// true
console.log(isPrimeNum(five));
// true
