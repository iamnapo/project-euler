module.exports = () => {
  const products = new Set();
  for (let a = 1; a < 9876; a += 1) {
    for (let b = 1; b < 9876; b += 1) {
      const tmp = a * b;
      if (isPandigital(''.concat(a, b, tmp))) products.add(tmp);
    }
  }
  return console.log(`Problem 32 solution is: ${[...products].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))}`);
};

function isPandigital(n) {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (const d of digits) {
    if (n.indexOf(d) < 0) return false;
  }
  return n.length === 9;
}
