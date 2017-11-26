'use strict';

module.exports = () => {
  for (let i = 1; ; i++) {
    let isDivisible = true;
    for (let j = 1; j < 21; j++) isDivisible &= (i%j === 0);
    if (isDivisible) return console.log('Problem 5 solution is: ' + i);
  }
};