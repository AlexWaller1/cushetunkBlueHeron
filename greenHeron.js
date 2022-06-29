console.log("Hello Oa");

class Array22 {
  constructor() {
    this.container = {};
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    return this.length++;
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
