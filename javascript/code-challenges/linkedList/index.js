'use strict';

const LinkedUp = require('./link/linked-list.js');

let ll = new LinkedUp();

ll.append('first');
ll.append('second');
ll.includes('first');
ll.isEmpty('');
ll.insertAt('254', 3);
ll.append('dogs');


console.log(ll);

// module.exports = ll;
