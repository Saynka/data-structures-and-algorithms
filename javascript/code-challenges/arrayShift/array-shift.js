'use strict';

let arry = [1,2,3,4]
let position = 5;

function garbage (arry, position){
  let half = Math.ceil(arry.length / 2);
  let array = [];
  console.log(arry)
  for(let i = 0; i < arry.length; i++){
    console.log(i, half);
    if (i < half) {
      array.push(arry[i])
  } else if (i === half) {
    array.push(position);
  } else if ( i > half) {
    array.push(arry[i]);
  }
}
  // console.log(half);
};

garbage(arry, position);

module.exports = garbage;
