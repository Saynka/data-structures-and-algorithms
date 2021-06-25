'use strict';

function left(left, right) {
  let keys = left.keys;
  console.log(keys);
  let join = keys.map(key => {
    let arry = [key];
    arry.push(left.get(key));
    arry.push(right.contains(key) ? right.get(key) : null);
    return arry;
  });
  return join;
}

module.exports = left;
