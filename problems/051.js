module.exports = () => {
  const fiveDigitPattern = get5digitPatterns();
  const sixDigitPattern = get6digitPatterns();
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 11; i < 1000; i += 2) {
    if (i % 5 !== 0) {
      const patterns = (i < 100) ? fiveDigitPattern : sixDigitPattern;

      for (let j = 0; j < patterns.length; j += 1) {
        for (let k = 0; k < 3; k += 1) {
          if (!(patterns[j][0] === 0 && k === 0)) {
            const pattern = fillPattern(patterns[j], i);
            const candidate = generateNumber(k, pattern);
            if (candidate < result && isPrime(candidate)) {
              if (familySize(k, pattern) === 8) result = candidate;
              break;
            }
          }
        }
      }
    }
  }
  return console.log(`Problem 51 solution is: ${result}`);
};

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  if (n < 9) return true;
  if (n % 3 === 0) return false;
  let counter = 5;
  while ((counter * counter) <= n) {
    if (n % counter === 0) return false;
    if (n % (counter + 2) === 0) return false;
    counter += 6;
  }
  return true;
}

function get5digitPatterns() {
  const retVal = new Array(4);
  retVal[0] = [1, 0, 0, 0, 1];
  retVal[1] = [0, 1, 0, 0, 1];
  retVal[2] = [0, 0, 1, 0, 1];
  retVal[3] = [0, 0, 0, 1, 1];
  return retVal;
}

function get6digitPatterns() {
  const retVal = new Array(10);
  retVal[0] = [1, 1, 0, 0, 0, 1];
  retVal[1] = [1, 0, 1, 0, 0, 1];
  retVal[2] = [1, 0, 0, 1, 0, 1];
  retVal[3] = [1, 0, 0, 0, 1, 1];
  retVal[4] = [0, 1, 1, 0, 0, 1];
  retVal[5] = [0, 1, 0, 1, 0, 1];
  retVal[6] = [0, 1, 0, 0, 1, 1];
  retVal[7] = [0, 0, 1, 1, 0, 1];
  retVal[8] = [0, 0, 1, 0, 1, 1];
  retVal[9] = [0, 0, 0, 1, 1, 1];
  return retVal;
}

function familySize(repeatingNumber, pattern) {
  let fSize = 1;
  for (let i = repeatingNumber + 1; i < 10; i += 1) {
    if (isPrime(generateNumber(i, pattern))) fSize += 1;
  }
  return fSize;
}

function generateNumber(repNumber, filledPattern) {
  let temp = 0;
  for (let i = 0; i < filledPattern.length; i += 1) {
    temp *= 10;
    temp += (filledPattern[i] === -1) ? repNumber : filledPattern[i];
  }
  return temp;
}

function fillPattern(pattern, number) {
  const filledPattern = new Array(pattern.length);
  let temp = number;
  for (let i = filledPattern.length - 1; i > -1; i -= 1) {
    if (pattern[i] === 1) {
      filledPattern[i] = temp % 10;
      temp = Math.trunc(temp / 10);
    } else {
      filledPattern[i] = -1;
    }
  }
  return filledPattern;
}
