'use strict';

module.exports = () => {
  let products = new Set();
  for (let a = 1; a < 9876; a++) {
    for (let b = 1; b < 9876; b++) {
      let tmp = a * b;
      if (isPandigital(''.concat(a, b, tmp))) products.add(tmp);
    }
  }
  return console.log('Problem 32 solution is: ' + [...products].reduce((a, b) => parseInt(a) + parseInt(b)));
};

function isPandigital(n) {
  let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let d of digits) {
    if (n.indexOf(d) < 0) return false;
  }
  return n.length === 9;
}