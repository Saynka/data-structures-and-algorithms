'use strict';

const HashMap = require('../left-join.js');
// const left = require('../left.js');

describe('test join', () => {

  it('should test set and get', () => {
    let people = new HashMap(1024);
    people.add('bob', 'Student');
    people.add('loukes', 'Student');
    people.left('bob', 'Student', 'loukes', 'Student');
    console.log(people);
    expect(people.left()).toContain('bob', 'loukes', 'Student');
  });

});

