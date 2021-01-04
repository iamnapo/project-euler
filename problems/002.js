module.exports = () => {
	let a = 1;
	let b = 2;
	let sum = 0;
	while (b < 4_000_001) {
		if (b % 2 === 0) {
			sum += b;
		}
		const temp = a;
		a = b;
		b += temp;
	}
	return console.log(`Problem 2 solution is: ${sum}`);
};
