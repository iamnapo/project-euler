'use strict';

module.exports = () => {
  let p = new Array(1001).fill(0);
  for (let i = 1; i < 999; i++) {
    for (let j = 1; i + j < 1000; j++ ) {
      for (let k = 1; i + j + k < 1001; k++) {
        if (i**2 + j**2 === k**2) p[i + j + k]++;
      }
    }
  }
  return console.log('Problem 39 solution is: ' + p.indexOf(Math.max(...p)));
};