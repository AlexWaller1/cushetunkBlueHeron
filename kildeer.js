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
