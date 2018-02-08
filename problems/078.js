module.exports = () => {
  const p = [];
  p.push(1);
  let n = 1;
  for (;;) {
    let i = 0;
    let penta = 1;
    p.push(0);
    while (penta <= n) {
      const sign = (i % 4 > 1) ? -1 : 1;
      p[n] += sign * p[n - penta];
      p[n] %= 1000000;
      i += 1;

      const j = (i % 2 === 0) ? Math.trunc(i / 2) + 1 : -(Math.trunc(i / 2) + 1);
      penta = Math.trunc((j * ((3 * j) - 1)) / 2);
    }

    if (p[n] === 0) break;
    n += 1;
  }

  return console.log(`Problem 78 solution is: ${n}`);
};
