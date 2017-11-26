'use strict';

module.exports = () => {
  let count = 0;
  for (let i = 1; ; i++) {
    if (isPrime(i)) count++;
    if (count === 10001) return console.log('Problem 7 solution is: ' + i);
  }
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number !== 1;
}