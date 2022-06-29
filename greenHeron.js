console.log("Hello Oa");

class Array22 {
  constructor() {
    this.container = {};
    this.length = 0;
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
      if (this.container[i] == element) {
        return i;
      }
    }
    return -1;
  }

  includes(element) {
    let i = 0;

    for (; i < this.length; i++) {
      if (this.container[i] == element) {
        return true;
      }
    }
    return false;
  }

  slice(index1, index2) {
    let rArray = new Array22();

    for (; index1 < index2; index1++) {
      rArray.push(this.container[index1]);
    }
    return rArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array22();
    let i = 1;

    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array22();
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
    let newArray = new Array22();
    let i = 0;

    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }

    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }
}

const robots = new Array22();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.push("Bender"));
// 5
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Bender'}
console.log(robots.pop());
// Bender
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
let roboClone1 = robots.slice(1, 3);

console.log(roboClone1.container);
// {0: 'Warren-21', 1: 'Mellon-Tech'}
console.log(roboClone1.length);
// 2
console.log(roboClone1.shift());
// Warren-21
console.log(roboClone1.container);
// {0: 'Mellon-Tech'}
console.log(roboClone1.length);
// 1
console.log(roboClone1.unshift("Hank-44", "Warren-21", "Bender"));
// 4
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech'}
console.log(roboClone1.push("Test 1"));
// 5
console.log(roboClone1.push("Eggplant-Head"));
// 6
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Test 1', 5: 'Eggplant-Head'}
console.log(roboClone1.length);
// 6
console.log(roboClone1.delete(4));
// Test 1
console.log(roboClone1.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Bender', 3: 'Mellon-Tech', 4: 'Eggplant-Head'}
console.log(roboClone1.length);
// 5
