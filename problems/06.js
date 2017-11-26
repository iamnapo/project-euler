'use strict';

module.exports = () => {
  let squareOfSums = Math.pow(((1 + 100) * 50), 2); // Gauss in Elementary school
  return console.log('Problem 6 solution is: ' + (squareOfSums - sumOfSquares(100)));
};

function sumOfSquares(n) {
  // https://en.wikipedia.org/wiki/Faulhaber%27s_formula
  return Math.pow(n, 3)/3 + Math.pow(n, 2)/2 + n/6;
}