console.log("Hello Oa");
// Hello Oa

class ArrayMaker {
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
    let clone = new ArrayMaker();
    for (; index1 < index2; index1++) {
      clone.push(this.container[index1]);
    }
    return clone;
  }
}

const robots = new ArrayMaker();

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
robots.push("test");
console.log(robots.length);
// 5
console.log(robots.container[4]);
// test
robots.pop();
console.log(robots.length);
// 4
console.log(robots.container[4]);
// undefined
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Mustang"));
// -1
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Mustang"));
// false
console.log(robots.includes("Hank-34"));
// false

let robots2 = robots.slice(1, 3);

console.log(robots2.container);
// {0: 'Warren-21', 1: 'Mellon-Tech'}
console.log(robots2.length);
// 2

console.log("-------------------------------");
console.log("------------------------------");

function reverseNum(num) {
  let remainder = 0;
  let rNum = 0;

  for (; parseInt(num) > 0; num = num / 10) {
    num = parseInt(num);

    remainder = num % 10;
    // console.log(remainder);
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNum(37));
// 73
console.log(reverseNum(123456));
// 654321
console.log(reverseNum(921));
// 129

console.log("--------------------------------");
console.log("----------------------------");

function reverseNum2(num) {
  let numString = num.toString();
  let rString = "";
  let i = numString.length - 1;

  for (; i >= 0; i--) {
    rString = rString.concat(numString.charAt(i));
  }
  return parseInt(rString);
}

console.log(reverseNum2(973));
// 379
console.log(reverseNum2(2654));
// 4562

console.log("-------------------------------");
console.log("------------------------------");

let num1 = 37;

function stringSplit(string, splitBy) {
  let rArray = [];
  let i = 0;

  if (splitBy == "") {
    for (; i < string.length; i++) {
      rArray.push(string.charAt(i));
    }
    return rArray;
  }

  let element = "";

  for (; i < string.length; i++) {
    if (string.charAt(i) == splitBy) {
      rArray.push(element);
      element = "";
    } else {
      element = element.concat(string.charAt(i));
    }
    if (i == string.length - 1) {
      rArray.push(element);
    }
  }
  return rArray;
}

console.log(stringSplit("tomato", ""));
// ['t', 'o', 'm', 'a', 't', 'o']

const mellonTech = "Mellon-Tech";

let tech1 = mellonTech.split("e");

console.log(tech1);
// ['M', 'llon-T', 'ch']
console.log(stringSplit(mellonTech, "e"));
// ['M', 'llon-T', 'ch']

const eggPlantHead = "Eggplant-Head";

let eggPlant1 = eggPlantHead.split("d");

console.log(eggPlant1);
// ['Eggplant-Hea', '']
console.log(stringSplit(eggPlantHead, "d"));
// ['Eggplant-Hea', '']

console.log("--------------------------------");
console.log("--------------------------");

let nums1 = [1, 2, 3, 4, 5];

let nums2 = [6, 7, 8, 9, 10];

function reverseArray(array) {
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

console.log(reverseArray(nums1));
// [5, 4, 3, 2, 1]
console.log(reverseArray(nums2));
// [10, 9, 8, 7, 6]

console.log("-------------------------------");
console.log("------------------------------");

function joinString(array, joinBy) {
  let rString = "";
  let i = 0;

  if (joinBy == "") {
    for (; i < array.length; i++) {
      rString = rString.concat(array[i]);
    }
    return rString;
  }

  for (; i < array.length; i++) {
    if (i != array.length - 1) {
      rString = rString.concat(array[i]);
      rString = rString.concat(joinBy);
    } else {
      rString = rString.concat(array[i]);
    }
  }
  return rString;
}

console.log(joinString(tech1, "e"));
// Mellon-Tech
console.log(joinString(eggPlant1, "d"));
// Eggplant-Head

console.log("-------------------------------");
console.log("--------------------------------");

function reverseNum3(num) {
  if (typeof num != "number") return "input must be a number";

  let numString = num.toString();
  let split1 = stringSplit(numString, "");
  let reverse1 = reverseArray(split1);
  let join1 = joinString(reverse1, "");
  return parseInt(join1);
}

console.log(reverseNum3(123));
// 321
console.log(reverseNum3(456));
// 654

console.log("-------------------------------");
console.log("-------------------------------");

console.log(Math.max(3, 4));
// 4

console.log(Math.max(9, 9));
// 9

function mathDotMax(num1, num2) {
  if (num1 > num2 || num1 == num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(mathDotMax(4, 3));
// 4
console.log(mathDotMax(1, 9));
// 9
console.log(mathDotMax(12, 12));
// 12

console.log("--------------------------");
console.log("---------------------------------");

console.log(7.4 % 1);
let num56 = 7.4 % 1;
console.log(7.4 - num56);
// 7

function mathDotRound(num) {
  let remainder = num % 1;
  let whole = num - remainder;

  if (remainder > 0.5) {
    return whole + 1;
  } else {
    return whole;
  }
}

console.log(mathDotRound(7.4));
// 7
console.log(mathDotRound(9.56));
// 10
console.log(mathDotRound(4.3234567));
// 4
console.log(mathDotRound(36.79));
// 37

console.log("-------------------------------");
console.log("-----------------------------");

let true1 = true;
console.log(true1);
// true as a boolean
let true2 = true1.toString();
console.log(true2);
// true as a string

let chars1 = ["a", "b", "c", "d", "e", "f"];

let chars2 = ["g", "h", "i", "j", "k", "l"];

let chars3 = ["m", "n", "o", "p", "q", "r"];

let chars4 = ["s", "t", "u", "v", "w", "x"];

let chars5 = ["y", "z"];

let chars6 = ["A", "B", "C", "D", "E", "F"];

let chars7 = ["G", "H", "I", "J", "K", "L"];

let chars8 = ["M", "N", "O", "P", "Q", "R"];

let chars9 = ["S", "T", "U", "V", "W", "X"];

let chars10 = ["Y", "Z"];

let chars11 = ["0", "1", "2", "3", "4", "5"];

let chars12 = ["6", "7", "8", "9"];

let chars13 = ["`", "~", "!", "@", "#", "$"];

let chars14 = ["%", "^", "&", "*", "(", ")"];

let chars15 = ["-", "_", "+", "=", "{", "}"];

let chars16 = ["[", "]", "|", ":", ";", "'"];

let chars17 = ["<", ">", ",", ".", "/", "?"];

const letters = [
  ...chars1,
  ...chars2,
  ...chars3,
  ...chars4,
  ...chars5,
  ...chars6,
  ...chars7,
  ...chars8,
  ...chars9,
  ...chars10,
  ...chars11,
  ...chars12,
  ...chars13,
  ...chars14,
  ...chars15,
  ...chars16,
  ...chars17
];

console.log(letters.length);
// 92

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92
];

console.log(numbers.length);
// 92

class HashTable {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(value) {
    if (typeof value != "string") {
      value = value.toString();
    }

    let rString = "";
    let i = 0;

    for (; i < value.length; i++) {
      let currentChar = value.charAt(i);
      let index = letters.indexOf(currentChar);
      let newChar = numbers[index];
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
    } else {
      return false;
    }
  }
}

const fish1 = new HashTable();

console.log(fish1.hash("trout"));
// 2018152120
console.log(fish1.hash("trout"));
// 2018152120
console.log(fish1.hash("bass"));
// 211919
console.log(fish1.hash("bass"));
// 211919

fish1.set(1, "trout");
fish1.set(2, "bass");
fish1.set(3, "whitefish");
fish1.set(4, "pickerel");
fish1.set(5, "perch");
fish1.set(6, "carp");

console.log(fish1.get(1));
// trout
console.log(fish1.get(2));
// bass
console.log(fish1.get(3));
// whitefish
console.log(fish1.get(4));
// pickerel
console.log(fish1.get(5));
// perch
console.log(fish1.get(6));
// carp
console.log(fish1.size);
// 6
console.log(fish1.has(1));
// true
console.log(fish1.has(2));
// true
console.log(fish1.has(3));
// true
console.log(fish1.has(4));
// true
console.log(fish1.has(5));
// true
console.log(fish1.has(6));
// true
console.log(fish1.has(7));
// false
fish1.set(7, "test");

console.log(fish1.get(7));
// test
console.log(fish1.size);
// 7
fish1.delete(7);
//
console.log(fish1.get(7));
// undefined
console.log(fish1.size);
// 6

console.log("------------------------------");
console.log("--------------------------");

let racecar = "racecar";

let kayak = "kayak";

let radar = "radar";

let movie = "movie";

let waterBottle = "water bottle";

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

console.log(isPalindrome(racecar));
// true
console.log(isPalindrome(kayak));
// true
console.log(isPalindrome(radar));
// true
console.log(isPalindrome(movie));
// false
console.log(isPalindrome(waterBottle));
// false

console.log("---------------------------------");
console.log("-------------------------------");

let river = "river";

let subRiver = river.substring(0, river.length);

let subRiver2 = river.substring(0, river.length - 1);

console.log(subRiver);
// river
console.log(subRiver2);
// rive

let flowers = ["flowerbed", "flower power", "flower moon"];

let mountains = [
  "mountain range",
  "mountain top",
  "mountain gear",
  "mountains"
];

let random = ["tomato", "carrot", "corn"];

function longestCommonPrefix(array) {
  let prefix = array[0];
  let count = array[0].length;
  let i = 1;

  for (; i < array.length; i++) {
    while (array[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, count--);

      if (prefix.length == 0) {
        return "no common prefix";
      }
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(flowers));
// flower
console.log(longestCommonPrefix(mountains));
// mountain
console.log(longestCommonPrefix(random));
// no common prefix

console.log("----------------------------------");
console.log("-----------------------------------");

let rivers = ["Bighorn River", "Au Sable River", "Nine River"];

let hybrids = ["Tree Hybrid", "Ram Hybrid", "Trout Hybrid"];

let trout = ["Rainbow Trout", "Brown Trout", "Cutthroat Trout", "Brook Trout"];

let cyborgs = ["Robo-Cop", "Cable", "Cyborg"];

function longestCommonSuffix(array) {
  let suffix = array[0];
  let count1 = 0;
  let count2 = 0;
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

console.log(longestCommonSuffix(rivers));
// River
console.log(longestCommonSuffix(hybrids));
// Hybrid
console.log(longestCommonSuffix(trout));
// Trout
console.log(longestCommonSuffix(cyborgs));
// no common suffix

console.log("--------------------------------");
console.log("------------------------------");

console.log("Coffee" > "Dealership");
// false
console.log("Dealership" > "Coffee");
// true
console.log("dealership" < "Dealership");
// false
console.log("dealership" == "Dealership");
// false
console.log("dealership" < "dealerships");
// true
console.log("dealership" == "dealership");
// true
console.log("dealership" > "Dealership");
// true

console.log("-------------------------------");
console.log("------------------------------");

let lowCase1 = ["a", "b", "c", "d", "e", "f"];

let lowCase2 = ["g", "h", "i", "j", "k", "l"];

let lowCase3 = ["m", "n", "o", "p", "q", "r"];

let lowCase4 = ["s", "t", "u", "v", "w", "x"];

let lowCase5 = ["y", "z"];

const lowerCase = [
  ...lowCase1,
  ...lowCase2,
  ...lowCase3,
  ...lowCase4,
  ...lowCase5
];

console.log(lowerCase.length);
// 26

let upCase1 = ["A", "B", "C", "D", "E", "F"];

let upCase2 = ["G", "H", "I", "J", "K", "L"];

let upCase3 = ["M", "N", "O", "P", "Q", "R"];

let upCase4 = ["S", "T", "U", "V", "W", "X"];

let upCase5 = ["Y", "Z"];

const upperCase = [...upCase1, ...upCase2, ...upCase3, ...upCase4, ...upCase5];

console.log(upperCase.length);
// 26

const lowerCase2 = new Map();

lowerCase2.set("A", "a");
// a
lowerCase2.set("B", "b");
// b
lowerCase2.set("C", "c");
// c
lowerCase2.set("D", "d");
// d
lowerCase2.set("E", "e");
// e
lowerCase2.set("F", "f");
// f
lowerCase2.set("G", "g");
// g
lowerCase2.set("H", "h");
// h
lowerCase2.set("I", "i");
// i
lowerCase2.set("J", "j");
// j
lowerCase2.set("K", "k");
// k
lowerCase2.set("L", "l");
// l
lowerCase2.set("M", "m");
// m
lowerCase2.set("N", "n");
// n
lowerCase2.set("O", "o");
// o
lowerCase2.set("P", "p");
// p
lowerCase2.set("Q", "q");
// q
lowerCase2.set("R", "r");
// r
lowerCase2.set("S", "s");
// s
lowerCase2.set("T", "t");
// t
lowerCase2.set("U", "u");
// u
lowerCase2.set("V", "v");
// v
lowerCase2.set("W", "w");
// w
lowerCase2.set("X", "x");
// x
lowerCase2.set("Y", "y");
// y
lowerCase2.set("Z", "z");
// z

console.log(lowerCase2.size);
// 26

function toLowerCase(string) {
  let rString = "";
  let i = 0;

  for (; i < string.length; i++) {
    if (lowerCase2.get(string.charAt(i)) != undefined) {
      rString = rString.concat(lowerCase2.get(string.charAt(i)));
    } else {
      rString = rString.concat(string.charAt(i));
    }
  }
  return rString;
}

console.log(toLowerCase("TELEVISION"));
// televison
console.log(toLowerCase("Water Bottle"));
// water bottle
console.log(toLowerCase("# YOLO!!!"));
// # yolo!!!

console.log("--------------------------------");
console.log("--------------------------------");

const upperCase2 = new Map();

upperCase2.set("a", "A");
// A
upperCase2.set("b", "B");
// B
upperCase2.set("c", "C");
// C
upperCase2.set("d", "D");
// D
upperCase2.set("e", "E");
// E
upperCase2.set("f", "F");
// F
upperCase2.set("g", "G");
// G
upperCase2.set("h", "H");
// H
upperCase2.set("i", "I");
// I
upperCase2.set("j", "J");
// J
upperCase2.set("k", "K");
// K
upperCase2.set("l", "L");
// L
upperCase2.set("m", "M");
// M
upperCase2.set("n", "N");
// N
upperCase2.set("o", "O");
// O
upperCase2.set("p", "P");
// P
upperCase2.set("q", "Q");
// Q
upperCase2.set("r", "R");
// R
upperCase2.set("s", "S");
// S
upperCase2.set("t", "T");
// T
upperCase2.set("u", "U");
// U
upperCase2.set("v", "V");
// V
upperCase2.set("w", "W");
// W
upperCase2.set("x", "X");
// X
upperCase2.set("y", "Y");
// Y
upperCase2.set("z", "Z");
// Z

console.log(upperCase2.size);
// 26

function toUpperCase(string) {
  let rString = "";
  let i = 0;

  for (; i < string.length; i++) {
    if (upperCase2.get(string.charAt(i)) != undefined) {
      rString = rString.concat(upperCase2.get(string.charAt(i)));
    } else {
      rString = rString.concat(string.charAt(i));
    }
  }
  return rString;
}

console.log(toUpperCase("dachshund!!!"));
// DACHSHUND!!!
console.log(toUpperCase("Pisces==Go==Fish"));
// PISCES==GO==FISH

console.log("---------------------------------");
console.log("-------------------------------");

let triplets1 = [-1, 0, 1, 2, -1, -4];

function threeSum(array) {
  let masterArray = [];
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    let j = i + 1;

    for (; j < array.length; j++) {
      let k = j + 1;
      for (; k < array.length; k++) {
        let newArray = [array[i], array[j], array[k]];
        masterArray.push(newArray);
      }
    }
  }

  let rArray = [];
  let a = 0;

  for (; a < masterArray.length; a++) {
    let b = 0;
    let sum = 0;
    for (; b < masterArray[a].length; b++) {
      sum = sum + masterArray[a][b];
      if (b == masterArray[a].length - 1 && sum == 0) {
        rArray.push(masterArray[a]);
      }
    }
  }
  return rArray;
}

console.log(threeSum(triplets1));

let testArray = [[-1, 0, 1]];

let test2 = [-1, 0, 1];

console.log(testArray.includes(test2));

console.log(testArray[0]);

let abc = ["a", "b", "c"];

console.log(abc.includes("a"));
// true

let abc2 = [["a"], ["b"], ["c"], 2];

console.log(abc2.includes(["a"]));
// false
console.log(abc2.includes(2));
// true

/* 


()] invalid
([)] invalid
[]({})


*/

function validParentheses5(string) {
  let charArray = [];
  let i = 0;

  for (; i < string.length; i++) {
    let char = string.charAt(i);
    if (char == "(" || char == ")") {
      charArray.push(char);
    }
    if (char == "[" || char == "]") {
      charArray.push(char);
    }
    if (char == "{" || char == "}") {
      charArray.push(char);
    }
  }

  if (charArray.length % 2 !== 0) {
    return false;
  }

  if (charArray[0] == "]" || charArray[0] == ")" || charArray[0] == "}") {
    return false;
  }

  let last = charArray.length - 1;

  if (
    charArray[last] == "[" ||
    charArray[last] == "{" ||
    charArray[last] == "("
  ) {
    return false;
  }

  let openMap = new Map();
  openMap.set("(", 1);
  openMap.set("[", 2);
  openMap.set("{", 3);

  let closeMap = new Map();
  closeMap.set(")", 1);
  closeMap.set("]", 2);
  closeMap.set("}", 3);

  let openArr = [];
  let currentOpen = openArr[openArr.length - 1];
  let currentClose = "";
  let count1 = 0;
  let count2 = 0;
  let j = 0;
  for (; j < charArray.length; j++) {
    let key = charArray[j];
    if (openMap.has(key)) {
      openArr.push(key);
      currentOpen = openArr[openArr.length - 1];
      count1++;
    }
    if (closeMap.has(key)) {
      currentClose = key;
      count2++;
      if (openMap.get(currentOpen) == closeMap.get(currentClose)) {
        openArr.pop();
        currentOpen = openArr[openArr.length - 1];
      } else {
        return false;
      }
    }
  }

  if (count1 !== count2) {
    return false;
  }
  return true;
}

console.log(validParentheses5("()"));
// true
console.log(validParentheses5("{[]}"));
// true
