'use strict';

module.exports = () => {
  let len = 0;
  let num = 0;
  for (let i = 1000; i > 1; i--) {
    if (len > i - 1) break;
    let remainders = new Array(i).fill(0);
    let j = 1;
    let index = 0;
    while (remainders[j] === 0 && j !== 0) {
      remainders[j] = index++;
      j *= 10;
      j %= i;
    }
    if (index - remainders[j] > len) {
      num = i;
      len = index - remainders[j];
    }
  }
  return console.log('Problem 26 solution is: ' + num);
};