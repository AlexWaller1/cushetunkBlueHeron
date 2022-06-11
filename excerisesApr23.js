console.log("Hello Oa");

console.log(typeof null);
// object
console.log(typeof undefined);
// undefined
console.log(typeof { name: "Chipper" });
// object
console.log(
  typeof function x(x) {
    return x;
  }
);
// function

// is it an object?
// create a function to check whether a given
// parameter is an object or not

let isObject = input => {
  if (input == null) {
    return false;
  }
  if (typeof input == "object") {
    return true;
  }
  return false;
};

console.log(
  isObject(function add(x, y) {
    return x + y;
  })
);

console.log("------------------------------");
console.log("-----------------------------");

const generations = {
  1: { male: "test", female: "test 2" }
};

console.log(generations[1]["male"]);
// test
console.log(generations[1]["female"]);
// test 2
console.log(parseInt("-3"));

//---------------------------------------

let genChart = (num, string) => {
  let numString = "";
  if (num < 0) {
    numString = num.toString();
  } else {
    numString = num;
  }
  const familyTree = {
    "-3": { m: "great grandfather", f: "great grandmother" },
    "-2": { m: "grandfather", f: "grandmother" },
    "-1": { m: "father", f: "mother" },
    0: { m: "me!", f: "me!" },
    1: { m: "son", f: "daughter" },
    2: { m: "grandson", f: "granddaughter" },
    3: { m: "great grandson", f: "great granddaughter" }
  };

  return familyTree[numString][string];
};

console.log(genChart(-3, "m"));
// great grandfather
console.log(genChart(1, "f"));
// daughter

console.log("------------------------------");
console.log("--------------------------------");

let testMap = new Map();

testMap.set(-1, "test");
testMap.set(-2, "test2");

console.log(testMap.get(-1));
// test
console.log(testMap.get(-2));
// test 2

let nums = [3, 2, 3];

let nums2 = [2, 2, 1, 1, 1, 2, 2];

let nums3 = [1, 2, 3, 3, 3, 3, 4, 5];

let nums4 = [1, 1, 2, 2, 2, 2, 2, 2, 3, 4];

let majorityElement = array => {
  let countMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    if (countMap.has(array[i])) {
      let value = countMap.get(array[i]);
      countMap.set(array[i], value + 1);
    } else {
      countMap.set(array[i], 1);
    }
  }

  let max = countMap.get(array[0]);
  let rElement = array[0];
  let j = 1;

  for (; j < array.length; j++) {
    if (countMap.get(array[j]) > max) {
      max = countMap.get(array[j]);
      rElement = array[j];
    }
  }
  return rElement;
};

console.log(majorityElement(nums2));
// 2
console.log(majorityElement(nums));
// 3
console.log(majorityElement(nums3));
// 3
console.log(majorityElement(nums4));
// 2

console.log("--------------------------------");
console.log("----------------------------");

let nums5 = [1, 2, 2, 1];

let nums6 = [2, 2];

let nums7 = [4, 9, 5];

let nums8 = [9, 4, 9, 8, 4];

let nums9 = [7, 9, 9];

let nums10 = [5, 6, 7, 8, 9];

let intersect = (array1, array2) => {
  let numsMap = new Map();

  let rArray = [];

  let i = 0;

  for (; i < array1.length; i++) {
    let key = array1[i];
    if (numsMap.has(key)) {
      let value = numsMap.get(key);
      numsMap.set(key, value + 1);
    } else {
      numsMap.set(key, 1);
    }
  }

  let j = 0;

  for (; j < array2.length; j++) {
    let key2 = array2[j];

    if (numsMap.get(key2) > 0 && numsMap.get(key2) != undefined) {
      rArray.push(key2);
      let value2 = numsMap.get(key2);
      numsMap.set(key2, value2 - 1);
    }
  }

  return rArray;
};

console.log(intersect(nums5, nums6));
// [2, 2]
console.log(intersect(nums7, nums8));

console.log("-----------------------------------------------------");
console.log("--------------------------------------------------");

let input1 = [8, 1, 2, 2, 3];

let input2 = [6, 5, 4, 8];

let input3 = [7, 7, 7, 7];

let smallerThanCurrent = array => {
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let j = 0;
    let count = 0;
    for (; j < array.length; j++) {
      if (array[i] > array[j]) {
        count++;
      }
      if (j == array.length - 1) {
        rArray.push(count);
      }
    }
  }
  return rArray;
};

console.log(smallerThanCurrent(input1));
// [4, 0, 1, 1, 3]
console.log(smallerThanCurrent(input2));
// [2, 1, 0, 3]
console.log(smallerThanCurrent(input3));
// [0, 0, 0, 0]

console.log("---------------------------------------------------------");
console.log("------------------------------------------------------");

let smallerThanCurrent2 = array => {
  let charsMap = new Map();
  let clone = [...array];
  let rArray = [];

  let sorted1 = array.sort((a, b) => a - b);

  let i = 0;

  for (; i < sorted1.length; i++) {
    let key = sorted1[i];
    if (!charsMap.has(key)) {
      charsMap.set(key, i);
    }
  }

  let j = 0;

  for (; j < clone.length; j++) {
    rArray.push(charsMap.get(clone[j]));
  }

  return rArray;
};

console.log(smallerThanCurrent2(input1));
// [4, 0, 1, 1, 3]
console.log(smallerThanCurrent2(input2));
// [2, 1, 0, 3]
console.log(smallerThanCurrent2(input3));
// [0, 0, 0, 0]

console.log("-------------------------------");
console.log("-----------------------------");

console.log("Hello Oa");

let sampleNums = [
  {
    id: 1,
    name: "Raymundo"
  },
  {
    id: 2,
    name: "Otto Rocket"
  },
  {
    id: 3,
    name: "Reggie Rocket"
  },
  {
    id: 4,
    name: "Twister Rodriguez"
  },
  {
    id: 5,
    name: "Sam Dullard"
  }
];

if ("water bottle" == "water bottle") {
  const rocketPower = sampleNums.filter(r1 => r1.id == 1);

  console.log(rocketPower);
}

console.log("Hammerhead");
// Hammerhead

const hammerHeadChars = [
  {
    name: "Hammerhead",
    species: "Hammerhead Shark",
    homePlanet: "Venice Sands 5",
    occupation: "Pickerel Cola Space Truck Driver"
  },
  {
    name: "Taylor",
    species: "Albatross",
    homePlanet: "Mariner Mists",
    occupation: "Pickerel Cola Space Truck Driver"
  },
  {
    id: 1
  }
];

const hammerHead = {
  name: "Hammerhead",
  species: "Hammerhead Shark",
  homePlanet: "Venice Sands 5",
  occupation: "Pickerel Cola Space Truck Driver"
};

let id1 = {
  id: 1
};

console.log(hammerHeadChars.includes(hammerHead));
// false
console.log(hammerHeadChars.includes(id1));
// false

console.log("Hello Oa");
// Hello Oa

let testNest1 = [1];

let testNest2 = [2];

let testNest3 = ["Bodhi"];

console.log(testNest3);
// ['Bodhi']
console.log(...testNest3);
// Bodhi

let objects2 = [
  {
    name: "element 1",
    quantity: 1
  },
  {
    name: "element 2",
    quantity: 1
  },
  {
    name: "element 3",
    quantity: 1
  },
  {
    name: "element 4",
    quantity: 1
  }
];

console.log(objects2.length);
// 4
console.log(objects2[0].quantity);
// 1
objects2[0].quantity = objects2[0].quantity + 1;

console.log(objects2[0].quantity);
// 2

const appetizers = [
  {
    id: 1,
    name: "Buffalo Wings"
  }
];

const wushuLizard = {
  name: "Wushu Lizard",
  homeCity: "Seoul",
  id: 1
};

let wushuLizard2 = wushuLizard;

console.log(wushuLizard2);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 1}

wushuLizard.id = 11;

console.log(wushuLizard);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 11}

console.log(wushuLizard2);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 11}

let wushuLizard3 = { ...wushuLizard };

console.log(wushuLizard3);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 11}

wushuLizard.id = 19;

console.log(wushuLizard);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 19}
console.log(wushuLizard2);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 19}
console.log(wushuLizard3);
// {name: 'Wushu Lizard', homeCity: 'Seoul', id: 11}
