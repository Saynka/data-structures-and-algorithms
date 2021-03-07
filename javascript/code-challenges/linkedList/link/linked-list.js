'use strict';

// const { Linkes } = require('../index.js');
// pull in the Node Class -> this will give us the ability
// to instantiate (add) new nodes to our linked list
const Node = require('./node.js');

class LinkedUP {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
 
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return this;
  }
}

module.exports = LinkedUP;