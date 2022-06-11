console.log("Hello Oa");

class Array31 {
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
    let rArray = new Array31();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }

    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array31();
    let i = 1;

    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }

    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array31();
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
    let newArray = new Array31();
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

console.log("--------------------------------------");
console.log("---------------------------------");

const pizzaShops = [
  {
    name: "Francesco's Whitehouse",
    ownerId: 1
  },
  {
    name: "Dominick's",
    ownerId: 2
  },
  {
    name: "Francesco's Flemington",
    ownerId: 1
  },
  {
    name: "Gallagher's Pizza",
    ownerId: 3
  },
  {
    name: "Francesco's Readington",
    ownerId: 1
  }
];

const pizzaOwners = [
  {
    name: "Francesco Matterazzo",
    id: 1
  },
  {
    name: "Dominick Cianello",
    id: 2
  },
  {
    name: "Jim Gallagher",
    id: 3
  }
];

let francesco = pizzaShops.find(pizza => pizza.ownerId === pizzaOwners[0].id);
// find return first element that matches condition

console.log(francesco);
// { name: "Francesco's Whitehouse", ownerId: 1 }

let francesco2 = pizzaShops.filter(
  pizza => pizza.ownerId === pizzaOwners[0].id
);

console.log(francesco2);

console.log("---------------------------------");
console.log("-------------------------------------");

class Array25 {
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
    let rArray = new Array25();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array25();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array25();
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
    let newArray = new Array25();
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

const robots2 = new Array25();

robots2.push("Hank-44");
robots2.push("Warren-21");
robots2.push("Mellon-Tech");
robots2.push("Eggplant-Head");

console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots2.length);
// 4
robots2.push("Bender");

console.log(robots2.length);
// 5
console.log(robots2.container[0]);
// Hank-44
console.log(robots2.container[1]);
// Warren-21
console.log(robots2.container[2]);
// Mellon-Tech
console.log(robots2.container[3]);
// Eggplant-Head
console.log(robots2.container[robots2.length - 1]);
// Bender
console.log(robots2.pop());
// Bender
console.log(robots2.length);
// 4
console.log(robots2.container[robots2.length - 1]);
// Eggplant-Head
console.log(robots2.indexOf("Hank-44"));
// 0
console.log(robots2.indexOf("Warren-21"));
// 1
console.log(robots2.indexOf("Mellon-Tech"));
// 2
console.log(robots2.indexOf("Eggplant-Head"));
// 3
console.log(robots2.indexOf("Bender"));
// -1
console.log(robots2.includes("Hank-44"));
// true
console.log(robots2.includes("Warren-21"));
// true
console.log(robots2.includes("Mellon-Tech"));
// true
console.log(robots2.includes("Eggplant-Head"));
// true
console.log(robots2.includes("Randy The Ram"));
// false
const robots3 = robots2.slice(1, 3);

console.log(robots3.container);
// { 0: 'Warren-21', 1: 'Mellon-Tech' }
console.log(robots3.length);
// 2
console.log(robots2.unshift("Bender"));
// 5
console.log(robots2.container[0]);
// Bender
console.log(robots2.container);
// {0: 'Bender', 1: 'Warren-21', 2: 'Warren-21', 3: 'Warren-21', 4: 'Warren-21'}
console.log(robots2.shift());
// Bender
console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots2.length);
// 4
console.log(robots2.delete(2));
// Mellon-Tech
console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Eggplant-Head'}
console.log(robots2.length);
// 3
robots2.push("Mellon-Tech");

console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Eggplant-Head', 3: 'Mellon-Tech'}
console.log(robots2.length);
// 4

console.log("--------------------------------------");
console.log("----------------------------------");

class SubMap {
  constructor(message) {
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

const charsMap5 = new SubMap("Randy the Ram Robinson!");

console.log(charsMap5.message);
// Randy the Ram Robinson

charsMap5.set("a", 1);
charsMap5.set("b", 2);
charsMap5.set("c", 3);
charsMap5.set("d", 4);
charsMap5.set("e", 5);

console.log(charsMap5.get("a"));
// 1
console.log(charsMap5.get("b"));
// 2
console.log(charsMap5.size);
// 5

charsMap5.set("f", 6);
charsMap5.set("g", 7);
charsMap5.set("h", 8);
charsMap5.set("i", 9);
charsMap5.set("j", 10);
charsMap5.set("k", 11);
charsMap5.set("l", 12);
charsMap5.set("m", 13);

charsMap5.set("n", 14);
charsMap5.set("o", 15);
charsMap5.set("p", 16);
charsMap5.set("q", 17);
charsMap5.set("r", 18);
charsMap5.set("s", 19);
charsMap5.set("t", 20);

charsMap5.set("u", 21);
charsMap5.set("v", 22);
charsMap5.set("w", 23);
charsMap5.set("x", 24);
charsMap5.set("y", 25);
charsMap5.set("z", 26);

console.log(charsMap5.size);
// 26

charsMap5.set("A", 27);
charsMap5.set("B", 28);
charsMap5.set("C", 29);
charsMap5.set("D", 30);
charsMap5.set("E", 31);
charsMap5.set("F", 32);
charsMap5.set("G", 33);
charsMap5.set("H", 34);
charsMap5.set("I", 35);
charsMap5.set("J", 36);
charsMap5.set("K", 37);
charsMap5.set("L", 38);

charsMap5.set("M", 39);
charsMap5.set("N", 40);
charsMap5.set("O", 41);
charsMap5.set("P", 42);
charsMap5.set("Q", 43);
charsMap5.set("R", 44);
charsMap5.set("S", 45);
charsMap5.set("T", 46);
charsMap5.set("U", 47);

charsMap5.set("V", 48);
charsMap5.set("W", 49);
charsMap5.set("X", 50);
charsMap5.set("Y", 51);
charsMap5.set("Z", 52);

console.log(charsMap5.size);
// 52
charsMap5.set("1", 53);
charsMap5.set("2", 54);
charsMap5.set("3", 55);
charsMap5.set("4", 56);
charsMap5.set("5", 57);
charsMap5.set("6", 58);
charsMap5.set("7", 59);
charsMap5.set("8", 60);
charsMap5.set("9", 61);
charsMap5.set("0", 62);

console.log(charsMap5.size);
// 62

charsMap5.set("~", 63);
charsMap5.set("`", 64);
charsMap5.set("!", 65);
charsMap5.set("@", 66);
charsMap5.set("#", 67);
charsMap5.set("$", 68);
charsMap5.set("%", 69);
charsMap5.set("^", 70);
charsMap5.set("&", 71);
charsMap5.set("*", 72);
charsMap5.set("(", 73);
charsMap5.set(")", 74);
charsMap5.set("-", 75);
charsMap5.set("_", 76);
charsMap5.set("+", 77);
charsMap5.set("=", 78);
charsMap5.set("{", 79);
charsMap5.set("[", 80);
charsMap5.set("}", 81);
charsMap5.set("]", 82);
charsMap5.set(":", 83);
charsMap5.set(";", 84);
charsMap5.set("'", 85);
charsMap5.set("<", 86);
charsMap5.set(",", 87);
charsMap5.set(">", 88);
charsMap5.set(".", 89);
charsMap5.set("|", 90);
charsMap5.set("?", 91);
charsMap5.set("/", 92);

console.log(charsMap5.size);

console.log("-------------------------------------");
console.log("----------------------------------");

class HashMap {
  constructor(message) {
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
      let char = charsMap5.get(key.charAt(i));
      rString = rString.concat(char);
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

const hammerHeadMap = new HashMap("This is the Hammerhead Hash Map!");

console.log(hammerHeadMap.message);
// This is the Hammerhead Hash Map!

console.log(hammerHeadMap.hash("Hammerhead"));
// 34113135188514
console.log(hammerHeadMap.hash("Hammerhead"));
// 34113135188514
console.log(hammerHeadMap.hash("Taylor"));
// 46125121518
console.log(hammerHeadMap.hash("Taylor"));
// 46125121518

hammerHeadMap.set(1, "Hammerhead");
hammerHeadMap.set(2, "Taylor");
hammerHeadMap.set(3, "Harvey");
hammerHeadMap.set(4, "Wibaux");

console.log(hammerHeadMap.size);
// 4
console.log(hammerHeadMap.get(1));
// Hammerhead
console.log(hammerHeadMap.get(2));
// Taylor
console.log(hammerHeadMap.get(3));
// Harvey
console.log(hammerHeadMap.get(4));
// Wibaux
console.log(hammerHeadMap.has(1));
// true
console.log(hammerHeadMap.has(2));
// true
console.log(hammerHeadMap.has(3));
// true
console.log(hammerHeadMap.has(4));
// true
console.log(hammerHeadMap.has(5));
// false

console.log(hammerHeadMap.delete(3));
// true
console.log(hammerHeadMap.has(3));
// false
console.log(hammerHeadMap.size);
// 3
console.log(hammerHeadMap.container);

console.log(hammerHeadMap.delete(3));
// false
console.log(hammerHeadMap.size);
// 3
hammerHeadMap.set(3, "Harvey");

console.log(hammerHeadMap.get(3));
// Harvey
console.log(hammerHeadMap.container);

console.log("--------------------------------");
console.log("------------------------------------");

const numSet = new Set();

numSet.add(1);
numSet.add(2);
numSet.add(3);
numSet.add(4);
numSet.add(5);

console.log(numSet);
// {1, 2, 3, 4, 5}
console.log(numSet.size);
// 5

numSet.delete(3);

console.log(numSet);
// {1, 2, 4, 5}
console.log(numSet.size);
// 4

class Set41 {
  constructor(message = "Hello Oa") {
    this.container = [];
    this.size = 0;
    this.message = message;
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

  delete(key) {
    let newSet = new Set();
    let i = 0;

    for (; i < this.size; i++) {
      if (this.container[i] !== key) {
        newSet.add(this.container[i]);
      }
    }
    this.container = newSet.container;
    this.size = newSet.size;
  }
}
