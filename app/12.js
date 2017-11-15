'use strict';

module.exports = () => {
  let triangle = 1;
  for (let i = 2; ; i++) {
    triangle += i;
    if (countdivisors(triangle) > 500) return console.log('Problem 12 solution is: ' + triangle);
  }
};

function countdivisors(num) {
  let count = 0;
  let sqrt = num ** 0.5; // Euler said that
  for (let i =0; i < sqrt; i++) {
    if (num%i === 0) count += 2;
  }
  return count;
}