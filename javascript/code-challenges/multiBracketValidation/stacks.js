'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  // push to the top of the stack
  push(item) {
    this.storage.push(item);
    this.top = item;
  }

  // pop off the top of the stack
  pop() {
    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
  }

  // show me the top of the stack
  peek() {
    return this.top;
  }
}

module.exports = Stack;