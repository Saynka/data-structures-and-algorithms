'use strict';

let current = this.value; {
  while (current) {
    if (value === current.value % 15 === 0) {
      return 'FizzBuzz';
    } else if (value === current.value % 3 === 0) {
      return 'Fizz';
    } else if (value === current.value % 5 === 0) {
      return 'Buzz';
    }
    if (value > current.value) {
      current = current.right;
    } else {
      current = current.left;
    }
    return current;

  }
}

module.exports = ode;