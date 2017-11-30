'use strict';

module.exports = () => {
  let count = 0;
  for (let n = 2; n < 1e06; n++) {
    if (!isPrime(n)) continue;
    let tmp = n.toString();
    tmp = parseInt(tmp[tmp.length - 1] + tmp.slice(0, tmp.length - 1));
    let allGood = true;
    while (tmp !== n) {
      if (!isPrime(tmp)) {
        allGood = false;
        break;
      }
      tmp = tmp.toString();
      tmp = parseInt(tmp[tmp.length - 1] + tmp.slice(0, tmp.length - 1));
    }
    if (allGood) count++;
  }
  return console.log('Problem 35 solution is: ' + count);
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}