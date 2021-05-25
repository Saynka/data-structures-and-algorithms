'use strict';

const { merge, mergeSort } = require('../merge.js');

describe('it should test sort method', () => {

  it('tests merge/merge sort', () => {
    let arr = [4, 8, 7, 2, 11, 1, 3];
    // mergeSort(arr);
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7, 8, 11]);
    console.log(arr);
  });

});
