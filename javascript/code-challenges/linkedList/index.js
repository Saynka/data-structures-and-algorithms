'use strict';

const LinkedUp = require('./link/linked-list.js');

let linkedList = new LinkedUp();

linkedList.insert('1');
linkedList.insertFirst('100');
linkedList.insertAt('dogs');
linkedList.append('4');
linkedList.append('5');
linkedList.append('6');
linkedList.append('7');
linkedList.append('8');
linkedList.append('9');
linkedList.append('10');
linkedList.append(null);

console.log(linkedList);

// module.exports = linkedList;
