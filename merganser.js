console.log("Hello Oa");

class Array21 {
  constructor(message = "Array 21!") {
    this.container = {};
    this.length = 0;
    this.message = message;
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

  splice(index1, index2) {
    let cloneArray = new Array21();
    for (; index1 < index2; index1++) {
      cloneArray.push(this.container[index1]);
    }
    return cloneArray;
  }

  shift() {
    let rElement = this.container[0];
    let newArray = new Array21();
    let i = 1;
    for (; i < this.length; i++) {
      newArray.push(this.container[i]);
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return rElement;
  }

  unshift(args) {
    let newArray = new Array21();
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
    return newArray.container;
  }

  delete(index) {
    let newArray = new Array21();
    let i = 0;
    for (; i < this.length; i++) {
      if (i !== index) {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.container;
  }

  insert(element, index) {
    let newArray = new Array21();
    let i = 0;
    for (; i < this.length; i++) {
      if (i === index) {
        newArray.push(element);
        newArray.push(this.container[i]);
      } else {
        newArray.push(this.container[i]);
      }
    }
    this.container = newArray.container;
    this.length = newArray.length;
    return this.container;
  }

  reverse() {
    let temp = 0;
    let i = 0;
    let j = this.length - 1;
    for (; i < j; i++, j--) {
      temp = this.container[i];
      this.container[i] = this.container[j];
      this.container[j] = temp;
    }
    return this.container;
  }

  randomize() {
    let temp = 0;
    let i = 0;
    let j = 0;
    for (; i < this.length; i++) {
      j = Math.floor(Math.random() * this.length);
      temp = this.container[i];
      this.container[i] = this.container[j];
      this.container[j] = temp;
    }
    return this.container;
  }
}

const robots = new Array21("Robots Array");

console.log(robots.push("Hank-44"));
// 1
console.log(robots.push("Warren-21"));
// 2
console.log(robots.push("Mellon-Tech"));
// 3
console.log(robots.push("Eggplant-Head"));
// 4
console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.container[2]);
// Mellon-Tech
console.log(robots.container[0]);
// Hank-44
console.log(robots.push("Bender"));
// 5
console.log(robots.pop());
// Bender
console.log(robots.length);
// 4
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
const robots2 = robots.splice(0, 2);

console.log(robots2.container);
// {0: 'Hank-44', 1: 'Warren-21'}
console.log(robots2.length);
// 2
console.log(robots2.container[0]);
// Hank-44
console.log(robots2.shift());
// Hank-44
console.log(robots2.container);
// {0: 'Warren-21'}
console.log(robots2.unshift("Hank-44", "Mellon-Tech", "Eggplant-Head"));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
let numTwo = 2;
console.log(numTwo.name);
// undefined
console.log(robots2.delete(2));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Warren-21'}
console.log(robots2.length);
// 3
console.log(robots2.insert("Eggplant-Head", 2));
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
console.log(robots2.length);
// 4
console.log(robots2.container);
// {0: 'Hank-44', 1: 'Mellon-Tech', 2: 'Eggplant-Head', 3: 'Warren-21'}
console.log(robots2.reverse());
// {0: 'Warren-21', 1: 'Eggplant-Head', 2: 'Mellon-Tech', 3: 'Hank-44'}
console.log(robots2.randomize());
// it works!!!
