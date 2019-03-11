module.exports = () => {
  let count = 0;
  for (let i = 10; i < 10000; i += 1) {
    if (isLychrel(i)) {
      count += 1;
    }
  }
  return console.log(`Problem 55 solution is: ${count}`);
};

function isLychrel(num) {
  let tmp = num;
  for (let i = 0; i < 50; i += 1) {
    tmp += parseInt(tmp.toString().split('').reverse().join(''), 10);
    if (isPalindrome(tmp.toString())) {
      return false;
    }
  }
  return true;
}

function isPalindrome(string) {
  return (string === string.split('').reverse().join('')) && string[0] !== '0';
}
