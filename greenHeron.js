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

// find the majority element in the array

let majority1 = [3, 2, 3];

let majority2 = [2, 2, 1, 1, 1, 2, 2];

let majority3 = [3, 4, 4, 3, 9, 5, 9, 6, 9];

let majority4 = [1];

function majorityElement(array) {
  let elObj = {};
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (elObj[key] !== undefined) {
      let value = elObj[key];
      value++;
      elObj[key] = value;
    } else {
      elObj[key] = 1;
    }
  }

  let values = Object.values(elObj);
  let keys = Object.keys(elObj);
  let max = values[0];
  let rNum = keys[0];
  let j = 1;

  for (; j < values.length; j++) {
    if (values[j] > max) {
      max = values[j];
      rNum = keys[j];
    }
  }
  return parseInt(rNum);
}

console.log(majorityElement(majority1));
// 3
console.log(majorityElement(majority2));
// 2
console.log(majorityElement(majority3));
// 9
console.log(majorityElement(majority4));

console.log("----------------------------------------------");
console.log("-------------------------------------------");

// didn't work, not quite the right idea
function majorityElement2(array) {
  array = array.sort((a, b) => (a > b ? 1 : -1));
  let newArray = [];
  let count = 1;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == array[i - 1]) {
      count++;
    }
    if (array[i] !== array[i - 1]) {
      newArray.push(count);
      count = 1;
    }
    if (i == array.length - 1) {
      newArray.push(count);
    }
  }

  let max = newArray[0];
  let j = 1;

  for (; j < newArray.length; j++) {
    if (newArray[j] > max) {
      max = newArray[j];
    }
  }
  return max;
}

console.log(majorityElement2(majority1));
// 2
console.log(majorityElement2(majority2));
// 4
console.log(majorityElement2(majority3));
// 3
console.log(majorityElement2(majority4));

console.log("--------------------------------------------");
console.log("-------------------------------------------");

// Check if a Number is Majority Element in a Sorted Array

let majEl1 = [2, 4, 5, 5, 5, 5, 5, 6, 6];

let target1 = 5;

let majEl2 = [10, 100, 101, 101];

let target2 = 101;

function isMajorityElement(array, target) {
  let half = array.length / 2;
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == target) {
      count++;
    }
  }

  if (count > half) {
    return true;
  }
  return false;
}

console.log(isMajorityElement(majEl1, target1));
// true
console.log(isMajorityElement(majEl2, target2));
// false

console.log("--------------------------------------------");
console.log("------------------------------------------");

/* 
Given an integer array of size n, find all elements that
appear more than [ n/3 ] times.
*/

let majNums1 = [3, 2, 3];

let majNums2 = [1];

let majNums3 = [1, 2];

function majorityElement3(array) {
  let third = array.length / 3;
  let objEl = {};
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (objEl[key] !== undefined) {
      let value = objEl[key];
      value++;
      objEl[key] = value;
    } else {
      objEl[key] = 1;
    }
  }

  let rArray = [];
  let keys = Object.keys(objEl);
  let values = Object.values(objEl);
  let j = 0;

  for (; j < values.length; j++) {
    let v = parseInt(values[j]);
    if (v > third) {
      rArray.push(parseInt(keys[j]));
    }
  }
  return rArray;
}

console.log(majorityElement3(majNums1));
// [3]
console.log(majorityElement3(majNums2));
// [1]
console.log(majorityElement3(majNums3));
// [1, 2]

console.log("------------------------------------------");
console.log("--------------------------------------------");

function return37() {
  let i = 1;

  while (i > 0) {
    if (i == 37) {
      break;
    }
    i++;
  }
  return i;
}

console.log(return37());

// The LeetCode Min Max Game

let minMax1 = [1, 3, 5, 2, 4, 8, 2, 2];

let minMax2 = [3];

function minMaxGame(array) {
  let rArray = [];
  let isMin = true;
  let i = 0;

  for (; i < array.length; i++) {
    if (i % 2 !== 0 && isMin == true) {
      let element = Math.min(array[i], array[i - 1]);
      rArray.push(element);
    }
    if (i % 2 !== 0 && isMin == false) {
      let element2 = Math.max(array[i], array[i - 1]);
      rArray.push(element2);
    }
    if (i % 2 !== 0) {
      isMin = !isMin;
    }
  }
  return rArray;
}
// we want [1, 5, 4, 2]
console.log(minMaxGame(minMax1));

function minMaxGame2(array) {
  let isMin = true;
  let rArray = [];
  let i = 0;
  for (; i < array.length; i++) {
    if (i % 2 !== 0 && isMin == true) {
      let element = Math.min(array[i], array[i - 1]);
      rArray.push(element);
    }
    if (i % 2 !== 0 && isMin == false) {
      let element2 = Math.max(array[i], array[i - 1]);
      rArray.push(element2);
    }
    if (i % 2 !== 0) {
      isMin = !isMin;
    }
    if (i == array.length - 1 && array.length !== 1) {
      i = 0;
      array = [...rArray];
      isMin = true;
      rArray = [];
    }
    if (i == array.length - 1 && array.length == 1) {
      break;
    }
  }

  return array;
}

console.log(minMaxGame2(minMax1));

console.log("---------------------------------------------");
console.log("--------------------------------------------");

/* 

Given two integer arrays nums1 and nums2, return an array of 
their intersection. Each element in the result must appear as 
many times as it shows in both arrays and you may return the 
result in any order.

*/

let intersection1 = [1, 2, 2, 1];

let intersection2 = [2, 2];

let intersection3 = [4, 9, 5];

let intersection4 = [9, 4, 9, 8, 4];

function intersectionArrays(array1, array2) {
  let numsMap = new Map();
  let rArray = [];
  let i = 0;

  for (; i < array1.length; i++) {
    let key = array1[i];
    if (numsMap.has(key)) {
      let value = numsMap.get(key);
      value++;
      numsMap.set(key, value);
    } else {
      numsMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < array2.length; j++) {
    let key2 = array2[j];
    if (numsMap.has(key2) && numsMap.get(key2) !== 0) {
      rArray.push(key2);
      let value = numsMap.get(key2);
      value--;
      numsMap.set(key2, value);
    }
  }
  return rArray;
}

console.log(intersectionArrays(intersection1, intersection2));
// [2, 2]
console.log(intersectionArrays(intersection3, intersection4));
// [9, 4]
console.log("---------------------------------------------");
console.log("------------------------------------------------");

/* 

Given two 0-indexed integer arrays array1 and array2, return a 
list answer of size 2 where

- answer[0] is a list of all distinct integers in nums1 which are
not present in nums2

- answer[1] is a list of all distinct integers in nums2 which are
not present in nums1


*/

let distinct1 = [1, 2, 3];

let distinct2 = [2, 4, 6];

let distinct3 = [1, 2, 3, 3];

let distinct4 = [1, 1, 2, 2];

function findDifference(array1, array2) {
  let numSet1 = new Set();
  let numSet2 = new Set();

  let i = 0;
  for (; i < array1.length; i++) {
    let key = array1[i];
    if (!numSet1.has(key)) {
      numSet1.add(key);
    }
  }

  let j = 0;
  for (; j < array2.length; j++) {
    let key2 = array2[j];
    if (!numSet2.has(key2)) {
      numSet2.add(key2);
    }
  }

  let rArray1 = [];
  let rArray2 = [];
  let numSet3 = new Set();
  let numSet4 = new Set();

  let a = 0;
  for (; a < array1.length; a++) {
    let key = array1[a];
    if (!numSet2.has(key) && !numSet3.has(key)) {
      rArray1.push(key);
      numSet3.add(key);
    }
  }

  let b = 0;
  for (; b < array2.length; b++) {
    let key2 = array2[b];
    if (!numSet1.has(key2) && !numSet4.has(key2)) {
      rArray2.push(key2);
      numSet4.add(key2);
    }
  }

  let answer = [rArray1, rArray2];

  return answer;
}

console.log(findDifference(distinct1, distinct2));
// [[1, 3], [4, 6]]
console.log(findDifference(distinct3, distinct4));
// [[3], []]

console.log("--------------------------------------------");
console.log("--------------------------------------");

/* 

Verifying an Alien Dictionary

In an alien language, surprisingly, they also use 
English lowercase letters, but possibly in a different order. 
The order of the alphabet is some permutation of lowercase 
letters.
Given a sequence of words written in the alien language, and the 
order of the alphabet, return true if and only if the given words
are sorted lexicographically in this alien language.

*/

let can = "can";

console.log(can.charAt(3) == "");
// true
console.log(1 > 0);
// true
let alienWords1 = ["hello", "leetcode"];

let order1 = "hlabcdefgijkmnopqrstuvwxyz";

let alienWords2 = ["word", "world", "row"];

let order2 = "worldabcefghijkmnpqstuvxyz";

let alienWords3 = ["apple", "app"];

let order3 = "abcdefghijklmnopqrstuvwxyz";

function isAlienSorted(words, order) {
  order = order.split("");
  order.unshift("");
  let charsMap = new Map();
  let i = 0;

  for (; i < order.length; i++) {
    let key = order[i];
    charsMap.set(key, i);
  }

  let j = 0;

  for (; j < words.length - 1; j++) {
    let a = 0;
    for (; a < words[j].length; a++) {
      if (
        charsMap.get(words[j].charAt(a)) < charsMap.get(words[j + 1].charAt(a))
      ) {
        break;
      }
      if (
        charsMap.get(words[j].charAt(a)) > charsMap.get(words[j + 1].charAt(a))
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(isAlienSorted(alienWords1, order1));
// true
console.log(isAlienSorted(alienWords2, order2));
// false
console.log(isAlienSorted(alienWords3, order3));
// false
console.log("---------------------------------------------");
console.log("-------------------------------------------");

// Numbers Smaller than Current

let smallerThan1 = [8, 1, 2, 2, 3];

let smallerThan2 = [6, 5, 4, 8];

let smallerThan3 = [7, 7, 7, 7];

function smallerNumsThanCurrent(array) {
  let array2 = [...array];
  array.sort((a, b) => (a > b ? 1 : -1));
  let numsMap = new Map();
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    if (!numsMap.has(array[i])) {
      numsMap.set(array[i], i);
    }
  }

  let j = 0;
  for (; j < array2.length; j++) {
    rArray.push(numsMap.get(array2[j]));
  }
  return rArray;
}

console.log(smallerNumsThanCurrent(smallerThan1));
// [4, 0, 1, 1, 3]
console.log(smallerNumsThanCurrent(smallerThan2));
// [2, 1, 0, 3]
console.log(smallerNumsThanCurrent(smallerThan3));
// [0, 0, 0, 0]

console.log("----------------------------------------------");
console.log("--------------------------------------------");

/* 

Given a string s, find the first non-repeating character in it 
and return its index. If it does not exist, return -1.

*/

let nonRepeat1 = "leetcode";

let nonRepeat2 = "loveleetcode";

let nonRepeat3 = "aabb";

function firstNonRepeatingChar(string) {
  let charMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    let key = string.charAt(i);
    if (charMap.has(key)) {
      let value = charMap.get(key);
      value++;
      charMap.set(key, value);
    } else {
      charMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < string.length; j++) {
    let key2 = string.charAt(j);
    if (charMap.get(key2) == 1) return j;
  }
  return -1;
}

console.log(firstNonRepeatingChar(nonRepeat1));
// 0
console.log(firstNonRepeatingChar(nonRepeat2));
// 2
console.log(firstNonRepeatingChar(nonRepeat3));
// -1

console.log("-------------------------------------------");
console.log("----------------------------------------");

/* 

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.


*/

let frequency1 = "tree";

let frequency2 = "cccaaa";

let frequency3 = "Aabb";

let frequency4 = "raaeaedere";

function frequencySort(string) {
  let newArray = [];
  let count = 1;
  let i = 0;

  string = string.split("");
  string = string.sort((a, b) => (a > b ? 1 : -1));
  string = string.join("");

  for (; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i + 1)) {
      count++;
    }
    if (string.charAt(i) !== string.charAt(i + 1) && i !== string.length - 1) {
      let newPair = { char: string.charAt(i), count: count };
      newArray.push(newPair);
      count = 1;
    }
    if (i == string.length - 1) {
      let newPair = { char: string.charAt(i), count: count };
      newArray.push(newPair);
    }
  }

  newArray.sort((a, b) => (a.count < b.count ? 1 : -1));

  let rString = "";
  let j = 0;

  for (; j < newArray.length; j++) {
    while (newArray[j].count > 0) {
      rString = rString.concat(newArray[j].char);
      newArray[j].count--;
    }
  }
  return rString;
}

console.log(frequencySort(frequency1));

console.log(frequencySort(frequency2));

console.log(frequencySort(frequency3));

console.log(frequencySort(frequency4));

console.log("-------------------------------------------");
console.log("---------------------------------------------");

console.log("e" * 2);
// NaN

/* 

Percentage of Letter in String

Given a string s and a character letter, return the percentage 
of characters in s that equal letter rounded down to the nearest
whole percent.

*/

let percentWord1 = "foobar";

let percentChar1 = "o";

let percentWord2 = "jjjj";

let percentchar2 = "x";

function percentageLetter(string, char) {
  let charsMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    let key = string.charAt(i);
    if (charsMap.has(key)) {
      let value = charsMap.get(key);
      value++;
      charsMap.set(key, value);
    } else {
      charsMap.set(key, 1);
    }
  }

  if (!charsMap.has(char)) {
    charsMap.set(char, 0);
  }

  let charNum = charsMap.get(char);

  let rNum = (charNum / string.length) * 100;

  return parseInt(rNum);
}

console.log(percentageLetter(percentWord1, percentChar1));
// 100
console.log(percentageLetter(percentWord2, percentchar2));
// 0
console.log("---------------------------------------------");
console.log("--------------------------------------------");

console.log("Jewels and Stones");
// Jewels and Stones

// Jewels and Stones

let jewels1 = "aA";

let stones1 = "aAAbbbb";

let jewels2 = "z";

let stones2 = "ZZ";

function jewelsAndStones(jewels, stones) {
  let jewelCase = new Set();
  let i = 0;

  for (; i < jewels.length; i++) {
    let key = jewels.charAt(i);
    jewelCase.add(key);
  }

  let count = 0;
  let j = 0;

  for (; j < stones.length; j++) {
    let key2 = stones.charAt(j);
    if (jewelCase.has(key2)) {
      count++;
    }
  }
  return count;
}

console.log(jewelsAndStones(jewels1, stones1));
// 3
console.log(jewelsAndStones(jewels2, stones2));
// 0

console.log("-------------------------------------------------");
console.log("--------------------------------------------");

let anagram1 = "anagram";

let anagram2 = "gramana";

let anagram3 = "rat";

let anagram4 = "car";

let anagram5 = "a";

let anagram6 = "ab";

function isAnagram(string1, string2) {
  string1 = string1.split("");

  string2 = string2.split("");

  string1.sort((a, b) => (a > b ? 1 : -1));

  string2.sort((a, b) => (a > b ? 1 : -1));

  string1 = string1.join("");

  string2 = string2.join("");

  if (string1 == string2) {
    return true;
  }
  return false;
}

console.log(isAnagram(anagram1, anagram2));
// true
console.log(isAnagram(anagram3, anagram4));
// false
console.log("------------------------------------");
console.log("----------------------------------");

console.log(anagram1);
// anagram
console.log(anagram2);
// gramana

function isAnagram2(string1, string2) {
  let charsMap = new Map();
  let charsMap2 = new Map();
  let i = 0;

  for (; i < string1.length; i++) {
    let key = string1.charAt(i);
    if (charsMap.has(key)) {
      let value = charsMap.get(key);
      value++;
      charsMap.set(key, value);
    } else {
      charsMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < string2.length; j++) {
    let key2 = string2.charAt(j);
    if (charsMap2.has(key2)) {
      let value2 = charsMap2.get(key2);
      value2++;
      charsMap2.set(key2, value2);
    } else {
      charsMap2.set(key2, 1);
    }
  }

  let string3 = "";

  if (string1.length > string2.length) {
    string3 = string1;
  } else {
    string3 = string2;
  }

  let a = 0;

  for (; a < string3.length; a++) {
    let key3 = string3.charAt(a);
    if (charsMap.get(key3) !== charsMap2.get(key3)) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram2(anagram1, anagram2));
// true
console.log(isAnagram2(anagram3, anagram4));
// false
console.log(isAnagram2(anagram5, anagram6));
// false
console.log("-----------------------------------");
console.log("-------------------------------");

console.log("Hello Oa");

class Array41 {
  constructor(message = "Array 41!") {
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

  slice(index1, index2) {
    let rArray = new Array41("Clone of Array 41");
    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array41("New Version of Array 41");
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array41();
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
    let rElement = this.container[index]
      ? this.container[index]
      : "array does not currently contain this index";
    let newArray = new Array41();
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
    let newArray = new Array41();
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
      if (i == index) {
        newArray.push(element);
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.length;
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
}

const robots41 = new Array41();

console.log(robots41.push("Hank-44"));
// 1
console.log(robots41.push("Warren-21"));
// 2
console.log(robots41.push("Mellon-Tech"));
// 3
console.log(robots41.push("Eggplant-Head"));
// 4
console.log(robots41.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots41.length);
// 4
console.log(robots41.push("Bender"));
// 5
console.log(robots41.container[robots41.length - 1]);
// Bender
console.log(robots41.length);
// 5
console.log(robots41.pop());
// Bender
console.log(robots41.length);
// 4
console.log(robots41.indexOf("Hank-44"));
// 0
console.log(robots41.indexOf("Warren-21"));
// 1
console.log(robots41.indexOf("Mellon-Tech"));
// 2
console.log(robots41.indexOf("Eggplant-Head"));
// 3
console.log(robots41.indexOf("Bender"));
// -1
console.log(robots41.includes("Hank-44"));
// true
console.log(robots41.includes("Warren-21"));
// true
console.log(robots41.includes("Mellon-Tech"));
// true
console.log(robots41.includes("Eggplant-Head"));
// true
console.log(robots41.includes("Bender"));
// false
const robots42 = robots41.slice(1, 3);

console.log(robots42.container);
// {0: 'Warren-21', 1: 'Mellon-Tech'}
console.log(robots42.length);
// 2
console.log(robots42.shift());
// Warren-21
console.log(robots42.container);
// {0: 'Mellon-Tech'}
console.log(robots42.length);
// 1
console.log(robots42.unshift("Hank-44", "Warren-21"));
// 3
console.log(robots42.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech'}
console.log(robots42.push("Eggplant-Head"));
// 4
console.log(robots42.push("Big O"));
// 5
console.log(robots42.push("Rising Dough"));
// 6
console.log(robots42.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Big O', 5: 'Rising Dough'}
console.log(robots42.delete(4));
// Big O
console.log(robots42.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Rising Dough'}
console.log(robots42.length);
// 5
console.log(robots42.insert("Big O", 4));
// 6
console.log(robots42.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Big O', 5: 'Rising Dough'}
console.log(robots42.length);
// 6
console.log(robots42.reverse());
// {0: 'Rising Dough', 1: 'Big O', 2: 'Eggplant-Head', 3: 'Mellon-Tech', 4: 'Warren-21', 5: 'Hank-44'}

// console.log(robots42.randomize());
// it works!!!

console.log(robots42.message);
// Clone of Array41
console.log(robots41.message);
// Array41!
console.log("-------------------------------------------");
console.log("---------------------------------------");

class PrimeMap41 {
  constructor(message = "This is PrimeMap41") {
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
    }
    return false;
  }

  delete(key) {
    delete this.container[key];
    this.size--;
  }
}

const charsMap41 = new PrimeMap41();

charsMap41.set("a", 1);
charsMap41.set("b", 2);
charsMap41.set("c", 3);
charsMap41.set("d", 4);
charsMap41.set("e", 5);
charsMap41.set("f", 6);
charsMap41.set("g", 7);
charsMap41.set("h", 8);
charsMap41.set("i", 9);
charsMap41.set("j", 10);

console.log(charsMap41.get("a"));
// 1
console.log(charsMap41.get("b"));
// 2

charsMap41.set("k", 11);
charsMap41.set("l", 12);
charsMap41.set("m", 13);
charsMap41.set("n", 14);
charsMap41.set("o", 15);
charsMap41.set("p", 16);
charsMap41.set("q", 17);
charsMap41.set("r", 18);
charsMap41.set("s", 19);
charsMap41.set("t", 20);
charsMap41.set("u", 21);
charsMap41.set("v", 22);
charsMap41.set("w", 23);
charsMap41.set("x", 24);
charsMap41.set("y", 25);
charsMap41.set("z", 26);

console.log(charsMap41.get("x"));
// 24

charsMap41.set("A", 27);
charsMap41.set("B", 28);
charsMap41.set("C", 29);
charsMap41.set("D", 30);
charsMap41.set("E", 31);
charsMap41.set("F", 32);
charsMap41.set("G", 33);
charsMap41.set("H", 34);
charsMap41.set("I", 35);
charsMap41.set("J", 36);
charsMap41.set("K", 37);
charsMap41.set("L", 38);
charsMap41.set("M", 39);
charsMap41.set("N", 40);

console.log(charsMap41.get("A"));
// 27

charsMap41.set("O", 41);
charsMap41.set("P", 42);
charsMap41.set("Q", 43);
charsMap41.set("R", 44);
charsMap41.set("S", 45);
charsMap41.set("T", 46);
charsMap41.set("U", 47);
charsMap41.set("V", 48);
charsMap41.set("W", 49);
charsMap41.set("X", 50);
charsMap41.set("Y", 51);
charsMap41.set("Z", 52);

console.log(charsMap.get("Y"));
// 51

charsMap41.set("1", 53);
charsMap41.set("2", 54);
charsMap41.set("3", 55);
charsMap41.set("4", 56);
charsMap41.set("5", 57);
charsMap41.set("6", 58);
charsMap41.set("7", 59);
charsMap41.set("8", 60);
charsMap41.set("9", 61);
charsMap41.set("0", 62);

console.log(charsMap41.get("9"));
// 61

charsMap41.set("`", 63);
charsMap41.set("~", 64);
charsMap41.set("!", 65);
charsMap41.set("@", 66);
charsMap41.set("#", 67);
charsMap41.set("$", 68);
charsMap41.set("%", 69);
charsMap41.set("^", 70);
charsMap41.set("&", 71);
charsMap41.set("*", 72);
charsMap41.set("(", 73);
charsMap41.set(")", 74);

console.log(charsMap41.get("!"));
// 65

charsMap41.set("-", 75);
charsMap41.set("_", 76);
charsMap41.set("+", 77);
charsMap41.set("=", 78);
charsMap41.set("[", 79);
charsMap41.set("]", 80);
charsMap41.set("{", 81);
charsMap41.set("}", 82);
charsMap41.set("|", 83);

console.log(charsMap41.get("_"));
// 76

charsMap41.set(":", 84);
charsMap41.set(";", 85);
charsMap41.set("'", 86);
charsMap41.set("<", 87);
charsMap41.set(",", 88);
charsMap41.set(">", 89);
charsMap41.set(".", 90);
charsMap41.set("?", 91);
charsMap41.set("/", 92);

console.log(charsMap41.get("/"));
// 92

class HashMap41 {
  constructor(message = "HashMap41!") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  hash(key) {
    if (typeof key !== "string") {
      key = key.toString();
    }
    let rString = "";
    let i = 0;

    for (; i < key.length; i++) {
      let current = key.charAt(i);
      let char = charsMap41.get(current);
      rString = rString.concat(char);
    }
    return parseInt(rString);
  }

  set(key, value) {
    key = this.hash(key);
    this.container[key] = value;
    this.size++;
    return this.container;
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
    if (this.container[key] !== undefined) {
      delete this.container[key];
      this.size--;
      return true;
    }
    return false;
  }
}

const roboMap41 = new HashMap41("This is RoboMap41");

console.log(roboMap41.hash("Bodhi"));
// 2815489
console.log(roboMap41.hash("Bodhi"));
// 2815489
console.log(roboMap41.hash("Beezer"));
// 285526518
console.log(roboMap41.hash("Beezer"));
// 285526518
console.log(roboMap41.hash("Chipper"));
// 29891616518
console.log(roboMap41.hash("Chipper"));
// 29891616518
roboMap41.set(1, "Hank-44");
roboMap41.set(2, "Warren-21");
roboMap41.set(3, "Mellon-Tech");
roboMap41.set(4, "Eggplant-Head");

console.log(roboMap41.get(1));
// Hank-44
console.log(roboMap41.get(2));
// Warren-21
console.log(roboMap41.get(3));
// Mellon-Tech
console.log(roboMap41.get(4));
// Eggplant-Head
console.log(roboMap41.get(112));
// undefined
console.log(roboMap41.set(5, "Bender"));

console.log(roboMap41.get(5));
// Bender
console.log(roboMap41.size);
// 5
console.log(roboMap41.has(3));
// true
console.log(roboMap41.has(105));
// false
roboMap41.set(6, "Table");

console.log(roboMap41.get(6));
// Table
console.log(roboMap41.size);
// 6
console.log(roboMap41.delete(6));
// true
console.log(roboMap41.size);
// 5

console.log("----------------------------------------");
console.log("---------------------------------------");

console.log("Hello Oa");

const roboTest = new Set();

roboTest.add("Hank-44");
roboTest.add("Warren-21");
roboTest.add("Mellon-Tech");
roboTest.add("Eggplant-Head");

console.log(roboTest.has("Hank-44"));
// true
console.log(roboTest.has("Warren-21"));
// true
console.log(roboTest.has("Mellon-Tech"));
// true
console.log(roboTest.has("Eggplant-Head"));
// true
console.log(roboTest.size);
// 4
console.log(roboTest);

class KeySet41 {
  constructor(message = "This is a Set!") {
    this.container = [];
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
    let newSet = new KeySet41("I've Been Cloned!!!");
    let i = 0;
    for (; i < this.size; i++) {
      if (this.container[i] !== key) {
        newSet.add(this.container[i]);
      }
      if (this.container[i] == key) {
        rBoolean = true;
      }
    }
    this.container = newSet.container;
    this.size = newSet.size;
    this.message = newSet.message;
    return rBoolean;
  }
}

const roboSet = new KeySet41();

roboSet.add("Hank-44");
roboSet.add("Warren-21");
roboSet.add("Mellon-Tech");
roboSet.add("Eggplant-Head");

console.log(roboSet.container);

console.log(roboSet.container[0]);
// Hank-44
console.log(roboSet.message);
// This is a Set!
console.log(roboSet.has("Hank-44"));
// true
console.log(roboSet.has("Warren-21"));
// true
console.log(roboSet.has("Mellon-Tech"));
// true
console.log(roboSet.has("Eggplant-Head"));
// true
console.log(roboSet.has("Bender"));
// false
console.log(roboSet.delete("Mellon-Tech"));
// true
console.log(roboSet.container);
//  ['Hank-44', 'Warren-21', 'Eggplant-Head']
console.log(roboSet.size);
// 3
roboSet.add("Mellon-Tech");

console.log(roboSet.container);
// ['Hank-44', 'Warren-21', 'Eggplant-Head', 'Mellon-Tech']
console.log(roboSet.size);
// 4
console.log(roboSet.message);
// I've Been Cloned!!!
console.log("---------------------------------------");
console.log("--------------------------------------");

let racecar5 = "racecar";

let lamp5 = "lamp";

let kayak5 = "kayak";

let table5 = "table";

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

console.log(isPalindrome(racecar5));
// true
console.log(isPalindrome(lamp5));
// false
console.log(isPalindrome(kayak5));
// true
console.log(isPalindrome(table5));
// false
console.log("---------------------------------------");
console.log("------------------------------------------");

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
console.log(reverseNum(459685));
// 586954
console.log(parseInt(0.5));
// 0
console.log("--------------------------------------");
console.log("--------------------------------------------");

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
console.log(isPrimeNum(19));
// true
console.log(isPrimeNum(23));
// true
console.log("-----------------------------------");
console.log("------------------------------------------");


