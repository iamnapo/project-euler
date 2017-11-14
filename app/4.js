'use strict';

module.exports = () => {
  let max = 1;
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let product = i * j;
      if (product > max && isPalindrome(product.toString())) max = product;
    }
  }
  return console.log('Problem 4 solution is: ' + max);
};

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}