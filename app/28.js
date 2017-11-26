'use strict';

module.exports = () => {
  let sum = 1;
  for (let i = 3; i < 1002; i+=2) {
    sum += i ** 2; // top right
    sum += i ** 2 - 1*(i - 1); // top left
    sum += i ** 2 - 2*(i - 1); // bottom left
    sum += i ** 2 - 3*(i - 1); // bottom right
  }
  return console.log('Problem 28 solution is: ' + sum);
};