'use strict';


const Node = require('../node.js');
const { BinaryTree } = require('../tree.js');
const { BinarySearchTree } = require('../search.js');
const printCommon = require('../hashTree.js');

describe('Hashtables', () => {

  it('should test the 2 trees ', () => {

    const tree1 = new BinarySearchTree();
    const tree2 = new BinarySearchTree();
    tree1.add(1);
    tree1.add(4);
    tree1.add(5);
    tree1.add(6);
    tree1.add(7);
    tree1.add(9);

    tree2.add(4);
    tree2.add(8);
    tree2.add(7);
    tree2.add(6);
    tree2.add(1);


    printCommon(tree1, tree2);
    console.log(printCommon(tree1, tree2));

  });


});
