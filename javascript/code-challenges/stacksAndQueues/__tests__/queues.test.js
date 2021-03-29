'use strict';

const QQ = require('../queues.js');

///// Queue testing
describe('queue testing', () => {
  it('should add something to the end of a queue', () => {
    const queue = new QQ();
    queue.enqueue(1);
    expect(queue.storage.length).toEqual(1);
  });

  ///// Dequeue testing
  it('should remove something from the front of the queue', () => {
    const queue = new QQ();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
  });

  //// isempty testing
  it('should show us the next item in the queue', () => {
    const queue = new QQ();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);
  });

});
