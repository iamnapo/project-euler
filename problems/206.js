module.exports = () => {
  const pattern = new RegExp(/1.2.3.4.5.6.7.8.9.0/);
  for (let i = 1010101010n; i < 1389026623n; i += 10n) {
    if (pattern.test(i ** 2n)) return console.log(`Problem 206 solution is: ${i}`);
  }
  return null;
};
