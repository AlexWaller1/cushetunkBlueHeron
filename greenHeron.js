console.log("Hello Oa");

class Array22 {
  constructor() {
    this.container = {};
    this.length = 0;
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

  slice(index1, index2) {
    let rArray = new Array22();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array22();
    let i = 1;

    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array22();
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
    let newArray = new Array22();
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
    let newArray = new Array22();
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

const robots = new Array22();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.push("Bender"));
// 5
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Bender'}
console.log(robots.pop());
// Bender
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
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
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
let roboClone1 = robots.slice(1, 3);

console.log(roboClone1.container);
// {0: 'Warren-21', 1: 'Mellon-Tech'}
console.log(roboClone1.length);
// 2
console.log(roboClone1.shift());
// Warren-21
console.log(roboClone1.container);
// {0: 'Mellon-Tech'}
console.log(roboClone1.length);
// 1
console.log(roboClone1.unshift("Hank-44", "Warren-21", "Bender"));
// 4
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech'}
console.log(roboClone1.push("Test 1"));
// 5
console.log(roboClone1.push("Eggplant-Head"));
// 6
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Test 1', 5: 'Eggplant-Head'}
console.log(roboClone1.length);
// 6
console.log(roboClone1.delete(4));
// Test 1
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(roboClone1.length);
// 5
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.insert("Rising Dough", 2));
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Rising Dough', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(robots.reverse());
// {0: 'Eggplant-Head', 1: 'Mellon-Tech', 2: 'Rising Dough', 3: 'Warren-21', 4: 'Hank-44'}
console.log(robots.container);
// {0: 'Eggplant-Head', 1: 'Mellon-Tech', 2: 'Rising Dough', 3: 'Warren-21', 4: 'Hank-44'}
// console.log(robots.randomize());
// it works

console.log("------------------------------------");
console.log("----------------------------------");

function isPrimeNum(num) {
  let sqrt = Math.sqrt(num);
  let i = 2;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNum(9));
// false
console.log(isPrimeNum(2));
// true
console.log(isPrimeNum(29));
// true

console.log("------------------------------------");
console.log("-------------------------------");

let racecar = "racecar";

let television = "television";

let radar = "radar";

let lamp = "lamp";

let kayak = "kayak";

let sodaCan = "soda can";

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
console.log(isPalindrome(television));
// false
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(lamp));
// false
console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(sodaCan));
// false
console.log("-----------------------------------");
console.log("---------------------------------");

function reverseNum(num) {
  let remainder = 0;
  let rNum = 0;

  for (; parseInt(num) > 0; num = num / 10) {
    num = parseInt(num);
    remainder = num % 10;
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNum(37));
// 73
console.log(reverseNum(56));
// 65
console.log(reverseNum(9876));
// 6789

let testNums1 = [45, 98, 109, 908, 43];

let testNums2 = [23, 45, 19, 34, 74, 56];

let testNums3 = [80, 1, 34, 15, 10, 16];

let testNums4 = [57, 17, 18, 90, 21, 22];

function greatestReverseNum(array) {
  let i = 0;

  for (; i < array.length; i++) {
    array[i] = reverseNum(array[i]);
  }

  let max = array[0];
  let j = 0;

  for (; j < array.length; j++) {
    if (array[j] > max) {
      max = array[j];
    }
  }
  return max;
}

console.log(greatestReverseNum(testNums1));
// 901
console.log(greatestReverseNum(testNums2));
// 91
console.log(greatestReverseNum(testNums3));
// 61
console.log(greatestReverseNum(testNums4));
// 81

console.log("----------------------------------");
console.log("------------------------------");

function findAllFactors(num) {
  let rArray = [];
  let sqrt = Math.sqrt(num);
  let i = 1;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      rArray.push(i);
      let factor = num / i;
      if (factor !== sqrt) {
        rArray.push(factor);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors(36));
// [1, 36, 2, 18, 3, 12, 4, 9, 6]
console.log(findAllFactors(96));
// [1, 96, 2, 48, 3, 32, 4, 24, 6, 16, 8, 12]
console.log(findAllFactors(31));
// [1, 31]
console.log("--------------------------------------");
console.log("---------------------------------");

const hammerHead = {
  name: "Hammerhead",
  occupation: "Pickerel Cola Space Truck Driver",
  species: "Hammerhead Shark",
  homePlanet: "Venice Sands 5",
  hasPickerelCola: true
};

const hammerHead2 = hammerHead;

hammerHead2["friends"] = ["Taylor", "Harvey", "Wibaux"];

console.log(hammerHead.friends);
// ['Taylor', 'Harvey', 'Wibaux']
console.log(hammerHead.friends[2]);
// Wibaux
console.log(robots.container);
/* {
    0: 'Eggplant-Head',
    1: 'Mellon-Tech',
    2: 'Rising Dough',
    3: 'Warren-21',
    4: 'Hank-44'
} */
console.log(robots.length);
// 5
const robots2 = robots.container;

robots2[5] = "Bender";

console.log(robots2);
/* {
    0: 'Eggplant-Head',
    1: 'Mellon-Tech',
    2: 'Rising Dough',
    3: 'Warren-21',
    4: 'Hank-44',
    5: 'Bender'
} */
console.log(robots.container);
/* {
    0: 'Eggplant-Head',
    1: 'Mellon-Tech',
    2: 'Rising Dough',
    3: 'Warren-21',
    4: 'Hank-44',
    5: 'Bender'
} */
console.log(robots.length);
// 5 :(
robots.length++;

console.log(robots.length);
// 6 :)

const robots3 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots3.length);
// 4
robots3.length++;

console.log(robots3.length);
// 5
console.log(robots3);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head', empty]
console.log(robots3[4]);
// undefined
robots3[4] = "Bender";

console.log(robots3);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head', 'Bender']
console.log(robots3.length);
// 5
console.log("-------------------------------------");
console.log("---------------------------------");

class PrimeMap {
  constructor(message = "Default Robo Message") {
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
    if (this.container[key] == undefined) {
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

const charsMap = new PrimeMap();

console.log(charsMap.message);
// Default Robo Message
charsMap.set("a", 1);
charsMap.set("b", 2);
charsMap.set("c", 3);
charsMap.set("d", 4);
charsMap.set("e", 5);
charsMap.set("f", 6);
charsMap.set("g", 7);

console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("b"));
// 2
console.log(charsMap.size);
// 7

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

console.log(charsMap.get("i"));
// 9
console.log(charsMap.get("j"));
// 10
console.log(charsMap.size);
// 18

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

console.log(charsMap.get("E"));
// 31
console.log(charsMap.get("J"));
// 36
console.log(charsMap.size);
// 36

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
charsMap.set("!", 55);
charsMap.set("@", 56);
charsMap.set("#", 57);
charsMap.set("$", 58);
charsMap.set("%", 59);
charsMap.set("^", 60);
charsMap.set("&", 61);
charsMap.set("*", 62);
charsMap.set("(", 63);
charsMap.set(")", 64);
charsMap.set("-", 65);
charsMap.set("_", 66);
charsMap.set("+", 67);
charsMap.set("=", 68);
charsMap.set("1", 69);
charsMap.set("2", 70);
charsMap.set("3", 71);
charsMap.set("4", 72);
charsMap.set("5", 73);
charsMap.set("6", 74);
charsMap.set("7", 75);
charsMap.set("8", 76);
charsMap.set("9", 77);
charsMap.set("0", 78);

console.log(charsMap.size);
// 78
console.log(charsMap.get("3"));
// 71

charsMap.set("[", 79);
charsMap.set("{", 80);
charsMap.set("]", 81);
charsMap.set("}", 82);
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

console.log(charsMap.size);
// 92

console.log("---------------------------------------------");
console.log("--------------------------------------------");

class HashMap {
  constructor(message = "Robo Default Message") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  hash(value) {
    if (typeof value !== "string") {
      value = value.toString();
    }
    let keyString = "";
    let i = 0;

    for (; i < value.length; i++) {
      let char = charsMap.get(value.charAt(i));
      keyString = keyString.concat(char);
    }
    return parseInt(keyString);
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
    if (this.container[key] == undefined) {
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

const risingDough = new HashMap("Rising Dough Map");

console.log(risingDough.hash("Bodhi"));
// 2815489
console.log(risingDough.hash("Bodhi"));
// 2815489
console.log(risingDough.hash("Beezer"));
// 285526518
console.log(risingDough.hash("Beezer"));
// 285526518
console.log(risingDough.hash("Chipper"));
// 29891616518
console.log(risingDough.hash("Chipper"));
// 29891616518
console.log(risingDough.size);
// 0
console.log(risingDough.set(1, "Rising Dough"));
// 1
console.log(risingDough.set(2, "Brayden"));
// 2
console.log(risingDough.set(3, "Dex Garrity"));
// 3
console.log(risingDough.set(4, "Brooke Nevins"));
// 4
console.log(risingDough.set(5, "Carmine"));
// 5
console.log(risingDough.has(1));
// true
console.log(risingDough.has(5));
// true
console.log(risingDough.has(34));
// false
console.log(risingDough.get(1));
// Rising Dough
console.log(risingDough.get(3));
// Dex Garrity
console.log(risingDough.get(4));
// Brooke Nevins
console.log(risingDough.set(6, "test"));
// 6
console.log(risingDough.has(6));
// true
console.log(risingDough.delete(6));
// 5
console.log(risingDough.has(6));
// false
console.log("---------------------------------------------");
console.log("-------------------------------------");

const numSet = new Set();

numSet.add(1);
numSet.add(2);
numSet.add(3);
numSet.add(4);
numSet.add(5);

console.log(numSet);

console.log(numSet.size);
// 5
console.log(numSet.has(2));
// true
console.log(numSet.add(6));
// the add function returns the set itself
console.log(numSet.delete(3));
// true will return true if key found and deleted
console.log(numSet.delete(11));
// returns false if key not found
console.log(numSet);

console.log("------------------------------------------------");
console.log("-----------------------------------------------");

class KeySet {
  constructor(message = "This is a Set!") {
    this.container = {};
    this.size = 0;
    this.message = message;
  }

  add(key) {
    this.container[this.size] = key;
    this.size++;
    return this.container;
  }

  has(key) {
    let i = 0;

    for (; i < this.size; i++) {
      if (this.container[i] == key) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    let rBoolean = false;
    let newSet = new KeySet();
    let i = 0;

    for (; i < this.size; i++) {
      if (this.container[i] == key) {
        rBoolean = true;
        delete this.container[i];
      }
    }

    if (rBoolean) {
      let j = 0;
      for (; j < this.size; j++) {
        if (this.container[j] !== undefined) {
          newSet.add(this.container[j]);
        }
      }
      this.container = newSet.container;
      this.size = newSet.size;
    }

    return rBoolean;
  }
}

const numSet2 = new KeySet();

console.log(numSet2.size);
// 0
console.log(numSet2.add(0));
// {0: 0}
console.log(numSet2.add(1));
// {0: 0, 1: 1}
console.log(numSet2.add(2));
// {0: 0, 1: 1, 2: 2}
console.log(numSet2.add(3));
// {0: 0, 1: 1, 2: 2, 3: 3}
console.log(numSet2.size);
// 4
console.log(numSet2.delete(12));
// false
console.log(numSet2.delete(1));
// true
console.log(numSet2.container);
// {0: 0, 1: 2, 2: 3}
console.log(numSet2.size);
// 3
console.log(numSet2.add(4));
// {0: 0, 1: 2, 2: 3, 3: 4}
console.log(numSet2.size);
// 4
console.log("----------------------------------------------");
console.log("---------------------------------------------");

let isObject1 = [1, 2, 3, 4];

let isObject2 = "Hello Oa";

let isObject3 = 45;

let isObject4 = true;

let isObject5 = null;

let isObject6 = undefined;

function isObject(data) {
  if (typeof data !== "object") {
    return false;
  }
  return true;
}

console.log(isObject(isObject1));
// true
console.log(isObject(isObject2));
// false
console.log(isObject(isObject3));
// false
console.log(isObject(isObject4));
// false
console.log(isObject(isObject5));
// true
console.log(isObject(isObject6));
// false
console.log(typeof null);
// object
let object1 = { ...null };

console.log(object1);
// {};

console.log("----------------------------------------------");
console.log("--------------------------------------------");

let x = -4;

let y = "f";

let xy = `${x}${y}`;

console.log(xy);
// -4f

function generation(x, y) {
  let key = `${x}${y}`;

  let familyTree = {
    "-3f": "great grandmother",
    "-3m": "great grandfather",
    "-2f": "grandmother",
    "-2m": "grandfather",
    "-1f": "mother",
    "-1m": "father",
    "0f": "current",
    "0m": "current",
    "1f": "daughter",
    "1m": "son",
    "2f": "granddaughter",
    "2m": "grandson",
    "3f": "great granddaughter",
    "3m": "great grandson"
  };

  if (familyTree[key] !== undefined) {
    return familyTree[key];
  }
  return "not in tree's range";
}

console.log(generation(-3, "f"));
// great grandmother
console.log(generation(1, "f"));
// daughter
console.log(generation(-1, "m"));
// father
console.log(generation(-5, "c"));
// not in tree's range
console.log(generation("-2", "m"));
// grandfather

console.log("-------------------------------------------");
console.log("---------------------------------------");
