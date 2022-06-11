console.log("Hello Oa");

const hammerHead = {
  name: "Hammerhead",
  occupation: "Pickerel Cola Space Truck Driver",
  homePlanet: "Venice Sands 5",
  hasPickerelCola: true,
  species: "Hammerhead Shark",
  friends: ["Taylor", "Wibaux", "Harvey"]
};

console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.occupation);
// Pickerel Cola Space Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.hasPickerelCola);
// true
console.log(hammerHead.species);
// Hammerhead Shark
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Wibaux
console.log(hammerHead.friends[2]);
// Harvey

let { name, occupation, homePlanet, hasPickerelCola, species, friends } =
  hammerHead;

console.log(name);
// Hammerhead
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(homePlanet);
// Venice Sands 5
console.log(friends[0]);
// Taylor
console.log(friends.length);
// 3

console.log("--------------------------------");
console.log("--------------------------------");

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
console.log(robots.length);
// 4
console.log(robots.container[0]);
// Hank-44
console.log(robots.container[1]);
// Warren-21
console.log(robots.container[2]);
// Mellon-Tech
console.log(robots.container[3]);
// Eggplant-Head
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
const robots2 = robots.slice(0, 2);

console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21'}
console.log(robots2.length);
// 2
robots.push("Bender");

console.log(robots.container[4]);
// Bender
console.log(robots.length);
// 5
robots.pop();
console.log(robots.container[4]);
// undefined
console.log(robots.length);
// 4

console.log("-----------------------------");
console.log("-------------------------");

class PrimeMap {
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

const charsMap = new PrimeMap();

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

console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("b"));
// 2
console.log(charsMap.size);
// 10
console.log(charsMap.has("a"));
// true

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
charsMap.set("0", 62);
charsMap.set("!", 63);
charsMap.set("@", 64);
charsMap.set("#", 65);
charsMap.set("$", 66);
charsMap.set("%", 67);
charsMap.set("^", 68);
charsMap.set("&", 69);
charsMap.set("*", 70);
charsMap.set("(", 71);
charsMap.set(")", 72);
charsMap.set("_", 73);
charsMap.set("-", 74);
charsMap.set("=", 75);
charsMap.set("+", 76);
charsMap.set("[", 77);
charsMap.set("{", 78);
charsMap.set("]", 79);
charsMap.set("}", 80);
charsMap.set("|", 81);
charsMap.set(";", 82);
charsMap.set(":", 83);
charsMap.set("'", 84);
charsMap.set(",", 85);
charsMap.set("<", 86);
charsMap.set(">", 87);
charsMap.set(".", 88);
charsMap.set("~", 89);
charsMap.set("`", 90);
charsMap.set("/", 91);
charsMap.set("?", 92);

console.log(charsMap.size);
// 92

console.log("-------------------------------");
console.log("------------------------------");

class HashMap {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(element) {
    if (typeof element != "string") {
      element = element.toString();
    }

    let i = 0;
    let rString = "";

    for (; i < element.length; i++) {
      let char = element.charAt(i);
      let newChar = charsMap.get(char);
      rString = rString.concat(newChar);
    }
    return parseInt(rString);
  }

  set(key, value) {
    let mapKey = this.hash(key);
    this.container[mapKey] = value;
    this.size++;
  }

  get(key) {
    let mapKey = this.hash(key);
    return this.container[mapKey];
  }

  has(key) {
    let mapKey = this.hash(key);
    if (this.container[mapKey] != undefined) {
      return true;
    }
    return false;
  }

  delete(key) {
    let mapKey = this.hash(key);
    delete this.container[mapKey];
    this.size--;
  }
}

const pisces = new HashMap();

console.log(pisces.hash("Galahad"));
// 331121814
console.log(pisces.hash("Galahad"));
// 3311211814
console.log(pisces.hash("Governal"));
// 33152251814112
console.log(pisces.hash("Governal"));
// 33152251814112

const pizzaPlaces = new HashMap();

pizzaPlaces.set(1, "Francesco's");
pizzaPlaces.set(2, "Gallagher's");
pizzaPlaces.set(3, "Dominick's");
pizzaPlaces.set(4, "Pizza Ranch");
pizzaPlaces.set(5, "Papa Gino's");

console.log(pizzaPlaces.size);
// 5
console.log(pizzaPlaces.get(1));
// Francesco's
console.log(pizzaPlaces.get(2));
// Gallagher's
console.log(pizzaPlaces.get(3));
// Dominick's
console.log(pizzaPlaces.get(4));
// Pizza Ranch
console.log(pizzaPlaces.get(5));
// Papa Gino's
console.log(pizzaPlaces.get(6));
// undefined
console.log(pizzaPlaces.has(1));
// true
console.log(pizzaPlaces.has(2));
// true
console.log(pizzaPlaces.has(3));
// true
console.log(pizzaPlaces.has(4));
// true
console.log(pizzaPlaces.has(5));
// true
console.log(pizzaPlaces.has(6));
// false
pizzaPlaces.set(6, "Subway");

console.log(pizzaPlaces.size);
// 6
console.log(pizzaPlaces.has(6));
// true
console.log(pizzaPlaces.get(6));
// Subway
pizzaPlaces.delete(6);
//
console.log(pizzaPlaces.get(6));
// undefined
console.log(pizzaPlaces.has(6));
// false
console.log(pizzaPlaces.size);
// 5
console.log("--------------------------------");
console.log("-------------------------------");

console.log("Hello Oa");
// Hello Oa
console.log("Blue Heron");
// Blue Heron

let kayak = "kayak";

let radar = "radar";

let racecar = "racecar";

let bottle = "bottle";

let controller = "controller";

function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;

  for (; i < j; i++, j--) {
    if (string.charAt(i) != string.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(racecar));
// true
console.log(isPalindrome(bottle));
// false
console.log(isPalindrome(controller));
// false

console.log("------------------------");
console.log("------------------------");

function reverseNumber(num) {
  let rNum = 0;
  let remainder = 0;
  let i = 0;

  for (; parseInt(num) > 0; num = num / 10) {
    num = parseInt(num);
    remainder = num % 10;
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNumber(41));
// 14
console.log(reverseNumber(917));
// 719
console.log(reverseNumber(123456));
// 654321

console.log("------------------------------------");
console.log("--------------------------------");

function allStringCombos(string) {
  let rArray = [];
  let stringChar = "";
  let i = 0;

  for (; i < string.length; i++) {
    stringChar = string.charAt(i);
    rArray.push(stringChar);
    let j = i + 1;

    for (; j < string.length; j++) {
      stringChar = stringChar.concat(string.charAt(j));
      rArray.push(stringChar);
    }
  }
  return rArray;
}

console.log(allStringCombos("dachshund"));
/*

['d', 'da', 'dac', 'dach', 'dachs', 'dachsh', 'dachshu', 'dachshun', 'dachshund', 'a', 'ac', 'ach', 'achs', 'achsh', 'achshu', 'achshun', 'achshund', 'c', 'ch', 'chs', 'chsh', 'chshu', 'chshun', 'chshund', 'h', 'hs', 'hsh', 'hshu', 'hshun', 'hshund', 's', 'sh', 'shu', 'shun', 'shund', 'h', 'hu', 'hun', 'hund', 'u', 'un', 'und', 'n', 'nd', 'd']

*/

console.log("------------------------------------");
console.log("-------------------------------------");

const upperCaseMap = new Map();

upperCaseMap.set("a", "A");
upperCaseMap.set("b", "B");
upperCaseMap.set("c", "C");
upperCaseMap.set("d", "D");
upperCaseMap.set("e", "E");
upperCaseMap.set("f", "F");
upperCaseMap.set("g", "G");
upperCaseMap.set("h", "H");
upperCaseMap.set("i", "I");
upperCaseMap.set("j", "J");
upperCaseMap.set("k", "K");
upperCaseMap.set("l", "L");
upperCaseMap.set("m", "M");
upperCaseMap.set("n", "N");
upperCaseMap.set("o", "O");
upperCaseMap.set("p", "P");
upperCaseMap.set("q", "Q");
upperCaseMap.set("r", "R");
upperCaseMap.set("s", "S");
upperCaseMap.set("t", "T");
upperCaseMap.set("u", "U");
upperCaseMap.set("v", "V");
upperCaseMap.set("w", "W");
upperCaseMap.set("x", "X");
upperCaseMap.set("y", "Y");
upperCaseMap.set("z", "Z");

console.log(upperCaseMap.size);
// 26

const lowerCaseMap = new Map();

lowerCaseMap.set("A", "a");
lowerCaseMap.set("B", "b");
lowerCaseMap.set("C", "c");
lowerCaseMap.set("D", "d");
lowerCaseMap.set("D", "d");
lowerCaseMap.set("E", "e");
lowerCaseMap.set("F", "f");
lowerCaseMap.set("G", "g");
lowerCaseMap.set("H", "h");
lowerCaseMap.set("I", "i");
lowerCaseMap.set("J", "j");
lowerCaseMap.set("K", "k");
lowerCaseMap.set("L", "l");
lowerCaseMap.set("M", "m");
lowerCaseMap.set("N", "n");
lowerCaseMap.set("O", "o");
lowerCaseMap.set("P", "p");
lowerCaseMap.set("Q", "q");
lowerCaseMap.set("R", "r");
lowerCaseMap.set("S", "s");
lowerCaseMap.set("T", "t");
lowerCaseMap.set("U", "u");
lowerCaseMap.set("V", "v");
lowerCaseMap.set("W", "w");
lowerCaseMap.set("X", "x");
lowerCaseMap.set("Y", "y");
lowerCaseMap.set("Z", "z");

console.log(lowerCaseMap.size);

console.log("-----------------------------------");
console.log("-----------------------------");

function toUpperCase(string) {
  strArray = string.split("");
  let i = 0;

  for (; i < strArray.length; i++) {
    let key = strArray[i];
    if (upperCaseMap.has(key)) {
      strArray[i] = upperCaseMap.get(key);
    }
  }
  let rString = strArray.join("");
  return rString;
}

console.log(toUpperCase("Hello"));
// HELLO
console.log(toUpperCase("water bottle"));
// WATER BOTTLE
console.log(toUpperCase("Black Bear"));
// BLACK BEAR

console.log("------------------------------------");
console.log("----------------------------------");

function toLowerCase(string) {
  strArray = string.split("");
  let i = 0;

  for (; i < strArray.length; i++) {
    let key = strArray[i];
    if (lowerCaseMap.has(key)) {
      strArray[i] = lowerCaseMap.get(key);
    }
  }
  let rString = strArray.join("");
  return rString;
}

console.log(toLowerCase("Hello"));
// hello
console.log(toLowerCase("Water Bottle"));
// water bottle
console.log(toLowerCase("Rainbow Trout!!!"));
// rainbow trout!!!

console.log("--------------------------------------");
console.log("--------------------------------");

function dotSplit(string, char) {
  let rArray = [];
  let i = 0;

  if (char == "") {
    for (; i < string.length; i++) {
      rArray.push(string.charAt(i));
    }
    return rArray;
  }

  if (char != "") {
    let rString = "";

    for (; i < string.length; i++) {
      if (string.charAt(i) != char) {
        rString = rString.concat(string.charAt(i));
      }
      if (string.charAt(i) == char) {
        rArray.push(rString);
        rString = "";
      }
      if (i == string.length - 1) {
        rArray.push(rString);
      }
    }
    return rArray;
  }
}

console.log(dotSplit("bear", ""));
// ['b', 'e', 'a', 'r']
console.log(dotSplit("Mellon-Tech", "-"));
// ['Mellon', 'Tech']
console.log(dotSplit("B-E-A-R", "-"));
// ['B', 'E', 'A', 'R']

console.log("------------------------------------");
console.log("----------------------------------");

let bear1 = dotSplit("bear", "");

console.log(bear1);
// ['b', 'e', 'a', 'r']

let mellonTech1 = dotSplit("Mellon-Tech", "-");

let bear2 = dotSplit("B-E-A-R", "-");

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

console.log(dotReverse(bear1));
// ['r', 'a', 'e', 'b']
console.log(dotReverse(mellonTech1));
// ['Tech', 'Mellon']
console.log(dotReverse(bear2));
// ['R', 'A', 'E', 'B']

console.log("------------------------------------");
console.log("---------------------------------");

let bear3 = dotReverse(bear1);

let mellonTech2 = dotReverse(mellonTech1);

let bear4 = dotReverse(bear2);

function dotJoin(array, char) {
  let rString = "";
  let i = 0;

  if (char == "") {
    for (; i < array.length; i++) {
      rString = rString.concat(array[i]);
    }
    return rString;
  }

  if (char != "") {
    for (; i < array.length; i++) {
      if (i == array.length - 1) {
        rString = rString.concat(array[i]);
      } else {
        rString = rString.concat(array[i]);
        rString = rString.concat(char);
      }
    }
    return rString;
  }
}

console.log(mellonTech2);

console.log(dotJoin(mellonTech2, "-"));
// Mellon-Tech
console.log(dotJoin(bear3, "-"));
// b-e-a-r

let robots4 = ["Mellon", "Tech", "Eggplant", "Head"];

console.log(dotJoin(robots4, "**"));
// Mellon**Tech**Eggplant**Head

console.log("------------------------------------");
console.log("-------------------------------------");

console.log(1.23 % 1);

function mathDotRound(num) {
  let remainder = num % 1;
  let integer = num - remainder;

  if (remainder >= 0.5) {
    return integer + 1;
  } else {
    return integer;
  }
}

console.log(mathDotRound(1.23));
// 1
console.log(mathDotRound(1.61));
// 2
console.log(mathDotRound(44.34));
// 44
console.log(mathDotRound(44.51));
// 45

console.log("----------------------------------");
console.log("------------------------------");

console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead["name"]);
// Hammerhead
console.log(hammerHead["playStation"] == undefined);
// true

console.log("----------------------------------");
console.log("--------------------------------");

const brewMenu = [
  {
    name: "Cheeseburger",
    quantity: 1,
    price: 9.99,
    addItem() {
      this.quantity = this.quantity + 1;
      this.price = this.price * this.quanity;
    }
  },
  {
    name: "Cowboy Ribeye",
    quantity: 1,
    price: 34.99,
    addItem() {
      this.quantity = this.quantity + 1;
      this.price = this.price * this.quantity;
      console.log(this);
    }
  }
];

console.log(brewMenu[1].addItem());

const brewNames = ["Cheeseburger", "Cowboy Ribeye"];

function increaseQuantity(string, array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i].name == string) {
      array[i].addItem();
    }
  }
  return array;
}

console.log(increaseQuantity("Cheeseburger", brewMenu));

console.log("-----------------------------------");
console.log("---------------------------------");
console.log("-------------------------------");

const testArray = [
  {
    name: "test 1",
    quantity: 1
  },
  {
    name: "test 2",
    quantity: 1
  },
  {
    name: "test 3",
    quantity: 1
  },
  {
    name: "test 4",
    quantity: 1
  }
];

function increaseByOne(string, array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i].name == string) {
      array[i].quantity = array[i].quantity + 1;
    }
  }
  return [...array];
}

console.log(increaseByOne("test 3", testArray));

console.log(increaseByOne("test 3", testArray));

console.log("Hello Oa");

console.log("---------------------------");
console.log("-------------------------");

let testQuants = [
  {
    id: 1,
    name: "test 1",
    quantity: 0
  },
  {
    id: 2,
    name: "test 2",
    quantity: 0
  },
  {
    id: 3,
    name: "test 3",
    quantity: 0
  },
  {
    id: 4,
    name: "test 4",
    quantity: 0
  },
  {
    id: 5,
    name: "test 5",
    quantity: 0
  }
];

let singleTest1 = testQuants.filter(t1 => t1.id == 3);

console.log(singleTest1);

singleTest1[0].quantity = singleTest1[0].quantity + 1;

console.log(singleTest1);

singleTest1[0].quantity = singleTest1[0].quantity + 1;

console.log(singleTest1);

console.log(testQuants);

let testQuants2 = [
  {
    name: "test 1",
    quantity: 0
  },
  {
    name: "test 2",
    quantity: 1
  },
  {
    name: "test 3",
    quantity: 2
  },
  {
    name: "test 4",
    quantity: 3
  },
  {
    name: "test 5",
    quantity: 4
  }
];

let tq2 = testQuants2.filter(t1 => t1.quantity != 0);

console.log(tq2);

console.log("------------------------------");
console.log("----------------------------------");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let newObject = {};

console.log(newObject);

console.log(newObject["list"]);

let clicked = true;

function changeClicked() {
  clicked = !clicked;
}

console.log(clicked);

changeClicked();

console.log(clicked);
// false

let clicked2 = true;

console.log(clicked2);
// true

let changeClicked2 = () => (clicked2 = !clicked2);

changeClicked2();

console.log(clicked2);
// false

let a = [1, 2, 3];

a[100] = 4;

console.log(a.length);

let vowels = Array.of("aeiou");

console.log(vowels);

let nums23 = [1, 2];

nums23.shift();

console.log(nums23[0]);

console.log("---------------------------------");
console.log("------------------------------");

class CloneArray {
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
    let rArray = new CloneArray();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }
}

const robots12 = new CloneArray();

robots12.push("Hank-44");
robots12.push("Warren-21");
robots12.push("Mellon-Tech");
robots12.push("Eggplant-Head");

console.log(robots12.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots12.length);
// 4
console.log(robots12.indexOf("Warren-21"));
// 1
console.log(robots12.indexOf("Bender"));
// -1
console.log(robots12.includes("Mellon-Tech"));
// true
console.log(robots.includes("Bender"));
// false
const robots14 = robots12.slice(2, 4);

console.log(robots14.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(robots14.length);
// 2

console.log("-----------------------------------");
console.log("--------------------------------");

let testNum31 = 121;

let testNum32 = 124;

let testNum33 = 67976;

let testNum34 = 550055;

function palindromeNumber(num) {
  let numString = num.toString();

  let i = 0;
  let j = numString.length - 1;

  for (; i < j; i++, j--) {
    if (numString.charAt(i) != numString.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(palindromeNumber(testNum31));
// true
console.log(palindromeNumber(testNum32));
// false
console.log(palindromeNumber(testNum33));
// true
console.log(palindromeNumber(testNum34));
// true

console.log("--------------------------------");
console.log("-------------------------------");

let test20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

delete test20[2];

console.log(test20);
// [1, 2, empty, 4, 5, 6, 7, 8, 9, 10]
console.log(test20.length);
// 10
console.log(test20[2]);
// undefined

test20.sort((a, b) => a - b);

console.log(test20);

console.log("------------------------------");
console.log("---------------------------------");

let returnTwo = (i, j) => {
  return i, j;
};

console.log(returnTwo(2, 3));

console.log("--------------------------------");

let testNums41 = [3, 2, 2, 3];

let value1 = 3;

let testNums42 = [0, 1, 2, 2, 3, 0, 4, 2];

let value2 = 2;

function removeElement(array, element) {
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == element) {
      delete array[i];
    }
  }

  array.sort((a, b) => a - b);

  let j = 0;
  let count = 0;

  for (; j < array.length; j++) {
    if (array[j] != undefined) {
      count++;
    }
  }
  return count;
}

console.log(removeElement(testNums41, value1));
// 2
console.log(removeElement(testNums42, value2));
// 5

console.log("---------------------------------");
console.log("---------------------------------------");

let string51 = "crane";

let string52 = "hawk";

let string53 = "heron";

let testIndex1 = string51.length / 2;

console.log(testIndex1);

if (9 === 9) {
  let testMap = new Map();

  testMap.set("[", "]");
  testMap.set("{", "}");
  testMap.set("(", ")");

  let string134 = "()[]{}";

  let i = 0;

  let j = string134.length - 1;
}

let par4 = "[})({]";

par4 = par4.split("");

par4.sort((a, b) => (a > b ? 1 : -1));

par4 = par4.join("");

console.log(par4);
// ()[]{}

console.log("--------------------------------");
console.log("-------------------------------");

let par1 = "()";

let par2 = "()[]{}(}{)";

let par3 = "(]";

function validParentheses(string) {
  if (string.length % 2 != 0) {
    return false;
  }

  let parMap = new Map();

  parMap.set("{", "}");
  parMap.set("[", "]");
  parMap.set("(", ")");

  let parMap2 = new Map();

  parMap2.set("}", "{");
  parMap2.set("]", "[");
  parMap2.set("(", ")");

  let i = 0;
  let j = i + 1;

  for (; j < string.length; i++, j++) {
    let char = string.charAt(i);
    let char2 = string.charAt(j);
    if (i < string.length - 1) {
      if (parMap.get(char) != char2 && !parMap.has(char2)) {
        return false;
      }
    }
  }
}

console.log(validParentheses(par1));
// true
console.log(validParentheses(par2));

console.log(validParentheses(par3));

// [(])
// if open parenthese remain true
// if closing parenthese does not match opening
// parenthese return false

console.log("-----------------------------------");
console.log("--------------------------------");

let testArray2 = [
  {
    name: "test 1",
    quantity: 1
  },
  {
    name: "test 2",
    quantity: 1
  },
  {
    name: "test 3",
    quantity: 1
  }
];

let testElement = testArray2[0];

console.log(testElement);

testElement.quantity = testElement.quantity + 1;

console.log(testElement);

console.log(testArray2);

console.log("-----------------------");
console.log("---------------------------");

console.log("Hello Oa");
// Hello Oa

class ArrayClone5 {
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
    let rArray = new ArrayClone5();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }
}

const robots55 = new ArrayClone5();

robots55.push("Hank-44");
robots55.push("Warren-21");
robots55.push("Mellon-Tech");
robots55.push("Eggplant-Head");

console.log(robots55.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots55.container[0]);
// Hank-44
console.log(robots55.container[1]);
// Warren-21
console.log(robots55.container[2]);
// Mellon-Tech
console.log(robots55.container[3]);
// Eggplant-Head
console.log(robots55.length);
// 4
robots55.push("test 1");

console.log(robots55.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'test 1'}
console.log(robots55.length);
// 5
robots55.pop();

console.log(robots55.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots55.length);
// 4
console.log(robots55.indexOf("Hank-44"));
// 0
console.log(robots55.indexOf("Warren-21"));
// 1
console.log(robots55.indexOf("Bender"));
// -1
console.log(robots55.includes("Mellon-Tech"));
// true
console.log(robots55.includes("Eggplant-Head"));
// true
console.log(robots55.includes("pencil"));
// false
const robots56 = robots55.slice(2, 4);

console.log(robots56.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(robots56.container[1]);
// Eggplant-Head
console.log(robots56.length);
// 2

console.log("-----------------------------");
console.log("---------------------------");

let prefix1 = ["flo", "flow", "flower"];

let prefix2 = ["corn", "cornbread", "corndog"];

let prefix3 = ["water", "waterbed", "watermelon"];

function longestCommonPrefix(array) {
  let prefix = array[0];

  let i = 1;

  for (; i < array.length; i++) {
    while (array[i].indexOf(prefix) != 0) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (prefix.length == 0) {
        return "no common prefix";
      }
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(prefix1));
// flo
console.log(longestCommonPrefix(prefix2));
// corn
console.log(longestCommonPrefix(prefix3));
// water

console.log("-----------------------------");
console.log("---------------------------");

let suffix1 = ["gatorade bottle", "water bottle", "wine bottle"];

let suffix2 = ["package box", "cereal box", "cardboard box"];

let suffix3 = ["flashlight", "street light", "blue light"];

console.log("water bottle".includes("bottle"));
// true

function longestCommonSuffix(array) {
  let suffix = array[0];

  let count = 0;

  let i = 1;

  for (; i < array.length; i++) {
    while (!array[i].includes(suffix)) {
      suffix = suffix.replace(suffix.charAt(0), "");
      if (suffix.length == 0) {
        return "no common suffix";
      }
    }
  }
  if (suffix.charAt(0) == " ") {
    suffix = suffix.replace(suffix.charAt(0), "");
  }
  return suffix;
}

console.log(longestCommonSuffix(suffix1));
// bottle

let testString = "#########";

testString = testString.replace("#", "!");

console.log(testString);
// !########
testString = testString.replace("#", "!");

console.log(testString);
// !!#######

console.log("---------------------------------");
console.log("--------------------------");

let mellonTech5 = "Mellon-Tech";

let mtArray = mellonTech5.split("h");

console.log(mtArray);

let mtArray2 = mellonTech5.split("M");

console.log(mtArray2);
// ['', 'ellon-Tech']

console.log("---------------------------------");
console.log("----------------------------");

let testString2 = "####################";

let stringSplit2 = (string, char) => {
  let rArray = [];

  let i = 0;

  if (char == "") {
    for (; i < string.length; i++) {
      rArray.push(string.charAt(i));
    }
  }

  let forString = "";

  if (char != 0) {
    for (; i < string.length; i++) {
      if (string.charAt(i) != char) {
        forString = forString.concat(string.charAt(i));
      }
      if (string.charAt(i) == char) {
        rArray.push(forString);
        forString = "";
      }
      if (i == string.length - 1 && string.charAt != char) {
        rArray.push(forString);
      }
    }
  }
  return rArray;
};

console.log(stringSplit2("Mellon-Tech", "h"));
// ['Mellon-Tec', '']
console.log(stringSplit2("Mellon-Tech", "-"));
// ['Mellon', 'Tech']
console.log(stringSplit2("Mellon-Tech", "M"));
// ['', 'ellon-Tech']
console.log(stringSplit2("Mellon-Tech", ""));
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']

let mellonTechChars = stringSplit2("Mellon-Tech", "");

console.log(mellonTechChars);
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']

function reverseArray(array) {
  let i = 0;

  let j = array.length - 1;

  let temp = 0;

  for (; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(reverseArray(mellonTechChars));
//  ['h', 'c', 'e', 'T', '-', 'n', 'o', 'l', 'l', 'e', 'M']

console.log("----------------------------------");
console.log("--------------------------------");

let eggPlant2 = stringSplit2("Eggplant-Head", "-");
console.log(eggPlant2);
// ['Eggplant', 'Head']
let hank44 = stringSplit2("Hank-44", "");
console.log(hank44);
// ['H', 'a', 'n', 'k', '-', '4', '4']
let warren21 = stringSplit2("Warren-21", "-");
console.log(warren21);
// ['Warren', '21']

function arrayJoin2(array, char) {
  let rString = "";

  let i = 0;

  for (; i < array.length; i++) {
    if (i == array.length - 1) {
      rString = rString.concat(array[i]);
    } else {
      rString = rString.concat(array[i]);
      rString = rString.concat(char);
    }
  }

  return rString;
}

console.log(arrayJoin2(eggPlant2, "=="));
// Eggplant==Head
console.log(arrayJoin2(hank44, "_"));
// H_a_n_k_-_4_4
console.log(arrayJoin2(warren21, "-"));
// Warren-21

console.log("---------------------------------");
console.log("----------------------------");

let tString = "#####";

tString = tString.replace(tString.charAt(0), "!");

console.log(tString);
// !####
tString = tString.replace("#", "!");
console.log(tString);
// !!###

console.log("--------------------------------");
console.log("-----------------------------------");

let tString2 = "#####";

function stringDotReplace(string, char1, char2) {
  let stringArr = stringSplit2(string, "");

  let i = 0;

  let count = 0;

  for (; i < stringArr.length; i++) {
    if (stringArr[i] == char1 && count < 1) {
      stringArr[i] = char2;
      count++;
    }
  }

  let rString = arrayJoin2(stringArr, "");

  return rString;
}

console.log(stringDotReplace(tString2, "#", "!"));
// !####
console.log(tString2);
// #####
tString2 = stringDotReplace(tString2, "#", "!");

console.log(stringDotReplace(tString2));
// !####

tString2 = stringDotReplace(tString2, "#", "!");

console.log(tString2);
// !!###

console.log("----------------------------------");
console.log("-----------------------------");

let string0 = "zero";

console.log(typeof string0.charAt(1));

let tattoo = "tattoo";

tattoo = tattoo.replace(tattoo.charAt(2), "#");

console.log(tattoo);
// #attoo

tattoo = tattoo.replace(2, "#");

console.log(tattoo);

console.log("------------------------------");
console.log("------------------------------");

let userIds = [
  {
    id: 1,
    name: "user 1"
  },
  {
    id: 2,
    name: "user 2"
  },
  {
    id: 3,
    name: "user 3"
  },
  {
    id: 4,
    name: "user 4"
  }
];

console.log("Hello Oa");

function mathDotRound2(num) {
  let remainder = num % 1;

  let wholeNum = num - remainder;

  if (remainder >= 0.5) {
    return wholeNum + 1;
  }
  if (remainder < 0.5) {
    return wholeNum;
  }
}

console.log(mathDotRound2(23.56));
// 24
console.log(mathDotRound2(45.34));
// 45

console.log("-----------------------------");
console.log("----------------------------");

let isPrimeNum = num => {
  let sqrt = Math.sqrt(num);
  let i = 2;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNum(25));
// false
console.log(isPrimeNum(29));
// true
console.log(isPrimeNum(31));
// true
console.log(isPrimeNum(30));
// false

console.log("--------------------------");
console.log("---------------------------------");

function findAllFactors2(num) {
  let rArray = [];
  let sqrt = Math.sqrt(num);
  let i = 1;

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      rArray.push(i);
      let newNum = num / i;
      if (newNum !== sqrt) {
        rArray.push(newNum);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors2(36));
// [1, 36, 2, 18, 3, 12, 4, 9, 6]

console.log("------------------------------");
console.log("---------------------------");

let testMembers = [
  {
    id: 1,
    name: "test 1"
  },
  {
    id: 2,
    name: "test 2"
  },
  {
    id: 3,
    name: "test 3"
  },
  {
    id: 4,
    name: "test 4"
  },
  {
    id: 5,
    name: "test 5"
  }
];

let found1 = testMembers.some(t1 => t1.id == 4);

console.log(found1);
// true

let found2 = testMembers.some(t1 => t1.id == 97);

console.log(found2);
// false

console.log("-------------------------------");
console.log("------------------------------");

function mathDotPow(num, power) {
  if (power == 0) {
    return 1;
  }
  let i = 1;

  let num2 = num;

  for (; i < power; i++) {
    num = num * num2;
  }
  return num;
}

console.log(mathDotPow(7, 2));
// 49
console.log(mathDotPow(5, 2));
// 25
console.log(mathDotPow(5, 3));
// 125
console.log(mathDotPow(3, 3));
// 27
console.log(mathDotPow(3, 4));
// 81
console.log(Math.pow(9, 0));
// 1
console.log(Math.pow(71, 0));
// 1

// 3
// 9 ... increased by 6
// 27 ... increased by 18
// 81 ... increased by 54

// 4
// 16 ... increased by 12
// 64 ... increased by 48

function mathDotPow2(num, power) {
  if (power == 0) {
    return 1;
  }
  let i = 1;
  let rNum = 1;

  for (; i <= power; i++) {
    rNum = rNum * num;
  }
  return rNum;
}

console.log(mathDotPow2(7, 2));
// 49
console.log(mathDotPow2(9, 3));
// 729
console.log(mathDotPow2(54, 0));
// 1

console.log("------------------------------");
console.log("-----------------------------");

let racecar2 = "racecar";

let television = "television";

let tupperWare = "tupperware";

function allStringCombos9(string) {
  let rArray = [];

  let i = 0;

  for (; i < string.length; i++) {
    let newString = string.charAt(i);
    rArray.push(newString);
    let j = i + 1;

    for (; j < string.length; j++) {
      newString = newString.concat(string.charAt(j));
      rArray.push(newString);
    }
  }
  return rArray;
}

console.log(allStringCombos9(racecar2));

console.log(allStringCombos9(television));

console.log(allStringCombos9(tupperWare));

console.log("-------------------------------");
console.log("------------------------------");

console.log("Hello Oa");
// Hello Oa

let testObj1 = {
  name: "test object 1",
  quantity: 1
};

let testObj2 = {
  name: "test object 2",
  quantity: 1
};

let testObj3 = {
  name: "test object 3",
  quantity: 1
};

let testObj4 = {
  name: "test object 4",
  quantity: 1
};

let objectArray1 = [testObj1, testObj2, testObj3, testObj4];

let objectArray2 = [testObj1, testObj2, testObj3, testObj4];

let objectArray3 = [
  { ...testObj1 },
  { ...testObj2 },
  { ...testObj3 },
  { ...testObj4 }
];

console.log(objectArray1);

console.log(objectArray2);

console.log(objectArray3);

testObj1["name"] = "TJ Detweiller";

let testObj5 = testObj1;

let testObj6 = testObj2;

let testObj7 = testObj3;

let testObj8 = testObj4;

let objectArray4 = [testObj5, testObj6, testObj7, testObj8];

console.log(objectArray4);

console.log("---------------------------------");
console.log("-------------------------------");

const stateProperties = prop => {
  let state = {
    name: ""
  };
};

let protoArray = [];

console.log(protoArray[0]);

let mapArray = [
  {
    name: "M-O 1",
    status: true
  },
  {
    name: "M-O_2",
    status: false
  },
  {
    name: "M-O_3",
    status: true
  },
  {
    name: "M-O_4",
    status: false
  },
  {
    name: "M-O_5",
    status: true
  },
  {
    name: "M-O_6",
    status: false
  }
];

mapArray.map(ma => console.log(ma.name));

let map1 = mapArray.map(ma => ma.name);

console.log(map1);

1 == 2 ? console.log(true) : console.log(false);
// false

mapArray.map(ma1 =>
  ma1.status == true ? console.log(true) : console.log(false)
);

let map2 = mapArray.map(ma1 => (ma1.status == true ? true : false));

console.log(map2);

console.log("---------------------------");
console.log("-----------------------");

function mathDotPow5(num, pow) {
  if (pow == 0) {
    return 1;
  }
  let rNum = 1;
  let i = 1;

  for (; i <= pow; i++) {
    rNum = rNum * num;
  }
  return rNum;
}

console.log(mathDotPow5(7, 2));
// 49
console.log(Math.pow(7, 3));
// 343
console.log(mathDotPow5(7, 3));
// 343
console.log(Math.pow(4, 4));
// 256
console.log(mathDotPow5(4, 4));
// 256

console.log("----------------------------");
console.log("----------------------------");

let trueFalse1 = [null, 0, 1, 2, undefined, false, true];

let trueFalse2 = [undefined, 37, 97, "IO", false, true, 3];

let trueFalse3 = [12, "@", true, "UI"];

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

console.log(trueCount(trueFalse1));
// 3
console.log(trueCount(trueFalse2));
// 5
console.log(trueCount(trueFalse3));
// 4

console.log("--------------------------------");
console.log("------------------------------");

const jonnJonzz = {
  name: "J'onn J'onzz",
  homePlanet: "Mars",
  team: "Justice League",
  alias: "Martian Manhunter",
  powers: ["telepathy", "transparency", "flight", "shapeshifter"]
};

let { name: jonnName, homePlanet: jonnHome, team, alias, powers } = jonnJonzz;

console.log(jonnName);
// J'onn J'onzz
console.log(jonnHome);
// Mars
console.log(team);
// Justice League
console.log(alias);
// Martian Manhunter
console.log(powers);
// ['telepathy', 'transparency', 'flight', 'shapeshifter']
console.log(powers[0]);
// telepathy
console.log(powers[1]);
// transparency
console.log(powers[2]);
// flight
console.log(powers[3]);
// shapeshifter

console.log("----------------------------------");
console.log("------------------------------");

const robots15 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let robots16 = robots15.forEach(r1 => `${r1} is an awesome robot!`);

console.log(robots16);
// undefined

robots15.forEach(r1 => console.log(`${r1} is an awesome robot!`));
// Hank-44 is an awesome robot!
// Warren-21 is an awesome robot!
// Mellon-Tech is an awesome robot!
// Eggplant-Head is an awesomw robot!

console.log("-------------------------------");
console.log("--------------------------------");

const cars = ["volvo", "jeep", "volkswagen", "honda", "cadillac"];

console.log("Hello Oa");

let clickedArray = [
  {
    id: 1,
    name: "clicked1",
    clicked: true
  },
  {
    id: 2,
    name: "clicked 2",
    clicked: false
  },
  {
    id: 3,
    name: "clicked 3",
    clicked: true
  },
  {
    id: 4,
    name: "clicked 4",
    clicked: false
  },
  {
    id: 5,
    name: "clicked 5",
    clicked: true
  },
  {
    id: 6,
    name: "clicked 6",
    clicked: false
  }
];

clickedArray.map(ca =>
  ca.clicked == true
    ? console.log(`${ca.name} is clicked`)
    : console.log(`${ca.name} is not clicked`)
);

console.log(clickedArray);

function isClicked(id) {
  let i = 0;

  for (; i < clickedArray.length; i++) {
    if (clickedArray[i].id == id) {
      clickedArray[i].clicked = !clickedArray[i].clicked;
    }
  }
  return clickedArray;
}

console.log(isClicked(1));

console.log("-------------------------------");
console.log("----------------------------------");

class array19 {
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
    let rArray = new array19();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];

    let newArray = new array19();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }

    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  delete(index) {
    let newArray = new array19();
    let i = 0;

    for (; i < this.length; i++) {
      if (i != index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    // return this.container;
  }
}

const robots61 = new array19();

robots61.push("Hank-44");
robots61.push("Warren-21");
robots61.push("Mellon-Tech");
robots61.push("Eggplant-Head");

console.log(robots61.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots61.length);
// 4
robots61.push("newRobot");

console.log(robots61.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'newRobot'}
console.log(robots61.length);
// 5
robots61.pop();

console.log(robots61.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots61.length);
// 4
console.log(robots61.indexOf("Mellon-Tech"));
// 2
console.log(robots61.indexOf("Bender"));
// -1
console.log(robots61.includes("Warren-21"));
// true
console.log(robots61.includes("Bender"));
// false
let robots61Clone = robots61.slice(1, 3);

console.log(robots61Clone.container);
// {0: 'Warren-21', 1: 'Mellon-Tech'}
console.log(robots61Clone.length);
// 2
let hankfourfour = robots61.shift();

console.log(hankfourfour);
// Hank-44
console.log(robots61.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head'}
robots61.push("Brooke Nevins");
robots61.push("Rising Dough");

console.log(robots61.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 4: 'Brooke Nevins', 5: 'Rising Dough'}
robots61.push("Hank-44");

robots61.delete(4);

console.log(robots61.container);

robots61.delete(3);

console.log(robots61.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Hank-44'}
console.log(robots61.length);
// 4

robots61.push("Brooke Nevins");
robots61.push("Dex Garrity");
robots61.push("Rising Dough");

console.log(robots61.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Hank-44', 4: 'Brooke Nevins', 5: 'Dex Garrity', 6: 'Rising Dough'}
robots61.delete(4);
robots61.delete(4);

console.log(robots61.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Hank-44', 4: 'Rising Dough'}
console.log(robots61.length);
// 5

console.log("-------------------------------------------------");
console.log("----------------------------------------------------");

const gargoyles = [
  "Goliath",
  "Hudson",
  "Brooklyn",
  "Lexington",
  "Broadway",
  "Bronx"
];

gargoyles.unshift("David Xanatos", "Elisa");

console.log(gargoyles);

function countArgs(a, b, c) {
  console.log(countArgs.length);
}
console.log(countArgs);
// 3

console.log("Hello Oa");
// Hello Oa

let newGargs = [1, 2, 3, 4, 5];

gargoyles.unshift(...newGargs);

console.log(gargoyles);

function argumentsTracker(a, b, c, d, e) {
  console.log(arguments);
  console.log(arguments.length);
  // 5
  console.log(arguments[0]);
}

argumentsTracker(1, 2, 3, 4, 5);

let objArray34 = [
  {
    id: 1,
    name: "obj 1"
  },
  {
    id: 2,
    name: "obj 2"
  },
  {
    id: 3,
    name: "obj 3"
  },
  {
    id: 4,
    name: "obj 4"
  }
];

let indObject34 = { id: 2, name: "obj 3" };

console.log(objArray34.indexOf(indObject34));
// -1

console.log("-------------------------------------");
console.log("-----------------------------------");

class Array21 {
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
    let rArray = new Array21();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let newArray = new Array21();

    let i = 1;

    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.length;
  }

  delete(index) {
    let newArray = new Array21();
    let i = 0;

    for (; i < this.length; i++) {
      if (i != index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
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
  }
}

const gargoyles2 = new Array21();

gargoyles2.push("Goliath");
gargoyles2.push("Lexington");
gargoyles2.push("Hudson");
gargoyles2.push("Bronx");
gargoyles2.push("Brooklyn");
gargoyles2.push("Broadway");

console.log(gargoyles2.container);
// {0: 'Goliath', 1: 'Lexington', 2: 'Hudson', 3: 'Bronx', 4: 'Brooklyn', 5: 'Broadway'}
console.log(gargoyles2.length);
// 6
gargoyles2.push("test");
console.log(gargoyles2.length);
// 7
console.log(gargoyles2.pop());
// test
console.log(gargoyles2.container);
// {0: 'Goliath', 1: 'Lexington', 2: 'Hudson', 3: 'Bronx', 4: 'Brooklyn', 5: 'Broadway'}
console.log(gargoyles2.shift());
// 5
console.log(gargoyles2.container);
// {0: 'Lexington', 1: 'Hudson', 2: 'Bronx', 3: 'Brooklyn', 4: 'Broadway'}
console.log(gargoyles2.unshift(1, 2));

gargoyles2.push("test 1");
gargoyles2.push("test 2");

console.log(gargoyles2.container);

gargoyles2.delete(7);

console.log(gargoyles2.container);

console.log(gargoyles2.pop());
// test 2
console.log(gargoyles2.container);
// {0: 1, 1: 2, 2: 'Lexington', 3: 'Hudson', 4: 'Bronx', 5: 'Brooklyn', 6: 'Broadway'}
gargoyles2.delete(1);

console.log(gargoyles2.container);
// {0: 1, 1: 'Lexington', 2: 'Hudson', 3: 'Bronx', 4: 'Brooklyn', 5: 'Broadway'}
console.log(gargoyles2.shift());
// 5
console.log(gargoyles2.container);
// {0: 'Lexington', 1: 'Hudson', 2: 'Bronx', 3: 'Brooklyn', 4: 'Broadway'}
gargoyles2.unshift("Goliath");

console.log(gargoyles2.container);
// {0: 'Goliath', 1: 'Lexington', 2: 'Hudson', 3: 'Bronx', 4: 'Brooklyn', 5: 'Broadway'}

console.log("--------------------------------");
console.log("-------------------------------");

const rocketPower = [
  {
    id: 1,
    name: "Otto Rocket"
  },
  {
    id: 2,
    name: "Reggie Rocket"
  },
  {
    id: 3,
    name: "Twister Rodriguez"
  },
  {
    id: 4,
    name: "Sam Dullard"
  },
  {
    id: 5,
    name: "Raymundo Rocket"
  },
  {
    id: 6,
    name: "Tito Makani"
  },
  {
    id: 7,
    name: "Officer Shirley"
  },
  {
    id: 8,
    name: "Lars Rodriguez"
  },
  {
    id: 9,
    name: "Violet Stimpleton"
  },
  {
    id: 10,
    name: "Merv Stimpleton"
  }
];

const ottoArray = rocketPower.filter(r1 => r1.name == "Otto Rocket");

console.log(ottoArray);

const ottoRocket = ottoArray[0];

console.log(ottoRocket);
// {id: 1, name: 'Otto Rocket'}
const ottoName = ottoRocket.name;

console.log(ottoName);
// Otto Rocket
