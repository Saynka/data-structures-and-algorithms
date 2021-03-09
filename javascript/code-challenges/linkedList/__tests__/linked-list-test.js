'use strict';

const LL = require('../link/linked-list.js');

describe('LINKED LIST', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  })

  it('should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';

    list.append(first); // add an item to the list
    expect(list.head.value).toEqual(first); // check that the item was added with our val

    list.append(second); // hint: check the next property in this test

    // 3 and 4 are just to log data, no need to test that far
    // list.append(3);
    // list.append(4);
    console.log(list);
  })

  it('should insert first', () => {
    let inserty = new LL();
    let insertys = '100';
    let consertys = '200';

    inserty.append(insertys);
    expect(inserty.head.value).toEqual(insertys);

    inserty.append(consertys);

    console.log(inserty);
  })

  it('should insert at', () => {
    let att = new LL();
    let atty = 'dog';
    let attys = 'cats';

    att.append(atty);
    expect(att.head.value).toEqual(atty);

    att.append(attys);

    console.log(att);

  })
})
