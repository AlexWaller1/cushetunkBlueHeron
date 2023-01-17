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
