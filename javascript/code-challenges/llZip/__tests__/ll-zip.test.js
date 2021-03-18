'use strict';

const LL = require('../link/ll-zip.js');

describe('zip list', () => {
  it('should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';

    list.append(first);
    expect(list.head.value).toEqual(first);

    list.append(second);
    expect(list.head.next.value).toEqual(second);
    console.log(list);
  });

  /////// Insert after
  it('should insert last', () => {
    let inserty = new LL();
    let insertys = '100';
    let consertys = '200';

    inserty.insertLast(insertys);
    expect(inserty.head.value).toEqual(insertys);

    inserty.insertLast(consertys);
    expect(inserty.head.value).toEqual(insertys);
    console.log(inserty);
  });

  it('should merge 2 linked list to 1 link list with both values in seqence', () => {
    let list = new LL();
    let first = new LL(1, 2, 3, 4, 5);
    let second = new LL(6, 7, 8, 9);
    let third = new LL(1, 6, 2, 7, 3, 8, 4, 9, 5);

    list.append(first);
    expect(list.head.value).toEqual(first);
    list.append(second);
    expect(list.head.value).toEqual(second);
    list.append(first, second);
    expect(list.head.value).toEqual(third);
    console.log(list);
  });
});
