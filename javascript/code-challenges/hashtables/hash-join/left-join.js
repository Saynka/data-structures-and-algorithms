'use strict';

const LinkedList = require('./link.js');

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill();
  }


  hash(key) {
    let sumOfKeyLetters = key.split('').reduce((acc, val) => {
      let cc = val.charCodeAt(0);
      let num = acc + cc;
      return num;
    }, 0);

    let hash = sumOfKeyLetters * 599 % this.size;

    return hash;
  }

  // Add a key/value pair to the HT
  add(key, value) {
    let hash = this.hash(key); // should return a number that is an index of this.map

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let entry = { [key]: value }; // { [key]: value } this is what it should be

    this.map[hash].append(entry);

  }

  // Return the value for the key from the HT
  get(key) {
    // 1: hash the key
    let hash = this.hash(key);
    // 2: Get the value of this.map[hash]
    if (this.map[hash]) {
      let current = this.map[hash].head;
      // 3: Traverse the linked list and find the actual one (because ... collisions)
      while (current) {
        if (current.value[key]) {
          // 4: Return what we find
          return current.value[key];
        }
        current = current.next;
      }
    }
    return null;
  }

  // return a bool if it's in the HT
  contains(key) {
    // 1: hash the key
    let hash = this.hash(key);
    // 2: Get the value of this.map[hash]
    if (this.map[hash]) {
      let current = this.map[hash].head;
      // 3: Traverse the linked list and find the actual one (because ... collisions)
      while (current) {
        if (current.value[key])
        // 4: Return what we find
        { return true; }
        current = current.next;
      }
    }
    return false;

  }

  find(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      return this.map[hash].head;
    } else {
      return null;
    }
  }

  left(left, right) {
    let keys = left;
    console.log(keys);
    let join = keys.map(key => {
      let arry = [key];
      arry.push(left.get(key));
      arry.push(right.contains(key) ? right.get(key) : null);
      return arry;
    });
    return join;
  }

}

module.exports = HashMap;
