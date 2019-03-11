module.exports = () => console.log(`Problem 148 solution is: ${t(1e9)}`);

function triangle(n) {
  return (n * (n + 1) * 0.5);
}

function t(n) {
  if (n === 0) {
    return 0;
  }
  const highPow = Math.trunc(Math.log(n) / Math.log(7));
  const a = Math.trunc(n / (7 ** highPow));
  return (triangle(a) * (triangle(7) ** highPow)) + ((a + 1) * t(n - (a * (7 ** highPow))));
}
