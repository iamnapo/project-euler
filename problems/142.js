module.exports = () => {
  let [a, b, c, d, e, f] = new Array(6).fill(0);
  let solved = false;
  let result = 0;

  for (let i = 4; !solved; i += 1) {
    a = i * i;
    for (let j = 3; j < i && !solved; j += 1) {
      c = j * j;
      f = a - c;
      if (f <= 0 || !isSquare(f)) {
        continue;
      }
      const kstart = (j % 2 === 1) ? 1 : 2;
      for (let k = kstart; k < j; k += 2) {
        d = k * k;
        e = a - d;
        b = c - e;
        if (b <= 0 || e <= 0 || !isSquare(b) || !isSquare(e)) {
          continue;
        }
        const x = (d + c) / 2;
        const y = (e + f) / 2;
        const z = (c - d) / 2;
        result = x + y + z;
        solved = true;
        break;
      }
    }
  }

  return console.log(`Problem 142 solution is: ${result}`);
};

function isSquare(n) {
  const tmp = Math.trunc(Math.sqrt(n));
  return tmp ** 2 === n;
}
