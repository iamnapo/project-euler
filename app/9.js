'use strict';

module.exports = () => {
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
      for (let k = 1; k < 1000; k++) {
        if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2) && i+j+k === 1000) {
          return console.log('Problem 9 solution is:', i*j*k);
        }
      }
    }
  }
};