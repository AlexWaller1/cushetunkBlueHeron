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
}
