'use strict';

const reverse = require('./array-shift.js');

describe('Array Shift', () => {

  it('should add a new value to array', () => {
    let myArray = ([2,4,6,8], 5);
    let expected = [2,4,5,6,8];
    shift(myArray);
    expect(myArray).toEqual(expected);
  });

});