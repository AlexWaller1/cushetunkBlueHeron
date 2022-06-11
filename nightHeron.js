console.log("Hello Oa");

const hammerHead = {
  name: "Hammerhead",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Venice Sands 5",
  species: "Hammerhead Shark",
  hasPickerelCola: true,
  friends: ["Taylor", "Harvey", "Wibaux"]
};

let {
  name,
  occupation,
  homePlanet,
  species,
  hasPickerelCola,
  friends: [friend1, friend2, friend3]
} = hammerHead;

console.log(name);
// Hammerhead
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(homePlanet);
// Venice Sands 5
console.log(species);
// Hammerhead Shark
console.log(hasPickerelCola);
// true
console.log(friend1);
// Taylor
console.log(friend2);
// Harvey
console.log(friend3);
// Wibaux

console.log("-----------------------------");
console.log("----------------------------");

const taylor = {
  name: "Taylor",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Mariner Mists",
  species: "Albatross",
  hasPickerelCola: true,
  friends: ["Hammerhead", "Harvey", "Wibaux"]
};

console.log(taylor.name);
// Taylor
console.log(taylor.occupation);
// Pickerel Cola Space Truck Driver
console.log(taylor.homePlanet);
// Mariner Mists
console.log(taylor.species);
// Albatross
console.log(taylor.hasPickerelCola);
// true
console.log(taylor.friends[0]);
// Hammerhead
console.log(taylor.friends[1]);
// Harvey
console.log(taylor.friends[2]);
// Wibaux

console.log("-------------------------------");
console.log("------------------------------");

const harvey = {
  name: "Harvey",
  occupation: "River Dam Builder",
  homePlanet: "Hardin-37",
  species: "Beaver",
  hasPickerelCola: true,
  friends: ["Wibaux", "Taylor", "Hammerhead"]
};

console.log(harvey.name);
// Harvey
console.log(harvey.occupation);
// River Dam Builder
console.log(harvey.homePlanet);
// Hardin-37
console.log(harvey.species);
// Beaver
console.log(harvey.hasPickerelCola);
// true
console.log(harvey.friends[0]);
// Wibaux
console.log(harvey.friends[1]);
// Taylor
console.log(harvey.friends[2]);
// Hammerhead

console.log("---------------------------------");
console.log("----------------------------");

const wibaux = {
  name: "Wibaux",
  occupation: "River Navigation Guide",
  homePlanet: "Hardin-37",
  species: "Whitefish",
  hasPickerelCola: true,
  friends: ["Harvey", "Hammerhead", "Taylor"]
};

console.log(wibaux.name);
// Wibaux
console.log(wibaux.occupation);
// River Navigation Guide
console.log(wibaux.homePlanet);
// Hardin-37
console.log(wibaux.species);
// Whitefish
console.log(wibaux.hasPickerelCola);
// true
console.log(wibaux.friends[0]);
// Harvey
console.log(wibaux.friends[1]);
// Hammerhead
console.log(wibaux.friends[2]);
// Taylor

console.log("----------------------------------");
console.log("--------------------------------");

const pisces4 = [];

pisces4.push(hammerHead);
pisces4.push(taylor);
pisces4.push(harvey);
pisces4.push(wibaux);

console.log(pisces4);

if (pisces4[0].name == "Hammerhead") {
  console.log("Hi, Hammerhead!");
  // Hi, Hammerhead!

  let shark1 = pisces4.map(s1 => s1.name);
  console.log(shark1);
  // ['Hammerhead', 'Taylor', 'Harvey', 'Wibaux']

  let shark2 = pisces4
    .filter(s1 => s1.homePlanet == "Hardin-37")
    .map(s2 => s2.name);

  console.log(shark2);
  // ['Harvey', 'Wibaux']

  pisces4.forEach(s1 => console.log(`${s1.name} is awesome!!!`));
  // Hammerhead is awesome!!!
  // Taylor is awesome!!!
  // Harvey is awesome!!!
  // Wibaux is awesome!!!

  let shark3 = pisces4.forEach(s3 => s3.homePlanet);
  console.log(shark3);
  // undefined
}

console.log("-----------------------------------");
console.log("----------------------------------");

class NewArray {
  constructor() {
    this.container = {};
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.container[this.length - 1];
    this.length--;
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
    let rArray = new NewArray();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }
}

const robots = new NewArray();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.container[0]);
// Hank-44
console.log(robots.container[1]);
// Warren-21
console.log(robots.container[2]);
// Mellon-Tech
console.log(robots.container[3]);
// Eggplant-Head
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
robots.push("test");
console.log(robots.container[4]);
// test
console.log(robots.length);
// 5
robots.pop();
console.log(robots.container[4]);
// undefined
console.log(robots.length);
// 4

console.log("-------------------------------------");
console.log("----------------------------------");

const sodaCan = "Soda Can";

console.log(sodaCan.charCodeAt(0));
// 83
console.log(sodaCan.charCodeAt(3));
// 97

let aa = "aa";

console.log();

console.log("-----------------------------------");
console.log("------------------------------");

class MapPrime {
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

  delete(key) {
    delete this.container[key];
    this.size--;
  }

  has(key) {
    if (this.container[key] != undefined) {
      return true;
    }
    return false;
  }
}

const charsMap = new MapPrime();

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

charsMap.set("0", 53);
charsMap.set("1", 54);
charsMap.set("2", 55);
charsMap.set("3", 56);
charsMap.set("4", 57);
charsMap.set("5", 58);
charsMap.set("6", 59);
charsMap.set("7", 60);
charsMap.set("8", 61);
charsMap.set("9", 62);
charsMap.set("`", 63);
charsMap.set("~", 64);
charsMap.set("!", 65);
charsMap.set("@", 66);
charsMap.set("#", 67);
charsMap.set("$", 68);
charsMap.set("%", 69);
charsMap.set("^", 70);
charsMap.set("&", 71);
charsMap.set("*", 72);
charsMap.set("(", 73);
charsMap.set(")", 74);
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

console.log(charsMap.size);
// 92

console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("A"));
// 27
console.log(charsMap.has("C"));
// true
console.log(charsMap.has(22));
// false

let test1 = "test";
console.log(test1);
// test
test1 = test1.toString();
console.log(test1);
// test

console.log("-----------------------------");
console.log("----------------------------");

class HashTable {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(key) {
    key = key.toString();
    let rString = "";
    let i = 0;

    for (; i < key.length; i++) {
      let key2 = key.charAt(i);
      let newChar = charsMap.get(key2);
      rString = rString.concat(newChar);
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

  delete(key) {
    key = this.hash(key);
    delete this.container[key];
    this.size--;
  }

  has(key) {
    key = this.hash(key);
    if (this.container[key] != undefined) {
      return true;
    }
    return false;
  }
}

const spiderMan = new HashTable();

console.log(spiderMan.hash("yy"));
// 2525
console.log(spiderMan.hash("56"));
// 5859
console.log(spiderMan.hash(56));
// 5859
console.log(spiderMan.hash("Bodhi"));
// 2815489
console.log(spiderMan.hash("Bodhi"));
// 2815489

spiderMan.set(1, "Peter Parker");
spiderMan.set(2, "Ben Reilly");
spiderMan.set(3, "Miles Morales");

console.log(spiderMan.get(1));
// Peter Parker
console.log(spiderMan.get(2));
// Ben Reilly
console.log(spiderMan.get(3));
// Miles Morales
console.log(spiderMan.get(4));
// undefined
console.log(spiderMan.size);
// 3
console.log(spiderMan.has(1));
// true
console.log(spiderMan.has(2));
// true
console.log(spiderMan.has(3));
// true
console.log(spiderMan.has(4));
// false
spiderMan.set(4, "test");
console.log(spiderMan.get(4));
// test
console.log(spiderMan.size);
// 4
spiderMan.delete(4);
console.log(spiderMan.get(4));
// undefined
console.log(spiderMan.size);
// 3

console.log("------------------------------------");
console.log("---------------------------------");

let string1 = "listen";

let string2 = "silent";

let string3 = "silentl";

console.log(string1.charCodeAt(0));
// 108
console.log(string2.charCodeAt(2));
// 108
console.log(string3.charCodeAt(6));
// 108

console.log("--------------------------------------");
console.log("--------------------------------");

let trueFalse1 = [0, 4, "movie", undefined, 19, false];

let trueFalse2 = [null, 6, 4, "2", true, 56];

let trueFalse3 = [false, 0, undefined, null, 0, 0, false];

let trueCount = array => {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
};

console.log(trueCount(trueFalse1));
// 3
console.log(trueCount(trueFalse2));
// 5
console.log(trueCount(trueFalse3));
// 0

console.log("----------------------------------");
console.log("--------------------------------");

let roboArray1 = [
  "Mellon-Tech",
  "Hank-44",
  "Eggplant-Head",
  "Mellon-Tech",
  "Warren-21",
  "Eggplant-Head"
];

let roboArray2 = [1, 2, 1, 3, 4, 5, 3, 3, 6, 7, 8, 9, 2];

let roboArray3 = [true, 4, 5, 6, true, 5, false];

let removeDuplicates = array => {
  let dupsMap = new Map();
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    if (dupsMap.get(array[i]) == undefined) {
      dupsMap.set(array[i], i);
      rArray.push(array[i]);
    }
  }
  return rArray;
};

console.log(removeDuplicates(roboArray1));
// ['Mellon-Tech', 'Hank-44', 'Eggplant-Head', 'Warren-21']
console.log(removeDuplicates(roboArray2));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(removeDuplicates(roboArray3));
// [true, 4, 5, 6, false]

console.log("-----------------------------------");
console.log("----------------------------------");

let string10 = "silent";

let string11 = "listen";

let string12 = "carpet";

let string13 = "table";

function anagramTest(string1, string2) {
  let sortArray = array => array.sort((a, b) => (a > b ? 1 : -1));

  let split1 = string1.split("");

  let split2 = string2.split("");

  let sorted1 = sortArray(split1);

  let sorted2 = sortArray(split2);

  let join1 = sorted1.join("");

  let join2 = sorted2.join("");

  if (join1 == join2) {
    return true;
  }
  return false;
}

console.log(anagramTest(string10, string11));
// true
console.log(anagramTest(string12, string13));
// false

console.log("-----------------------------------");
console.log("----------------------------------");

const risingDough = {};

risingDough["name"] = "Rising Dough";
risingDough["model"] = "Window Cleanse 10.5";
risingDough["favoriteFood"] = "Pizza";
risingDough["lovesPizza"] = true;
risingDough["jacketColor"] = "red and yellow";
risingDough["pantsColor"] = "yellow, red, and black";
risingDough["helmetVisor"] = "blue and orange";

console.log(risingDough.name);
// Rising Dough
console.log(risingDough.model);
// Window Cleanse 10.5
console.log(risingDough.favoriteFood);
// Pizza

console.log("------------------------------------");
console.log("----------------------------------");

function primeNumber(num) {
  let rArray = [];
  let i = 2;
  let sqrt = Math.sqrt(num);

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

console.log(primeNumber(3));
// 3 is a prime number
console.log(primeNumber(4));
// 4 is not a prime number
console.log(primeNumber(17));
// 17 is a prime number
console.log(primeNumber(21));
// 21 is not a prime number
console.log(primeNumber(29));
// 29 is a prime number

console.log("------------------------------------");
console.log("---------------------------------");

function findAllFactors(num) {
  let rArray = [];
  let sqrt = Math.sqrt(num);
  let i = 0;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      rArray.push(i);
      let factor2 = num / i;
      if (i != factor2) {
        rArray.push(factor2);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors(36));
// [1, 36, 2, 18, 3, 12, 4, 9, 6]
console.log(findAllFactors(54));
// [1, 54, 2, 27, 3, 18, 6, 9]

console.log("-------------------------------------");
console.log("-------------------------------");

console.log(Math.pow(2, 4));
// 16
console.log(Math.pow(9, 2));
// 81

function mathDotPow(num1, num2) {
  let rNum = 1;
  let i = 1;

  for (; i <= num2; i++) {
    rNum = rNum * num1;
  }
  return rNum;
}

console.log(mathDotPow(9, 2));
// 81
console.log(mathDotPow(2, 4));
// 16

console.log("----------------------------------");
console.log("-----------------------------------");

console.log("Blue Heron");
// Blue Heron

const loneWolfSamurai = {};

loneWolfSamurai["name"] = "Lone Wolf Samurai";
loneWolfSamurai["occupation"] = "Samurai";
loneWolfSamurai["homeTown"] = "Yokohama";
loneWolfSamurai["coolOutfit"] = true;
loneWolfSamurai["species"] = "Wolf";
loneWolfSamurai["friends"] = ["Kenji", "Glynis", "Laramie", "Zeno", "Samos"];
loneWolfSamurai["rival"] = "Wushu Lizard";

console.log(loneWolfSamurai.name);
// Lone Wolf Samurai
console.log(loneWolfSamurai.occupation);
// Samurai
console.log(loneWolfSamurai.homeTown);
// Yokohama
console.log(loneWolfSamurai.coolOutfit);
// true
console.log(loneWolfSamurai.species);
// Wolf
console.log(loneWolfSamurai.friends.length);
// 5
console.log(loneWolfSamurai.friends.indexOf("Glynis"));
// 1
console.log(loneWolfSamurai.rival);
// Wushu Lizard

let {
  name: loneWolf,
  occupation: samurai,
  homeTown,
  coolOutfit,
  species: wolf,
  friends: [kenji, glynis, laramie, zeno, samos]
} = loneWolfSamurai;

console.log(loneWolf);
// Lone Wolf Samurai
console.log(samurai);
// Samurai
console.log(homeTown);
// Yokohama
console.log(coolOutfit);
// true
console.log(wolf);
// Wolf
console.log(kenji);
// Kenji
console.log(glynis);
// Glynis
console.log(laramie);
// Laramie
console.log(zeno);
// Zeno
console.log(samos);
// Samos

console.log("-------------------------------------");
console.log("----------------------------------");

class ArrayClone {
  constructor() {
    this.container = [];
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.container[this.length - 1];
    this.length--;
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
    let rArray = new ArrayClone();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }
}

console.log("-----------------------------");
console.log("-----------------------------");

const incubator = {};

incubator["name"] = "unknown";
incubator["alias"] = "The Incubator";
incubator["species"] = "Ovidian";
incubator["occupation"] = "Genetic Engineer";
incubator["baseOfOperations"] = "Randall Park Mall";
incubator["homePlanet"] = "Ovid-9";

console.log(incubator.name);
// unknown
console.log(incubator.alias);
// The Incubator
console.log(incubator.species);
// Ovidian
console.log(incubator.occupation);
// Genetic Engineer
console.log(incubator.baseOfOperations);
// Randall Park Mall
console.log(incubator.homePlanet);
// Ovid-9

console.log("------------------------------");
console.log("----------------------------");

class ArrayClone2 {
  constructor() {
    this.container = {};
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.container[this.length - 1];
    this.length--;
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
    let rArray = new ArrayClone2();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }
}

const robots44 = new ArrayClone2();

robots44.push("Hank-44");
robots44.push("Warren-21");
robots44.push("Mellon-Tech");
robots44.push("Eggplant-Head");

console.log(robots44.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots44.length);
// 4
console.log(robots44.container[0]);
// Hank-44
console.log(robots44.container[1]);
// Warren-21
console.log(robots44.container[2]);
// Mellon-Tech
console.log(robots44.container[3]);
// Eggplant-Head
console.log(robots44.container[4]);
// undefined
console.log(robots44.indexOf("Hank-44"));
// 0
console.log(robots44.indexOf("Warren-21"));
// 1
console.log(robots44.indexOf("Mellon-Tech"));
// 2
console.log(robots44.indexOf("Eggplant-Head"));
// 3
console.log(robots44.indexOf("Bender"));
// -1
console.log(robots44.includes("Hank-44"));
// true
console.log(robots44.includes("Warren-21"));
// true
console.log(robots44.includes("Mellon-Tech"));
// true
console.log(robots44.includes("Eggplant-Head"));
// true
console.log(robots44.includes("Bender"));
// false

const roboClone5 = robots44.slice(2, 4);

console.log(roboClone5.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(roboClone5.length);
// 2

console.log("-----------------------------");
console.log("---------------------------");

class MapPrime2 {
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
    if (this.container[key] != undefined) {
      return true;
    }
    return false;
  }

  delete(key) {
    delete this.container[key];
    this.size--;
  }
}

const primeInstance1 = new MapPrime2();

primeInstance1.set("a", 1);
primeInstance1.set("b", 2);
primeInstance1.set("c", 3);
primeInstance1.set("d", 4);
primeInstance1.set("e", 5);

console.log(primeInstance1.get("a"));
// 1
console.log(primeInstance1.get("b"));
// 2
console.log(primeInstance1.size);
// 5

primeInstance1.set("f", 6);
primeInstance1.set("g", 7);
primeInstance1.set("h", 8);
primeInstance1.set("i", 9);
primeInstance1.set("j", 10);
primeInstance1.set("k", 11);
primeInstance1.set("l", 12);
primeInstance1.set("m", 13);
primeInstance1.set("n", 14);
primeInstance1.set("o", 15);
primeInstance1.set("p", 16);
primeInstance1.set("q", 17);
primeInstance1.set("r", 18);
primeInstance1.set("s", 19);
primeInstance1.set("t", 20);
primeInstance1.set("u", 21);
primeInstance1.set("v", 22);
primeInstance1.set("w", 23);
primeInstance1.set("x", 24);
primeInstance1.set("y", 25);
primeInstance1.set("z", 26);
primeInstance1.set("A", 27);
primeInstance1.set("B", 28);
primeInstance1.set("C", 29);
primeInstance1.set("D", 30);
primeInstance1.set("E", 31);
primeInstance1.set("F", 32);
primeInstance1.set("G", 33);
primeInstance1.set("H", 34);
primeInstance1.set("I", 35);
primeInstance1.set("J", 36);
primeInstance1.set("K", 37);
primeInstance1.set("L", 38);
primeInstance1.set("M", 39);
primeInstance1.set("N", 40);
primeInstance1.set("O", 41);
primeInstance1.set("P", 42);
primeInstance1.set("Q", 43);
primeInstance1.set("R", 44);
primeInstance1.set("S", 45);
primeInstance1.set("T", 46);
primeInstance1.set("U", 47);
primeInstance1.set("V", 48);
primeInstance1.set("W", 49);
primeInstance1.set("X", 50);
primeInstance1.set("Y", 51);
primeInstance1.set("Z", 52);
primeInstance1.set("0", 53);
primeInstance1.set("1", 54);
primeInstance1.set("2", 55);
primeInstance1.set("3", 56);
primeInstance1.set("4", 57);
primeInstance1.set("5", 58);
primeInstance1.set("6", 59);
primeInstance1.set("7", 60);
primeInstance1.set("8", 61);
primeInstance1.set("9", 62);
primeInstance1.set("`", 63);
primeInstance1.set("~", 64);
primeInstance1.set("!", 65);
primeInstance1.set("@", 66);
primeInstance1.set("#", 67);
primeInstance1.set("$", 68);
primeInstance1.set("%", 69);
primeInstance1.set("^", 70);
primeInstance1.set("&", 71);
primeInstance1.set("*", 72);
primeInstance1.set("(", 73);
primeInstance1.set(")", 74);
primeInstance1.set("-", 75);
primeInstance1.set("_", 76);
primeInstance1.set("+", 77);
primeInstance1.set("=", 78);
primeInstance1.set("[", 79);
primeInstance1.set("{", 80);
primeInstance1.set("]", 81);
primeInstance1.set("}", 82);
primeInstance1.set("|", 83);
primeInstance1.set(":", 84);
primeInstance1.set(";", 85);
primeInstance1.set("'", 86);
primeInstance1.set(",", 87);
primeInstance1.set("<", 88);
primeInstance1.set(".", 89);
primeInstance1.set(">", 90);
primeInstance1.set("/", 91);
primeInstance1.set("?", 92);
primeInstance1.set(" ", 93);

console.log(primeInstance1.size);
// 92

console.log("------------------------------");
console.log("--------------------------");

class HashMap3 {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(string) {
    if (typeof string != "string") {
      string = string.toString();
    }
    let rString = "";
    let i = 0;

    for (; i < string.length; i++) {
      let currentChar = primeInstance1.get(string.charAt(i));
      rString = rString.concat(currentChar);
    }
    let rNum = parseInt(rString);
    return rNum;
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

const dudleyBoyz = new HashMap3();

console.log(dudleyBoyz.hash("Bubba Ray Dudley"));
console.log(dudleyBoyz.hash(123));
console.log(dudleyBoyz.hash("Bodhi"));
console.log(dudleyBoyz.hash("a b"));

dudleyBoyz.set(1, "D-Von Dudley");
dudleyBoyz.set(2, "Bubba Ray Dudley");
dudleyBoyz.set(3, "Spike Dudley");
dudleyBoyz.set(4, "Stacey Kiebler");

console.log(dudleyBoyz.get(1));
// D-Von Dudley
console.log(dudleyBoyz.get(2));
// Bubba Ray Dudley
console.log(dudleyBoyz.get(3));
// Spike Dudley
console.log(dudleyBoyz.get(4));
// Stacey Kiebler
console.log(dudleyBoyz.size);
// 4
console.log(dudleyBoyz.has(1));
// true
console.log(dudleyBoyz.has(2));
// true
console.log(dudleyBoyz.has(3));
// true
console.log(dudleyBoyz.has(4));
// true
console.log(dudleyBoyz.has(5));
// false
dudleyBoyz.set(5, "Tazz");

console.log(dudleyBoyz.get(5));
// Tazz
dudleyBoyz.delete(5);

console.log(dudleyBoyz.get(5));
// undefined

console.log("-------------------------------");
console.log("----------------------------");

function reverseNum5(num) {
  let i = 0;
  let remainder = 0;
  let rNum = 0;

  for (; parseInt(num) > 0; num = num / 10) {
    num = parseInt(num);
    remainder = num % 10;
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNum5(689));
// 986
console.log(reverseNum5(90857));
// 75809
console.log(reverseNum5(4509));
// 9054
console.log(reverseNum5(7656));
// 6567

console.log("------------------------------");
console.log("---------------------------");

let racecar = "racecar";

let fish = "fish";

let radar = "radar";

let tv = "television";

let kayak = "kayak";

let crab = "crab";

function isPalindrome5(string) {
  let i = 0;
  let j = string.length - 1;

  for (; i < j; i++, j--) {
    if (string.charAt(i) != string.charAt(j)) {
      return `${string} is not a palindrome`;
    }
    return `${string} is a palindrome`;
  }
}

console.log(isPalindrome5(racecar));
// racecar is a palindrome
console.log(isPalindrome5(fish));
// fish is not a palindrome
console.log(isPalindrome5(radar));
// radar is a palindrome
console.log(isPalindrome5(tv));
// television is not a palindrome
console.log(isPalindrome5(kayak));
// kayak is a palindrome
console.log(isPalindrome5(crab));
// crab is not a palindrome

console.log("---------------------------------");
console.log("-------------------------------");

function findAllFactors5(num) {
  let rArray = [];
  let i = 1;

  for (; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      rArray.push(i);
      let factor2 = num / i;
      if (i != Math.sqrt(num)) {
        rArray.push(factor2);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors5(36));
// [1, 36, 2, 18, 3, 12, 4, 9, 6]
console.log(findAllFactors5(81));
// [1, 81, 3, 27, 9]
console.log(findAllFactors5(56));
// [1, 56, 2, 28, 4, 14, 7, 8]
console.log(findAllFactors5(96));
// [1, 96, 2, 48, 3, 32, 4, 24, 6, 16, 8, 12]

console.log("------------------------------");
console.log("------------------------");

function isPrimeNumber5(num) {
  let i = 2;

  for (; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return num + " is a prime number";
}

console.log(isPrimeNumber5(9));
// 9 is not a prime number
console.log(isPrimeNumber5(3));
// 3 is a prime number
console.log(isPrimeNumber5(29));
// 29 is a prime number

console.log("--------------------------------");
console.log("----------------------------");

function allStringCombos5(string) {
  let rArray = [];
  let i = 0;

  for (; i < string.length; i++) {
    let subString = string.charAt(i);
    rArray.push(subString);
    let j = i + 1;
    for (; j < string.length; j++) {
      subString = subString.concat(string.charAt(j));
      rArray.push(subString);
    }
  }
  return rArray;
}

console.log(allStringCombos5("guitar"));
console.log(allStringCombos5("television"));

console.log("------------------------------");
console.log("------------------------------");

const robots9 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const hammerHead9 = ["Wibaux", "Taylor", "Hammerhead", "Harvey"];

function maxValue(array) {
  let max = array[0].length;
  let rElement = array[0];
  let i = 1;

  for (; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
      rElement = array[i];
    }
  }
  return rElement;
}

console.log(maxValue(robots9));
// Eggplant-Head
console.log(maxValue(hammerHead9));
// Hammerhead

console.log("----------------------------");
console.log("---------------------------");
