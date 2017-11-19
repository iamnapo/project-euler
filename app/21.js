'use strict';

module.exports = () => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    let b = d(i);
    if (d(i) === i) continue;
    if (d(b) === i) sum += i;
  }
  return console.log('Problem 20 solution is: ' + sum);
};

function d(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n%i === 0) sum += i;
  }
  return sum;
}