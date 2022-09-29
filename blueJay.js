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
