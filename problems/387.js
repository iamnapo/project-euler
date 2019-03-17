module.exports = () => {
  let total = 0;
  for (let i = 1; i < 10; i += 1) total = Harshad(i, i, 0, 0);
  return console.log(`Problem 387 solution is: ${total}`);
};

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  if (n < 9) return true;
  if (n % 3 === 0) return false;
  let counter = 5;
  while (counter ** 2 <= n) {
    if (n % counter === 0 || n % (counter + 2) === 0) return false;
    counter += 6;
  }
  return true;
}

function Harshad(n, s, strong) {
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    const a = n * 10 + i;
    const b = s + i;
    if (a % b === 0) {
      if (a < 1e13) Harshad(a, b, isPrime(a / b));
    } else if (strong && isPrime(a)) {
      sum += a;
    }
  }
  return sum;
}
