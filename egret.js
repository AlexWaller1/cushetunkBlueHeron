console.log("Hello Oa");

class Array42 {
  constructor() {
    this.container = {};
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
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
    let rArray = new Array42();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array42();
    let i = 1;

    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array42();
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

    return this.container;
  }

  delete(index) {
    let newArray = new Array42();
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
}

const robots = new Array42();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
robots.push("Bender");

console.log(robots.length);
// 5
console.log(robots.pop());
// Bender
console.log(robots.length);
// 4
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
let robots2 = robots.slice(2, 4);

console.log(robots2.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(robots2.length);
// 2
console.log(robots2.shift());
// Mellon-Tech
console.log(robots2.container);
// {0: 'Eggplant-Head'}
console.log(robots2.length);
// 1
console.log(robots2.unshift("Hank-44", "Warren-21", "Bender", "Mellon-Tech"));
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(robots2.delete(2));
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}

console.log("-----------------------------------");
console.log("-------------------------------------");

class SubMap {
  constructor() {
    this.container = [];
    this.size = 0;
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

const subChars = new SubMap();

subChars.set("a", 1);
subChars.set("b", 2);
subChars.set("c", 3);
subChars.set("d", 4);
subChars.set("e", 5);
subChars.set("f", 6);

console.log(subChars.get("a"));
// 1
console.log(subChars.get("b"));
// 2

subChars.set("g", 7);
subChars.set("h", 8);
subChars.set("i", 9);
subChars.set("j", 10);
subChars.set("k", 11);
subChars.set("l", 12);
subChars.set("m", 13);
subChars.set("n", 14);
subChars.set("o", 15);
subChars.set("p", 16);
subChars.set("q", 17);
subChars.set("r", 18);
subChars.set("s", 19);
subChars.set("t", 20);
subChars.set("u", 21);
subChars.set("v", 22);
subChars.set("w", 23);
subChars.set("x", 24);
subChars.set("y", 25);
subChars.set("z", 26);

console.log(subChars.get("x"));
// 24
console.log(subChars.get("y"));
// 25
console.log(subChars.get("z"));
// 26

subChars.set("A", 27);
subChars.set("B", 28);
subChars.set("C", 29);
subChars.set("D", 30);
subChars.set("E", 31);
subChars.set("F", 32);
subChars.set("G", 33);
subChars.set("H", 34);
subChars.set("I", 35);
subChars.set("J", 36);
subChars.set("K", 37);
subChars.set("L", 38);
subChars.set("M", 39);
subChars.set("N", 40);
subChars.set("O", 41);
subChars.set("P", 42);
subChars.set("Q", 43);
subChars.set("R", 44);
subChars.set("S", 45);
subChars.set("T", 46);
subChars.set("U", 47);
subChars.set("V", 48);
subChars.set("W", 49);
subChars.set("X", 50);
subChars.set("Y", 51);
subChars.set("Z", 52);

console.log(subChars.get("X"));
// 50
console.log(subChars.get("Y"));
// 51
console.log(subChars.get("Z"));
// 52

subChars.set("1", 53);
subChars.set("2", 54);
subChars.set("3", 55);
subChars.set("4", 56);
subChars.set("5", 57);
subChars.set("6", 58);
subChars.set("7", 59);
subChars.set("8", 60);
subChars.set("9", 61);
subChars.set("0", 62);
subChars.set("`", 63);
subChars.set("~", 64);
subChars.set("!", 65);
subChars.set("@", 66);
subChars.set("#", 67);
subChars.set("$", 68);
subChars.set("%", 69);
subChars.set("^", 70);
subChars.set("&", 71);
subChars.set("*", 72);
subChars.set("(", 73);
subChars.set(")", 74);
subChars.set("-", 75);
subChars.set("_", 76);
subChars.set("=", 77);
subChars.set("+", 78);
subChars.set("[", 79);
subChars.set("]", 80);
subChars.set("{", 81);
subChars.set("}", 82);
subChars.set("|", 83);
subChars.set(":", 84);
subChars.set(";", 85);
subChars.set("'", 86);
subChars.set("<", 87);
subChars.set(",", 88);
subChars.set(">", 89);
subChars.set(".", 90);
subChars.set("?", 91);
subChars.set("/", 92);

console.log(subChars.size);
// 92

console.log("----------------------------------");
console.log("-------------------------------");

class HashMap {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(string) {
    if (typeof string != "string") {
      string = string.toString();
    }
    let keyString = "";
    let i = 0;

    for (; i < string.length; i++) {
      let newChar = subChars.get(string.charAt(i));
      keyString = keyString.concat(newChar);
    }

    return parseInt(keyString);
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
    if (this.container[key] != undefined) {
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

const roboMap = new HashMap();

console.log(roboMap.hash("Hank-44"));
// 3411411755656
console.log(roboMap.hash("Hank-44"));
// 3411411755656
console.log(roboMap.hash("Warren-21"));
// 4911818514755453
console.log(roboMap.hash("Warren-21"));
// 4911818514755453
console.log(roboMap.hash(1));
// 53
console.log(roboMap.hash(1));
// 53
console.log(roboMap.hash(2));
// 54
console.log(roboMap.hash(2));
// 54

roboMap.set(0, "Hank-44");
roboMap.set(1, "Warren-21");
roboMap.set(2, "Mellon-Tech");
roboMap.set(3, "Eggplant-Head");

console.log(roboMap.size);
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
console.log(roboMap.set(4, "Bender"));
// undefined (no return value)
console.log(roboMap.has(4));
// true
console.log(roboMap.size);
// 5
roboMap.delete(4);

console.log(roboMap.get(4));
// undefined
console.log(roboMap.size);
// 4

console.log("--------------------------------------");
console.log("---------------------------------");

let protoSet = new Set();

protoSet.add(1);
protoSet.add(2);
protoSet.add(3);
protoSet.add(4);
protoSet.add(5);

console.log(protoSet);

console.log(protoSet.has(1));
// true
console.log(protoSet.has(2));
// true
console.log(protoSet.has(6));
// false
protoSet.delete(3);

console.log(protoSet);

console.log(protoSet.size);
// 4

console.log("------------------------------------");
console.log("------------------------------");

class Set21 {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  add(key) {
    this.container[this.size] = key;
    this.size++;
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

  clear() {
    this.container = [];
    this.size = 0;
  }

  delete(key) {
    let rBoolean = false;
    let j = 0;

    for (; j < this.size; j++) {
      if (this.container[j] == key) {
        delete this.container[j];
        rBoolean = true;
      }
    }

    let newSet = new Set21();
    let i = 0;

    for (; i < this.size; i++) {
      if (this.container[i] !== undefined) {
        newSet.add(this.container[i]);
      }
    }

    this.container = newSet.container;
    this.size = newSet.size;

    return rBoolean;
  }
}

const roboSet = new Set21();

roboSet.add(1);
roboSet.add(2);
roboSet.add(3);
roboSet.add(4);
roboSet.add(5);

console.log(roboSet.container);
// [1, 2, 3, 4, 5]
console.log(roboSet.size);
// 5
console.log(roboSet.has(1));
// true
console.log(roboSet.has(2));
// true
console.log(roboSet.has(3));
// true
console.log(roboSet.has(4));
// true
console.log(roboSet.has(5));
// true
console.log(roboSet.has(6));
// false
console.log(roboSet.delete(3));
// [1, 2, 4, 5]

roboSet.clear();

console.log(roboSet.container);
// []
console.log(roboSet.size);
// 0

roboSet.add(1);
roboSet.add(2);
roboSet.add(3);
roboSet.add(4);
roboSet.add(5);

console.log(roboSet.container);
// [1, 2, 3, 4, 5]
console.log(roboSet.size);
// 5
console.log(roboSet.delete(3));
// true
console.log(roboSet.container);
// [1, 2, 4, 5]

console.log("----------------------------------");
console.log("-----------------------------------");

console.log(robots.container);

const rocko = {
  id: 1,
  name: "Rocko"
};

const spunky = {
  id: 2,
  name: "Spunky"
};

const heffer = {
  id: 3,
  name: "Heffer"
};

const filburt = {
  id: 4,
  name: "Filburt"
};

const edBighead = {
  id: 5,
  name: "Ed Bighead"
};

const bevBighead = {
  id: 6,
  name: "Bev Bighead"
};

const rockosModernLife = new Array42();

rockosModernLife.push(rocko);
rockosModernLife.push(spunky);
rockosModernLife.push(heffer);
rockosModernLife.push(filburt);
rockosModernLife.push(edBighead);
rockosModernLife.push(bevBighead);

console.log(rockosModernLife.container);

let rockoContainer = rockosModernLife.container;

let rockoJSON = JSON.stringify(rockoContainer);

console.log(rockoJSON);

let rockoJSON2 = JSON.stringify(rocko);

console.log(rockoJSON2);

let rockoJS = JSON.parse(rockoJSON2);

console.log(rockoJS);

let rockoJS2 = JSON.parse(rockoJSON);

console.log(rockoJS2);

localStorage.setItem("rocko-object", rockoJSON2);

let storage1 = localStorage.getItem("rocko-object");

console.log(storage1);

console.log(JSON.parse(storage1));

let randItem = localStorage.getItem("rand-item");

console.log(randItem);
// null

console.log(randItem == null);
// true
console.log(undefined == null);
// true
console.log(undefined === null);
// false
console.log(undefined == 0);
// false
console.log(false == "false");
// false
console.log(false == false);
// true
console.log(true == "true");
// false
console.log(true == true);
// true

console.log("----------------------------------");
console.log("-----------------------------------");

function sayHiHello(hi, hello) {
  return hello;
}

console.log(sayHiHello("hi"));

console.log("Hello Oa");

function mathDotRound(num) {
  let remainder = num % 1;

  let rNum = num - remainder;

  if (remainder >= 0.5) {
    return rNum + 1;
  }
  if (remainder < 0.5) {
    return rNum;
  }
}

console.log(mathDotRound(9.5));
// 10
console.log(mathDotRound(11.33));
// 11
console.log(mathDotRound(14.96));
// 15
console.log(mathDotRound(56.49));
// 56

console.log("---------------------------------");
console.log("-----------------------------");

const hammerHead = {
  name: "Hammerhead",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Venice Sands 5",
  hasPickerelCola: true
};

console.log(Object.keys(hammerHead));
// ['name', 'occupation', 'homePlanet', 'hasPickerelCola']
console.log(Object.values(hammerHead));
// ['Hammerhead', 'Pickerel Cola Space Truck Driver', 'Venice Sands 5', true]
console.log(Object.keys(hammerHead)[0]);
// name
console.log(Object.values(hammerHead)[0]);
// Hammerhead

// write a function that converts an object into an array
// , where each element represents a key-value pair in the
// form of an array

let obj1 = { a: 1, b: 2 };

let obj2 = { shrimp: 15, tots: 12 };

let obj3 = {};

function objectToArray(object) {
  let rArray = [];
  let keys = Object.keys(object);
  let values = Object.values(object);
  let i = 0;

  for (; i < keys.length; i++) {
    let newPair = [keys[i], values[i]];
    rArray.push(newPair);
  }
  return rArray;
}

console.log(objectToArray(obj1));
//[["a", 1], ["b", 2]];
console.log(objectToArray(obj2));
// [["shrimp", 15], ["tots", 12]]
console.log(objectToArray(obj3));
// []

console.log("------------------------------------");
console.log("---------------------------------");

let objPair1 = { id: 1 };

console.log(objPair1);
// {id: 1}

let objPair2 = { ...objPair1 };

console.log(objPair2);
// {id: 1}
objPair2["name"] = "name 1";

console.log(objPair2);

// Given three arguments - an object of the stolen items,
// the individuals name and a value, return an object
// with that name and value in it (as key-value pairs).

function addName(obj, key, value) {
  let rObj = { ...obj };

  rObj[key] = value;

  return rObj;
}

console.log(addName({}, "tv", 300));
// {tv: 300}
console.log(addName({ piano: 500 }, "dishwasher", 400));
// {piano: 500, dishwasher: 400}
console.log(addName({ piano: 500, stereo: 300 }, "Dryer", 400));
// {piano: 500, stereo: 300, Dryer: 400}

console.log("----------------------------------");
console.log("-----------------------------");

// create function that takes a string as an argument
// and converts the first character of each word to
// uppercase. Return the newly formatted string.

let a = "a";

a = a.toUpperCase();

console.log(a);

let lake = "lake";

let char1 = lake.charAt(0);

console.log(char1);
// l

lake = lake.replace(lake.charAt(0), lake.charAt(0).toUpperCase());

console.log(lake);

function makeTitle(string) {
  let array = string.split(" ");
  let i = 0;

  for (; i < array.length; i++) {
    let firstChar = array[i].charAt(0);

    array[i] = array[i].replace(firstChar, firstChar.toUpperCase());
  }

  let rString = array.join(" ");
  return rString;
}

console.log(makeTitle("make a title"));
// Make A Title;
console.log(makeTitle("capitalize every word"));
// Capitalize Every Word
console.log(makeTitle("I Like Pizza"));
// I Like Pizza
console.log(makeTitle("PIZZA PIZZA PIZZA"));
// PIZZA PIZZA PIZZA

console.log("-------------------------------------");
console.log("---------------------------------------");

// given a non-empty array of integers nums, every element
// appears twice except for one. Find that single one

let input1 = [2, 2, 1];

let input2 = [4, 1, 2, 1, 2];

let input3 = [1];

function appearsOnce(array) {
  let charsObj = {};

  let i = 0;

  for (; i < array.length; i++) {
    if (charsObj[array[i]] == undefined) {
      charsObj[array[i]] = 1;
    } else {
      charsObj[array[i]] = 2;
    }
  }

  let j = 0;

  let keys = Object.keys(charsObj);

  let values = Object.values(charsObj);

  let rNum = 0;

  for (; j < values.length; j++) {
    if (values[j] == 1) {
      rNum = keys[j];
    }
  }

  return parseInt(rNum);
}

console.log(appearsOnce(input1));
// 1
console.log(appearsOnce(input2));
// 4
console.log(appearsOnce(input3));
// 1

console.log("-------------------------------------");
console.log("-----------------------------------");

let color1 = [0, 1, 2, 0, 1, 2];

function sortByColor(array) {
  let i = 0;
  let subArray1 = [];

  for (; i < array.length; i++) {
    if (array[i] == 0) {
      subArray1.push(array[i]);
    }
  }

  let j = 0;
  let subArray2 = [];

  for (; j < array.length; j++) {
    if (array[j] == 1) {
      subArray2.push(array[j]);
    }
  }

  let k = 0;
  let subArray3 = [];

  for (; k < array.length; k++) {
    if (array[k] == 2) {
      subArray3.push(array[k]);
    }
  }

  return [...subArray1, ...subArray2, ...subArray3];
}

console.log(sortByColor(color1));
// [0, 0, 1, 1, 2, 2]

console.log("--------------------------------------");
console.log("---------------------------------");

let accounts1 = [
  [1, 2, 3],
  [3, 2, 1]
];

let accounts2 = [
  [1, 5],
  [7, 3],
  [3, 5]
];

let accounts3 = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5]
];

const richestAccount = array => {
  let sumArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let sum = 0;
    let j = 0;
    for (; j < array[i].length; j++) {
      sum = sum + array[i][j];
      if (j == array[i].length - 1) {
        sumArray.push(sum);
      }
    }
  }

  let k = 0;
  let max = sumArray[0];

  for (; k < sumArray.length; k++) {
    if (sumArray[k] > max) {
      max = sumArray[k];
    }
  }

  return max;
};

console.log(richestAccount(accounts1));
// 6
console.log(richestAccount(accounts2));
// 10
console.log(richestAccount(accounts3));
// 17

console.log("--------------------------------");
console.log("-------------------------------");

function arrayOfMultiples(num1, num2) {
  let rArray = [];
  let i = 1;

  for (; i <= num2; i++) {
    let newNum = i * num1;
    rArray.push(newNum);
  }
  return rArray;
}

console.log(arrayOfMultiples(7, 5));
// [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10));
// [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6));
// [17, 34, 51, 68, 85, 102]

console.log("--------------------------------------");
console.log("-----------------------------------");

// object destructuring

const wushuLizard = {
  name: "Wushu Lizard",
  species: "Lizard",
  discipline: "Wushu",
  likesToCompete: true,
  rival: "Lone Wolf Samurai"
};

let {
  name: wushuName,
  species: wushuSpecies,
  discipline,
  likesToCompete,
  rival
} = wushuLizard;

console.log(wushuName);
// Wushu Lizard
console.log(wushuSpecies);
// Lizard
console.log(discipline);
// Wushu
console.log(likesToCompete);
// true
console.log(rival);
// Lone Wolf Samurai

console.log("--------------------------------------");
console.log("------------------------------------");

console.log(56 == true);
// false
console.log(0 == false);
// true
console.log(0 === false);
// false
console.log(true == true);
// true
console.log(false == false);
// true

console.log("------------------------------------");
console.log("--------------------------------");

// give an array of objects, create a function that
// takes two inputs (sortASC, data) and sort the array
// alphabetically using the object label. Sorting
// direction is based on sortASC value

let array30 = [
  {
    value: 1,
    label: "Australia"
  },
  {
    value: 2,
    label: "Western Europe"
  },
  {
    value: 3,
    label: "North America"
  }
];

let ascDesc = (sortASC, array) => {
  if (sortASC !== true && sortASC !== false) {
    return "first argument must be a boolean";
  }

  let rArray = [];

  if (sortASC) {
    rArray = array.sort((a, b) => (a.label > b.label ? 1 : -1));
  } else {
    rArray = array.sort((a, b) => (b.label > a.label ? 1 : -1));
  }

  return rArray;
};

console.log(ascDesc(true, array30));
/* 

[
    { value: 1, label: "Australia" },
    { value: 3, label: "North America" },
    { value: 2, label: "Western Europe" }
]

*/
console.log(ascDesc(false, array30));
/* 

[
    { value: 2, label: "Western Europe" },
    { value: 3, label: "North America" },
    { value: 1, label: "Australia" }
]

*/

console.log("----------------------------------");
console.log("------------------------------------");

// more object desctruction

const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

let { first, last, origin, allegiance } = arya;

console.log(first);
// Arya
console.log(last);
// Stark
console.log(origin);
// Winterfell
console.log(allegiance);
// House Stark

const jonSnow = {
  first: "Jon",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

let {
  first: snowFirst,
  last: snowLast,
  title,
  family: {
    brothers: { brother1, brother2 },
    sisters: { sister1, sister2 }
  }
} = jonSnow;

console.log(brother1);
// Rob Stark
console.log(brother2);
// Rickon Stark

const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

let thronesChars = ([ned, quietWolf, houseStark] = characters);

console.log(ned);
// Ned Stark
console.log(quietWolf);
// The Quiet Wolf
console.log(houseStark);
// House Stark

console.log("-----------------------------------");
console.log("--------------------------------");

/* 

# Most Songs in Playlist

Write code to create a function that takes an array,
of numbers, each representing the duration of a song.
You will return the maximum number of songs present
in the array that can fir into a 60 minute playlist



*/

let playList1 = [3, 4, 7, 2];
console.log(playList1.length);
// 4

let playList2 = [15, 10, 5, 5, 10, 15, 20, 45, 10];
console.log(playList2.length);
// 9

let playList3 = [5, 5, 5, 5, 5, 35, 45, 5, 3];
console.log(playList3.length);
// 9

let playList4 = [75, 4, 3, 5, 6];
console.log(playList4.length);
// 5

console.log("----------------------------------");

const mostSongsInPlayList = array => {
  let sum = 0;
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    sum = sum + array[i];

    if (sum > 60) {
      return count;
    }
    count++;
  }
  return count;
};

console.log(mostSongsInPlayList(playList1));
// 4
console.log(mostSongsInPlayList(playList2));
// 6
console.log(mostSongsInPlayList(playList3));
// 6
console.log(mostSongsInPlayList(playList4));
// 0

console.log("------------------------------------");
console.log("--------------------------------");

/* 

Create a function that takes in an array (slot machine outcome)
and returns true of all elements in the array are identical,
and false otherwise. The array will contain 4 elements.


*/

let slots1 = ["@", "@", "@", "@"];

let slots2 = ["abc", "abc", "abc", "abc"];

let slots3 = ["uu", "uu", "uu", "uu"];

let slots4 = ["&&", "&", "&&&", "&&&&"];

let slots5 = ["UU", "UU", "UU", "Uu"];

function slotMachine(array) {
  let i = 0;

  for (; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(slotMachine(slots1));
// true
console.log(slotMachine(slots2));
// true
console.log(slotMachine(slots3));
// true
console.log(slotMachine(slots4));
// false
console.log(slotMachine(slots5));
// false

console.log("-----------------------------------");
console.log("------------------------------------");

/* 

Given an array nums of size n, return the majority element.


*/

let inputNums1 = [3, 2, 3];

let inputNums2 = [2, 2, 1, 1, 1, 2, 2];

let inputNums3 = [9, 9, 7, 7, 6, 9, 9];

let majorityElement = array => {
  let numsObj = {};
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (numsObj[key] !== undefined) {
      let value = numsObj[key];
      value++;
      numsObj[key] = value;
    }
    if (numsObj[key] == undefined) {
      numsObj[key] = 1;
    }
  }

  let keys = Object.keys(numsObj);
  let values = Object.values(numsObj);
  let max = values[0];
  let rKey = keys[0];
  let j = 1;

  for (; j < values.length; j++) {
    if (values[j] > max) {
      max = values[j];
      rKey = keys[j];
    }
  }
  return parseInt(rKey);
};

console.log(majorityElement(inputNums1));
// 3
console.log(majorityElement(inputNums2));
// 2
console.log(majorityElement(inputNums3));
// 9

console.log("-------------------------------------");
console.log("-----------------------------------");

/* 

Given an array of integers, find if the array contains any
duplicates.

Your function should return true if any value appears at
least twice in the array, and it should return false if every
element is distinct

*/

let duplicates1 = [1, 2, 3, 1];

let duplicates2 = [1, 2, 3, 4];

let duplicates3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function anyDuplicates(array) {
  let charSet = new Set();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (charSet.has(key)) {
      return true;
    } else {
      charSet.add(key);
    }
  }
  return false;
}

console.log(anyDuplicates(duplicates1));
// true
console.log(anyDuplicates(duplicates2));
// false
console.log(anyDuplicates(duplicates3));
// true

console.log("------------------------------");
console.log("----------------------------");

/* 

Given an array of integers and an integer target, return
indices of the two numbers such that they add up to 
target.


*/

let targetArray1 = [2, 7, 11, 15];

let target1 = 9;

let targetArray2 = [3, 2, 4];

let target2 = 6;

let targetArray3 = [3, 3];

let target3 = 6;

let targetSum = (array, target) => {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    numsMap.set(key, i);
  }

  let rArray = [];
  let j = 0;

  for (; j < array.length; j++) {
    let difference = target - array[j];
    if (numsMap.has(difference) && j !== numsMap.get(difference)) {
      return [j, numsMap.get(difference)];
    }
  }
};

console.log(targetSum(targetArray1, target1));
// [0, 1]
console.log(targetSum(targetArray2, target2));
// [1, 2]
console.log(targetSum(targetArray3, target3));
// [0, 1]

console.log("--------------------------------");
console.log("-------------------------------");

let factorNum1 = 6;

let factorNum2 = 10;

let factorNum3 = 100;

let factorNum4 = 36;

let factorNum5 = 49;

function findAllFactors9(num) {
  let rArray = [];
  let sqrtNum = Math.sqrt(num);
  let i = 1;

  for (; i <= sqrtNum; i++) {
    if (num % i == 0) {
      let factor = num / i;
      rArray.push(factor);
      if (i !== sqrtNum) {
        rArray.push(i);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors9(factorNum1));
// [6, 1, 3, 2]
console.log(findAllFactors9(factorNum2));
// [10, 1, 5, 2]
console.log(findAllFactors9(factorNum3));
// [100, 1, 50, 2, 25, 4, 20, 5, 10]
console.log(findAllFactors9(factorNum4));
// [36, 1, 18, 2, 12, 3, 9, 4, 6]
console.log(findAllFactors9(factorNum5));
// [49, 1, 7]

console.log("----------------------------------");
console.log("-----------------------------------");

let primeNum1 = 7;

let primeNum2 = 10;

let primeNum3 = 11;

const isPrimeNum = num => {
  let sqrtNum = Math.sqrt(num);
  let i = 2;

  for (; i < sqrtNum; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNum(primeNum1));
// true
console.log(isPrimeNum(primeNum2));
// false
console.log(isPrimeNum(primeNum3));
// true

console.log("----------------------------------");
console.log("------------------------------");

let xArray = [
  ["X", "O", "O", "O", "X", "O"],
  ["O", "X", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O"]
];

let xCount = array => {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    let j = 0;
    for (; j < array[i].length; j++) {
      if (array[i][j] == "X") {
        count++;
      }
    }
  }
  return count;
};

console.log(xCount(xArray));
// 5

console.log("-----------------------------------");
console.log("----------------------------------");

console.log(5 * 4 * 3 * 2 * 1);
// 120
console.log(4 * 3 * 2 * 1);
// 24

function findFactorial(num) {
  let rNum = 1;

  for (; num > 0; num--) {
    rNum = rNum * num;
  }
  return rNum;
}

console.log(findFactorial(5));
// 120
console.log(findFactorial(4));
// 24
console.log(findFactorial(3));
// 6

console.log("-----------------------------------");
console.log("---------------------------------");

/* 

q: what is the difference between localStorage and session storage?

a: the difference is that while localStorage doesn't expire, data in
   sessionStorage is cleared when the page session ends

q: what is the difference between null and undefined?

a: null is an assigned value. It means nothing. undefined
   means a variable has been declared but not yet defined.
   null is an object

q: what is the difference between undeclared & undefined?

a: undefined variable means a variable has been declared
   but it does not have a value. Undeclared variable means
   that the variable does not exist in the program at all

q: what is the difference between the window and document 
   in JavaScript?

a: window object represents the browser window where document
   represents the document loaded in that window

*/

console.log("--------------------------------");
console.log("--------------------------------");

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
console.log(reverseNum(98));
// 89
console.log(reverseNum(5498));
// 8945

console.log("-----------------------------------");
console.log("--------------------------------");

let true5;

console.log(true5);
// undefined

// create a function which returns the number of true
// values there are in an array

let true1 = [true, false, false, true, false];

let true2 = [false, false, false, false];

let true3 = [];

let true4 = [0, 1, 2, 3, 4, 5];

function trueCount(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}

console.log(trueCount(true1));
// 2
console.log(trueCount(true2));
// 0
console.log(trueCount(true3));
// 0
console.log(trueCount(true4));
// 5

console.log("--------------------------------");
console.log("----------------------------------");

// Write a function that returns the total number
// of non-nested items in a nested array.

let nested1 = [1, [2, 3]];

let nested2 = [1, [2, [3, 4]]];

let nested3 = [1, [2, [3, [4, [5, 6]]]]];

let nestedLength = array => {
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] == "object") {
      array = array.flat();
    }
  }
  return array.length;
};

console.log(nestedLength(nested1));
// 3
console.log(nestedLength(nested2));
// 4
console.log(nestedLength(nested3));
// 6

console.log("-------------------------------------");
console.log("-----------------------------------");

let greaterThan1 = [8, 1, 2, 2, 3];

let greaterThan2 = [6, 5, 4, 8];

let greatherThan3 = [7, 7, 7, 7];

function numsGreaterThan(array) {
  let array2 = [...array];
  let sorted = array2.sort((a, b) => a - b);
  let numsMap = new Map();

  let i = 0;
  for (; i < sorted.length; i++) {
    if (!numsMap.has(sorted[i])) {
      numsMap.set(sorted[i], i);
    }
  }

  let rArray = [];
  let j = 0;

  for (; j < array.length; j++) {
    let element = numsMap.get(array[j]);
    rArray.push(element);
  }
  return rArray;
}

console.log(numsGreaterThan(greaterThan1));
// [4, 0, 1, 1, 3]
console.log(numsGreaterThan(greaterThan2));
// [2, 1, 0, 3]
console.log(numsGreaterThan(greatherThan3));
// [0, 0, 0, 0]

console.log("----------------------------------");
console.log("---------------------------------");

let range1 = [3, 0, 1];

let range2 = [0, 1];

let range3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let range4 = [0];

function findMissingNum(array) {
  let range = array.length;
  let numsSet = new Set();

  let i = 0;
  for (; i < array.length; i++) {
    numsSet.add(array[i]);
  }

  let j = 0;
  for (; j <= array.length; j++) {
    if (!numsSet.has(j)) {
      return j;
    }
  }
}

console.log(findMissingNum(range1));
// 2
console.log(findMissingNum(range2));
// 2
console.log(findMissingNum(range3));
// 8
console.log(findMissingNum(range4));
// 1

console.log("------------------------------------");
console.log("---------------------------------");

const robots22 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

if (robots22[2] == "Mellon-Tech") {
  let i = 0;

  while (i < robots22.length) {
    console.log(robots22[i]);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
    i++;
  }

  let j = 3;

  do {
    console.log(robots22[j]);
    // Eggplant-Head
    // Mellon-Tech
    // Warren-21
    // Hank-44
    j--;
  } while (j >= 0);
}

console.log("------------------------------------");
console.log("----------------------------------");

console.log("Hello Oa");

let validNum1 = "-0123.00";

let validNum2 = "+-a13";

let validNum3 = "+23.45";

let validNum4 = "45.-56";

let validNum5 = "1.2.34";

let validNum6 = "-78.34";

function validNum(string) {
  let numSet = new Set();
  numSet.add("0");
  numSet.add("1");
  numSet.add("2");
  numSet.add("3");
  numSet.add("4");
  numSet.add("5");
  numSet.add("6");
  numSet.add("7");
  numSet.add("8");
  numSet.add("9");
  numSet.add("-");
  numSet.add("+");
  numSet.add(".");

  let decCount = 0;
  let i = 0;

  for (; i < string.length; i++) {
    let key = string.charAt(i);
    if (!numSet.has(key)) {
      return false;
    }
    if (key == "-" && i !== 0) {
      return false;
    }
    if (key == "+" && i !== 0) {
      return false;
    }
    if (key == ".") {
      decCount++;
    }
    if (decCount > 1) {
      return false;
    }
  }
  return true;
}

console.log(validNum(validNum1));
// true
console.log(validNum(validNum2));
// false
console.log(validNum(validNum3));
// true
console.log(validNum(validNum4));
// false
console.log(validNum(validNum5));
// false
console.log(validNum(validNum6));
// true

console.log("-----------------------------------");
console.log("------------------------------------");

let mellonTech = "Mellon-Tech";

console.log(mellonTech);
// Mellon-Tech
let mellonTech2 = mellonTech.split("-");

console.log(mellonTech2);
// ['Mellon', 'Tech']

let mellonTech3 = mellonTech.split("h");

console.log(mellonTech3);

let reverse1 = "hello";

let reverse2 = "Orange County";

function splitString(string, char) {
  let rArray = [];

  let i = 0;

  if (char == "") {
    for (; i < string.length; i++) {
      let element = string.charAt(i);
      rArray.push(element);
    }
  }

  if (char !== "") {
    let stringEl = "";
    for (; i < string.length; i++) {
      let current = string.charAt(i);
      if (current !== char) {
        stringEl = stringEl.concat(current);
      }
      if (current == char) {
        rArray.push(stringEl);
        stringEl = "";
      }
      if (i == string.length - 1) {
        rArray.push(stringEl);
      }
    }
  }
  return rArray;
}

console.log(splitString(reverse1, ""));
// ['h', 'e', 'l', 'l', 'o']
console.log(splitString(reverse2, " "));
// ['Orange', 'County']
console.log(splitString(mellonTech, "h"));
// ['Mellon-Tec', '']
console.log(splitString(mellonTech, "-"));
// ['Mellon', 'Tech']

let timberIO = "Timber-Io-5";
console.log(splitString(timberIO, "-"));
// ['Timber', 'Io', '5']

console.log("----------------------------------");
console.log("------------------------------");

let revArray1 = splitString(reverse1, "");
// ['h', 'e', 'l', 'l', 'o']
let revArray2 = splitString(reverse2, " ");
// ['Orange', 'County']
let revArray3 = splitString(mellonTech, "h");
// ['Mellon-Tec', '']
let revArray4 = splitString(mellonTech, "-");
// ['Mellon', 'Tech']
let revArray5 = splitString(timberIO, "-");
// ['Timber', 'Io', '5']

function dotReverse(array) {
  let temp = 0;
  let i = 0;
  let j = array.length - 1;

  for (; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(dotReverse(revArray1));
// ['o', 'l', 'l', 'e', 'h']
console.log(dotReverse(revArray2));
// ['County', 'Orange']
console.log(dotReverse(revArray3));
// ['', 'Mellon-Tec']
console.log(dotReverse(revArray4));
// ['Tech', 'Mellon']
console.log(dotReverse(revArray5));
// ['5', 'Io', 'Timber']

console.log("--------------------------------------");
console.log("-----------------------------------");

let join1 = dotReverse(revArray1);

let join2 = dotReverse(revArray2);

let join3 = dotReverse(revArray3);

let join4 = dotReverse(revArray4);

let join5 = dotReverse(revArray5);

function dotJoin(array, char) {
  let rString = "";
  let i = 0;

  if (char == "") {
    for (; i < array.length; i++) {
      rString = rString.concat(array[i]);
    }
  }
  if (char !== "") {
    for (; i < array.length; i++) {
      if (i == array.length - 1) {
        rString = rString.concat(array[i]);
      } else {
        rString = rString.concat(array[i]);
        rString = rString.concat(char);
      }
    }
  }
  return rString;
}

console.log(dotJoin(join1, "_"));
// h_e_l_l_o
console.log(dotJoin(join2, "==="));
// Orange===County
console.log(dotJoin(join3, ""));
// Mellon-Tec
console.log(dotJoin(join4, "100"));
// Mellon100Tech
console.log(dotJoin(join5, "[]"));
// Timber[]Io[]5

console.log("---------------------------------");
console.log("-------------------------------");

let budgets1 = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
];

let budgets2 = [
  { name: "J.D.", age: 63, budget: 74000 },
  { name: "Boog", age: 51, budget: 80000 },
  { name: "Taylor", age: 29, budget: 74000 }
];

function budgetCounter(array) {
  let i = 0;
  let count = 0;

  for (; i < array.length; i++) {
    if (typeof array[i].budget == "number") {
      count = count + array[i].budget;
    }
  }
  return count;
}

console.log(budgetCounter(budgets1));
// 65700
console.log(budgetCounter(budgets2));
// 228000
console.log(74 * 2 + 80);
// 228

console.log("--------------------------------");
console.log("--------------------------------");

let trueFalse1 = [true, false, false, true, false];

let trueFalse2 = [false, false, false, false];

function trueCount2(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}

console.log(trueCount2(trueFalse1));
// 2
console.log(trueCount2(trueFalse2));
// 0

console.log("--------------------------------");
console.log("-------------------------------------");

let nested11 = [1, [2, 3]];

let nested12 = [1, [2, [3, 4]]];

let nested13 = [1, [2, [3, [4, [5, 6]]]]];

let nested14 = [1, [2], 1, [2], 1];

let nested15 = [];

function nestedLength2(array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] == "object") {
      array = array.flat();
    }
  }
  return array.length;
}

console.log(nestedLength2(nested11));
// 3
console.log(nestedLength2(nested12));
// 4
console.log(nestedLength2(nested13));
// 6
console.log(nestedLength2(nested14));
// 5
console.log(nestedLength2(nested15));
// 0

console.log("---------------------------------");
console.log("---------------------------------------");

let twice1 = [4, 3, 2, 7, 8, 2, 3, 1];

let twice2 = [1, 1, 2];

let twice3 = [1];

function appearsTwice(array) {
  let rArray = [];
  let numSet = new Set();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (numSet.has(key)) {
      rArray.push(key);
    }
    numSet.add(key);
  }
  return rArray;
}

console.log(appearsTwice(twice1));
// [2, 3]
console.log(appearsTwice(twice2));
// [1]
console.log(appearsTwice(twice3));
// []

console.log("----------------------------------");
console.log("---------------------------------");

let rangeNums1 = [3, 0, 1];

let rangeNums2 = [0, 1];

let rangeNums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let rangeNums4 = [0];

function inRange(array) {
  let range = array.length;
  let count1 = 0;
  let i = 0;

  for (; i < array.length; i++) {
    count1 = count1 + array[i];
  }

  let count2 = 0;
  let j = 0;

  for (; j <= range; j++) {
    count2 = count2 + j;
  }
  return count2 - count1;
}

console.log(inRange(rangeNums1));
// 2
console.log(inRange(rangeNums2));
// 2
console.log(inRange(rangeNums3));
// 8
console.log(inRange(rangeNums4));
// 1

console.log("---------------------------------");
console.log("----------------------------");

let anagram1 = "nnjjdyus";

let anagram2 = "njdnsjyu";

let anagram3 = "tacocat";

let anagram4 = "ctatocato";

function isAnagram(string1, string2) {
  string1 = string1.split("");

  string2 = string2.split("");

  string1 = string1.sort((a, b) => (a > b ? 1 : -1));

  string2 = string2.sort((a, b) => (a > b ? 1 : -1));

  string1 = string1.join("");

  string2 = string2.join("");

  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram(anagram1, anagram2));
// true
console.log(isAnagram(anagram3, anagram4));
// false

console.log("-----------------------------------");
console.log("-------------------------------------");

// Choose the right answer

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

// answer is 20 and NaN because arrow functions
// do not have access to the this keyword

console.log(shape.diameter());
// 20
console.log(shape.perimeter());
// NaN

console.log("-----------------------------------");
console.log("---------------------------------");

function sayHi() {
  console.log(name1);
  // console.log(age);
  var name1 = "Lydia";
  let age = 21;
}

sayHi();

// answer is undefined and referenceError as
// var can be called before initialization but
// let cannot

console.log("-----------------------------------");
console.log("----------------------------------");

let greaterNums1 = [8, 1, 2, 2, 3];

let greaterNums2 = [6, 5, 4, 8];

let greaterNums3 = [7, 7, 7, 7];

function greaterThan4(array) {
  let array2 = [...array];
  array = array.sort((a, b) => (a > b ? 1 : -1));
  let numsMap = new Map();

  let i = 0;

  for (; i < array.length; i++) {
    if (!numsMap.has(array[i])) {
      numsMap.set(array[i], i);
    }
  }

  let rArray = [];
  let j = 0;

  for (; j < array2.length; j++) {
    rArray.push(numsMap.get(array2[j]));
  }
  return rArray;
}

console.log(greaterThan4(greaterNums1));
// [4, 0, 1, 1, 3]
console.log(greaterThan4(greaterNums2));
// [2, 1, 0, 3]
console.log(greaterThan4(greaterNums3));
// [0, 0, 0, 0]

console.log("----------------------------------");
console.log("-------------------------------");

let eNums1 = [1, 2, 3, 1];

let eNums2 = [1, 2, 3, 4];

let eNums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function trueTwice(array) {
  let numSet = new Set();
  let i = 0;

  for (; i < array.length; i++) {
    if (numSet.has(array[i])) {
      return true;
    } else {
      numSet.add(array[i]);
    }
  }
  return false;
}

console.log(trueTwice(eNums1));
// true
console.log(trueTwice(eNums2));
// false
console.log(trueTwice(eNums3));
// true

console.log("-----------------------------------");
console.log("-----------------------------------");

let sum1 = [2, 7, 11, 15];

let sum2 = [3, 2, 4];

let sum3 = [3, 3];

function twoSum5(array, target) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    numsMap.set(array[i], i);
  }

  let j = 0;

  for (; j < array.length; j++) {
    let diff = target - array[j];
    if (numsMap.has(diff) && j !== numsMap.get(diff)) {
      return [j, numsMap.get(diff)];
    }
  }
}

console.log(twoSum5(sum1, 9));
// [0, 1]
console.log(twoSum5(sum2, 6));
// [1, 2]
console.log(twoSum5(sum3, 6));
// [0, 1]

console.log("-----------------------------------");
console.log("--------------------------------");

let unique1 = "leetcode";

let unique2 = "loveleetcode";

let unique3 = "aabb";

function firstUniqueChar(string) {
  let charMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    let key = string.charAt(i);
    if (charMap.has(key)) {
      charMap.set(key, 2);
    }
    if (!charMap.has(key)) {
      charMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < string.length; j++) {
    let key = string.charAt(j);
    if (charMap.get(key) == 1) {
      return j;
    }
  }
  return -1;
}

console.log(firstUniqueChar(unique1));
// 0
console.log(firstUniqueChar(unique2));
// 2
console.log(firstUniqueChar(unique3));
// -1

console.log("----------------------------------");
console.log("-------------------------------");

let jewels1 = "aA";

let stones1 = "aAAbbbb";

let jewels2 = "z";

let stones2 = "ZZ";

function jewelsAndStones(jewels, stones) {
  let jewelSet = new Set();
  let i = 0;

  for (; i < jewels.length; i++) {
    let key = jewels.charAt(i);
    jewelSet.add(key);
  }

  let jewelCount = 0;
  let j = 0;

  for (; j < stones.length; j++) {
    let key2 = stones.charAt(j);
    if (jewelSet.has(key2)) {
      jewelCount++;
    }
  }
  return jewelCount;
}

console.log(jewelsAndStones(jewels1, stones1));
// 3
console.log(jewelsAndStones(jewels2, stones2));
// 0

console.log("----------------------------------");
console.log("---------------------------------");

console.log(1 > undefined);
// false

let greater1 = [4, 1, 2];

let greater2 = [1, 3, 4, 2];

let greater3 = [2, 4];

let greater4 = [1, 2, 3, 4];

let greater5 = [1, 3, 5, 2, 4];

let greater6 = [6, 5, 4, 3, 2, 1, 7];

function greaterThanNext(nums1, nums2) {
  let numsMap = new Map();
  let i = 0;

  for (; i < nums2.length; i++) {
    if (i == nums2.length - 1) {
      numsMap.set(nums2[i], -1);
    }
    let j = i + 1;
    for (; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        numsMap.set(nums2[i], nums2[j]);
        break;
      }
      if (nums2[i] > nums2[j] && j == nums2.length - 1) {
        numsMap.set(nums2[i], -1);
        break;
      }
    }
  }

  let rArray = [];
  let r = 0;

  for (; r < nums1.length; r++) {
    let value = numsMap.get(nums1[r]);
    rArray.push(value);
  }
  return rArray;
}

console.log(greaterThanNext(greater1, greater2));
// [-1, 3, -1]
console.log(greaterThanNext(greater3, greater4));
// [3, -1]
console.log(greaterThanNext(greater5, greater6));
// [7, 7, 7, 7, 7]

console.log("-----------------------------------");
console.log("---------------------------------");
