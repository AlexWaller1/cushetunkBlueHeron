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
console.log(robots.randomize());
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
