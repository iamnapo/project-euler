'use strict';

module.exports = () => {
  let sum = [];
  for (let n = 11; sum.length < 11; n++) {
    if (!isPrime(n)) continue;
    let goodLeft = true;
    let tmp = n.toString();
    tmp = tmp.slice(1);
    while (tmp !== '') {
      if (!isPrime(parseInt(tmp))) {
        goodLeft = false;
        break;
      }
      tmp = tmp.slice(1);
    }
    if (!goodLeft) continue;
    let goodRight = true;
    tmp = n.toString();
    tmp = tmp.slice(0, -1);
    while (tmp !== '') {
      if (!isPrime(parseInt(tmp))) {
        goodRight = false;
        break;
      }
      tmp = tmp.slice(0, -1);
    }
    if (!goodRight) continue;
    sum.push(n);
  }
  return console.log('Problem 37 solution is: ' + sum.reduce((a, b) => a + b));
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}