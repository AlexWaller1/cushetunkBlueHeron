console.log("Hello Oa");

class Array21 {
  constructor(message = "Array 21!") {
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
    let cloneArray = new Array21();
    for (; index1 < index2; index1++) {
      cloneArray.push(this.container[index1]);
    }
    return cloneArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array21();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array21();
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
    return newArray.container;
  }

  delete(index) {
    let newArray = new Array21();
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.container;
  }

  insert(element, index) {
    let newArray = new Array21();
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

  reverse() {
    let temp = 0;
    let i = 0;
    let j = this.length - 1;
    for (; i < j; i++, j--) {
      temp = this.container[i];
      this.container[i] = this.container[j];
      this.container[j] = temp;
    }
    return this.container;
  }

  randomize() {
    let temp = 0;
    let i = 0;
    let j = 0;
    for (; i < this.length; i++) {
      j = Math.floor(Math.random() * this.length);
      temp = this.container[i];
      this.container[i] = this.container[j];
      this.container[j] = temp;
    }
    return this.container;
  }
}

const robots = new Array21("Robots Array");

console.log(robots.push("Hank-44"));
// 1
console.log(robots.push("Warren-21"));
// 2
console.log(robots.push("Mellon-Tech"));
// 3
console.log(robots.push("Eggplant-Head"));
// 4
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.container[2]);
// Mellon-Tech
console.log(robots.container[0]);
// Hank-44
console.log(robots.push("Bender"));
// 5
console.log(robots.pop());
// Bender
console.log(robots.length);
// 4
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
const robots2 = robots.splice(0, 2);

console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21'}
console.log(robots2.length);
// 2
console.log(robots2.container[0]);
// Hank-44
console.log(robots2.shift());
// Hank-44
console.log(robots2.container);
// {0: 'Warren-21'}
console.log(robots2.unshift("Hank-44", "Mellon-Tech", "Eggplant-Head"));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
let numTwo = 2;
console.log(numTwo.name);
// undefined
console.log(robots2.delete(2));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Warren-21'}
console.log(robots2.length);
// 3
console.log(robots2.insert("Eggplant-Head", 2));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
console.log(robots2.length);
// 4
console.log(robots2.container);
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
console.log(robots2.reverse());
// {0: 'Warren-21', 1: 'Eggplant-Head', 2: 'Mellon-Tech', 3: 'Hank-44'}
console.log(robots2.randomize());
// it works!!!
console.log("----------------------------------------------");
console.log("-----------------------------------------");

const mellonTech = "Mellon-Tech";

console.log("Mellon-Tech");
// Mellon-Tech
console.log(!!mellonTech);
// true
const emptyString = "";

console.log(!!emptyString);
// false

class PrimeMap {
  constructor(message = "This is PrimeMap!") {
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
    if (this.container[key] == undefined) {
      return false;
    }
    return true;
  }

  delete(key) {
    delete this.container[key];
    this.size--;
  }
}

const charsMap = new PrimeMap();

charsMap.set("a", 1);
charsMap.set("b", 2);
charsMap.set("c", 3);
charsMap.set("d", 4);
charsMap.set("e", 5);
charsMap.set("f", 6);

console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("b"));
// 2

charsMap.set("g", 7);
charsMap.set("h", 8);
charsMap.set("i", 9);
charsMap.set("j", 10);
charsMap.set("k", 11);
charsMap.set("l", 12);
charsMap.set("m", 13);
charsMap.set("n", 14);
charsMap.set("o", 15);
charsMap.set("p", 16);
charsMap.set("q", 17);
charsMap.set("r", 18);
charsMap.set("s", 19);
charsMap.set("t", 20);
charsMap.set("u", 21);
charsMap.set("v", 22);
charsMap.set("w", 23);
charsMap.set("x", 24);
charsMap.set("y", 25);
charsMap.set("z", 26);

console.log(charsMap.size);
// 26

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

charsMap.set("1", 53);
charsMap.set("2", 54);
charsMap.set("3", 55);
charsMap.set("4", 56);
charsMap.set("5", 57);
charsMap.set("6", 58);
charsMap.set("7", 59);
charsMap.set("8", 60);
charsMap.set("9", 61);
charsMap.set("`", 62);
charsMap.set("~", 63);
charsMap.set("!", 64);
charsMap.set("@", 65);
charsMap.set("#", 66);
charsMap.set("$", 67);
charsMap.set("%", 68);
charsMap.set("^", 69);
charsMap.set("&", 70);
charsMap.set("*", 71);
charsMap.set("(", 72);
charsMap.set(")", 73);
charsMap.set("-", 74);
charsMap.set("_", 75);
charsMap.set("+", 76);
charsMap.set("=", 77);

console.log(charsMap.size);

charsMap.set("[", 78);
charsMap.set("{", 79);
charsMap.set("]", 80);
charsMap.set("}", 81);
charsMap.set("|", 82);
charsMap.set(":", 83);
charsMap.set(";", 84);
charsMap.set("'", 85);
charsMap.set("<", 86);
charsMap.set(",", 87);
charsMap.set(">", 88);
charsMap.set(".", 89);
charsMap.set("'", 90);
charsMap.set("?", 91);
charsMap.set("/", 92);
charsMap.set("0", 93);

console.log(charsMap.size);
// 92

console.log("-----------------------------------------------");
console.log("-------------------------------------------");

class HashMap {
  constructor(message = "This is a HashMap!!!") {
    this.size = 0;
    this.container = [];
    this.message = message;
  }

  hash(string) {
    if (typeof string !== "string") {
      string = string.toString();
    }
    let rString = "";
    let i = 0;
    for (; i < string.length; i++) {
      let char = string.charAt(i);
      let hash = charsMap.get(char);
      rString = rString.concat(hash);
    }
    return parseInt(rString);
  }

  set(key, value) {
    key = this.hash(key);
    this.container[key] = value;
    this.size++;
  }

  get(key) {
    key = this.hash(key);
    return this.container[key];
  }

  has(key) {
    key = this.hash(key);
    if (this.container[key] !== undefined) {
      return true;
    }
    return false;
  }

  delete(key) {
    key = this.hash(key);
    delete this.container[key];
    this.size--;
  }
}

const dachshunds = new HashMap();

console.log(dachshunds.hash("Chipper"));
// 29891616518
console.log(dachshunds.hash("Chipper"));
// 29891616518
console.log(dachshunds.hash("Beezer"));
// 285526518
console.log(dachshunds.hash("Beezer"));
// 285526518
console.log(dachshunds.hash("Bodhi"));
// 2815489
console.log(dachshunds.hash("Bodhi"));
// 2815489

const roboMap = new HashMap();

roboMap.set(1, "Hank-44");
roboMap.set(2, "Warren-21");
roboMap.set(3, "Mellon-Tech");
roboMap.set(4, "Eggplant-Head");

console.log(roboMap.get(1));
// Hank-44
console.log(roboMap.get(2));
// Warren-21
console.log(roboMap.get(3));
// Mellon-Tech
console.log(roboMap.get(4));
// Eggplant-Head
console.log(roboMap.has(1));
// true
console.log(roboMap.has(2));
// true
console.log(roboMap.has(3));
// true
console.log(roboMap.has(4));
// true
console.log(roboMap.has(10));
// false
console.log(roboMap.get(10));
// undefined
console.log(roboMap.size);
// 4
console.log(roboMap.set(11, "test"));

console.log(roboMap.get(11));
// test
console.log(roboMap.size);
// 5
roboMap.delete(11);

console.log(roboMap.get(11));
// undefined
console.log(roboMap.size);
// 4

console.log("--------------------------------------------------");
console.log("------------------------------------------------");

console.log(!!null);
// false
const hammerHead = {
  name: "Hammerhead",
  species: "Hammerhead Shark",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Venice Sands 5",
  hasCoolJacket: true,
  hasPickerelCola: true,
  livesInRiver: false,
  friends: ["Taylor", "Harvey", "Wibaux"]
};

const wibaux = {
  name: "Wibaux",
  species: "Whitefish",
  occupation: "River Guide",
  homePlanet: "Hardin-37",
  hasCoolJacket: false,
  hasPickerelCola: false,
  livesInRiver: true,
  friends: ["Harvey", "Taylor", "Hammerhead"]
};

console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(typeof wibaux.livesInRiver);
// boolean
console.log(hammerHead.friends[0]);
// Taylor
console.log(wibaux.friends.length);
// 3
console.log(wibaux.friends.length === hammerHead.friends.length);
// true

let {
  name,
  species,
  occupation,
  homePlanet,
  hasCoolJacket,
  hasPickerelCola,
  livesInRiver,
  friends
} = wibaux;

console.log(name);
// Wibaux
console.log(species);
// Whitefish
console.log(occupation);
// River Guide
console.log(homePlanet);
// Hardin-37
console.log(livesInRiver);
// true
console.log(typeof friends);
// object
console.log("-----------------------------------------------");
console.log("----------------------------------------------");

function isPrimeNum(num) {
  let i = 2;
  let sqrt = Math.sqrt(num);
  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNum(3));
// true
console.log(isPrimeNum(4));
// false
console.log(isPrimeNum(5));
// true
console.log(isPrimeNum(6));
// false
console.log(isPrimeNum(7));
// true
console.log(isPrimeNum(17));
// true
console.log(isPrimeNum(18));
// false
console.log(isPrimeNum(19));
// true
console.log(isPrimeNum(20));
// false
console.log("isPrimeNum !!!");
// isPrimeNum !!!
console.log("------------------------------------------------");
console.log("------------------------------------------");

function findAllFactors(num) {
  let sqrt = Math.sqrt(num);
  let rArray = [];
  let i = 1;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      let factor = num / i;
      rArray.push(factor);
      if (i !== sqrt) {
        let factor2 = num / factor;
        rArray.push(factor2);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors(36));
// [36, 1, 18, 2, 12, 3, 9, 4, 6]
console.log(findAllFactors(20));
// [20, 1, 10, 2, 5, 4]
console.log(findAllFactors(49));
// [49, 1, 7]
console.log(findAllFactors(52));
// [52, 1, 26, 2, 13, 4]
console.log("findAllFactors!!!");
// findAllFactors!!!
console.log("-----------------------------------------------");
console.log("--------------------------------");

let racecar = "racecar";

let couch = "couch";

let radar = "radar";

let television = "television";

let kayak = "kayak";

let remote = "remote";

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
console.log(isPalindrome(couch));
// false
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(television));
// false
console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(remote));
// false
console.log("isPalindrome!!!");
// isPalindrome!!!
console.log("--------------------------------------------");
console.log("---------------------------------------");
