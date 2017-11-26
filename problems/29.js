'use strict';

module.exports = () => {
  let powers = new Set();
  for (let a = 2; a < 21; a++) {
    for (let b = 2; b < 21; b++) {
      let tmp = toString(factorize(a).map((el) => el *= b));
      powers.add(tmp);
    }
  }
  return console.log('Problem 29 solution is: ' + powers.size);
};

function factorize(n) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  let ret = new Array(25).fill(0);
  let i = 0;
  while (primes[i] <= n) {
    while (!(n % primes[i])) {
      ret[i]++;
      n /= primes[i];
    }
    i++;
  }
  return ret;
}

function toString(a) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  let ret = '';
  for (let i = 0; i < a.length; i++) {
    if (ret && a[i]) ret += '*';
    if (a[i]) {
      ret += primes[i];
      ret += '^' + a[i];
    }
  }
  return ret;
}