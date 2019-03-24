
module.exports = () => {
  const [M, N] = [10000019, 32];
  let sum = 0;
  let v = new Array(M).fill(0);
  let w = new Array(M).fill(0);
  for (let L = M.toString().length; L < N + 1; L += 1) {
    const cc = [];
    for (let i = 0; i < ~~(L / 2); i += 1) cc.push((powMod(10, i, M) + powMod(10, L - 1 - i, M)) % M);
    if (L % 2) cc.push(powMod(10, ~~(L / 2), M));
    v = new Array(M).fill(0);
    let c = cc[0];
    for (let d = 1; d < 10; d += 1) v[(c * d) % M] += 1;
    for (let i = 1; i < cc.length; i += 1) {
      [v, w] = [w, v];
      v = new Array(M).fill(0);
      c = cc[i];
      for (let d = 0; d < 10; d += 1) {
        let x = (c * d) % M;
        for (let k = 0; k < M; k += 1) {
          v[x] += w[k];
          x += 1;
          if (x >= M) x -= M;
        }
      }
    }
    sum += v[0];
  }
  return console.log(`Problem 655 solution is: ${sum}`);
};

function powMod(base, exp, mod) {
  let r = 1;
  let t = base;
  while (exp) {
    if (exp & 1) r = (r * t) % mod;
    t = (t ** 2) % mod;
    exp >>= 1;
  }
  return r;
}
