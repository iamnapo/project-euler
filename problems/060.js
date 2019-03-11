const primeList = [];
for (let i = 1; primeList.length < 10000; i += 1) { // 10000 LGTM
  if (isPrime(i)) {
    primeList.push(i);
  }
}

module.exports = () => {
  let result = Number.MAX_SAFE_INTEGER;
  const pairs = {};
  for (let a = 1; a < primeList.length; a += 1) {
    if (!(result > primeList[a] * 5)) {
      break;
    }
    if (!pairs[a]) {
      pairs[a] = makePairs(a);
    }
    for (let b = a + 1; b < primeList.length; b += 1) {
      if (!(result > primeList[a] + (primeList[b] * 4))) {
        break;
      }
      if (pairs[a].has(primeList[b])) {
        if (!pairs[b]) {
          pairs[b] = makePairs(b);
        }
        for (let c = b + 1; c < primeList.length; c += 1) {
          if (!(result > primeList[a] + primeList[b] + (primeList[c] * 3))) {
            break;
          }
          if (pairs[a].has(primeList[c]) && pairs[b].has(primeList[c])) {
            if (!pairs[c]) {
              pairs[c] = makePairs(c);
            }
            for (let d = c + 1; d < primeList.length; d += 1) {
              if (!(result > primeList[a] + primeList[b] + primeList[c] + (primeList[d] * 2))) {
                break;
              }
              if (pairs[a].has(primeList[d]) && pairs[b].has(primeList[d]) && pairs[c].has(primeList[d])) {
                if (!pairs[d]) {
                  pairs[d] = makePairs(d);
                }
                for (let e = d + 1; e < primeList.length; e += 1) {
                  if (!(result > primeList[a] + primeList[b] + primeList[c] + primeList[d] + primeList[e])) {
                    break;
                  }
                  if (pairs[a].has(primeList[e]) && pairs[b].has(primeList[e]) && pairs[c].has(primeList[e]) && pairs[d].has(primeList[e])) {
                    result = primeList[a] + primeList[b] + primeList[c] + primeList[d] + primeList[e];
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return console.log(`Problem 60 solution is: ${result}`);
};

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  if (n < 9) {
    return true;
  }
  if (n % 3 === 0) {
    return false;
  }
  let counter = 5;
  while ((counter * counter) <= n) {
    if (n % counter === 0) {
      return false;
    }
    if (n % (counter + 2) === 0) {
      return false;
    }
    counter += 6;
  }
  return true;
}

function makePairs(a) {
  const pairs = new Set();
  for (let b = a + 1; b < primeList.length; b += 1) {
    if (isPrime(parseInt(primeList[a].toString().concat(primeList[b].toString()), 10)) && isPrime(parseInt(primeList[b].toString().concat(primeList[a].toString()), 10))) {
      pairs.add(primeList[b]);
    }
  }
  return pairs;
}
