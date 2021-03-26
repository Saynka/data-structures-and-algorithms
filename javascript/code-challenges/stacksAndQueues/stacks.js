'use strict';

const Node = require('./node.js');


class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  isEmpty() {
    if (this.head === null) {
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

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     if (this.head === null) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   peek() {
//     return this.top;
//   }


//   push(value) {
//     let node = new Node(value);
//     if (!this.null) {
//       this.first = node;
//       this.last = node;
//     } else {
//       let temp = this.first;
//       this.first = node;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }

//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }