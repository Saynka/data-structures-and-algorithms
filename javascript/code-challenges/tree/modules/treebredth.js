'use strict';

const Node = require('./node.js');
const { BinarySearchTree } = require('../modules/binarysearch.js');

class BreadthFirstt extends BinarySearchTree {

  breadth() {
    if (!this.root) {
      return 'Empty';
    }
    // make a queue array
    let queue = [];
    let path = [];
    // populate it with the node that will be the root of your search
    queue.push(this.root);

    // search the queue until it is empty
    while (queue.length > 0) {
      // assign the top of the queue to variable currentNode
      let currentNode = queue.shift();
      path.push(currentNode.value);

      // if currentNode is the node we're searching for, break & alert
      // if (currentNode.value === searchValue) {
      //   return path;
      // }

      // if currentNode has a left child node, add it to the queue.
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      // if currentNode has a right child node, add it to the queue.
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      // remove the currentNode from the queue.
    }
    return path;
  }

}

module.exports = { BreadthFirstt };

