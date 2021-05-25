'use strict';

const { partition, quickSortIterative, quickSortRecursive } = require('../quicksort.js');

describe('it should test sort method', () => {

  it('tests quick sort', () => {
    let arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
    quickSortIterative(arr);
    expect(arr).toEqual([-4, -2, 0, 1, 2, 4, 5, 6, 7]);
    console.log(arr);
  });

});
