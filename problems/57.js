module.exports = () => {
  let count = 0;
  let n = [3];
  let d = [2];

  for (let i = 1; i < 1000; i += 1) {
    [n, d] = [add(n, multiply(d, 2)), add(n, d)];
    if (n.length > d.length) count += 1;
  }
  return console.log(`Problem 57 solution is: ${count}`);
};

function multiply(a, b) {
  let mul = [0];
  for (let i = 0; i < b; i += 1) {
    mul = add(mul, a);
  }
  return mul;
}

function add(a, b) {
  while (a.length < b.length) a.unshift(0);
  while (a.length > b.length) b.unshift(0);
  let c = 0;
  const sum = [];
  for (let i = a.length - 1; i > -1; i -= 1) {
    let s = a[i] + b[i] + c;
    if (s > 9) {
      s -= 10;
      c = 1;
    } else {
      c = 0;
    }
    sum.unshift(s);
  }
  if (c) sum.unshift(c);
  return sum;
}
