'use strict';

const Queue = require('../queue-with-stacks.js');

describe('it should test enqueue/dequeue', () => {
  it('should enqueue a stack', () => {
    let list = new Queue();
    list.enqueue(5);
    expect(list.stack1.pop()).toEqual(5);
  });
});
