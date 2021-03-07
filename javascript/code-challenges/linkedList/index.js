'use strict';

const Linked = require('./link/linked-list.js');

let LinkedList = new Linked();

LinkedList.append('1');
LinkedList.append('2');
LinkedList.append('3');
LinkedList.append('4');
LinkedList.append('5');
LinkedList.append('6');
LinkedList.append('7');
LinkedList.append('8');
LinkedList.append('9');
LinkedList.append('10');
LinkedList.append();

console.log(LinkedList);