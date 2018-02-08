module.exports = () => {
  let result = 5;
  let xMax = 9;
  for (let D = 8; D < 1001; D += 1) {
    const x = chakravala(D);
    if (x > xMax) [xMax, result] = [x, D];
  }
  return console.log(`Problem 66 solution is: ${result}`);
};

function chakravala(N) {
  let m = Math.round(Math.sqrt(N));
  const m0 = m;
  let a = m;
  let b = 1;
  let k = (m ** 2) - N;
  if (k === 0) return 0;
  while (k !== 1) {
    const absK = Math.abs(k);
    if (k === -1 || absK === 2 || (absK === 4 && !((a && 1) && (b && 1)))) {
      return Math.trunc(((a ** 2) + (N * (b ** 2))) / absK);
    }
    const diff = (m + m0) % absK;
    const mL = m0 - diff;
    const mH = mL + absK;
    m = (Math.abs((mH ** 2) - N) < Math.abs((mL ** 2) - N)) ? mH : mL;
    a = Math.trunc(((m * a) + (N * b)) / absK);
    b = Math.trunc((a + (m * b)) / absK);
    k = Math.trunc(((m ** 2) - N) / k);
  }
  return a;
}
