module.exports = () => {
  const number = 1e12;
  let res = mulNot5(1e5);
  for (let num = number; num > 0; num /= 5) {
    res = (res * mulNot5(num % 1e5) * (num % 10 === 4 || num % 10 > 8 ? 2 : 1)) % 1e5;
  }
  return console.log(`Problem 160 solution is: ${res}`);
};

function mulNot5(number) {
  let res = 1;
  for (let num = 2; num <= number; num += 1) {
    if (num % 5 > 0) res = (res * (num % 10 === 4 || num % 10 === 8 ? num / 2 : num)) % 1e5;
  }
  return res;
}
