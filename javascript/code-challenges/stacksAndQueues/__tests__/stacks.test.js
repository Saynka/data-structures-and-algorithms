'use strict';

const SS = require('../stacks.js');

describe('stacks testing', () => {
  ////// isEmpty test
  it('should return boolean of content status', () => {
    let stack = new SS();
    expect(stack.isEmpty()).toEqual(true);
  });

  ////// Push test
  it('add a value to the top of a stack', () => {
    let stack = new SS();
    stack.push(1);
    expect(stack.storage).toEqual([1]);
  });

  ////// pop test
  it('removes a values from the top of a stack', () => {
    let stack = new SS();
    stack.push(1);
    expect(stack.storage.pop()).toEqual(1);
  });

  ////// Peek test
  it('should look at the front of the stack', () => {
    let stack = new SS();
    stack.push('a');
    expect(stack.peek()).toBe('a');
  });



});
