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
