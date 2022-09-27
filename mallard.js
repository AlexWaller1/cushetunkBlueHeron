const collect = require("collect.js");

const moment = require("moment");

console.log("mallard.js!");

const jan29 = moment([2001, 01, 29]);

console.log(jan29);

const may19 = moment([2000, 05, 19]);

console.log(may19);

const feb7 = moment([2016, 02, 07]);

console.log(feb7);

let diff1 = jan29.diff(may19, "days");

console.log(diff1);

const jan29A = moment("01-29-2001", "MM-DD-YYYY");

console.log(jan29A);

const may19A = moment("05-19-2000", "MM-DD-YYYY");

console.log(may19A);

const feb7A = moment("02-07-2016", "MM-DD-YYYY");

console.log(feb7A);

let diff2 = jan29A.diff(may19A, "days");

console.log(diff2);
// 255
