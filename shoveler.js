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
