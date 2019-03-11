module.exports = () => {
  let [a, r, x, y] = [2, 0, -1, -1];

  for (let i = 0; i < 15; i += 1) {
    r += a;
    a = (a + a) - x;
    r += a;
    a = (a * 4) - y;
    x = (y - x) / 2;
    y = 14 + (19 * x) - (y + y);
  }

  return console.log(`Problem 140 solution is: ${r}`);
};
