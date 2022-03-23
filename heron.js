console.log("Hello Oa");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[0]);
// Hank-44
console.log(robots[1]);
// Warren-21
console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

let mellonSplit = robots[2].split("M");

console.log(mellonSplit);

function splitString(string, char) {
  let rArray = [];
  let newString = "";
  let i = 0;

  if (char == "") {
    for (; i < string.length; i++) {
      rArray.push(string.charAt(i));
    }
  } else {
    for (; i < string.length; i++) {
      if (string.charAt(i) == char) {
        rArray.push(newString);
        newString = "";
      } else {
        newString = newString.concat(string.charAt(i));
      }
      if (i == string.length - 1) {
        rArray.push(newString);
      }
    }
  }

  return rArray;
}

console.log(splitString(robots[0], ""));
// ['H', 'a', 'n', 'k', '-', '4', '4']

console.log(splitString(robots[2], "M"));
// ['', 'ellon-Tech']

console.log(robots[2].split("e"));
// ['M', 'llon-T', 'ch']

console.log(splitString(robots[2], "e"));
// ['M', 'llon-T', 'ch']

let alabama = "alabama";

console.log(alabama.split("a"));
// ['', 'l', 'b', 'm', '']

console.log(splitString(alabama, "a"));
// ['', 'l', 'b', 'm', '']

console.log("-------------------------------");
console.log("-----------------------------");

let alabama2 = splitString(alabama, "a");

let mellonTech = splitString(robots[2], "e");

let eggPlantHead = splitString(robots[3], "-");

console.log(mellonTech);

console.log(alabama2);

console.log(alabama2.join("a"));

console.log(eggPlantHead);

function joinString(array, char) {
  let rString = "";
  let i = 0;
  if (char == "") {
    for (; i < array.length; i++) {
      rString = rString.concat(array[i]);
    }
  } else {
    for (; i < array.length; i++) {
      rString = rString.concat(array[i]);
      if (i != array.length - 1) {
        rString = rString.concat(char);
      }
    }
  }
  return rString;
}

console.log(joinString(alabama2, "a"));
// alabama

console.log(joinString(mellonTech, "e"));
// Mellon-Tech

console.log(joinString(eggPlantHead, "-"));
// Eggplant-Head

console.log("----------------------------");
console.log("----------------------------");

console.log(eggPlantHead);
// ['Eggplant', 'Head']

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

console.log(reverseArray(eggPlantHead));
// ['Head', 'Eggplant']

let nums1 = [1, 2, 3, 4, 5];

console.log(reverseArray(nums1));
// [5, 4, 3, 2, 1]

console.log("-------------------------------");
console.log("----------------------------");

let racecar = "racecar";

let book = "book";

let kayak = "kayak";

let shelf = "shelf";

let radar = "radar";

let refrigerator = "refrigerator";

let civic = "civic";

function isPalindrome(string) {
  let string2 = string;

  string = splitString(string, "");
  string = reverseArray(string);
  string = joinString(string, "");

  if (string == string2) {
    return `${string2} is a palindrome`;
  } else {
    return `${string2} is not a palindrome`;
  }
}

console.log(isPalindrome(refrigerator));
// refrigerator is not a palindrome

console.log(isPalindrome(racecar));
// racecar is a palindrome

console.log(isPalindrome("webbex"));
// webbex is not a palindrome

console.log(isPalindrome(kayak));
// kayak is a palindrome

console.log(refrigerator);
// refrigetator

console.log("------------------------------");
console.log("-----------------------------");

let kayak2 = "kayak";

let refrigerator2 = "refrigerator";

let racecar2 = "racecar";

let house = "house";

function isPalindrome2(string) {
  let i = 0;
  let j = string.length - 1;
  let rString = `${string} is a palindrome`;

  for (; i < j; i++, j--) {
    if (string.charAt(i) != string.charAt(j)) {
      rString = `${string} is not a palindrome`;
      return rString;
    }
  }
  return rString;
}

console.log(isPalindrome2(kayak2));
// kayak is a palindrome

console.log(isPalindrome2(refrigerator2));
// refrigerator is not a palindrome

console.log(isPalindrome2(racecar2));
// racecar is a palindrome

console.log(isPalindrome2(house));
// house is not a palindrome

console.log("----------------------------");
console.log("----------------------------");

let chars1 = ["a", "b", "c", "d", "e", "f", "g"];

let chars2 = ["h", "i", "j", "k", "l", "m", "n"];

let chars3 = ["o", "p", "q", "r", "s", "t", "u"];

let chars4 = ["v", "w", "x", "y", "z"];

let chars5 = ["A", "B", "C", "D", "E", "F", "G"];

let chars6 = ["H", "I", "J", "K", "L", "M", "N"];

let chars7 = ["O", "P", "Q", "R", "S", "T", "U"];

let chars8 = ["V", "W", "X", "Y", "Z"];

let chars9 = ["`", "~", "1", "!", "2", "@", "3"];

let chars10 = ["#", "4", "$", "5", "%", "6", "^"];

let chars11 = ["7", "&", "8", "*", "9", "(", "0"];

let chars12 = [")", "-", "_", "=", "+", "[", "{"];

let chars13 = ["]", "}", "|", ":", ";", "'", "<"];

let chars14 = [",", ".", ">", "/", "?"];

let masterChars = [
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
  ...chars14
];

let corNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92
];

console.log(masterChars.length);
// 92

console.log(corNumbers.length);
// 92

class HashMap {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(string) {
    let numString = "";
    let rNum = 0;
    let i = 0;

    for (; i < string.length; i++) {
      let index = masterChars.indexOf(string.charAt(i));
      let newChar = corNumbers[index];
      numString = numString.concat(newChar);
    }
    rNum = parseInt(numString);
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
    } else {
      return false;
    }
  }

  delete(key) {
    key = this.hash(key);
    delete this.container[key];
    this.size--;
  }
}

const dachshunds = new HashMap();

console.log(dachshunds.hash("Bodhi"));
// 2815489
console.log(dachshunds.hash("Bodhi"));
// 2815489
console.log(dachshunds.hash("Chipper"));
// 29891616518
console.log(dachshunds.hash("Chipper"));
// 29891616518
console.log(dachshunds.hash("Beezer"));
// 285526518
console.log(dachshunds.hash("Beezer"));
// 285526518

dachshunds.set("1", "Chipper");
dachshunds.set("2", "Beezer");
dachshunds.set("3", "Bodhi");
dachshunds.set("4", "Jake");
dachshunds.set("5", "Star");

console.log(dachshunds.size);
// 5
console.log(dachshunds.get("5"));
// Star
console.log(dachshunds.get("4"));
// Jake
console.log(dachshunds.get("3"));
// Bodhi
console.log(dachshunds.get("2"));
// Beezer
console.log(dachshunds.get("1"));
// Chipper
console.log(dachshunds.has("5"));
// true
console.log(dachshunds.has("4"));
// true
console.log(dachshunds.has("3"));
// true
console.log(dachshunds.has("2"));
// true
console.log(dachshunds.has("1"));
// true
console.log(dachshunds.has("a"));
// false
dachshunds.set("6", "test");

console.log(dachshunds.get("6"));
// test
console.log(dachshunds.size);
// 6
dachshunds.delete("6");

console.log(dachshunds.get("6"));
// undefined
console.log(dachshunds.size);
// 5

console.log("-------------------------------");
console.log("---------------------------");

console.log(2 == "2");
// true
console.log(2 === "2");
// false

console.log(2.5 % 1);
// 0.5

function mathDotRound(num) {
  let decimal = num % 1;

  if (decimal > 0.5) {
    let roundDec = 1 - decimal;
    return num + roundDec;
  } else {
    return num - decimal;
  }
}

console.log(mathDotRound(2.65));
// 3
console.log(mathDotRound(5.34));
// 5
console.log(mathDotRound(37));
// 37

console.log("-----------------------------");
console.log("---------------------------");

console.log(Math.pow(2, 3));
// 8
console.log(Math.pow(9, 3));
// 729
console.log(Math.pow(3, 4));
// 81
console.log(Math.pow(11, 2));
// 121

function mathDotPow(num1, num2) {
  let rNum = 1;
  let i = 1;

  for (; i <= num2; i++) {
    rNum = rNum * num1;
  }
  return rNum;
}

console.log(mathDotPow(9, 3));
// 729
console.log(mathDotPow(2, 3));
// 8
console.log(mathDotPow(3, 4));
// 81
console.log(mathDotPow(11, 2));
// 121

console.log("----------------------------");
console.log("-------------------------");

// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring without repeating characters

// Example 1:
// Intput: s = "abcabcbb"
// Output: 3

// Example 2:
// Input: s = "bbbb"
// Output: 1

// Example 3:
// Input: s = "pwwkew"
// Output: 3

let string1 = "abcabcbb";

let string2 = "bbbb";

let string3 = "pwwkew";

let string4 = "carolc";

function allStringCombos(string) {
  let strCombos = [];
  let count = 0;
  let substr = "";
  let i = 0;

  for (; i < string.length; i++) {
    substr = string.charAt(i);
    strCombos.push(substr);
    let j = i + 1;
    for (; j < string.length; j++) {
      substr = substr.concat(string.charAt(j));
      strCombos.push(substr);
    }
  }
  return strCombos;
}

console.log(allStringCombos("dachshund"));

let stringArray1 = allStringCombos(string1);

let stringArray2 = allStringCombos(string2);

let stringArray3 = allStringCombos(string3);

console.log(stringArray3);

function uniqueCharCount(string) {
  let count = 0;
  let countArray = [];
  let charMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    if (charMap.get(string.charAt(i)) == undefined) {
      count++;
      countArray.push(count);
      charMap.set(string.charAt(i), i);
    } else {
      count = 0;
      charMap = new Map();
    }
  }

  let j = 0;
  let max = 0;

  for (; j < countArray.length; j++) {
    if (countArray[j] > max) {
      max = countArray[j];
    }
  }
  return max;
}

console.log(uniqueCharCount(string3));
// 3
console.log(uniqueCharCount(string2));
// 1
console.log(uniqueCharCount(string1));
// 3
console.log(uniqueCharCount(string4));
// 5
