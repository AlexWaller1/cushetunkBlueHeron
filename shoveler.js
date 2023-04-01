console.log("Shoveler.js!!!");
// Shoveler.js!!!
function mathDotRound(num) {
  let remainder = num % 1;
  num = num - remainder;
  if (remainder >= 0.5) {
    return num + 1;
  } else {
    return num;
  }
}

console.log(mathDotRound(32.5));
// 33
console.log(mathDotRound(32.49));
// 32
console.log(mathDotRound(91.1));
// 91
console.log("------------------------------------------");
console.log("---------------------------------------");

let twentyThree = 23;

let thirtyTwo = twentyThree % 10;

console.log(thirtyTwo);
// 3
twentyThree = (twentyThree - (twentyThree % 10)) / 10;

console.log(twentyThree);
// 2
twentyThree = twentyThree % 10;

console.log(twentyThree);

function reverseNum(num) {
  // num = 189
  let rNum = 0;
  for (; Math.round(num) > 0; num = num / 10) {
    let remainder = num % 10;
    // 189 % 10 = 9
    // 18 % 10 = 8
    // 1 % 10 = 1
    rNum = rNum * 10 + remainder;
    // 0 * 10 + 9 = 9
    // 9 * 10 + 8 = 98
    // 98 * 10 + 1 = 981
    num = num - (num % 10);
    // 189 - (189 % 10) = 180
    // 18 - (18 % 10) = 10
    // 1 - (1 % 10) = 1

    // 180 / 10 = 18
    // 10 / 10 = 1
    // 1 / 10 = 0.10
    // loop breaks because 0.10 rounded is not greater than zero
  }
  return rNum;
}

console.log(reverseNum(23));
// 32
console.log(reverseNum(189));
// 981
console.log(reverseNum(123456));
// 654321
console.log("----------------------------------------------------");
console.log("----------------------------------------------");

function mathDotSqrt(num, power) {
  let i = 1;
  let num2 = num;
  for (; i < power; i++) {
    num = num * num2;
  }
  return num;
}

console.log(mathDotSqrt(3, 3));
// 27
console.log(mathDotSqrt(4, 3));
// 64
console.log(mathDotSqrt(9, 3));
// 729
console.log(81 * 9);
// 729
console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

let racecar = "racecar";

let lamp = "lamp";

let radar = "radar";

let television = "television";

let kayak = "kayak";

let computer = "computer";

function palindrome(string) {
  let i = 0;
  let j = string.length - 1;
  for (; i < j; i++, j--) {
    if (string.charAt(i) !== string.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(racecar));
// true
console.log(palindrome(lamp));
// false
console.log(palindrome(radar));
// true
console.log(palindrome(television));
// false
console.log(palindrome(kayak));
// true
console.log(palindrome(computer));
// false
console.log("----------------------------------------------");
console.log("-----------------------------------------");

class RoboArray21 {
  constructor(message = "RoboArray21!") {
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

  slice(index1, index2) {
    let clone = new RoboArray21("RoboArray21 Clone!");
    for (; index1 < index2; index1++) {
      clone.push(this.container[index1]);
    }
    return clone;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new RoboArray21();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new RoboArray21();
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
    let newArray = new RoboArray21();
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
    let newArray = new RoboArray21();
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

  of(args) {
    let rArray = new RoboArray21();
    let i = 0;
    for (; i < arguments.length; i++) {
      rArray.push(arguments[i]);
    }
    return rArray;
  }
}

const RobotsNJ = new RoboArray21();

console.log(RobotsNJ.push("Hank-44"));
// 1
console.log(RobotsNJ.push("Warren-21"));
// 2
console.log(RobotsNJ.push("Mellon-Tech"));
// 3
console.log(RobotsNJ.push("Eggplant-Head"));
// 4
console.log(RobotsNJ.push("test"));
// 5
console.log(RobotsNJ.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'test'}
console.log(RobotsNJ.length);
// 5
console.log(RobotsNJ.pop());
// test
console.log(RobotsNJ.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(RobotsNJ.length);
// 4
console.log(RobotsNJ.indexOf("Hank-44"));
// 0
console.log(RobotsNJ.indexOf("Warren-21"));
// 1
console.log(RobotsNJ.indexOf("Mellon-Tech"));
// 2
console.log(RobotsNJ.indexOf("Eggplant-Head"));
// 3
console.log(RobotsNJ.indexOf("Bender"));
// -1
console.log(RobotsNJ.includes("Hank-44"));
// true
console.log(RobotsNJ.includes("Warren-21"));
// true
console.log(RobotsNJ.includes("Mellon-Tech"));
// true
console.log(RobotsNJ.includes("Eggplant-Head"));
// true
console.log(RobotsNJ.includes("Bender"));
// false
let roboClone1 = RobotsNJ.slice(2, 4);

console.log(roboClone1.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(roboClone1.container[0]);
// Mellon-Tech
console.log(roboClone1.container[1]);
// Eggplant-Head
console.log(roboClone1.length);
// 2
console.log(RobotsNJ.shift());
// Hank-44
console.log(RobotsNJ.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head'}
console.log(RobotsNJ.length);
// 3
console.log(RobotsNJ.unshift("Hank-44", "Rising Dough", "Bender"));
// 6
console.log(RobotsNJ.container);
// {0: 'Hank-44', 1: 'Rising Dough', 2: 'Bender', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(RobotsNJ.length);
// 6
console.log(RobotsNJ.delete(2));
// Bender
console.log(RobotsNJ.container);
// {0: 'Hank-44', 1: 'Rising Dough', 2: 'Warren-21', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(RobotsNJ.length);
// 5
console.log(RobotsNJ.insert("Bender", 2));
// {0: 'Hank-44', 1: 'Rising Dough', 2: 'Bender', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(RobotsNJ.container);
// {0: 'Hank-44', 1: 'Rising Dough', 2: 'Bender', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(RobotsNJ.length);
// 6
const CrashBandicoot = RobotsNJ.of(
  "Crash Bandicoot",
  "Neo Cortex",
  "Dingodile"
);

console.log(CrashBandicoot.container);
// {0: 'Crash Bandicoot', 1: 'Neo Cortex', 2: 'Dingodile'}
console.log(CrashBandicoot.length);
// 3
