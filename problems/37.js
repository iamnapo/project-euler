module.exports = () => {
  const sum = [];
  for (let n = 11; sum.length < 11; n += 1) {
    if (isPrime(n)) {
      let goodLeft = true;
      let tmp = n.toString();
      tmp = tmp.slice(1);
      while (tmp !== '') {
        if (!isPrime(parseInt(tmp, 10))) {
          goodLeft = false;
          break;
        }
        tmp = tmp.slice(1);
      }
      if (goodLeft) {
        let goodRight = true;
        tmp = n.toString();
        tmp = tmp.slice(0, -1);
        while (tmp !== '') {
          if (!isPrime(parseInt(tmp, 10))) {
            goodRight = false;
            break;
          }
          tmp = tmp.slice(0, -1);
        }
        if (goodRight) sum.push(n);
      }
    }
  }
  return console.log(`Problem 37 solution is: ${sum.reduce((a, b) => a + b)}`);
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}
