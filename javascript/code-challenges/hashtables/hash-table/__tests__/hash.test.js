'use strict';

const HashMap = require('../hashtable.js');


describe('Hashtables', () => {

  it('should test set and get', () => {
    let people = new HashMap(1024);
    people.add('bob', 'Student');
    expect(people.get('bob')).toBeTruthy();
  });

  it('should test contains', () => {
    let people = new HashMap(1024);
    people.add('bob', 'Student');
    expect(people.contains('bob')).toBeTruthy();
  });

  it('should test collision', () => {
    let people = new HashMap(1024);
    people.add('bob', 'Student');
    expect(people.get('john')).toEqual(null);
  });

  it('should test non-exsiting item', () => {
    let people = new HashMap(1024);
    people.add('johns', 'Student');
    expect(people.get('boby')).toEqual(null);
  });

});

