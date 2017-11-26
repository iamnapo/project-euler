'use strict';

module.exports = () => {
  // https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let count = -1; count < 1e06; count++) {
    let k = -1;
    let l = -1;
    for (let i = 0; i < a.length; i++) {
      if (a[i] < a[i + 1]) k = i;
    }
    if (k === -1) break;
    for (let i = 0; i < a.length; i++) {
      if (a[k] < a[i]) l = i;
    }
    [a[k], a[l]] = [a[l], a[k]];
    a = [].concat(a.slice(0, k + 1), a.slice(k + 1).reverse());
  }
  return console.log('Problem 24 solution is: ' + a.join(''));
};
