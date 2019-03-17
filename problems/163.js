module.exports = () => console.log(`Problem 163 solution is: ${T(36)}`);

function T60(n) {
  let t = 0;
  t += ~~(n * (n + 2) * (2 * n + 1) / 8.0);
  t += 2 * ~~(((n ** 3) - n / 3.0) / 2.0);
  return t;
}

function T90(n) {
  let t = 0;
  t += 6 * ~~(n * (n + 1) * (n + 2) / 6.0);
  t += 6 * ~~((2 * (n ** 3) + 5 * (n ** 2) + 2 * n) / 8.0);
  t += 6 * ~~((2 * (n ** 3) + 3 * (n ** 2) - 3 * n) / 18.0);
  t += 6 * ~~((2 * (n ** 3) + 3 * (n ** 2) - 3 * n) / 10.0);
  return t;
}

function T120(n) {
  const t = 3 * ~~((22 * (n ** 3) + 45 * (n ** 2) - 4 * n) / 48.0);
  return t;
}

function T(n) {
  // Torsten Sillke, 1999
  return T60(n) + T90(n) + T120(n);
}
