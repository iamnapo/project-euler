module.exports = () => {
  const primeList = [];
  for (let i = 2; primeList.length < 1000; i += 1) { // 1000 LGTM
    if (isPrime(i)) primeList.push(i);
  }
  let consec = 1;
  let result = 2 * 3 * 5 * 7;
  while (consec < 4) {
    result += 1;
    if (numberOfPrimeFacors(result, primeList) === 4) {
      consec += 1;
    } else {
      consec = 0;
    }
  }
  return console.log(`Problem 47 solution is: ${result - 3}`);
};

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function numberOfPrimeFacors(number, primeList) {
  let nod = 0;
  let pf;
  let remain = number;
  for (let i = 0; i < primeList.length; i += 1) {
    if (primeList[i] ** 2 > number) {
      return nod + 1;
    }
    pf = false;
    while (remain % primeList[i] === 0) {
      pf = true;
      remain = Math.trunc(remain / primeList[i]);
    }
    if (pf) nod += 1;
    if (remain === 1) return nod;
  }
  return nod;
}
