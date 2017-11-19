'use strict';

module.exports = () => {
  let canBeWritten = [];
  let abundants = ((n) => [...Array(n).keys()])(28123).filter((a) => isAbundant(a));
  for (let i = 12; i < 28123; i++) {
    for (let num of abundants) {
      if (num >= i) break;
      if (isAbundant(i - num)) {
        canBeWritten.push(i);
        break;
      }
    }
  }
  return console.log('Problem 23 solution is: ' + ((n) => [...Array(n).keys()])(28123).filter((a) => canBeWritten.indexOf(a) === -1).reduce((a, b) => a + b));
};

function isAbundant(n) {
  if (n === 0) return false;
  let sum = 1;
  let sqrt = n ** 0.5; // Euler said that
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) sum += i + (i ** 2 === n ? 0 : n/i);
  }
  return sum > n;
}