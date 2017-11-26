'use strict';

module.exports = () => {
  let sum = 0;
  for (let i = 1; i < 2000000; i++) {
    if (isPrime(i)) sum += i;
  }
  return console.log('Problem 10 solution is: ' + sum);
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number !== 1;
}