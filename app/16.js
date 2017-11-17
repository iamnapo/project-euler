'use strict';

module.exports = () => {
  let big = [2];
  let c = 0;
  for (let i = 1; i < 1000; i++) {
    for (let j = 0; j < big.length; j++) {
      big[j] = 2*big[j] + c;
      c = 0;
      while (big[j] > 9) {
        c++;
        big[j] -=10;
      }
    }
    while (c !== 0) {
      let j = big.push(c);
      c = 0;
      while (big[j] > 9) {
        c++;
        big[j] -= 10;
      }
    }
  }
  return console.log('Problem 16 solution is: ' + big.reduce((a, b) => parseInt(a) + parseInt(b)));
};