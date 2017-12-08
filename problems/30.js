module.exports = () => {
  const POWER = 5;
  let sum = 0;
  for (let i = 2; i < 1e06; i += 1) { // 1e06 looks big enough to me
    const first = Math.floor(i / 1) % 10;
    const second = Math.floor(i / 10) % 10;
    const third = Math.floor(i / 100) % 10;
    const fourth = Math.floor(i / 1000) % 10;
    const fifth = Math.floor(i / 1e04) % 10;
    const sixth = Math.floor(i / 1e05) % 10;
    if (i === ((first ** POWER) + (second ** POWER) + (third ** POWER) + (fourth ** POWER) + (fifth ** POWER) + (sixth ** POWER))) sum += i;
  }
  return console.log(`Problem 30 solution is: ${sum}`);
};
