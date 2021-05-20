'use strict';

const inserstionSort = require('../insertion.js');

describe('should test insertion arrays', () => {

  it('should test inserstion sort', () => {
    let inputArr = [5, 2, 4, 6, 1, 3];
    inserstionSort(inputArr);
    expect(inputArr).toEqual([1, 2, 3, 4, 5, 6]);
    console.log(inputArr);
  });

  it('should just double check insertion array', () => {
    let inputArr = [16, 2, 33, 0, 12, 6];
    inserstionSort(inputArr);
    expect(inputArr).toEqual([0, 2, 6, 12, 16, 33]);
    console.log(inputArr);
  });

});


