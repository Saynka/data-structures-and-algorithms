'use strict';

const SS = require('../stacks.js');

describe('stacks', () => {
  it('should check to see if empty', () => {
    let empty = new SS();

    empty.push(empty);
    expect(empty.head.value).toEqual(empty);

    console.log(empty);

  });

})