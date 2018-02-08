module.exports = () => {
  const primeList = [];
  for (let i = 2; primeList.length < 1000; i += 1) {
    if (isPrime(i)) primeList.push(i);
  }
  let result = 1;
  let notFound = true;
  while (notFound) {
    result += 2;
    let j = 0;
    notFound = false;
    while (result >= primeList[j]) {
      if (isTwiceSquare(result - primeList[j])) {
        notFound = true;
        break;
      }
      j += 1;
    }
  }
  return console.log(`Problem 46 solution is: ${result}`);
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function isTwiceSquare(number) {
  return Math.sqrt(number / 2) % 1 === 0;
}
