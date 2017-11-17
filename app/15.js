'use strict';

module.exports = () => {
  // https://en.wikipedia.org/wiki/Lattice_path
  let a = ((n) => [...Array(n).keys()])(41).slice(21).reduce((a, b) => a * b);
  let b = ((n) => [...Array(n).keys()])(21).slice(1).reduce((a, b) => a * b);
  return console.log('Problem 15 solution is: ' + (a / b));
};