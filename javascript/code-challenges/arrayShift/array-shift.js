'use strict';

let arry = [2,4,6,8];
let position = 5;

function shift (arry, position){
  let half = Math.ceil(arry.length / 2) -1;
  let array = [];
  // console.log(arry)
  for(let i = 0; i < arry.length; i++){
    // console.log(i, half);
    if (i < half) {
      array.push(arry[i])
  } else if (i === half) {
      // console.log(position)
    array.push(arry[i])
    array.push(position);
    // console.log(array);
  } else if ( i > half) {
    array.push(arry[i]);
  }
}
// console.log(array);
return array;

  // console.log(half);
};

// shift(arry, position);

module.exports = shift;
