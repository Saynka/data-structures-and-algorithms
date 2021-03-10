'use strict';

const LinkedList = require('./link/linked-list.js');

let ll = new LinkedList();

ll.append('first');
ll.append('second');
ll.includes('first');
ll.insertFirst('first');
ll.insertLast('second')
ll.insertAt('254', 3);
ll.append('dogs');


console.log(ll);

module.exports = LinkedList;
