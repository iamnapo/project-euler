'use strict';

module.exports = () => {
  let result = 0;
  for (let i = 9387; i > 9233; i--) {
    result = [].concat(i, 2 * i).join('');
    if (isPandigital(result)) {
      break;
    }
  }
  return console.log('Problem 38 solution is: ' + result);
};

function isPandigital(n) {
  let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let d of digits) {
    if (n.indexOf(d) < 0) return false;
  }
  return n.length === 9;
}