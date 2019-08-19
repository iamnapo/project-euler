module.exports = () => {
  const phi = ((n) => [...new Array(n).keys()])(1e06 + 1);
  let result = 0;
  for (let i = 2; i <= 1e06; i += 1) {
    if (phi[i] === i) {
      for (let j = i; j <= 1e06; j += i) {
        phi[j] = (phi[j] / i) * (i - 1);
      }
    }
    result += phi[i];
  }

  return console.log(`Problem 72 solution is: ${result}`);
};
