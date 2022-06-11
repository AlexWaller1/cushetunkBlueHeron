console.log("Hello World");

let result = "(ab(c(defg)hi(jk)))";

let result2 = "ab(cd(efg(h)";

let result3 = "ab)cd)efg)h)";

let validParentheses = string => {
  let openSet = new Set();
  let closeSet = new Set();

  let count1 = 0; // (
  let count2 = 0; // )
  // if (count1 < count2) return false
  let count3 = 0; // [
  let count4 = 0; // ]
  // if (count3 < count4) return false
  let count5 = 0; // {
  let count6 = 0; // }
  // if (count5 < count6) return false
  // [(])

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

console.log("hello");

function validParentheses5(string) {
  let charArray = [];
  let i = 0;

  for (; i < string.length; i++) {
    let char = string.charAt(i);
    if (char == "(" || char == ")") {
      charArray.push(char);
    }
    if (char == "[" || char == "]") {
      charArray.push(char);
    }
    if (char == "{" || char == "}") {
      charArray.push(char);
    }
  }

  if (charArray.length % 2 !== 0) {
    return false;
  }

  if (charArray[0] == "]" || charArray[0] == ")" || charArray[0] == "}") {
    return false;
  }

  let last = charArray.length - 1;

  if (
    charArray[last] == "[" ||
    charArray[last] == "{" ||
    charArray[last] == "("
  ) {
    return false;
  }

  let openMap = new Map();
  openMap.set("(", 1);
  openMap.set("[", 2);
  openMap.set("{", 3);

  let closeMap = new Map();
  closeMap.set(")", 1);
  closeMap.set("]", 2);
  closeMap.set("}", 3);

  let openArr = [];
  let currentOpen = openArr[openArr.length - 1];
  let currentClose = "";
  let count1 = 0;
  let count2 = 0;
  let j = 0;
  for (; j < charArray.length; j++) {
    let key = charArray[j];
    if (openMap.has(key)) {
      openArr.push(key);
      currentOpen = openArr[openArr.length - 1];
      count1++;
    }
    if (closeMap.has(key)) {
      currentClose = key;
      count2++;
      if (openMap.get(currentOpen) == closeMap.get(currentClose)) {
        openArr.pop();
        currentOpen = openArr[openArr.length - 1];
      } else {
        return false;
      }
    }
  }

  if (count1 !== count2) {
    return false;
  }
  return true;
}

console.log(validParentheses5("()"));
// true
console.log(validParentheses5("{[]}"));
// true

// console.log(validTwo("[a(s]k)"));

//---------------------------------------------------
//-------------------------------------------------

let string1 = "abcdeabcdefc";

let string2 = "abccdeaabbcddef";

let allStringCombos = string => {
  let rArray = [];

  let i = 0;
  for (; i < string.length; i++) {
    let subString = string.charAt(i);
    rArray.push(subString);
    let j = i + 1;
    for (; j < string.length; j++) {
      subString = subString.concat(string.charAt(j));
      rArray.push(subString);
    }
  }
  return rArray;
};

let repeatBoolean = string => {
  let charSet = new Set();

  let i = 0;
  for (; i < string.length; i++) {
    let char = string.charAt(i);
    if (charSet.has(char)) {
      return false;
    } else {
      charSet.add(char);
    }
  }
  return true;
};

// console.log(repeatBoolean("hello"));
// // false
// console.log(repeatBoolean("Bodhi"));
// true

let noRepeatingChar = string => {
  let subStrings = allStringCombos(string);

  let i = 0;
  let noRepeat = [];

  for (; i < subStrings.length; i++) {
    if (repeatBoolean(subStrings[i])) {
      noRepeat.push(subStrings[i]);
    }
  }

  let max = noRepeat[0].length;
  let rString = "";
  let r = 0;

  for (; r < noRepeat.length; r++) {
    if (noRepeat[r].length > max) {
      max = noRepeat[r].length;
      rString = noRepeat[r];
    }
  }
  return rString;
};

console.log(noRepeatingChar("benche"));
// bench
console.log(noRepeatingChar("abcdeabcdefc"));
// abcdef
console.log(noRepeatingChar(string2));
// cdea
