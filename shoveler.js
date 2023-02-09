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
