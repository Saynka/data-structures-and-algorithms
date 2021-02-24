'use strict';

const shift = require('../array-shift.js');

describe('Array Shift', () => {

  it('should add a new value to array', () => {
    let myArray = [2,4,6,8];
    let expected = [2,4,5,6,8];
    let newArray = shift(myArray, 5);
    expect(newArray).toEqual(expected);
  });

});