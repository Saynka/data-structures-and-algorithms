'use strict';

// const { linkedList } = require('../index.js');
// pull in the Node Class -> this will give us the ability
// to instantiate (add) new nodes to our linked list
const Node = require('./node.js');

class LinkedUp {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return this;
  }


  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;

    if (!this.head) {
      this.head = data;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = data;
    }
    return this;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = data;
    }
    return this;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = data;
    }
    return this;
  }

  insert 
}




module.exports = LinkedUp;