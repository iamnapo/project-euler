'use strict';

module.exports = () => {
  let count = 0;
  for (let i = 0; ; i++) {
    let temp = new Date(1901, i, 2);
    if (temp.getFullYear() === 2001) break;
    if (temp.getDay() === 1) count++;
  }
  return console.log('Problem 19 solution is: ' + count);
};