console.log("Hello World");

let result = "(ab(c(defg)hi(jk)))";

let result2 = "ab(cd(efg(h)";

let result3 = "ab)cd)efg)h)";

let validParentheses = string => {
  let openSet = new Set();
  let closeSet = new Set();

  let count1 = 0;
  let count2 = 0;

  let i = 0;

  for (; i < string.length; i++) {
    if (string.charAt(i) == "(") {
      count1++;
    }
    if (string.charAt(i) == ")") {
      count2++;
    }
    if (count1 < count2) {
      return false;
    }
  }

  if (count1 == 0 && count2 == 0) {
    return false;
  }

  if (count1 == count2) {
    return true;
  }

  if (count1 !== count2) {
    return false;
  }
};

console.log(validParentheses(result));
// true
console.log(validParentheses(result2));
// false
console.log(validParentheses(result3));
// false
console.log(validParentheses("a(b)c)((a)aaa"));
// false
console.log(validParentheses("test"));

// a)b)c(d(
// a(b)c)((a)aaa
// (a()
//

// )
// ( openCount++
// ) closeCount++
// if (openCount < closeCount) return false;

console.log(0 == 0);
console.log(0 === 0);
