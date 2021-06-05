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



});
