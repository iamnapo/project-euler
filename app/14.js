'use strict';

module.exports = () => {
  let max = 0;
  let maxNum = 1;
  for (let i = 1; i < 1000000; i++) {
    let num = i;
    let count = 1;
    for (;;) {
      num = num%2 === 0 ? num/2 : 3 * num + 1;
      count++;
      if (num === 1) break;
    }
    if (count > max) {
      max = count;
      maxNum = i;
    }
  }
  return console.log('Problem 14 solution is: ' + maxNum);
};