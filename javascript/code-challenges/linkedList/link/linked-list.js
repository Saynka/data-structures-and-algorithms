'use strict';

// const { LinkedList } = require('../index.js');
// pull in the Node Class -> this will give us the ability
// to instantiate (add) new nodes to our linked list
const Node = require('./node.js');

class LinkedUp {
  constructor() {
    this.head = null;
    this.size = 0;
  }



  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  insertFirst(value) {
    let nodes = this.head;
    this.head = new Node(value, this.head);
    this.head.next = nodes;
    this.size++;
  }


  append(value) {
    let node = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  includes(value) {
    if (!this.head) {
      return false;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let string = '';
    let current = this.head;
    if (!current) {
      return 'NULL';
    }
    while (current) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    return string += `{Null}`;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      // previous.next = current.next;
    }

    this.size--;
  }

  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(value);
      return;
    }
    const node = new Node(value);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  insertLast(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  kthFromTheEnd(k) {
    // let node = new Node(value);
    let current = this.head;
    let index = 0;
    while (current) {
      index = index + 1;
      current = current.next;
    } if (k <= 0) {
      return;
    }
    for (let i = 0; i < k - 1; i++) {
      if (!current) {
        return;
      }
      while (current.next) {
        return current.value;
      }
    }
  }

}

module.exports = LinkedUp;
