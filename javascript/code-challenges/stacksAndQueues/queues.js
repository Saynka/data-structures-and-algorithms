'use strict';
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    // push the item to an array (storage mechanism)
    this.storage.push(item);

    // if we just added the first item, set it as the front and the rear
    if (this.storage.length == 1) {
      this.front = item;
      this.rear = item;

      // if we added something other than the first item, it automatically gets added to the rear (FIFO)
    } else {
      this.rear = item;
    }
  }

  dequeue() {
    let item = this.storage.shift(); // grab the first item in the array to dequeue (FIFO)

    // if we removed the last item in the queue, reset the front/rear to null
    if (this.storage.length === 0) {
      this.front = null;
      this.rear = null;

      // otherwise, set the front and rear to their actual positions
    } else {
      this.front = this.storage[0]; // front is always the new first item in the array after the shift of our storage mechansim
      this.rear = this.storage[this.storage.length - 1]; // grab the index value of the last item in the array
    }

    return item; // give me back my dequeued item
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Queue;

// class Queue {
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

//   enqueue(value) {
//     let node = new Node(value);
//     if (!this.first) {
//       this.first = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }
//     return ++this.size;
//   }

//   dequeue() {
//     if (!this.first) return null;
//     const temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

