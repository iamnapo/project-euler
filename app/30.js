'use strict';

module.exports = () => {
  const POWER = 5;
  let sum = 0;
  for (let i = 2; i < 1e06; i++) {// 1e06 looks big enough to me
    let first = ~~(i / 1) % 10;
    let second = ~~(i / 10) % 10;
    let third = ~~(i / 100) % 10;
    let fourth = ~~(i / 1000) % 10;
    let fifth = ~~(i / 1e04) % 10;
    let sixth = ~~(i / 1e05) % 10;
    if (i === (first**POWER + second**POWER + third**POWER + fourth**POWER + fifth**POWER + sixth**POWER)) sum += i;
  }
  return console.log('Problem 30 solution is: ' + sum);
};