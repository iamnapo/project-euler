module.exports = () => {
	let result = 0;
	let lower = 0;
	let n = 1;
	while (lower < 10) {
		lower = Math.ceil(10 ** ((n - 1) / n));
		result += 10 - lower;
		n += 1;
	}
	return console.log(`Problem 63 solution is: ${result}`);
};
