module.exports = () => {
  const peter = distribution(4, 9);
  const colin = distribution(6, 6);
  let t = 0;
  for (let j = 0; j < colin.length; j += 1) t += colin.slice(0, j).reduce((a, b) => a + b, 0) * peter[j];
  console.log(`Problem 205 solution is: ${t.toFixed(7)}`);
};

function distribution(sides, number) {
  const t = [];
  for (let j = 0; j < number; j += 1) t.push(new Array(sides * (j + 1)).fill(0));
  t[0] = new Array(sides).fill(1);
  for (let i = 0; i < number - 1; i += 1) {
    for (let j = 0; j < t[i].length; j += 1) {
      for (let k = 0; k < sides; k += 1) t[i + 1][j + k + 1] += t[i][j];
    }
  }
  const r = t[t.length - 1];
  const s = r.reduce((a, b) => a + b, 0);
  for (let j = 0; j < r.length; j += 1) r[j] /= s;
  return r;
}
