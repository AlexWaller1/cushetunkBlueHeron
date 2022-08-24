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

charsMap.set(1, "a");
charsMap.set(2, "b");
charsMap.set(3, "c");
charsMap.set(4, "d");
charsMap.set(5, "e");
charsMap.set(6, "f");

console.log(charsMap.get(1));
// a
console.log(charsMap.get(2));
// b

charsMap.set(7, "g");
charsMap.set(8, "h");
charsMap.set(9, "i");
charsMap.set(10, "j");
charsMap.set(11, "k");
charsMap.set(12, "l");
charsMap.set(13, "m");
charsMap.set(14, "n");
charsMap.set(15, "o");
charsMap.set(16, "p");
charsMap.set(17, "q");
charsMap.set(18, "r");
charsMap.set(19, "s");
charsMap.set(20, "t");
charsMap.set(21, "u");
charsMap.set(22, "v");
charsMap.set(23, "w");
charsMap.set(24, "x");
charsMap.set(25, "y");
charsMap.set(26, "z");

console.log(charsMap.size);
// 26

charsMap.set(27, "A");
charsMap.set(28, "B");
charsMap.set(29, "C");
charsMap.set(30, "D");
charsMap.set(31, "E");
charsMap.set(32, "F");
charsMap.set(33, "G");
charsMap.set(34, "H");
charsMap.set(35, "I");
charsMap.set(36, "J");
charsMap.set(37, "K");
charsMap.set(38, "L");
charsMap.set(39, "M");
charsMap.set(40, "N");
charsMap.set(41, "O");
charsMap.set(42, "P");
charsMap.set(43, "Q");
charsMap.set(44, "R");
charsMap.set(45, "S");
charsMap.set(46, "T");
charsMap.set(47, "U");
charsMap.set(48, "V");
charsMap.set(49, "W");
charsMap.set(50, "X");
charsMap.set(51, "Y");
charsMap.set(52, "Z");
