module.exports = () => {
  for (let n = 286; ; n += 1) {
    const tn = (n * (n + 1)) / 2;
    if (isPentagonal(tn) && isHexagonal(tn)) {
      return console.log(`Problem 45 solution is: ${tn}`);
    }
  }
};

function isPentagonal(num) {
  if (num === 0) {
    return false;
  }
  return ((Math.sqrt(1 + (24 * num)) + 1) / 6) % 1 === 0;
}

function isHexagonal(num) {
  if (num === 0) {
    return false;
  }
  return ((Math.sqrt(1 + (8 * num)) + 1) / 4) % 1 === 0;
}
