module.exports = () => {
  const singleDigit = [
    0, // zero
    3, // one
    3, // two
    5, // three
    4, // four
    4, // five
    3, // six
    5, // seven
    5, // eight
    4, // nine
  ];
  const tens = [
    3, // ten
    6, // eleven
    6, // twelve
    8, // thirteen
    8, // fourteen
    7, // fifteen
    7, // sixteen
    9, // seventeen
    8, // eighteen
    8, // nineteen
  ];
  const doubleDigit = [
    0, // zero
    0, // tens
    6, // twenty
    6, // thirty
    5, // forty
    5, // fifty
    5, // sixty
    7, // seventy
    6, // eighty
    6, // ninety
  ];
  let sum = 11; // "one thousand"
  for (let i = 0; i < 1000; i += 1) {
    const third = Math.floor(i / 100);
    const second = Math.floor((i % 100) / 10);
    const first = i % 10;
    if (third > 0) sum += singleDigit[third] + 7; // "hundred"
    const temp = second === 1 ? tens[first] : doubleDigit[second] + singleDigit[first];
    if (temp > 0) sum += temp + (third > 0 ? 3 : 0); // "and"
  }
  return console.log(`Problem 17 solution is: ${sum}`);
};
