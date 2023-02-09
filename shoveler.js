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

class RoboArray {
  constructor(message = "RoboArray!") {
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
}
