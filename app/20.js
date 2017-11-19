'use strict';

module.exports = () => {
  let big = [1];
  let c = 0;
  for (let i = 2; i < 101; i++) {
    for (let j = 0; j < big.length; j++) {
      big[j] = i * big[j] + c;
      c = 0;
      while (big[j] > 9) {
        c++;
        big[j] -= 10;
      }
    }
    while (c !== 0) {
      let j = big.push(c);
      c = 0;
      while (big[j-1] > 9) {
        c++;
        big[j-1] -= 10;
      }
    }
  }
  return console.log('Problem 20 solution is: ' + big.reduce((a, b) => parseInt(a) + parseInt(b)));
};