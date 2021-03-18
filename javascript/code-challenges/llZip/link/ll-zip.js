'use strict';

const Node = require('./node.js');


class LinkLists {
  constructor() {
    this.head = null;
    this.size = 0;
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

  llZip(ll1, ll2) {
    let list = new LinkLists();
    let current1 = ll1.head;
    let size1 = 0;
    while (current1) {
      size1 += 1;
      current1 = current1.next;
    }
    let current2 = ll2.head;
    let size2 = 0;
    while (current2) {
      size2 += 1;
      current2 = current2.next;
    }
    ll1.current = ll1.head;
    ll2.current = ll2.head;
    if (size1 >= size2) {
      list.head = ll1.head;
      list.current = list.head;
      ll1.current = ll1.current.next;

      while (ll1.current) {
        if (ll2.current) {
          list.insertLast(list.current.value, ll2.current.value);
          ll2.current = ll2.current.next;
          list.current = list.current.next;
        }
        if (ll1.current) {
          list.insertLast(list.current.value, ll1.current.value);
          ll1.current = ll1.current.next;
          list.current = list.current.next;
        }
      }
    } else {
      list.head = ll2.head;
      list.current = list.head;
      ll2.current = ll2.current.next;

      while (ll2.current) {
        if (ll1.current) {
          list.insertLast(list.current.value, ll1.current.value);
          ll1.current = ll1.current.next;
          list.current = list.current.next;
        }
        if (ll2.current) {
          list.insertLast(list.current.value, ll2.current.value);
          ll2.current = ll2.current.next;
          list.current = list.current.next;
        }
      }
    }
    return list.head.value;
  }
}


module.exports = LinkLists;
