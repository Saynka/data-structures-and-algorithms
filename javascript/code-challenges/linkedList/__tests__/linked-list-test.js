'use strict';

const LL = require('../link/linked-list.js');


describe('LINKED LIST', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
    console.log(list);
  });

  ////////append done
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

  ////////includes done
  it('should return true if searched value is in linked list', () => {
    let list = new LL();
    expect(list.includes('first')).toBeFalsy();
    list.append('first');
    list.append('second');
    console.log(list.includes('first'));
    expect(list.includes('first')).toBeTruthy();
    expect(list.includes('second')).toBeTruthy();
    expect(list.includes('third')).toBeFalsy();
  });

  /////////insertFirst done
  it('should insert first', () => {
    let inserty = new LL();
    let insertys = '100';
    let consertys = '200';

    inserty.insertFirst(insertys);
    expect(inserty.head.value).toEqual(insertys);

    inserty.insertFirst(consertys);
    expect(inserty.head.value).toEqual(consertys);
    console.log(inserty);
  });

  //////////insertAt done
  it('should insert at', () => {
    let att = new LL();
    let atty = 'dog';
    let attys = 'cats';
    let addys = 'bird';

    att.append(atty);
    expect(att.head.value).toEqual(atty);

    att.append(attys);
    att.insertAt(addys, 1);
    expect(att.head.next.value).toEqual(addys);

    console.log(att);

  });

  ////////toString Done
  it('should turn shit to string', () => {
    let string = new LL();
    let strings = 'this';
    let stringys = 'that';

    string.append(strings);
    string.append(stringys);
    expect(string.toString()).toEqual('{this} -> {that} -> {Null}');
    console.log(string.toString());
  });
});
