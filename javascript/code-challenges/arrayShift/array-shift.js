'use strict';

let a = [2,4,6,8];
let b = [4,8,15,23,42];
let c = 5

const shift = (a, b) => { 
    return a[a.length / 2] + [b] + a[a.length /2]
}

module.exports = shift;
