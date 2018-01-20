module.exports = () => {
  let result = 0;

  for (let i = 1; i <= 1e06; i += 1) {
    let n = i;
    let last = 0;
    let count = 0;
    while ([last, 169, 363601, 1454, 871, 45361, 872, 45362].indexOf(n) < 0) {
      last = n;
      n = factorialSum(n);
      count += 1;
    }
    if (count === 57 && [169, 363601, 1454].indexOf(n) > -1) result += 1;
  }

  return console.log(`Problem 74 solution is: ${result}`);
};

function factorialSum(n) {
  const f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  let tmp = n;
  let res = 0;

  while (tmp > 0) {
    res += f[tmp % 10];
    tmp = Math.trunc(tmp / 10);
  }
  return res;
}
