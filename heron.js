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
