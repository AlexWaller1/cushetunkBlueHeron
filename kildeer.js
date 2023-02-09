console.log("Kildeer.js!!!");
// Kildeer.js!!!

let keyValue0 = { name: "Hammerhead", homePlanet: "Venice Sands 5" };

let keys1 = Object.keys(keyValue0);

console.log(keys1);
// ['name', 'homePlanet']
console.log(typeof keys1[0]);
// string
console.log(typeof keys1[1] === "string");
// true

let keyValue1 = { a: 1, b: 2 };

let keyValue2 = { shrimp: 15, tots: 12 };

let keyValue3 = {};

function keyValueArray(obj) {
  let rArray = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let i = 0;

  for (; i < keys.length; i++) {
    let newPair = [keys[i], values[i]];
    rArray.push(newPair);
  }
  return rArray;
}

console.log(keyValueArray(keyValue1));
// [['a', 1], ['b', 2]]
console.log(keyValueArray(keyValue2));
// [['shrimp', 15], ['tots', 12]]
console.log(keyValueArray(keyValue3));
// []

console.log("---------------------------------------------");
console.log("-----------------------------------------");

let addName1 = {};

let addName2 = "Brutus";

let addName3 = "priceless";

let addName4 = { piano: 500 };

let addName5 = "Brutus";

let addName6 = "priceless";

let addName7 = { piano: 500, stereo: 300 };

let addName8 = "Caligula";

let addName9 = "priceless";

function objMaker(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(objMaker(addName1, addName2, addName3));
// {Brutus: 'priceless'}
console.log(objMaker(addName4, addName5, addName6));
// {piano: 500, Brutus: 'priceless'}
console.log(objMaker(addName7, addName8, addName9));
// {piano: 500, stereo: 300, Caligula: 'priceless'}
console.log("-----------------------------------------------");
console.log("-------------------------------------------");

let title1 = "This is a title";

let title1Split = title1.split(" ");

console.log(title1Split);

let title2 = "capitalize every word";

let title3 = "I Like Pizza";

let title4 = "pizza pizza pizza";

function capitalizeFirstLetter(string) {
  let words = string.split(" ");
  let i = 0;

  for (; i < words.length; i++) {
    words[i] = words[i].replace(
      words[i].charAt(0),
      words[i].charAt(0).toUpperCase()
    );
  }
  let rString = words.join(" ");
  return rString;
}

console.log(capitalizeFirstLetter(title1));
// This Is A Title
console.log(capitalizeFirstLetter(title2));
// Capitalize Every Word
console.log(capitalizeFirstLetter(title3));
// I Like Pizza
console.log(capitalizeFirstLetter(title4));
// Pizza Pizza Pizza
console.log("---------------------------------------");
console.log("---------------------------");

let single1 = [2, 2, 1];

let single2 = [4, 1, 2, 1, 2];

let single3 = [1];

let single4 = [3, 3, 4, 4];

function singleElement(array) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (numsMap.has(key)) {
      let value = numsMap.get(key);
      value++;
      numsMap.set(key, value);
    } else {
      numsMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < array.length; j++) {
    let key = array[j];
    if (numsMap.get(key) === 1) {
      return key;
    }
  }
  return -1;
}

console.log(singleElement(single1));
// 1
console.log(singleElement(single2));
// 4
console.log(singleElement(single3));
// 1
console.log(singleElement(single4));
// -1
console.log("-----------------------------------------");
console.log("----------------------------------------");

let color1 = [0, 1, 2, 0, 1, 2];

function sortByColor(array) {
  let zeros = [];
  let ones = [];
  let twos = [];
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let num = array[i];
    if (num === 0) {
      zeros.push(num);
    }
    if (num === 1) {
      ones.push(num);
    }
    if (num === 2) {
      twos.push(num);
    }
  }

  let j = 0;

  for (; j < zeros.length; j++) {
    rArray.push(zeros[j]);
  }

  let k = 0;

  for (; k < ones.length; k++) {
    rArray.push(ones[k]);
  }

  let l = 0;

  for (; l < twos.length; l++) {
    rArray.push(twos[l]);
  }

  return rArray;
}

console.log(sortByColor(color1));
// [0, 0, 1, 1, 2, 2]
console.log("----------------------------------------------");
console.log("---------------------------------------------");

let accounts1 = [
  [1, 2, 3],
  [3, 2, 1]
];

let accounts2 = [
  [1, 5],
  [7, 3],
  [3, 5]
];

let accounts3 = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5]
];

function accountSum(array) {
  let sumArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let account = array[i];
    let sum = 0;
    let j = 0;
    for (; j < account.length; j++) {
      sum = sum + account[j];
      if (j === account.length - 1) {
        sumArray.push(sum);
      }
    }
  }

  let max = sumArray[0];
  let k = 1;

  for (; k < sumArray.length; k++) {
    if (sumArray[k] > max) {
      max = sumArray[k];
    }
  }
  return max;
}

console.log(accountSum(accounts1));
// 6
console.log(accountSum(accounts2));
// 10
console.log(accountSum(accounts3));
// 17
console.log("-----------------------------------------");
console.log("-----------------------------------------");

function arrayOfMultiples(num, length) {
  let rArray = [];
  let i = 1;

  for (; i <= length; i++) {
    let element = i * num;
    rArray.push(element);
  }
  return rArray;
}

console.log(arrayOfMultiples(7, 5));
// [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(17, 6));
// [17, 34, 51, 68, 85, 102]
console.log("--------------------------------------------");
console.log("----------------------------------");

let territories = [
  { value: 1, label: "Australia" },
  { value: 2, label: "Western Europe" },
  { value: 3, label: "North America" }
];

function sortAscending(sortASC, array) {
  sortASC
    ? array.sort((a, b) => (a.label > b.label ? 1 : -1))
    : array.sort((a, b) => (a.label > b.label ? -1 : 1));

  return array;
}

console.log(sortAscending(true, territories));
// alphabetical order by label!
console.log(sortAscending(false, territories));
// opposite alphabetical order by label!
console.log("---------------------------------------");
console.log("-----------------------------------------");

// object destructuring

const hammerhead = {
  name: "Hammerhead",
  homePlanet: "Venice Sands 5",
  occupation: "Pickerel Cola Space Truck Driver",
  hasCoolJacket: true,
  species: "Hammerhead Shark",
  hasPickerelCola: true,
  friends: ["Taylor", "Harvey", "Wibaux"]
};

const {
  name,
  homePlanet,
  occupation,
  hasCoolJacket,
  species,
  hasPickerelCola,
  friends
} = hammerhead;

console.log(name);
// Hammerhead
console.log(homePlanet);
// Venice Sands 5
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(hasCoolJacket);
// true
console.log(species);
// Hammerhead Shark
console.log(hasPickerelCola);
// true
console.log(friends);
// ['Taylor', 'Harvey', 'Wibaux']
console.log("---------------------------------------");
console.log("-------------------------------------------");

const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const { first, last, origin, allegiance } = arya;

console.log(first);
// Arya
console.log(last);
// Stark
console.log("-----------------------------------------");
console.log("-----------------------------------");

const jonSnow = {
  first: "Jon",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

const {
  first: jon,
  last: snow,
  title,
  family: {
    brothers: { brother1, brother2 },
    sisters: { sister1, sister2 }
  }
} = jonSnow;

console.log(brother1);
// Rob Stark
console.log(brother2);
// Rickon Stark

const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

const [nedStark, alias, house] = characters;

console.log(nedStark, alias, house);
// Ned Stark The Quiet Wolf House Stark

const skills = "The Usurper, Baratheon, Cersei";

const skillsArray = skills.split(", ");

console.log(skillsArray);
// ['The Usurper', 'Baratheon', 'Cersei']

const [usurper, baratheon, cersei] = skillsArray;

console.log(usurper);
// The Usurper
console.log(baratheon);
// Baratheon
console.log(cersei);
// Cersei
console.log("--------------------------------------------");
console.log("-----------------------------------------");

// Most Songs in Playlist!!!

let songs1 = [3, 4, 7, 2];

let songs2 = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3];

function mostSongsInPlaylist(array) {
  let sum = 0;
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    sum = sum + array[i];
    if (sum < 60) {
      count++;
    }
    if (sum >= 60) {
      return count;
    }
  }
  return count;
}

console.log(mostSongsInPlaylist(songs1));
// 4
console.log(mostSongsInPlaylist(songs2));
// 18
console.log("-----------------------------------------");
console.log("------------------------------------------");

const robots = [
  { name: "Hank-44", paintCoat: "Silver" },
  { name: "Warren-21", paintCoat: "Silver" },
  { name: "Mellon-Tech", paintCoat: "Yellow and Green" },
  { name: "Eggplant-Head", paintCoat: "Blue and Orange" }
];

let roboFilter1 = robots.filter(r => r.paintCoat === "Silver");

console.log(roboFilter1);
/* 

[
    { name: 'Hank-44', paintCoat: 'Silver'},
    { name: 'Warren-21', paintCoat: 'Silver }
]

*/

let roboFilter2 = robots.filter(r => r.paintCoat == "Silver").map(r => r.name);

console.log(roboFilter2);
// ['Hank-44', 'Warren-21']
console.log("------------------------------------------");
console.log("-------------------------------------");

let jackpot1 = ["@", "@", "@", "@"];

let jackpot2 = ["%", "*", "*", "#"];

let jackpot3 = ["$", "$", "!", "$"];

function jackpot(game) {
  let i = 0;

  for (; i < game.length - 1; i++) {
    if (game[i] !== game[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(jackpot(jackpot1));
// true
console.log(jackpot(jackpot2));
// false
console.log(jackpot(jackpot3));
// false
console.log("--------------------------------------");
console.log("----------------------------------------");

let testObj1 = {};

testObj1[1] = 2;

console.log(testObj1);
// {1: 2}
console.log(Object.keys(testObj1));
// ['1']
console.log(typeof Object.keys(testObj1)[0]);
// string

let majority1 = [3, 2, 3];

let majority2 = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(array) {
  let obj = {};
  let i = 0;
  for (; i < array.length; i++) {
    let key = array[i];
    if (obj[key]) {
      let value = obj[key];
      value++;
      obj[key] = value;
    } else {
      obj[key] = 1;
    }
  }

  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let max = values[0];
  let rNum = keys[0];
  let j = 1;

  for (; j < keys.length; j++) {
    if (values[j] > max) {
      max = values[j];
      rNum = keys[j];
    }
  }
  return parseInt(rNum);
}

console.log(majorityElement(majority1));
// 3
console.log(majorityElement(majority2));
// 2
console.log("---------------------------------------");
console.log("--------------------------------");

let duplicates1 = [1, 2, 3, 1];

let duplicates2 = [1, 2, 3, 4];

let duplicates3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function hasDuplicates(array) {
  let numsMap = new Map();
  let i = 0;
  for (; i < array.length; i++) {
    let num = array[i];
    if (numsMap.has(num)) {
      return true;
    } else {
      numsMap.set(num, 1);
    }
  }
  return false;
}

console.log(hasDuplicates(duplicates1));
// true
console.log(hasDuplicates(duplicates2));
// false
console.log(hasDuplicates(duplicates3));
// true
console.log("----------------------------------------");
console.log("----------------------------------------");

let numArr1 = [2, 7, 11, 15];

let target1 = 9;

let numArr2 = [3, 2, 4];

let target2 = 6;

let numArr3 = [3, 3];

let target3 = [6];

function findTarget(array, target) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    numsMap.set(key, i);
  }

  let j = 0;
  for (; j < array.length; j++) {
    let diff = target - array[j];
    if (numsMap.has(diff) && numsMap.get(diff) !== j) {
      return [j, numsMap.get(diff)];
    }
  }
  return [];
}

console.log(findTarget(numArr1, target1));
// [0, 1]
console.log(findTarget(numArr2, target2));
// [1, 2]
console.log(findTarget(numArr3, target3));
// [0, 1]
console.log("------------------------------------------");
console.log("--------------------------------------");

function findAllFactors(num) {
  let sqrt = Math.sqrt(num);
  let rArray = [];
  let i = 1;

  for (; i < sqrt; i++) {
    if (num % i == 0) {
      rArray.push(i);
      let factor2 = num / i;
      if (factor2 !== i) {
        rArray.push(factor2);
      }
    }
  }
  return rArray;
}

console.log(findAllFactors(10));
// [1, 10, 2, 5]
console.log(findAllFactors(6));
// [1, 2, 3, 6]
console.log(findAllFactors(100));
// [1, 100, 2, 50, 4, 25, 5, 20]
console.log(findAllFactors(125));
// [1, 125, 5, 25]
console.log("---------------------------------------------");
console.log("---------------------------------------");

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  let i = 2;

  for (; i < sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11));
// true
console.log(isPrime(14));
// false
console.log(isPrime(71));
// true
console.log(isPrime(72));
// false
console.log("-----------------------------------------");
console.log("-----------------------------------");

let exAndOh = [
  ["X", "O", "O"],
  ["O", "X", "X", "O"]
];

function twoDeeArrayCharCount(array, char) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    let nested = array[i];
    let j = 0;
    for (; j < nested.length; j++) {
      if (nested[j] === char) {
        count++;
      }
    }
  }
  return count;
}

console.log(twoDeeArrayCharCount(exAndOh, "X"));
// 3
console.log("-------------------------------------------");
console.log("---------------------------------------");

let true1 = [true, false, true, false];

let true2 = [true, true, true, true];

let true3 = [false, false, false, true];

let true4 = [];

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

console.log(trueCount(true1));
// 2
console.log(trueCount(true2));
// 4
console.log(trueCount(true3));
// 1
console.log(trueCount(true4));
// 0
console.log("------------------------------------------");
console.log("-------------------------------------");

let nestedRobots = ["Hank-44", ["Warren-21"], ["Mellon-Tech", "Eggplant-Head"]];

nestedRobots = nestedRobots.flat();

console.log(nestedRobots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

let nested1 = [1, [2, 3]];

let nested2 = [1, [2, [3, 4]]];

let nested3 = [1, [2, [3, [4, [5, 6]]]]];

let nested4 = [1, [2], 1, [2], 1];

nested3 = nested3.flat();

console.log(nested3);

function nestedCount(array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] === "object") {
      array = array.flat();
      i = i - 1;
    }
  }
  return array.length;
}

console.log(nestedCount(nested1));
// 3
console.log(nestedCount(nested2));
// 4
console.log(nestedCount(nested3));
// 6
console.log(nestedCount(nested4));
// 5
console.log("---------------------------------------");
console.log("-----------------------------------");

let greater1 = [8, 1, 2, 2, 3];

let greater2 = [6, 5, 4, 8];

let greater3 = [7, 7, 7, 7];

function numsGreaterThan(array) {
  let numsMap = new Map();
  let array2 = [...array];
  let rArray = [];
  let i = 0;

  array = array.sort((a, b) => a - b);

  for (; i < array.length; i++) {
    let key = array[i];
    if (!numsMap.has(key)) {
      numsMap.set(key, i);
    }
  }

  let j = 0;

  for (; j < array2.length; j++) {
    let key = array2[j];
    rArray.push(numsMap.get(key));
  }
  return rArray;
}

console.log(numsGreaterThan(greater1));
// [4, 0, 1, 1, 3]
console.log(numsGreaterThan(greater2));
// [2, 1, 0, 3]
console.log(numsGreaterThan(greater3));
// [0, 0, 0, 0]
console.log("--------------------------------------");
console.log("-------------------------------------------");

let range1 = [3, 0, 1];

let range2 = [0, 1];

let range3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let range4 = [0];

function missingInRange(array) {
  let range = array.length;
  let i = 0;
  let sum1 = 0;

  for (; i <= range; i++) {
    sum1 = sum1 + i;
  }

  let sum2 = 0;
  let j = 0;

  for (; j < array.length; j++) {
    sum2 = sum2 + array[j];
  }

  return sum1 - sum2;
}

console.log(missingInRange(range1));
// 2
console.log(missingInRange(range2));
// 2
console.log(missingInRange(range3));
// 8
console.log(missingInRange(range4));
// 1
console.log("--------------------------------------------");
console.log("------------------------------------");

let numString1 = "-0123.00";

let numString2 = "+-a13";

function validNumString(string) {
  let numsMap = new Map();
  numsMap.set("+", true);
  numsMap.set("-", true);
  numsMap.set(".", true);
  numsMap.set("0", true);
  numsMap.set("1", true);
  numsMap.set("2", true);
  numsMap.set("3", true);
  numsMap.set("4", true);
  numsMap.set("5", true);
  numsMap.set("6", true);
  numsMap.set("7", true);
  numsMap.set("8", true);
  numsMap.set("9", true);

  let decimalCount = 0;
  let i = 0;

  for (; i < string.length; i++) {
    let char = string.charAt(i);
    if (!numsMap.has(char)) {
      return false;
    }
    if (char === ".") {
      decimalCount++;
    }
    if (decimalCount > 1) {
      return false;
    }
    if (char === "+" && i > 0) {
      return false;
    }
    if (char === "-" && i > 0) {
      return false;
    }
  }
  return true;
}

console.log(validNumString(numString1));
// true
console.log(validNumString(numString2));
// false
console.log("-------------------------------------------");
console.log("----------------------------------------");

const hank44 = ["H", "a", "n", "k", "-", "4", "4"];

const warren21 = ["W", "a", "r", "r", "e", "n", "-", "2", "1"];

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

console.log(reverseArray(hank44));
// ['4', '4', '-', 'k', 'n', 'a', 'H']
console.log(reverseArray(warren21));
// ['1', '2', '-', 'n', 'e', 'r', 'r', 'a', 'W']
console.log("---------------------------------------------");
console.log("---------------------------------------");

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
// 20
console.log(shape.perimeter());
// NaN
// is NaN because arrow function is not able to reference
// a layer abover and and grab radius or any such property
console.log("-----------------------------------------------");
console.log("------------------------------------");

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

// sayHi();
// name logs undefined because we can call a var before declaration
// however, we are not allowed to this with let
console.log("-----------------------------------------");
console.log("--------------------------------------");

let budgets = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
];

function getBudgets(array) {
  let budget = 0;
  let i = 0;

  for (; i < array.length; i++) {
    budget = budget + array[i].budget;
  }
  return budget;
}

console.log(getBudgets(budgets));
// 65700
console.log("-------------------------------------------");
console.log("-------------------------------------");

let trueCount4 = [true, false, true, false];

let trueCount5 = [false, false, false, false];

let trueCount6 = [];

function trueCount2(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}

console.log(trueCount2(trueCount4));
// 2
console.log(trueCount2(trueCount5));
// 0
console.log(trueCount2(trueCount6));
// 0
console.log("-------------------------------------------");
console.log("---------------------------------------");

let flat1 = [1, [2, 3]];

let flat2 = [1, [2, [3, 4]]];

let flat3 = [1, [2, [3, [4, [5, 6]]]]];

let flat4 = [1, [2], 1, [2], 1];

function flatLength(array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] === "object") {
      array = array.flat();
      i--;
    }
  }
  return array.length;
}

console.log(flatLength(flat1));
// 3
console.log(flatLength(flat2));
// 4
console.log(flatLength(flat3));
// 6
console.log(flatLength(flat4));
// 5
console.log("--------------------------------------");
console.log("------------------------------------");

let twice1 = [4, 3, 2, 7, 8, 2, 3, 1];

let twice2 = [1, 1, 2];

let twice3 = [];

function appearsTwice(array) {
  let numsMap = new Map();
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (numsMap.has(key)) {
      let value = numsMap.get(key);
      value++;
      numsMap.set(key, value);
      rArray.push(key);
    } else {
      numsMap.set(key, 1);
    }
  }
  return rArray;
}

console.log(appearsTwice(twice1));
// [2, 3]
console.log(appearsTwice(twice2));
// [1]
console.log(appearsTwice(twice3));
// []
console.log("--------------------------------------------");
console.log("-----------------------------");

let rangeDiff1 = [3, 0, 1];

let rangeDiff2 = [0, 1];

let rangeDiff3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let rangeDiff4 = [0];

function rangeDiff(array) {
  let range = 0;
  let i = 0;

  for (; i <= array.length; i++) {
    range = range + i;
  }

  let sum = 0;
  let j = 0;

  for (; j < array.length; j++) {
    sum = sum + array[j];
  }

  return range - sum;
}

console.log(rangeDiff(rangeDiff1));
// 2
console.log(rangeDiff(rangeDiff2));
// 2
console.log(rangeDiff(rangeDiff3));
// 8
console.log(rangeDiff(rangeDiff4));
// 1
console.log("-----------------------------------------");
console.log("---------------------------------");

let anagram1 = "nnjjdyus";

let anagram2 = "njdnsjyu";

let anagram3 = "tacocat";

let anagram4 = "ctatocato";

function isAnagram(string1, string2) {
  string1 = string1.split("");

  string2 = string2.split("");

  string1 = string1.sort((a, b) => (a > b ? 1 : -1));

  string2 = string2.sort((a, b) => (a > b ? 1 : -1));

  string1 = string1.join("");

  string2 = string2.join("");

  if (string1 === string2) {
    return true;
  }
  return false;
}

console.log(isAnagram(anagram1, anagram2));
// true;
console.log(isAnagram(anagram3, anagram4));
// false;
console.log("----------------------------------------");
console.log("---------------------------------------");

let greaterThan10 = [8, 1, 2, 2, 3];

let greaterThan11 = [6, 5, 4, 8];

let greaterThan12 = [7, 7, 7, 7];

function greaterThan21(array) {
  let numsMap = new Map();
  let array2 = [...array];
  array = array.sort((a, b) => (a > b ? 1 : -1));
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (!numsMap.has(key)) {
      numsMap.set(key, i);
    }
  }

  let rArray = [];
  let j = 0;

  for (; j < array2.length; j++) {
    let key = array2[j];
    rArray.push(numsMap.get(key));
  }

  return rArray;
}

console.log(greaterThan21(greaterThan10));
// [4, 0, 1, 1, 3]
console.log(greaterThan21(greaterThan11));
// [2, 1, 0, 3]
console.log(greaterThan21(greaterThan12));
// [0, 0, 0, 0]
console.log("---------------------------------------------");
console.log("------------------------------------------");

let twice5 = [1, 2, 3, 1];

let twice6 = [1, 2, 3, 4];

let twice7 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function appearsTwice2(array) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (numsMap.has(key)) {
      return true;
    } else {
      numsMap.set(key, i);
    }
  }
  return false;
}

console.log(appearsTwice2(twice5));
// true
console.log(appearsTwice2(twice6));
// false
console.log(appearsTwice2(twice7));
// true
console.log("--------------------------------------------");
console.log("-------------------------------------");

let target10 = [2, 7, 11, 15];

let target11 = 9;

let target12 = [3, 2, 4];

let target13 = 6;

let target14 = [3, 3];

let target15 = 6;

function findTarget2(array, target) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    numsMap.set(key, i);
  }

  let j = 0;

  for (; j < array.length; j++) {
    let diff = target - array[j];
    if (numsMap.has(diff)) {
      if (j !== numsMap.get(diff)) {
        return [j, numsMap.get(diff)];
      }
    }
  }
}

console.log(findTarget2(target10, target11));
// [0, 1]
console.log(findTarget2(target12, target13));
// [1, 2]
console.log(findTarget2(target14, target15));
// [0, 1]
console.log("--------------------------------------------");
console.log("-------------------------------------");

const shape2 = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape2.diameter());
// 20
console.log(shape.perimeter());
// NaN
// NaN because arrow functions cannot reach above own layer
// to read data
console.log("-----------------------------------------");
console.log("-----------------------------------------");

function sayHi2() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

// console.log(sayHi2());
// name logs undefined because we are able to call a var
// before instantiation
// age logs an error because we are not able to log
// a let before instantiation
console.log("-------------------------------------------");
console.log("---------------------------------------");

console.log("Kildeer.js!!!");
// Kildeer.js
let unique1 = "leetcode";

let unique2 = "loveleetcode";

let unique3 = "aabb";

function firstUniqueChar(string) {
  let charsMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    let key = string.charAt(i);
    if (charsMap.has(key)) {
      let value = charsMap.get(key);
      value++;
      charsMap.set(key, value);
    } else {
      charsMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < string.length; j++) {
    let key = string.charAt(j);
    if (charsMap.get(key) === 1) {
      return j;
    }
  }
  return -1;
}

console.log(firstUniqueChar(unique1));
// 0
console.log(firstUniqueChar(unique2));
// 2
console.log(firstUniqueChar(unique3));
// -1
console.log("------------------------------------------");
console.log("-----------------------------------");

let jewels1 = "aA";

let stones1 = "aAAbbbb";

let jewels2 = "z";

let stones2 = "ZZ";

function jewelsAndStones(jewels, stones) {
  let jewelsMap = new Map();
  let i = 0;

  for (; i < jewels.length; i++) {
    let key = jewels.charAt(i);
    if (!jewelsMap.has(key)) {
      jewelsMap.set(key, true);
    }
  }

  let count = 0;
  let j = 0;

  for (; j < stones.length; j++) {
    let key = stones.charAt(j);
    if (jewelsMap.has(key)) {
      count++;
    }
  }
  return count;
}

console.log(jewelsAndStones(jewels1, stones1));
// 3
console.log(jewelsAndStones(jewels2, stones2));
// 0
console.log("-------------------------------------------");
console.log("--------------------------------------");

let anagram5 = "anagram";

let anagram6 = "nagaram";

let anagram7 = "rat";

let anagram8 = "car";

let anagram9 = "nails";

let anagram10 = "snail";

function anagram55(string1, string2) {
  string1 = string1.split("");

  string2 = string2.split("");

  string1 = string1.sort((a, b) => (a > b ? 1 : -1));

  string2 = string2.sort((a, b) => (a > b ? 1 : -1));

  string1 = string1.join("");

  string2 = string2.join("");

  if (string1 === string2) {
    return true;
  }
  return false;
}

console.log(anagram55(anagram5, anagram6));
// true
console.log(anagram55(anagram7, anagram8));
// false
console.log(anagram55(anagram9, anagram10));
// true
console.log("------------------------------------------");
console.log("--------------------------------------");

function anagram56(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let charsObj = {};
  let i = 0;

  for (; i < string1.length; i++) {
    let key = string1.charAt(i);
    if (charsObj[key] !== undefined) {
      let value = charsObj[key];
      value++;
      charsObj[key] = value;
    } else {
      charsObj[key] = 1;
    }
  }
  let charsObj2 = {};
  let j = 0;

  for (; j < string2.length; j++) {
    let key = string2.charAt(j);
    if (charsObj2[key] !== undefined) {
      let value = charsObj2[key];
      value++;
      charsObj2[key] = value;
    } else {
      charsObj2[key] = 1;
    }
  }

  let a = 0;

  for (; a < string1.length; a++) {
    let char = string1.charAt(a);
    if (charsObj[char] !== charsObj2[char]) {
      return false;
    }
  }
  return true;
}

console.log(anagram56(anagram5, anagram6));
// true
console.log(anagram56(anagram7, anagram8));
// false
console.log(anagram56(anagram9, anagram10));
// true
console.log("-----------------------------------------");
console.log("---------------------------------------");

const robots55 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let oddArr1 = [4, 3, 2, 3, 4];

let oddCount1 = 2;

let oddArr2 = [5, 6, 7, 8, 9];

let oddCount2 = 3;

function allSubArrays(array, oddNum) {
  let all = [];
  let sub = [];
  let i = 0;
  let count = 0;

  for (; i < array.length; i++) {
    sub.push(array[i]);
    let sub2 = [...sub];
    all.push(sub2);
    if (i === array.length - 1) {
      count++;
      i = count - 1;
      sub = [];
    }
  }

  let j = 0;
  let total = 0;
  for (; j < all.length; j++) {
    let sub = all[j];
    let oddCount = 0;
    let a = 0;
    for (; a < sub.length; a++) {
      if (sub[a] % 2 !== 0) {
        oddCount++;
      }
      if (a === sub.length - 1 && oddCount === oddNum) {
        total++;
      }
    }
  }
  return total;
}

console.log(allSubArrays(oddArr1, oddCount1));
// 4
console.log(allSubArrays(oddArr2, oddCount2));
// 1

console.log("-------------------------------------------");
console.log("------------------------------------------");

let addNums = (a, b) => a + b;

console.log(typeof addNums);
// function
let date7 = new Date();

console.log(date7);
// Tue Jan 17 2023 21:44:40 GMT-0500 (Eastern Standard Time)
console.log(typeof date7);
// object
function addXY(x, y) {
  return { a: x, b: y };
}

console.log(typeof addXY(2, 3));
// object
console.log(typeof null);
// object
console.log(
  typeof function add(x, y) {
    return x + y;
  }
);
// function
let testObj = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five"
};

console.log(testObj[1]);
// One
console.log(testObj[2]);
// Two
console.log(testObj[3]);
// Three
console.log(testObj[4]);
// Four
console.log(testObj[5]);
// Five

let testObj2 = {
  1: { hank44: "Hank-44", warren21: "Warren-21" },
  2: { mellonTech: "Mellon-Tech", eggplantHead: "Eggplant-Head" }
};

console.log(testObj2[1]["hank44"]);
// Hank-44
console.log(testObj2[1]["warren21"]);
// Warren-21
console.log(testObj2[2]["mellonTech"]);
// Mellon-Tech
console.log(testObj2[2]["eggplantHead"]);
// Eggplant-Head

function crashBandicoot(num, letter) {
  num = num.toString();
  const crashBandicoot = {
    "-3": { a: "Tiny Tiger", b: "N. Trance" },
    "-2": { a: "Swifty", b: "Dingodile" },
    "-1": { a: "Spyro", b: "Nina Cortex" },
    0: { a: "Crash Bandicoot", b: "Neo Cortex" },
    1: { a: "Nitrous Oxide", b: "Polar" },
    2: { a: "Ripper Roo", b: "Dr. N. Tropy" },
    3: { a: "Koala Kong", b: "Crunch Bandicoot" }
  };
  return crashBandicoot[num][letter];
}

console.log(crashBandicoot(-3, "a"));
// Tiny Tiger
console.log(crashBandicoot(0, "a"));
// Crash Bandicoot
console.log(crashBandicoot(-2, "b"));
// Dingodile
console.log(crashBandicoot(2, "a"));
// Ripper Roo
console.log("-------------------------------------------");
console.log("----------------------------------");

// Majority Element

let majority11 = [3, 2, 3];

let majority12 = [2, 2, 1, 1, 1, 2, 2];

let majority14 = [6, 5, 5];

function majorityElement(array) {
  let elMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (elMap.has(key)) {
      let value = elMap.get(key);
      value++;
      elMap.set(key, value);
    } else {
      elMap.set(key, 1);
    }
  }

  let max = elMap.get(array[0]);
  let maxEl = array[0];
  let j = 1;

  for (; j < array.length; j++) {
    let key = array[j];
    if (elMap.get(key) > max) {
      max = elMap.get(key);
      maxEl = array[j];
    }
  }
  return maxEl;
}

console.log(majorityElement(majority11));
// 3
console.log(majorityElement(majority12));
// 2
console.log(majorityElement(majority14));
// 5
console.log("------------------------------------------");
console.log("-----------------------------------------");

// Intersection of Two Arrays

let intersect1 = [1, 2, 2, 1];

let intersect2 = [2, 2];

let intersect3 = [4, 9, 5];

let intersect4 = [9, 4, 9, 8, 4];

function intersection(array1, array2) {
  let long = [];
  let short = [];

  if (array1 >= array2) {
    long = [...array1];
    short = [...array2];
  } else {
    long = [...array2];
    short = [...array1];
  }

  let numsMap = new Map();
  let i = 0;

  for (; i < long.length; i++) {
    let key = long[i];
    if (numsMap.has(key)) {
      let value = numsMap.get(key);
      value++;
      numsMap.set(key, value);
    } else {
      numsMap.set(key, 1);
    }
  }

  let rArray = [];
  let j = 0;

  for (; j < short.length; j++) {
    let key = short[j];
    if (numsMap.has(key) && numsMap.get(key) > 0) {
      rArray.push(key);
      let value = numsMap.get(key);
      value--;
      numsMap.set(key, value);
    }
  }
  return rArray;
}

console.log(intersection(intersect1, intersect2));
// [2, 2]
console.log(intersection(intersect3, intersect4));
// [4, 9]
console.log("-------------------------------------------");
console.log("-------------------------------------");

let apple = "apple";

console.log(apple.charAt(20));
// ""
console.log("" === "");
// true
console.log(apple.charAt(20) === "");
// true

let words1 = ["hello", "leetcode"];

let order1 = "hlabcdefgijkmnopqrstuvwxyz";

let words2 = ["word", "world", "row"];

let order2 = "worldabcefghijkmnpqstuvxyz";

let words3 = ["apple", "app"];

let order3 = "abcdefghijklmnopqrstuvwxyz";

function alienAlphabet(array, order) {
  let chars = new Map();
  order = order.split("");
  order.unshift("");
  let i = 0;

  for (; i < order.length; i++) {
    let key = order[i];
    chars.set(key, i);
  }

  let j = 0;

  for (; j < array.length - 1; j++) {
    let word1 = array[j];
    let word2 = array[j + 1];
    let a = 0;
    for (; a < array[j].length; a++) {
      if (chars.get(word1.charAt(a)) < chars.get(word2.charAt(a))) {
        break;
      }
      if (chars.get(word1.charAt(a)) > chars.get(word2.charAt(a))) {
        return false;
      }
    }
  }
  return true;
}

console.log(alienAlphabet(words1, order1));
// true
console.log(alienAlphabet(words2, order2));
// false
console.log(alienAlphabet(words3, order3));
// false
console.log("------------------------------------------");
console.log("-----------------------------------------");

let words5 = ["hello", "leetcode"];

let order5 = "hlabcdefgijkmnopqrstuvwxyz";

function alienAlphabet2(array, order) {
  let chars = new Map();
  // Map so each letter of alphabet can have a value
  order = order.split("");
  // converting string to array of single characters from string
  order.unshift("");
  // must have value in for empty string, as two words which
  // same letter by letter until one ends, in which case an empty space
  // is considered alphabetically earlier

  // then set the characters to a map with an increasing numerical value
  let i = 0;
  for (; i < order.length; i++) {
    let key = order[i];
    chars.set(key, i);
  }

  let j = 0;
  for (; j < array.length - 1; j++) {
    // j is will interate until the length of the array minus one
    // because since we only need to evaluate elements which have
    // another element after them in array, so we never need to j
    // to get to the last index of the array, it will error otherwise
    // as word2 would be undefined
    let word1 = array[j];
    // currently iterated element
    let word2 = array[j + 1];
    // element one spot up in the array
    let a = 0;
    for (; a < word1.length; a++) {
      if (chars.get(word1.charAt(a)) < chars.get(word2.charAt(a))) {
        break;
      }
      if (chars.get(word1.charAt(a)) > chars.get(word2.charAt(a))) {
        return false;
      }
    }
  }
  return true;
}

console.log(alienAlphabet2(words5, order5));
// true
console.log("-----------------------------------------------");
console.log("------------------------------------------------");

let numsGreater1 = [8, 1, 2, 2, 3];

let numsGreater2 = [6, 5, 4, 8];

let numsGreater3 = [7, 7, 7, 7];

function numsGreaterThanProto(array) {
  let array2 = [...array];
  array.sort((a, b) => (a > b ? 1 : -1));
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    let key = array[i];
    if (!numsMap.has(key)) {
      numsMap.set(key, i);
    }
  }

  let rArray = [];
  let j = 0;

  for (; j < array2.length; j++) {
    let key = array2[j];
    rArray.push(numsMap.get(key));
  }
  return rArray;
}

console.log(numsGreaterThanProto(numsGreater1));
// [4, 0, 1, 1, 3]
console.log(numsGreaterThanProto(numsGreater2));
// [2, 1, 0, 3]
console.log(numsGreaterThanProto(numsGreater3));
// [0, 0, 0, 0]
console.log("--------------------------------------------------");
console.log("----------------------------------------------");

class Robots19 {
  constructor(message = "Robots19!!!") {
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
    let rArray = new Robots19();
    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let newArray = new Robots19();
    let rElement = this.container[0];
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Robots19();
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
    let newArray = new Robots19();
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement ?? "array does not have that index";
  }

  insert(element, index) {
    let newArray = new Robots19();
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
}

const robots44 = new Robots19("Robo!!!");
console.log(robots44.push("Hank-44"));
// 1
console.log(robots44.push("Warren-21"));
// 2
console.log(robots44.push("Mellon-Tech"));
// 3
console.log(robots44.push("Eggplant-Head"));
// 4
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
const roboClone44 = robots44.slice(2, 4);

console.log(roboClone44.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head}
console.log(roboClone44.length);
// 2
console.log(roboClone44.message);
// Robots19!!!
console.log(robots44.shift());
// Hank-44
console.log(robots44.container);
// {0: 'Warren-21', 1: 'Mellon-Tech', 2: 'Eggplant-Head'}
console.log(robots44.length);
// 3
console.log(robots44.unshift("Hank-44", "Bender", "Test"));
// 6
console.log(robots44.container);
// {0: 'Hank-44', 1: 'Bender', 2: 'Test', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(robots44.length);
// 6
console.log(robots44.delete(2));
// Test
console.log(robots44.delete(12));
// array does not have that index
console.log(robots44.container);
// {0: 'Hank-44', 1: 'Bender', 2: 'Warren-21', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(robots44.length);
// 5
console.log(robots44.insert("Robot Jones", 2));
// {0: 'Hank-44', 1: 'Bender', 2: 'Robot Jones', 3: 'Warren-21', 4: 'Mellon-Tech', 5: 'Eggplant-Head'}
console.log(robots44.length);
// 6
console.log("-----------------------------------------------");
console.log("---------------------------------------------");

const RisingDough = {};

RisingDough["name"] = "Rising Dough";

RisingDough["model"] = "Randall-94";

RisingDough["employer"] = "Fiz-Mart";

RisingDough["favoriteFood"] = "Pizza";

RisingDough["favoriteSoda"] = "Pickerel Cola";

RisingDough["friends"] = [
  "Beezer",
  "Chipper",
  "Bodhi",
  "Brick",
  "Ziggy",
  "Yugo Lancing",
  "Brooke Nevins",
  "Brayden",
  "Mellon-Tech",
  "Eggplant-Head",
  "Rollo"
];

console.log(RisingDough.name);
// Rising Dough
console.log(RisingDough.model);
// Randall-94
console.log(RisingDough.employer);
// Fiz-Mart
console.log(RisingDough.favoriteFood);
// Pizza
console.log(RisingDough.favoriteSoda);
// Pickerel Cola
console.log(RisingDough.friends.length);
// 11

const {
  name: RisingDoughName,
  model,
  employer,
  favoriteFood,
  favoriteSoda,
  friends: RisingDoughFriends
} = RisingDough;

console.log(RisingDoughName);
// Rising Dough
console.log(model);
// Randall-94
console.log(employer);
// Fiz-Mart
console.log(favoriteFood);
// Pizza
console.log("Bodhi!!!");
// Bodhi!!!
console.log(favoriteSoda);
// Pickerel Cola
console.log(RisingDoughFriends.length);
// 11
console.log("--------------------------------------------------");
console.log("-------------------------------------------");

class PrimeMap {
  constructor(message = "PrimeMap!") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  set(key, value) {
    this.container[key] = value;
    this.size++;
    return this.size;
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
    return this.size;
  }
}

const charsMap = new PrimeMap("charsMap!");

charsMap.set("a", 1);
charsMap.set("b", 2);
charsMap.set("c", 3);
charsMap.set("d", 4);
charsMap.set("e", 5);
charsMap.set("f", 6);
charsMap.set("g", 7);
charsMap.set("h", 8);
charsMap.set("i", 9);

console.log(charsMap.get("a"));
// 1
console.log(charsMap.get("b"));
// 2

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

console.log(charsMap.get("z"));
// 26
console.log(charsMap.get("u"));
// 21

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

console.log(charsMap.get("A"));
// 27
console.log(charsMap.get("O"));
// 41

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

console.log(charsMap.get("U"));
// 47

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
charsMap.set("=", 77);
charsMap.set("+", 78);
charsMap.set("[", 79);
charsMap.set("{", 80);
charsMap.set("]", 81);
charsMap.set("}", 82);
charsMap.set("|", 83);
charsMap.set(";", 84);
charsMap.set(":", 85);
charsMap.set("'", 86);
charsMap.set("<", 87);
charsMap.set(",", 88);
charsMap.set(">", 89);
charsMap.set(".", 90);
charsMap.set("/", 91);
charsMap.set("?", 92);

console.log(charsMap.get("["));
// 79

class RoboHash {
  constructor(message = "RoboHash!") {
    this.container = [];
    this.size = 0;
    this.message = message;
  }

  hash(key) {
    if (typeof key !== "string") {
      key = key.toString();
    }
    let newKey = "";
    let i = 0;

    for (; i < key.length; i++) {
      let char = key.charAt(i);
      char = charsMap.get(char);
      newKey = newKey.concat(char);
    }
    return parseInt(newKey);
  }

  set(key, value) {
    key = this.hash(key);
    this.container[key] = value;
    this.size++;
    return this.size;
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
    let rValue = this.container[key];
    delete this.container[key];
    this.size--;
    return rValue;
  }
}

const RoboMap21 = new RoboHash("RoboMap21!");

console.log(RoboMap21.hash("Beezer"));
// 285526518
console.log(RoboMap21.hash("Chipper"));
// 29891616518
console.log(RoboMap21.hash("Bodhi"));
// 2815489
console.log(RoboMap21.set(1, "Hank-44"));
// 1
console.log(RoboMap21.set(2, "Warren-21"));
// 2
console.log(RoboMap21.set(3, "Mellon-Tech"));
// 3
console.log(RoboMap21.set(4, "Eggplant-Head"));
// 4
console.log(RoboMap21.size);
// 4
console.log(RoboMap21.has(1));
// true
console.log(RoboMap21.has(2));
// true
console.log(RoboMap21.has(3));
// true
console.log(RoboMap21.has(4));
// true
console.log(RoboMap21.has(5));
// false
console.log(RoboMap21.get(1));
// Hank-44
console.log(RoboMap21.get(2));
// Warren-21
console.log(RoboMap21.get(3));
// Mellon-Tech
console.log(RoboMap21.get(4));
// Eggplant-Head
console.log(RoboMap21.delete(3));
// Mellon-Tech
console.log(RoboMap21.get(3));
// undefined
console.log(RoboMap21.size);
// 3
console.log(RoboMap21.set(3, "Mellon-Tech"));
// 4
console.log(RoboMap21.get(3));
// Mellon-Tech
console.log(RoboMap21.message);
// RoboMap21!
