'use strict';

module.exports = () => {
  let fraction = '';
  for (let i = 0; i < 1000001; i++) fraction += i;
  let result = parseInt(fraction[1]) * parseInt(fraction[10]) * parseInt(fraction[100]) * parseInt(fraction[1000]) * parseInt(fraction[1e04]) * parseInt(fraction[1e05]) * parseInt(fraction[1e06]);
  return console.log('Problem 39 solution is: ' + result);
};