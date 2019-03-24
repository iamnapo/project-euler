module.exports = () => console.log(`Problem 243 solution is: ${R(15499 / 94744)}`);

function R(goal) {
  let [r, d] = [1, 1];
  const primeList = [];
  for (let i = 2; i < 1e2; i += 1) {
    if (isPrime(i)) primeList.push(i);
  }
  for (const p of primeList) {
    for (let i = 2; i < p; i += 1) {
      if ((r * i / (d * i - 1)) < goal) return d * i;
    }
    r *= p - 1;
    d *= p;
    if ((r / (d - 1)) < goal) return d;
  }
}

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
