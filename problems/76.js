module.exports = () => {
  const ways = new Array(101).fill(0);
  ways[0] = 1;

  for (let i = 1; i < 100; i += 1) {
    for (let j = i; j < 101; j += 1) {
      ways[j] += ways[j - i];
    }
  }

  return console.log(`Problem 76 solution is: ${ways.pop(-1)}`);
};
