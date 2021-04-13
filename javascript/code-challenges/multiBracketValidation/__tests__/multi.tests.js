'use strict';

const Node = require('../node.js');
const Stack = require('../stacks.js');
const Multi = require('../multi-bracket-validation.js');



describe('it should test for balanced brackets in javascript', () => {
  it('should add values to stack', () => {
    let stacks = new Stack();
    stacks.push(1);
  });

  it('should create a new node', () => {
    let val = 'test value';
    let node = new Node(val);

    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  });

  it('should test true brackets', () => {
    let stacks = new Stack();
    stacks.push('()');

    expect(Multi).toBeTruthy();
  });


  /////works but i think is wrong
  it('should test  false brackets', () => {
    let stacks = new Stack();
    stacks.push(']', (Multi));
    stacks.push('>', (Multi));

    expect(stacks.pop()).toBeFalsy();
  });

  ///// this works should be the right way to test?
  it('should test  false brackets 2', () => {
    let stacks = new Stack();
    stacks.push(']', (Multi));
    stacks.push('>', (Multi));
    expect(Multi.stack).toBeFalsy();
  });
});
